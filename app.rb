# app.rb
require "bundler/setup"
require "sinatra"
require "sinatra/static_assets"
require "haml"
require "sass"

set :haml, :format => :html5

get '/' do
  haml :index
end

get '/stylesheets/:file.css' do |file|
  content_type 'text/css', :charset => 'utf-8'

  # no #scss method is defined (and #sass only looks for .sass files)
  # we must call render ourself:
  render :sass, file.to_sym, :layout => false, :views => './public/stylesheets'
end