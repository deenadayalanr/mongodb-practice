const queries = {
  toArray: "db.passengers.find().toArray()", // return entire data without a cursor on mongo shell
  forEach: "db.passengers.find().forEach((d) => {printjson(d)})", // iterates and fetchese the data one by one
  forEach2:
    "db.passengers.find().forEach((d) => {printjson({...d, newAge: d.age * 2})})", // transform the db response as well
  projectionIncludeKey: "db.passengers.find({}, {name:1}).pretty()",
  projectionExcludeKey: "db.passengers.find({}, {name:1,_id:0}).pretty()",
  searchngInArray: 'db.passengers.find({hobbies: "music"})', // here hobbies is an array of string
  searchingInObjects: 'db.flightData.find({"status.description" : "on-time"})', // In the same way we can also update the data using the atomic operator
  unorderedInserts:
    'db.hobbies.insertMany([{name: "sports", _id:"sports"}, {name: "driving", _id: "driving"}],{ordered: false})', // ordered as false ensures that all the data presented in the insert are tried even after there was an error
  orderedInserts:
    'db.hobbies.insertMany([{name: "sports", _id:"sports"}, {name: "driving", _id: "driving"}])',
    
};
