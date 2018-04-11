require 'fdk'

def myhandler(context, input)
  STDERR.puts "call_id: " + context.call_id
  name = "World"
  nin = input['name']
  if nin && nin != ""
    name = nin
  end
  return {message: "This is func1, #{name}."}
end

FDK.handle(:myhandler)
