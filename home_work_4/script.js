const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const getPairs = (students) => {
    const boys = [];
    const girls = [];
    const pairs = [];

    for (let i = 0; i < students.length; i++) {
        let nameStudent = students[i];
        if (nameStudent.endsWith("а")) {
            boys.push(nameStudent);
        } else {
            girls.push(nameStudent);
        }
    }

    for (let i = 0; i < girls.length; i++) {
        pairs.push([girls[i], boys[i]]);
    }
    return pairs;
};

const getPairsWithThems = (pairs, themes) => {
    const pairsWithI = pairs.map((el) => el.join(' i '));
    const themesPairs = pairsWithI.map((el, i) => [el, themes[i]])
    return themesPairs
}

const getStudentMarks = (students, marks) => {
    const studentMarks = students.map((el, i) => [el, marks[i]]);
    return studentMarks;
}

const getPairsMarks = (pairs) => {
    const pairsMarks = pairs.map(el => [...el, (Math.round(Math.random() * (5 - 1)) + 1)]);
    return pairsMarks;
}

const pairs = getPairs(students);
const pairsThems = getPairsWithThems(pairs, themes);
const stMark = getStudentMarks(students, marks);
const markForPairs = getPairsMarks(pairs);
console.log(pairs);
console.log(pairsThems);
console.log(stMark);
console.log(markForPairs);