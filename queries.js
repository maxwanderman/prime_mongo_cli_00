db.bios.find({"awards":{$exists:true}}).pretty();
db.bios.find({"awards":{$exists:false}}).pretty();
db.bios.find({ $or: [{"contribs": "OOP"}, {"contribs": "UNIX"}]}).pretty();
db.bios.find({"awards.award": { $in: ["Turing Award"]}}).pretty();
db.bios.find({"_id": { $gt: 3 , $lt: 7 }}).pretty();
db.bios.find({"awards": {$elemMatch: { "year": {$lt:2000}}}});
db.bios.find({"death":{$exists:false}}).pretty();
