// webpack world.js hello.1.js
// Hash: 2ffec71bfd1f734cb0ad
// Version: webpack 3.10.0
// Time: 149ms
// Asset     Size  Chunks             Chunk Names
// hello.1.js  3.02 kB       0  [emitted]  main
//     [0] ./world.js 66 bytes {0} [built]
//     [1] ./hello.js 408 bytes {0} [built]

require('./hello.js');

function world(str) {
    alert(str)
}