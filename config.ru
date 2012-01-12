require "rubygems"
require "bundler"

$LOAD_PATH.unshift(File.dirname(__FILE__))

require 'sinatra'
require 'app'
run Sinatra::Application