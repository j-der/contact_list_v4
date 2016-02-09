# Homepage (Root path)
get '/' do
  erb :index
end

get '/contacts' do
  Contact.all
end
