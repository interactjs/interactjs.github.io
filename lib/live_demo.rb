require 'nokogiri'

class Demo < Middleman::Extension
  expose_to_template :live_demo

  def initialize(app, options_hash={}, &block)
    super
    @counter = 0
    @commentFlags = {
      html: "<!-- enable javascript to view a demo -->\n",
      css: "/* enable javascript to view a demo */\n",
      js: "/* enable javascript to view a demo */\n",
    }
  end

  def live_demo(name)
    @counter += 1

    content = self.get_content(name)
    title = Rack::Utils::escape_html content[:title]

    "
    <h1 id=\"#{title.downcase.gsub(/[^\w]/, '_')}\">#{title}</h1>
    <div class=\"demo-area\">
    " +
      [:html, :css, :js].select { |lang| content[lang] }.map do |lang|
      "
      <input
        id=\"livedemo-#{@counter}-#{lang}\"
        name=\"livedemo-#{@counter}\"
        #{lang == :js ? 'checked="checked"' : ''}
        type=\"radio\"
        hidden>
      <label class=\"#{lang}-label\" for=\"livedemo-#{@counter}-#{lang}\"> #{lang.upcase} </label>
      <div class=\"#{lang}-code\">
      #{Middleman::Syntax::Highlighter.highlight(content[lang], lang.to_s).html_safe}
      </div>
      "
    end.join('') +
    "
        <input id=\"livedemo-#{@counter}-demo\" type=\"radio\" name=\"livedemo-#{@counter}\" hidden>
      <label class=\"demo-label\" for=\"livedemo-#{@counter}-demo\"> Demo only </label>
    </div>
    "
  end

  def get_content(name)
    doc = File.open("demos/#{name}.html")  { |f| Nokogiri::HTML(f) }

    content = {
      html: 'body',
      css: 'style',
      js: 'script',
    }.reduce({}) do |memo, (lang, tag)|
      element = doc.xpath("html/#{tag}").first

      return memo unless element

      memo[lang] = @commentFlags[lang] + element.inner_html.strip
      memo
    end

    title_element = doc.xpath('/html/head/title').first
    content[:title] = title_element.content if title_element

    content
  end
end

::Middleman::Extensions.register(:live_demo, Demo)
