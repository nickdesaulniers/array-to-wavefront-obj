(function () {
  function line (prefix, array, i, n) {
    for (var j = 0; j < n; ++j) prefix += array[i + j] + (j === n - 1 ? '' : ' ');
    return prefix + '\n';
  };
  function fLine (array, i, texturesFlag) {
    var str = 'f ';
    // Faces are 1-indexed, hello Lua
    var a = array[i] + 1;
    var b = array[i + 1] + 1;
    var c = array[i + 2] + 1;
    str += a + '/' + (texturesFlag ? a + '/' : '') + a + ' ';
    str += b + '/' + (texturesFlag ? b + '/' : '') + b + ' ';
    return str + c + '/' + (texturesFlag ? c + '/' : '') + c + '\n';
  };
  function toOBJ (vertices, normals, textures, indices) {
    var str = '# Created by array-to-wavefront-obj, a free and open source\n';
    str +=    '# OBJ serializer for JavaScript\n';
    var i = 0;
    for (; i < vertices.length; i += 3) {
      str += line('v ', vertices, i, 3);
    }
    for (i = 0; i < normals.length; i += 3) {
      str += line('vn ', normals, i, 3);
    }
    var hasTextures = textures && textures.length > 0;
    if (hasTextures) {
      for (i = 0; i < textures.length; i += 2) {
        str += line('vt ', textures, i, 2);
      }
    }
    for (i = 0; i < indices.length; i += 3) {
      str += fLine(indices, i, hasTextures);
    }
    return str;
  };

  if (module && module.exports) {
    module.exports = toOBJ;
  } else {
    window.toOBJ = toOBJ;
  }
})();

