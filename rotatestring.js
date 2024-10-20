"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
function shiftStringLeft(input, shiftAmount) {
    var totalLength = input.length;
    shiftAmount = shiftAmount % totalLength;
    var newStringArray = new Array(totalLength);
    for (var index = 0; index < totalLength; index++) {
        var updatedIndex = (index + totalLength - shiftAmount) % totalLength;
        newStringArray[updatedIndex] = input[index];
    }
    return newStringArray.join('');
}
var inputReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
inputReader.question('Please enter the string to be shifted: ', function (inputStr) {
    inputReader.question('How many positions should it be shifted? ', function (shiftInput) {
        var shiftValue = parseInt(shiftInput);
        var outputString = shiftStringLeft(inputStr, shiftValue);
        console.log("Shifting \"".concat(inputStr, "\" by ").concat(shiftValue, " positions results in: \"").concat(outputString, "\""));
        inputReader.close();
    });
});
