function transform(line) {
var values = line.split(',');

var obj = new Object();
obj.id = values[0];
obj.name = values[1];
obj.department = values[2];
var jsonString = JSON.stringify(obj);

return jsonString;
}
