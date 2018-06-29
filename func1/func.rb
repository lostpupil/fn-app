require 'fdk'
require './models/user.rb'

def myhandler(context, input)
  STDERR.puts "call_id: " + context.call_id
  name = "World"
  nin = input['name']
  if nin && nin != ""
    name = nin
  end
  u = User.new(1, 'banana', 'banana@eurus.cn', '110')
  STDERR.puts u.deserialize(u.serialize)
  
  return {message: u.serialize}
end

FDK.handle(:myhandler)
