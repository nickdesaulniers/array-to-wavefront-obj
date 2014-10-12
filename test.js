var fs = require('fs');
var assert = require('assert');
var OBJ = require('webgl-obj-loader');
var toOBJ = require('./toOBJ.js');

var opt = { encoding: 'utf8' };

['dragon.obj'].forEach(function (meshPath) {
  fs.readFile(meshPath, opt, function (err, mesh1str){
    if (err) return console.error(err);
    var mesh1 = new OBJ.Mesh(mesh1str);
    var mesh2str = toOBJ(mesh1.vertices, mesh1.vertexNormals, mesh1.textures, mesh1.indices);
    var mesh2 = new OBJ.Mesh(mesh2str);
    //console.log(mesh2str);
    assert.deepEqual([0, 1, 2], [0, 1, 2]);
    assert.notDeepEqual([0, 1, 2], [2, 1, 0]);

    assert.deepEqual(mesh1.vertices, mesh2.vertices, 'Vertices not equal ' + meshPath);
    assert.deepEqual(mesh1.vertexNormals, mesh2.vertexNormals, 'Normals not equal ' + meshPath);
    assert.deepEqual(mesh1.textures, mesh2.textures, 'Textures not equal ' + meshPath);
    assert.deepEqual(mesh1.indices, mesh2.indices, 'Indices not equal ' + meshPath);
  });
});

