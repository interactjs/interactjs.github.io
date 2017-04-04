require './lib/redcarpet_header_fix'

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

set :fonts_dir, 'fonts'

set :markdown_engine, :redcarpet

set :markdown, :fenced_code_blocks => true, :smartypants => true, :disable_indented_code_blocks => true, :prettify => true, :tables => true, :with_toc_data => true, :no_intra_emphasis => true, :autolink => true

# Activate the syntax highlighter
activate :syntax

# This is needed for Github pages, since they're hosted on a subdomain
#activate :relative_assets
#set :relative_links, true

activate :i18n

activate :directory_indexes

#activate :sitemap, :gzip => false, :hostname => "http://interactjs.io"

activate :livereload

page "docs/*", :layout => :slate

ignore "docs/data.yml"

activate :external_pipeline,
  name: :npm,
  command: "npm run #{build? ? :bundle : :watch}#{build? ? ' && npm run docs' : '' }",
  source: "tmp/npm",
  latency: 0.25

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
end

