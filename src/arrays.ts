/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length < 1) {
        return [];
    }
    return [numbers[0], numbers[numbers.length - 1]];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled: number[] = numbers.map(
        (a_number: number): number => a_number * 3
    );
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const integers: number[] = numbers.map((word: string) =>
        !isNaN(parseInt(word)) ? parseInt(word) : 0
    );
    return integers;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const no_dollars: string[] = amounts.map(
        (num: string) => (num.includes("$") ? num.substring(1) : num)
        //add condition for if it is just $
    );
    const integers: number[] = no_dollars.map((num: string) =>
        !Number.isNaN(parseInt(num)) ? parseInt(num) : 0
    );

    return integers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const newMessages: string[] = messages.map((message: string): string =>
        message.includes("!") ? message.toUpperCase() : message
    );
    const filteredMessages: string[] = newMessages.filter(
        (Message: string): boolean => !Message.includes("?")
    );
    return filteredMessages;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords: string[] = words.filter(
        (word: string): boolean => word.length < 4
    );

    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let areRBG: boolean = colors.every(
        (color: string): boolean =>
            color === "red" || color === "blue" || color === "green"
    );

    // eslint-disable-next-line no-extra-parens
    colors.length === 0 ? (areRBG = true) : areRBG;

    return areRBG;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    //get sum
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );

    let theAddends: string;

    addends.length === 0
        ? (theAddends = "0")
        : (theAddends = addends.join("+"));

    //random comment
    return `${sum}=${theAddends}`;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    //create new array
    const newValues = [...values];

    const containsNegatives: boolean = values.some(
        (value: number): boolean => value < 0
    );

    if (!containsNegatives) {
        const sum = values.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );
        //add new sum value to the array after the last value
        newValues.splice(values.length, 0, sum);
    } else {
        //get first negative number!!
        const firstNegative = values.findIndex(
            (value: number): boolean => value < 0
        );
        // get sum before first negative number

        const prevArray = newValues.slice(0, firstNegative);

        const sum = prevArray.reduce(
            (currentTotal: number, num: number) => currentTotal + num,
            0
        );

        //add new sum value to the array after the first negative
        newValues.splice(firstNegative + 1, 0, sum);
    }

    return newValues;
}
function word(value: string, index: number, array: string[]): number {
    throw new Error("Function not implemented.");
}
