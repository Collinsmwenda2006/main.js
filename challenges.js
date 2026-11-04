// Daily Challenges (Days 1-5)

// Day 1: FizzBuzz (1-100)
function fizzBuzz(limit = 100) {
    const results = [];
    for (let n = 1; n <= limit; n++) {
        if (n % 15 === 0) {
            results.push("FizzBuzz");
        } else if (n % 3 === 0) {
            results.push("Fizz");
        } else if (n % 5 === 0) {
            results.push("Buzz");
        } else {
            results.push(String(n));
        }
    }
    return results;
}

// Day 2: Reverse a string - three approaches
function reverseWithLoop(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

function reverseWithMethods(str) {
    return str.split("").reverse().join("");
}

function reverseWithReduce(str) {
    return [...str].reduce((reversed, char) => char + reversed, "");
}

// Day 3: Largest number - loop first (no Math.max), then reduce
function findLargestWithLoop(numbers) {
    if (numbers.length === 0) {
        return undefined;
    }
    let largest = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}

function findLargestWithReduce(numbers) {
    return numbers.reduce((largest, n) => (n > largest ? n : largest));
}

// Day 4: Remove duplicates - Set and filter
function removeDuplicatesWithSet(items) {
    return [...new Set(items)];
}

function removeDuplicatesWithFilter(items) {
    return items.filter((item, index) => items.indexOf(item) === index);
}

// Day 5: Palindrome checker (ignores case, spaces and punctuation)
function isPalindrome(text) {
    const cleaned = text.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}

function runChallengesDemo() {
    console.group("Daily Challenges");

    console.log("Day 1 FizzBuzz:", fizzBuzz().join(" "));

    console.log('Day 2 reverse "hello":',
        reverseWithLoop("hello"), reverseWithMethods("hello"), reverseWithReduce("hello"));

    const sample = [14, 3, 99, 27, 8];
    console.log("Day 3 largest:", findLargestWithLoop(sample), findLargestWithReduce(sample));

    const withDuplicates = [1, 2, 2, 3, 4, 4, 5];
    console.log("Day 4 unique:", removeDuplicatesWithSet(withDuplicates), removeDuplicatesWithFilter(withDuplicates));

    console.log('Day 5 "racecar":', isPalindrome("racecar"));
    console.log('Day 5 "hello":', isPalindrome("hello"));
    console.log('Day 5 "A man a plan a canal Panama":', isPalindrome("A man a plan a canal Panama"));

    console.groupEnd();
}

runChallengesDemo();
