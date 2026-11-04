// Mini-Project: Student Grade Tracker

const gradeTracker = {
    students: [],

    // Add a new student (grades is an object like { math: 85, english: 90 })
    addStudent(name, grades) {
        const existing = this.getStudent(name);
        if (existing) {
            existing.grades = { ...existing.grades, ...grades };
            return existing;
        }
        const student = { name, grades: { ...grades } };
        this.students.push(student);
        return student;
    },

    // Get a student by name (case-insensitive), or null
    getStudent(name) {
        const wanted = String(name).trim().toLowerCase();
        return this.students.find(s => s.name.toLowerCase() === wanted) || null;
    },

    // Average of all of one student's grades (2 decimal places)
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) {
            return null;
        }
        return this._averageOf(Object.values(student.grades));
    },

    // Class average for one subject, across students who have that subject
    getSubjectAverage(subject) {
        const scores = this.students
            .filter(s => subject in s.grades)
            .map(s => s.grades[subject]);
        return this._averageOf(scores);
    },

    // Student with the highest overall average, or null if there are none
    getTopStudent() {
        if (this.students.length === 0) {
            return null;
        }
        return this.students.reduce((best, current) =>
            this.getStudentAverage(current.name) > this.getStudentAverage(best.name) ? current : best
        );
    },

    // Students whose average is below 70
    getStrugglingStudents() {
        return this.students.filter(s => this.getStudentAverage(s.name) < 70);
    },

    // A: 90+, B: 80-89, C: 70-79, D: 60-69, F: below 60
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },

    // Formatted report card string
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) {
            return `No student found named "${name}".`;
        }
        const average = this.getStudentAverage(student.name);
        const lines = [`Report card: ${student.name}`, "-".repeat(28)];
        for (const [subject, score] of Object.entries(student.grades)) {
            lines.push(`${subject.padEnd(12)} ${String(score).padStart(3)}  ${this.getLetterGrade(score)}`);
        }
        lines.push("-".repeat(28));
        lines.push(`${"Average".padEnd(12)} ${average.toFixed(2)}  ${this.getLetterGrade(average)}`);
        return lines.join("\n");
    },

    // Helper: mean rounded to 2 decimals (null when there is nothing to average)
    _averageOf(numbers) {
        if (numbers.length === 0) {
            return null;
        }
        const total = numbers.reduce((sum, n) => sum + n, 0);
        return Number((total / numbers.length).toFixed(2));
    }
};

function runGradeTrackerDemo() {
    console.group("Student Grade Tracker");

    gradeTracker.addStudent("Njeri", { math: 95, english: 88, science: 92 });
    gradeTracker.addStudent("Mutua", { math: 72, english: 85, science: 78 });
    gradeTracker.addStudent("Kiprono", { math: 60, english: 65, science: 58 });

    console.log("Njeri's average:", gradeTracker.getStudentAverage("Njeri"));            // 91.67
    console.log("Math class average:", gradeTracker.getSubjectAverage("math"));          // 75.67
    console.log("Top student:", gradeTracker.getTopStudent().name);                      // Njeri
    console.log("Struggling:", gradeTracker.getStrugglingStudents().map(s => s.name));   // [Kiprono]
    console.log("Unknown student:", gradeTracker.getStudent("Nobody"));                  // null
    console.log(gradeTracker.generateReportCard("Njeri"));

    console.groupEnd();
}

runGradeTrackerDemo();
