// Week 4: JavaScript Fundamentals - practice for Lessons 7 and 8.
// Open index.html with Live Server, then press F12 -> Console.
// Each task lives in its own function so names never clash with other files.

// ---------- Task 7.1: Setup & variables ----------
function task71Variables() {
    console.group("Task 7.1 - Variables");

    let myName = "Collins Mwenda";
    let age = 20;
    const birthYear = 2006;

    console.log(typeof myName);   // string
    console.log(typeof age);      // number
    console.log(typeof true);     // boolean

    // let vs const
    let score = 100;
    score = 150;                  // works
    const PI = 3.14159;
    // PI = 3;                    // would throw: const cannot be reassigned
    console.log("score is now", score, "and PI is", PI);

    // Variable practice
    const isStudent = true;
    const favoriteColors = ["orange", "navy", "green"];
    const today = new Date();

    console.log("My name:", myName);
    console.log("My age:", age, "(born in", birthYear + ")");
    console.log("Am I a student?", isStudent);
    console.log("My favorite colors:", favoriteColors);
    console.log("Today's date:", today.toDateString());

    console.groupEnd();
}

// ---------- Task 7.2: Data types & operators ----------
function task72Operators() {
    console.group("Task 7.2 - Data types & operators");

    // Numbers
    const a = 10;
    const b = 3;
    console.log("a + b =", a + b);
    console.log("a - b =", a - b);
    console.log("a * b =", a * b);
    console.log("a / b =", a / b);
    console.log("a % b =", a % b);
    console.log("a ** b =", a ** b);

    let count = 0;
    count++;
    console.log("after count++:", count);
    count--;
    console.log("after count--:", count);

    // Strings
    const firstName = "Collins";
    const lastName = "Mwenda";
    const fullName = firstName + " " + lastName;
    const greeting = `Hello, ${firstName}!`;
    const message = `${firstName} has ${firstName.length} letters.`;
    console.log(greeting);
    console.log(message);
    console.log(fullName.toUpperCase());
    console.log(fullName.toLowerCase());
    console.log(firstName.charAt(0));
    console.log(fullName.includes("Collins"));

    // Comparison & logical
    console.log(5 > 3);
    console.log(5 < 3);
    console.log(5 === 5);
    console.log(5 == "5");   // true (loose equality - avoid!)
    console.log(5 === "5");  // false (strict equality is safer)
    console.log(5 !== 3);
    console.log(true && true);
    console.log(true || false);
    console.log(!true);

    // Challenge: age in days / hours, year I turn 100
    const birthYear = 2006;
    const currentYear = new Date().getFullYear();
    const ageNow = currentYear - birthYear;
    const ageInDays = ageNow * 365;
    const ageInHours = ageInDays * 24;
    console.log(`Age in days (approx): ${ageInDays}`);
    console.log(`Age in hours (approx): ${ageInHours}`);
    console.log(`I turn 100 in the year ${birthYear + 100}`);

    console.groupEnd();
}

// ---------- Task 7.3: Functions ----------
function task73Functions() {
    console.group("Task 7.3 - Functions");

    // Declaration, expression, arrow, arrow with body
    function greet(person) {
        return `Hello, ${person}!`;
    }
    const add = function (a, b) {
        return a + b;
    };
    const multiply = (a, b) => a * b;
    const divide = (a, b) => {
        if (b === 0) {
            return "Cannot divide by zero";
        }
        return a / b;
    };
    console.log(greet("Collins"), add(2, 3), multiply(4, 5), divide(10, 4), divide(1, 0));

    // Build these functions
    function calculateArea(width, height) {
        return width * height;
    }
    function celsiusToFahrenheit(celsius) {
        return (celsius * 9) / 5 + 32;
    }
    function isEven(number) {
        return number % 2 === 0;
    }
    function getInitials(fullName) {
        return fullName
            .split(" ")
            .filter(word => word.length > 0)
            .map(word => word.charAt(0).toUpperCase())
            .join("");
    }
    function reverseString(str) {
        return str.split("").reverse().join("");
    }

    console.log("calculateArea(5, 4):", calculateArea(5, 4));
    console.log("celsiusToFahrenheit(25):", celsiusToFahrenheit(25));
    console.log("isEven(8):", isEven(8), "| isEven(7):", isEven(7));
    console.log('getInitials("Collins Mwenda"):', getInitials("Collins Mwenda"));
    console.log('reverseString("javascript"):', reverseString("javascript"));

    // Default parameters
    function greetWithDefaults(person = "Guest", salutation = "Hello") {
        return `${salutation}, ${person}!`;
    }
    console.log(greetWithDefaults());
    console.log(greetWithDefaults("Collins"));
    console.log(greetWithDefaults("Collins", "Hi"));

    function calculateTip(bill, tipPercent = 15) {
        return (bill * tipPercent) / 100;
    }
    console.log("Tip on 2000 at the default 15%:", calculateTip(2000));
    console.log("Tip on 2000 at 10%:", calculateTip(2000, 10));

    console.groupEnd();
}

