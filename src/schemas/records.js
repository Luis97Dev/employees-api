const schema = {
    bsonType: "object",
    required: [ "name", "position", "level" ],
    properties: {
        name: {
            bsonType: "string",
            description: "must be a string and is required"
        },
        position: {
            enum: [ "general_manager","area_manager", "worker" ],
            description: "can only be one of the enum values and is required"
        },
        level: {
            bsonType: "int",
            minimum: 1,
            maximum: 7,
            description: "must be an integer in [ 1, 7 ] and is required"
        },
    }   
}
module.exports = schema