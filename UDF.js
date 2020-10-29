function transform(line) {
var values = line.split(',');

var obj = new Object();
obj.location = values[0];
obj.name = values[1];
obj.age = values[2];
var jsonString = JSON.stringify(obj);

return jsonString;
}