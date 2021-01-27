// source: data/INVEST0025.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var common_common_pb = require('../common/common_pb.js');
goog.object.extend(proto, common_common_pb);
goog.exportSymbol('proto.kakaopaysec.Invest0025Req', null, global);
goog.exportSymbol('proto.kakaopaysec.Invest0025Req.Invest0025In', null, global);
goog.exportSymbol('proto.kakaopaysec.Invest0025Res', null, global);
goog.exportSymbol('proto.kakaopaysec.Invest0025Res.Invest0025Out', null, global);
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
proto.kakaopaysec.Invest0025Req = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.kakaopaysec.Invest0025Req, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.kakaopaysec.Invest0025Req.displayName = 'proto.kakaopaysec.Invest0025Req';
}
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
proto.kakaopaysec.Invest0025Req.Invest0025In = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.kakaopaysec.Invest0025Req.Invest0025In, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.kakaopaysec.Invest0025Req.Invest0025In.displayName = 'proto.kakaopaysec.Invest0025Req.Invest0025In';
}
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
proto.kakaopaysec.Invest0025Res = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.kakaopaysec.Invest0025Res, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.kakaopaysec.Invest0025Res.displayName = 'proto.kakaopaysec.Invest0025Res';
}
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
proto.kakaopaysec.Invest0025Res.Invest0025Out = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.kakaopaysec.Invest0025Res.Invest0025Out, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.kakaopaysec.Invest0025Res.Invest0025Out.displayName = 'proto.kakaopaysec.Invest0025Res.Invest0025Out';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.kakaopaysec.Invest0025Req.prototype.toObject = function(opt_includeInstance) {
  return proto.kakaopaysec.Invest0025Req.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kakaopaysec.Invest0025Req} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kakaopaysec.Invest0025Req.toObject = function(includeInstance, msg) {
  var f, obj = {
    commonHeader: (f = msg.getCommonHeader()) && common_common_pb.GrpcCommonHeader.toObject(includeInstance, f),
    data: (f = msg.getData()) && proto.kakaopaysec.Invest0025Req.Invest0025In.toObject(includeInstance, f)
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
 * @return {!proto.kakaopaysec.Invest0025Req}
 */
proto.kakaopaysec.Invest0025Req.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kakaopaysec.Invest0025Req;
  return proto.kakaopaysec.Invest0025Req.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kakaopaysec.Invest0025Req} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kakaopaysec.Invest0025Req}
 */
proto.kakaopaysec.Invest0025Req.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_common_pb.GrpcCommonHeader;
      reader.readMessage(value,common_common_pb.GrpcCommonHeader.deserializeBinaryFromReader);
      msg.setCommonHeader(value);
      break;
    case 2:
      var value = new proto.kakaopaysec.Invest0025Req.Invest0025In;
      reader.readMessage(value,proto.kakaopaysec.Invest0025Req.Invest0025In.deserializeBinaryFromReader);
      msg.setData(value);
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
proto.kakaopaysec.Invest0025Req.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kakaopaysec.Invest0025Req.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kakaopaysec.Invest0025Req} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kakaopaysec.Invest0025Req.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommonHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_common_pb.GrpcCommonHeader.serializeBinaryToWriter
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.kakaopaysec.Invest0025Req.Invest0025In.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.kakaopaysec.Invest0025Req.Invest0025In.prototype.toObject = function(opt_includeInstance) {
  return proto.kakaopaysec.Invest0025Req.Invest0025In.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kakaopaysec.Invest0025Req.Invest0025In} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kakaopaysec.Invest0025Req.Invest0025In.toObject = function(includeInstance, msg) {
  var f, obj = {
    exgCod: jspb.Message.getFieldWithDefault(msg, 1, ""),
    itemCod: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.kakaopaysec.Invest0025Req.Invest0025In}
 */
proto.kakaopaysec.Invest0025Req.Invest0025In.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kakaopaysec.Invest0025Req.Invest0025In;
  return proto.kakaopaysec.Invest0025Req.Invest0025In.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kakaopaysec.Invest0025Req.Invest0025In} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kakaopaysec.Invest0025Req.Invest0025In}
 */
proto.kakaopaysec.Invest0025Req.Invest0025In.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExgCod(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setItemCod(value);
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
proto.kakaopaysec.Invest0025Req.Invest0025In.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kakaopaysec.Invest0025Req.Invest0025In.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kakaopaysec.Invest0025Req.Invest0025In} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kakaopaysec.Invest0025Req.Invest0025In.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExgCod();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getItemCod();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string exg_cod = 1;
 * @return {string}
 */
