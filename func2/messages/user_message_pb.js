/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.UserMessage', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UserMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UserMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.UserMessage.displayName = 'proto.UserMessage';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UserMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.UserMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UserMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    mobile: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UserMessage}
 */
proto.UserMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UserMessage;
  return proto.UserMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UserMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UserMessage}
 */
proto.UserMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMobile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UserMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UserMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UserMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMobile();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.UserMessage.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.UserMessage.prototype.setId = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.UserMessage.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.UserMessage.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string email = 3;
 * @return {string}
 */
proto.UserMessage.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.UserMessage.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string mobile = 4;
 * @return {string}
 */
proto.UserMessage.prototype.getMobile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.UserMessage.prototype.setMobile = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


goog.object.extend(exports, proto);
