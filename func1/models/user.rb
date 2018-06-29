require './messages/user_message_pb.rb'
class User

  def initialize(id, name, email, mobile)
    @id = id
    @name = name
    @email = email
    @mobile = mobile
  end

  def self.from_message(message)
    User.new(message.id, message.name, message.email, message.mobile)
  end

  def to_message

    UserMessage.new(
      id: @id,
      name: @name,
      email: @email,
      mobile: @mobile
    )
  end

  def serialize
    UserMessage.encode(self.to_message)
  end

  def deserialize(data)
    message = UserMessage.decode(data)
    User.from_message(message)
  end

end