require "rubygems"
require "bundler/setup"
require "sinatra/static_assets"
require "haml"
require "sass"

$LOAD_PATH.unshift(File.dirname(__FILE__))

require 'sinatra'
require 'app'
run Sinatra::Application