// ---------- Task 7.4: Control flow ----------
function task74ControlFlow() {
    console.group("Task 7.4 - Control flow");

    // If / else
    function getGrade(score) {
        if (score >= 90) {
            return "A";
        } else if (score >= 80) {
            return "B";
        } else if (score >= 70) {
            return "C";
        } else if (score >= 60) {
            return "D";
        } else {
            return "F";
        }
    }
    console.log([95, 85, 72, 64, 40].map(getGrade));

    // Switch
    function getDayName(dayNumber) {
        switch (dayNumber) {
            case 0: return "Sunday";
            case 1: return "Monday";
            case 2: return "Tuesday";
            case 3: return "Wednesday";
            case 4: return "Thursday";
            case 5: return "Friday";
            case 6: return "Saturday";
            default: return "Invalid day";
        }
    }
    console.log(getDayName(0), getDayName(3), getDayName(6), getDayName(9));

    // Loops: for, while, for...of
    for (let i = 0; i < 5; i++) {
        console.log("for loop:", i);
    }
    let count = 0;
    while (count < 5) {
        console.log("while loop:", count);
        count++;
    }
    const colors = ["red", "green", "blue"];
    for (const color of colors) {
        console.log("for...of:", color);
    }

    // Print numbers 1-100 (collected so the console isn't flooded)
    const oneToHundred = [];
    for (let n = 1; n <= 100; n++) {
        oneToHundred.push(n);
    }
    console.log("1 to 100:", oneToHundred.join(" "));

    // Even numbers 1-50
    const evens = [];
    for (let n = 1; n <= 50; n++) {
        if (n % 2 === 0) {
            evens.push(n);
        }
    }
    console.log("Even numbers 1-50:", evens.join(" "));

    // FizzBuzz
    const fizzBuzzLines = [];
    for (let n = 1; n <= 100; n++) {
        if (n % 15 === 0) {
            fizzBuzzLines.push("FizzBuzz");
        } else if (n % 3 === 0) {
            fizzBuzzLines.push("Fizz");
        } else if (n % 5 === 0) {
            fizzBuzzLines.push("Buzz");
        } else {
            fizzBuzzLines.push(n);
        }
    }
    console.log("FizzBuzz:", fizzBuzzLines.join(" "));

    // Triangle of stars
    let triangle = "";
    for (let row = 1; row <= 5; row++) {
        triangle += "*".repeat(row) + "\n";
    }
    console.log("Triangle:\n" + triangle);

    console.groupEnd();
}

// ---------- Task 8.1: Arrays ----------
function task81Arrays() {
    console.group("Task 8.1 - Arrays");

    const fruits = ["apple", "banana", "orange"];
    console.log(fruits[0], fruits.length);
    fruits.push("grape");       // add to end
    fruits.unshift("mango");    // add to start
    console.log("after push/unshift:", fruits);
    fruits.pop();               // remove from end
    fruits.shift();             // remove from start
    console.log("after pop/shift:", fruits);

    const sample = [1, 2, 3, 4, 5];
    sample.forEach(num => console.log("forEach doubles:", num * 2));
    console.log("map:", sample.map(num => num * 2));
    console.log("filter evens:", sample.filter(num => num % 2 === 0));
    console.log("find first even:", sample.find(num => num % 2 === 0));
    console.log("reduce sum:", sample.reduce((total, num) => total + num, 0));
    console.log("includes 3:", sample.includes(3));

    // Build: use array methods
    const mixedNumbers = [4, -2, 15, 8, -7, 11, 3];
    console.log("Doubled:", mixedNumbers.map(n => n * 2));
    console.log("No negatives:", mixedNumbers.filter(n => n >= 0));
    console.log("First number > 10:", mixedNumbers.find(n => n > 10));
    console.log("Product of all:", mixedNumbers.reduce((product, n) => product * n, 1));

    console.groupEnd();
}

