db.createCollection("posts", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["title", "text", "creator", "comments"],
      properties: {
        title: {
          bsonType: "string",
          description: "title must be a string and it is required",
        },
        text: {
          bsonType: "string",
          description: "text must be a string and it is required",
        },
        creator: {
          bsonType: "objectId",
          description: "creator must be a objectId and it is required",
        },
        comments: {
          bsonType: "array",
          description: "comments must be an array and it is required",
          items: {
            bsonType: "object",
            required: ["text", "author"],
            properties: {
              text: {
                bsonType: "string",
                description: "text must be a string and it is required",
              },
              author: {
                bsonType: "objectId",
                description: "author must be an objectId and it is required",
              },
            },
          },
        },
      },
    },
  },
});
