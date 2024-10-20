import * as readline from 'readline';

function shiftStringLeft(input: string, shiftAmount: number): string {
    const totalLength = input.length;
    shiftAmount = shiftAmount % totalLength;
    const newStringArray: string[] = new Array(totalLength);

    for (let index = 0; index < totalLength; index++) {
        const updatedIndex = (index + totalLength - shiftAmount) % totalLength; 
        newStringArray[updatedIndex] = input[index];
    }

    return newStringArray.join('');
}

const inputReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

inputReader.question('Please enter the string to be shifted: ', (inputStr) => {
    inputReader.question('How many positions should it be shifted? ', (shiftInput) => {
        const shiftValue = parseInt(shiftInput);
        const outputString = shiftStringLeft(inputStr, shiftValue);
        console.log(`Shifting "${inputStr}" by ${shiftValue} positions results in: "${outputString}"`);

        inputReader.close();
    });
});