proto.kakaopaysec.Invest0025Req.Invest0025In.prototype.getExgCod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.kakaopaysec.Invest0025Req.Invest0025In} returns this
 */
proto.kakaopaysec.Invest0025Req.Invest0025In.prototype.setExgCod = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string item_cod = 2;
 * @return {string}
 */
proto.kakaopaysec.Invest0025Req.Invest0025In.prototype.getItemCod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.kakaopaysec.Invest0025Req.Invest0025In} returns this
 */
proto.kakaopaysec.Invest0025Req.Invest0025In.prototype.setItemCod = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional GrpcCommonHeader common_header = 1;
 * @return {?proto.kakaopaysec.GrpcCommonHeader}
 */
proto.kakaopaysec.Invest0025Req.prototype.getCommonHeader = function() {
  return /** @type{?proto.kakaopaysec.GrpcCommonHeader} */ (
    jspb.Message.getWrapperField(this, common_common_pb.GrpcCommonHeader, 1));
};


/**
 * @param {?proto.kakaopaysec.GrpcCommonHeader|undefined} value
 * @return {!proto.kakaopaysec.Invest0025Req} returns this
*/
proto.kakaopaysec.Invest0025Req.prototype.setCommonHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.kakaopaysec.Invest0025Req} returns this
 */
proto.kakaopaysec.Invest0025Req.prototype.clearCommonHeader = function() {
  return this.setCommonHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.kakaopaysec.Invest0025Req.prototype.hasCommonHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Invest0025In data = 2;
 * @return {?proto.kakaopaysec.Invest0025Req.Invest0025In}
 */
proto.kakaopaysec.Invest0025Req.prototype.getData = function() {
  return /** @type{?proto.kakaopaysec.Invest0025Req.Invest0025In} */ (
    jspb.Message.getWrapperField(this, proto.kakaopaysec.Invest0025Req.Invest0025In, 2));
};


/**
 * @param {?proto.kakaopaysec.Invest0025Req.Invest0025In|undefined} value
 * @return {!proto.kakaopaysec.Invest0025Req} returns this
*/
proto.kakaopaysec.Invest0025Req.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.kakaopaysec.Invest0025Req} returns this
 */
proto.kakaopaysec.Invest0025Req.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.kakaopaysec.Invest0025Req.prototype.hasData = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.kakaopaysec.Invest0025Res.prototype.toObject = function(opt_includeInstance) {
  return proto.kakaopaysec.Invest0025Res.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kakaopaysec.Invest0025Res} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kakaopaysec.Invest0025Res.toObject = function(includeInstance, msg) {
  var f, obj = {
    commonHeader: (f = msg.getCommonHeader()) && common_common_pb.GrpcCommonHeader.toObject(includeInstance, f),
    message: (f = msg.getMessage()) && common_common_pb.GrpcMessage.toObject(includeInstance, f),
    data: (f = msg.getData()) && proto.kakaopaysec.Invest0025Res.Invest0025Out.toObject(includeInstance, f)
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
 * @return {!proto.kakaopaysec.Invest0025Res}
 */
proto.kakaopaysec.Invest0025Res.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kakaopaysec.Invest0025Res;
  return proto.kakaopaysec.Invest0025Res.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kakaopaysec.Invest0025Res} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kakaopaysec.Invest0025Res}
 */
