# Array to Wavefront OBJ

`npm install array-to-wavefront-obj`

```javascript
var toOBJ = require('array-to-wavefront-obj');

var vertices = [-1.0, -1.0, 0.0,   1.0, -1.0, 0.0,   0.0, 1.0, 0.0];
var normals =  [ 0.0,  0.0, 1.0,   0.0,  0.0, 1.0,   0.0, 0.0, 1.0];
var textures = [0.0, 0.0,   1.0, 0.0,   0.5, 1.0];
var indices = [0, 1, 2];

var objStr = toOBJ(vertices, normals, textures, indices);
console.log(objStr);
```

prints the string
```
# Created by array-to-wavefront-obj, a free and open source
# OBJ serializer for JavaScript
v -1 -1 0
v 1 -1 0
v 0 1 0
vn 0 0 1
vn 0 0 1
vn 0 0 1
vt 0 0
vt 1 0
vt 0.5 1
f 1/1/1 2/2/2 3/3/3
```

if the textures array is empty, then we would wind up with the string:

```
# Created by array-to-wavefront-obj, a free and open source
# OBJ serializer for JavaScript
v -1 -1 0
v 1 -1 0
v 0 1 0
vn 0 0 1
vn 0 0 1
vn 0 0 1
f 1//1 2//2 3//3
```

