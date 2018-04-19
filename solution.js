process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    
    // O(n)
    console.log(a.concat(a.splice(0, k)).join(' '));
    //console.log(shifty(n, k, a).join(' '));
}

// Brute force O(n^2)
// function shifty(n, d, arr) {
//     for (let i = 0; i < d; i++) {
//         arr.push(arr.shift());
//     }
//     return arr;
// }
