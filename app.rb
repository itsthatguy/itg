# app.rb
set :haml, :format => :html5

get '/' do
  @player = player
  @shot = last_shot
  haml :index
end

get '/stylesheets/:file.css' do |file|
  content_type 'text/css', :charset => 'utf-8'

  # no #scss method is defined (and #sass only looks for .sass files)
  # we must call render ourself:
  render :sass, file.to_sym, :layout => false, :views => './public/stylesheets'
end

def player
  Dribbble::Player.find('itsthatguy')
end

def last_shot
  player.shots.first
end