var toOBJ = require('./toOBJ.js');

var vertices = [-1.0, -1.0, 0.0,   1.0, -1.0, 0.0,   0.0, 1.0, 0.0];
var normals =  [ 0.0,  0.0, 1.0,   0.0,  0.0, 1.0,   0.0, 0.0, 1.0];
var textures = [];
var indices = [0, 1, 2];

var objStr = toOBJ(vertices, normals, textures, indices);
console.log(objStr);