proto.kakaopaysec.Invest0025Res.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new common_common_pb.GrpcCommonHeader;
      reader.readMessage(value,common_common_pb.GrpcCommonHeader.deserializeBinaryFromReader);
      msg.setCommonHeader(value);
      break;
    case 2:
      var value = new common_common_pb.GrpcMessage;
      reader.readMessage(value,common_common_pb.GrpcMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 3:
      var value = new proto.kakaopaysec.Invest0025Res.Invest0025Out;
      reader.readMessage(value,proto.kakaopaysec.Invest0025Res.Invest0025Out.deserializeBinaryFromReader);
      msg.setData(value);
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
proto.kakaopaysec.Invest0025Res.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kakaopaysec.Invest0025Res.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kakaopaysec.Invest0025Res} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kakaopaysec.Invest0025Res.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommonHeader();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      common_common_pb.GrpcCommonHeader.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      common_common_pb.GrpcMessage.serializeBinaryToWriter
    );
  }
  f = message.getData();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.kakaopaysec.Invest0025Res.Invest0025Out.serializeBinaryToWriter
    );
  }
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.kakaopaysec.Invest0025Res.Invest0025Out.prototype.toObject = function(opt_includeInstance) {
  return proto.kakaopaysec.Invest0025Res.Invest0025Out.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.kakaopaysec.Invest0025Res.Invest0025Out} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kakaopaysec.Invest0025Res.Invest0025Out.toObject = function(includeInstance, msg) {
  var f, obj = {
    exgCod: jspb.Message.getFieldWithDefault(msg, 1, ""),
    exgNm: jspb.Message.getFieldWithDefault(msg, 2, ""),
    itemCod: jspb.Message.getFieldWithDefault(msg, 3, ""),
    itemNm: jspb.Message.getFieldWithDefault(msg, 4, ""),
    dfRt: jspb.Message.getFloatingPointFieldWithDefault(msg, 5, 0.0),
    crdRt: jspb.Message.getFloatingPointFieldWithDefault(msg, 6, 0.0),
    stkCrpr: jspb.Message.getFieldWithDefault(msg, 7, 0),
    updnR: jspb.Message.getFloatingPointFieldWithDefault(msg, 8, 0.0),
    mktExnUpdnR: jspb.Message.getFloatingPointFieldWithDefault(msg, 9, 0.0),
    atntRegiC: jspb.Message.getFieldWithDefault(msg, 10, 0)
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
 * @return {!proto.kakaopaysec.Invest0025Res.Invest0025Out}
 */
proto.kakaopaysec.Invest0025Res.Invest0025Out.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.kakaopaysec.Invest0025Res.Invest0025Out;
  return proto.kakaopaysec.Invest0025Res.Invest0025Out.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.kakaopaysec.Invest0025Res.Invest0025Out} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.kakaopaysec.Invest0025Res.Invest0025Out}
 */
proto.kakaopaysec.Invest0025Res.Invest0025Out.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExgCod(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setExgNm(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setItemCod(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setItemNm(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setDfRt(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCrdRt(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setStkCrpr(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setUpdnR(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMktExnUpdnR(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setAtntRegiC(value);
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
proto.kakaopaysec.Invest0025Res.Invest0025Out.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.kakaopaysec.Invest0025Res.Invest0025Out.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.kakaopaysec.Invest0025Res.Invest0025Out} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.kakaopaysec.Invest0025Res.Invest0025Out.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExgCod();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExgNm();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getItemCod();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getItemNm();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDfRt();
  if (f !== 0.0) {
    writer.writeFloat(
      5,
      f
    );
  }
  f = message.getCrdRt();
  if (f !== 0.0) {
    writer.writeFloat(
      6,
      f
    );
  }
  f = message.getStkCrpr();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getUpdnR();
  if (f !== 0.0) {
    writer.writeFloat(
      8,
      f
    );
  }
  f = message.getMktExnUpdnR();
  if (f !== 0.0) {
    writer.writeFloat(
      9,
      f
    );
  }
  f = message.getAtntRegiC();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
};


/**
 * optional string exg_cod = 1;
 * @return {string}
 */
proto.kakaopaysec.Invest0025Res.Invest0025Out.prototype.getExgCod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.kakaopaysec.Invest0025Res.Invest0025Out} returns this
 */
proto.kakaopaysec.Invest0025Res.Invest0025Out.prototype.setExgCod = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string exg_nm = 2;
 * @return {string}
 */
proto.kakaopaysec.Invest0025Res.Invest0025Out.prototype.getExgNm = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.kakaopaysec.Invest0025Res.Invest0025Out} returns this
 */
proto.kakaopaysec.Invest0025Res.Invest0025Out.prototype.setExgNm = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string item_cod = 3;
 * @return {string}
 */
proto.kakaopaysec.Invest0025Res.Invest0025Out.prototype.getItemCod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.kakaopaysec.Invest0025Res.Invest0025Out} returns this
 */
proto.kakaopaysec.Invest0025Res.Invest0025Out.prototype.setItemCod = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string item_nm = 4;
 * @return {string}
 */
proto.kakaopaysec.Invest0025Res.Invest0025Out.prototype.getItemNm = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.kakaopaysec.Invest0025Res.Invest0025Out} returns this
 */
proto.kakaopaysec.Invest0025Res.Invest0025Out.prototype.setItemNm = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional float df_rt = 5;
 * @return {number}
 */
proto.kakaopaysec.Invest0025Res.Invest0025Out.prototype.getDfRt = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 5, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.kakaopaysec.Invest0025Res.Invest0025Out} returns this
 */
proto.kakaopaysec.Invest0025Res.Invest0025Out.prototype.setDfRt = function(value) {
  return jspb.Message.setProto3FloatField(this, 5, value);
};


/**
 * optional float crd_rt = 6;
 * @return {number}
 */
proto.kakaopaysec.Invest0025Res.Invest0025Out.prototype.getCrdRt = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 6, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.kakaopaysec.Invest0025Res.Invest0025Out} returns this
 */
proto.kakaopaysec.Invest0025Res.Invest0025Out.prototype.setCrdRt = function(value) {
  return jspb.Message.setProto3FloatField(this, 6, value);
};


/**
 * optional uint32 stk_crpr = 7;
 * @return {number}
 */
proto.kakaopaysec.Invest0025Res.Invest0025Out.prototype.getStkCrpr = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.kakaopaysec.Invest0025Res.Invest0025Out} returns this
 */
