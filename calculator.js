function add(numbers) {
    if (!numbers) {
        return 0;
    }

    let delimiter = /,|\n/;
    let customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);

    if (customDelimiterMatch) {
        delimiter = new RegExp(customDelimiterMatch[1]);
        numbers = numbers.split('\n').slice(1).join('\n');
    }

    let numArray = numbers.split(delimiter);
    let negatives = [];
    let sum = 0;

    numArray.forEach(num => {
        let number = parseInt(num, 10);
        if (isNaN(number)) {
            return;
        }
        if (number < 0) {
            negatives.push(number);
        }
        sum += number;
    });

    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return sum;
}

// Export the function for use in other modules
module.exports = { add };
