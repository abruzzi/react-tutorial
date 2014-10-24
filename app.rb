require 'sinatra'
require './model/comments'
require 'json'

require 'rack/contrib'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'db/development.sqlite3'
)

use Rack::PostBodyContentTypeParser

get '/' do
	erb :index
end

get '/comments' do
	Comment.all.to_json
end

post '/comments' do
	comment = Comment.create(:author => params["author"], :text => params["text"])
	if comment.save
		Comment.all.to_json
	end
end