proto.kakaopaysec.Invest0025Res.Invest0025Out.prototype.setStkCrpr = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional float updn_r = 8;
 * @return {number}
 */
proto.kakaopaysec.Invest0025Res.Invest0025Out.prototype.getUpdnR = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 8, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.kakaopaysec.Invest0025Res.Invest0025Out} returns this
 */
proto.kakaopaysec.Invest0025Res.Invest0025Out.prototype.setUpdnR = function(value) {
  return jspb.Message.setProto3FloatField(this, 8, value);
};


/**
 * optional float mkt_exn_updn_r = 9;
 * @return {number}
 */
proto.kakaopaysec.Invest0025Res.Invest0025Out.prototype.getMktExnUpdnR = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 9, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.kakaopaysec.Invest0025Res.Invest0025Out} returns this
 */
proto.kakaopaysec.Invest0025Res.Invest0025Out.prototype.setMktExnUpdnR = function(value) {
  return jspb.Message.setProto3FloatField(this, 9, value);
};


/**
 * optional uint32 atnt_regi_c = 10;
 * @return {number}
 */
proto.kakaopaysec.Invest0025Res.Invest0025Out.prototype.getAtntRegiC = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.kakaopaysec.Invest0025Res.Invest0025Out} returns this
 */
proto.kakaopaysec.Invest0025Res.Invest0025Out.prototype.setAtntRegiC = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional GrpcCommonHeader common_header = 1;
 * @return {?proto.kakaopaysec.GrpcCommonHeader}
 */
proto.kakaopaysec.Invest0025Res.prototype.getCommonHeader = function() {
  return /** @type{?proto.kakaopaysec.GrpcCommonHeader} */ (
    jspb.Message.getWrapperField(this, common_common_pb.GrpcCommonHeader, 1));
};


/**
 * @param {?proto.kakaopaysec.GrpcCommonHeader|undefined} value
 * @return {!proto.kakaopaysec.Invest0025Res} returns this
*/
proto.kakaopaysec.Invest0025Res.prototype.setCommonHeader = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.kakaopaysec.Invest0025Res} returns this
 */
proto.kakaopaysec.Invest0025Res.prototype.clearCommonHeader = function() {
  return this.setCommonHeader(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.kakaopaysec.Invest0025Res.prototype.hasCommonHeader = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GrpcMessage message = 2;
 * @return {?proto.kakaopaysec.GrpcMessage}
 */
proto.kakaopaysec.Invest0025Res.prototype.getMessage = function() {
  return /** @type{?proto.kakaopaysec.GrpcMessage} */ (
    jspb.Message.getWrapperField(this, common_common_pb.GrpcMessage, 2));
};


/**
 * @param {?proto.kakaopaysec.GrpcMessage|undefined} value
 * @return {!proto.kakaopaysec.Invest0025Res} returns this
*/
proto.kakaopaysec.Invest0025Res.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.kakaopaysec.Invest0025Res} returns this
 */
proto.kakaopaysec.Invest0025Res.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.kakaopaysec.Invest0025Res.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Invest0025Out data = 3;
 * @return {?proto.kakaopaysec.Invest0025Res.Invest0025Out}
 */
proto.kakaopaysec.Invest0025Res.prototype.getData = function() {
  return /** @type{?proto.kakaopaysec.Invest0025Res.Invest0025Out} */ (
    jspb.Message.getWrapperField(this, proto.kakaopaysec.Invest0025Res.Invest0025Out, 3));
};


/**
 * @param {?proto.kakaopaysec.Invest0025Res.Invest0025Out|undefined} value
 * @return {!proto.kakaopaysec.Invest0025Res} returns this
*/
proto.kakaopaysec.Invest0025Res.prototype.setData = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.kakaopaysec.Invest0025Res} returns this
 */
proto.kakaopaysec.Invest0025Res.prototype.clearData = function() {
  return this.setData(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.kakaopaysec.Invest0025Res.prototype.hasData = function() {
  return jspb.Message.getField(this, 3) != null;
};


goog.object.extend(exports, proto.kakaopaysec);