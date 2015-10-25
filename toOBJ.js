(function () {
  function line (prefix, array, i, n) {
    for (var j = 0; j < n; ++j) prefix += array[i + j] + (j === n - 1 ? '' : ' ');
    return prefix + '\n';
  };
  function fLine (vertexIndices, normalIndices, textureIndices, i, texturesFlag) {
    var str = 'f ';
    // Faces are 1-indexed, hello Lua
    var va = vertexIndices[i] + 1;
    var vb = vertexIndices[i + 1] + 1;
    var vc = vertexIndices[i + 2] + 1;
    var na = normalIndices[i] + 1;
    var nb = normalIndices[i + 1] + 1;
    var nc = normalIndices[i + 2] + 1;
    var ta = textureIndices[i] + 1;
    var tb = textureIndices[i + 1] + 1;
    var tc = textureIndices[i + 2] + 1;
    str += va + '/' + (texturesFlag ? ta : '') + '/' + na + ' ';
    str += vb + '/' + (texturesFlag ? tb : '') + '/' + nb + ' ';
    return str + vc + '/' + (texturesFlag ? tc : '') + '/' + nc + '\n';
  };
  function toOBJ (vertices, normals, textures, vertexIndices, normalIndices, textureIndices) {
    normalIndices = normalIndices || vertexIndices;
    textureIndices = textureIndices || vertexIndices;

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
    for (i = 0; i < vertexIndices.length; i += 3) {
      str += fLine(vertexIndices, normalIndices, textureIndices, i, hasTextures);
    }
    return str;
  };

  if (module && module.exports) {
    module.exports = toOBJ;
  } else {
    window.toOBJ = toOBJ;
  }
})();

