'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function getLetter(s) {
    let letter;
    // Write your code here
    let ch=s[0];
    switch(true)
    {
        case 'aeiou'.includes(ch):
        letter='A';
        break;
        
        
        case 'bcdfg'.includes(ch):
        letter='B';
        break;
        
        
        case 'hjklm'.includes(ch):
        letter='C';
        break;
        
        default:
        letter='D';
        break;
    }
    
    return letter;
}


function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}
