require './lib/redcarpet_header_fix'
require './lib/live_demo'

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

page "api/*", :directory_index => false

#activate :sitemap, :gzip => false, :hostname => "http://interactjs.io"

activate :livereload

page "docs/*", :layout => :slate

ignore "docs/data.yml"

require 'yaml'
site_data = YAML.load_file(File.join(__dir__, 'data/site.yml'))

activate :external_pipeline,
  name: :npm,
  command: "#{build? ? 'npm install;' : '' } npm run docs #{site_data['api_rev']} #{site_data['archive_url']}; npm run #{build? ? :bundle : :watch}",
  source: "tmp/npm",
  latency: 0.25

activate :live_demo

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

