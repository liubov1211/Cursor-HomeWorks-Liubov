class Student {
    marksStudent = [4, 5, 5, 4];
    marksStudentNew = [];
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName
    }
    getInfo() {
        return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`
    }
    get marks() {
        return this.marksStudent;
    }
    set markSt(mark) {
        if (this.mark !== null) {
            this.marksStudent.push(mark);
        }
    }
    getAverageMark() {
        if (this.marksStudent !== null && this.marksStudent.length > 0) {
            return (this.marksStudent.reduce((a, b) => a + b) / this.marksStudent.length).toFixed(2)

        } else {
            return 0
        }
    }
    dismiss() {
        this.marksStudentNew = this.marksStudent;
        this.marksStudent = null;
    }
    recover() {
        this.marksStudent = this.marksStudentNew;
    }
}

class BudgetStudent extends Student {
    constructor(university, course, fullName) {
        super(university, course, fullName)
        setInterval(() => this.getScholarship(), 30000)
    }
    getScholarship() {
        if (this.mark !== null && this.getAverageMark() >= 4)
            console.log('Ви отримали 1400грн степендії');
    }
}

const liubov = new Student('Прикарпатський університет', '3', 'Семеняк Любов Степанівна');
console.log(liubov.getInfo());
console.log(liubov.marks);
liubov.markSt = 3;
liubov.markSt = 4;
console.log(liubov.getAverageMark());
liubov.dismiss();
console.log(liubov.marks);
liubov.recover();
console.log(liubov.marks);

const ivan = new BudgetStudent('Національний Транспортний університет', '4', 'Іваненко Іван Іванович');
console.log(ivan.getInfo());
ivan.getScholarship();
ivan.markSt = 3;
ivan.markSt = 3;
ivan.markSt = 5;
ivan.markSt = 5;
console.log(ivan.marks);
ivan.getScholarship();