// ---------- Task 8.2: Objects ----------
function task82Objects() {
    console.group("Task 8.2 - Objects");

    const me = {
        firstName: "Collins",
        lastName: "Mwenda",
        age: 20,
        isStudent: true,
        hobbies: ["coding", "trading", "reading"],
        address: {
            city: "Meru",
            country: "Kenya"
        }
    };

    console.log(me.firstName);          // dot notation
    console.log(me["lastName"]);        // bracket notation
    console.log(me.address.city);       // nested
    me.age = 21;                        // modify
    me.course = "BBIT";                 // add
    delete me.isStudent;                // remove
    console.log(me);

    // Object methods
    const calculator = {
        add: function (a, b) {
            return a + b;
        },
        subtract(a, b) {
            return a - b;
        },
        multiply: (a, b) => a * b
    };
    console.log(calculator.add(5, 3), calculator.subtract(5, 3), calculator.multiply(5, 3));

    // Iteration
    const scores = { math: 78, english: 84, science: 91 };
    console.log(Object.keys(scores));
    console.log(Object.values(scores));
    console.log(Object.entries(scores));
    for (const [subject, score] of Object.entries(scores)) {
        console.log(`${subject}: ${score}`);
    }

    console.groupEnd();
}

// ---------- Task 8.3: Array of objects ----------
function task83ArrayOfObjects() {
    console.group("Task 8.3 - Array of objects");

    const students = [
        { name: "Njeri", age: 22, grade: 85, major: "CS" },
        { name: "Mutua", age: 20, grade: 72, major: "Math" },
        { name: "Kiprono", age: 23, grade: 90, major: "CS" },
        { name: "Achieng", age: 21, grade: 88, major: "Physics" },
        { name: "Wafula", age: 22, grade: 95, major: "CS" }
    ];

    const names = students.map(s => s.name);
    const highAchievers = students.filter(s => s.grade > 80);
    const kiprono = students.find(s => s.name === "Kiprono");
    const avgGrade = students.reduce((total, s) => total + s.grade, 0) / students.length;
    const csMajors = students.filter(s => s.major === "CS");
    const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
    const hasTopStudent = students.some(s => s.grade > 90);
    const allPassing = students.every(s => s.grade >= 60);

    console.log("1. Names:", names);
    console.log("2. Grade > 80:", highAchievers.map(s => s.name));
    console.log("3. Found Kiprono:", kiprono);
    console.log("4. Average grade:", avgGrade);
    console.log("5. CS majors:", csMajors.map(s => s.name));
    console.log("6. Sorted by grade:", sortedByGrade.map(s => `${s.name} (${s.grade})`));
    console.log("7. Anyone above 90?", hasTopStudent);
    console.log("8. Everyone passing?", allPassing);

    console.groupEnd();
}

// ---------- Task 8.4: JSON ----------
function task84Json() {
    console.group("Task 8.4 - JSON");

    // Text -> object -> text
    const json = '{"name":"Wanjiku","grades":{"math":88,"english":92}}';
    const student = JSON.parse(json);
    console.log(student.grades.math);
    const backToText = JSON.stringify(student, null, 2);
    console.log(typeof backToText);
    console.log(backToText);

    // Exercise
    const postsJson = '[{"id":1,"title":"Welcome","likes":12,"published":true},{"id":2,"title":"Draft ideas","likes":0,"published":false},{"id":3,"title":"Week 4 recap","likes":30,"published":true}]';

    try {
        const posts = JSON.parse(postsJson);                              // 1. parse
        const published = posts.filter(post => post.published);           // 2. published only
        const byLikes = [...published].sort((a, b) => b.likes - a.likes); // 3. most likes first
        const labels = byLikes.map(post => `${post.title} (${post.likes} likes)`); // 4. strings
        console.log("Labels:", labels);
        console.log("Filtered back to text:", JSON.stringify(published));  // 5. stringify
    } catch (error) {
        console.error("Could not parse the posts JSON:", error.message);
    }

    // Invalid JSON throws a SyntaxError, so wrap outside text in try/catch
    try {
        JSON.parse("{'bad': 'single quotes'}");
    } catch (error) {
        console.log("Caught as expected:", error.name);
    }

    console.groupEnd();
}

function runWeek4Practice() {
    task71Variables();
    task72Operators();
    task73Functions();
    task74ControlFlow();
    task81Arrays();
    task82Objects();
    task83ArrayOfObjects();
    task84Json();
}

runWeek4Practice();
