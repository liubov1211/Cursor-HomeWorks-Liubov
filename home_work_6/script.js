const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];
//  1
const getSubjects = (students) => {
    const res = Object.keys(students.subjects);
    const list = res.map((el) => (el.slice(0,1).toUpperCase() + el.slice(1).toLowerCase()).replaceAll('_', '-'));
    return list;
}
console.log(getSubjects(students[0]));

//2
const getAverageMark = (students ) => {
    const res = Object.values(students.subjects);
    const evaluation = res[0].concat(res[1], res[2]);
    const resSum = evaluation.reduce((a, b) => a+b)
    return (resSum/evaluation.length).toFixed(2);
}
console.log(getAverageMark(students[0]));

//3
const getStudentInfo = (students) => {
    return {
		course: students.course,
		name: students.name,
		averageMark: getAverageMark(students)
	}
}
console.log(getStudentInfo(students[0]));
// 4
const getStudentsNames = (students) => students.map((el) => el.name).sort();
console.log(getStudentsNames(students));


//5 
const getBestStudent = (students) => students.reduce((a, b) => getAverageMark(a) > getAverageMark(a) ? a :b).name
console.log(getBestStudent(students));
// 6
const calculateWordLetters = word => {
    let wordLetters ={};
    const arrWord = word.toLowerCase().split('');
    arrWord.forEach(letter => (!wordLetters[letter]) ? wordLetters[letter] = 1 : wordLetters[letter] += 1);
    return wordLetters;
}
console.log(calculateWordLetters('Тест'));