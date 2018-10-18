class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.likes = likes;
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age}.`;

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`;
        });
        return bio;
    }

    set fullName (fullName) {
        const names = fullName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    };

    get fullName () {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, likes, job) {
        super(firstName, lastName, age, likes);
        this.job = job;
    };

    getBio() {
        return `${this.fullName} is a ${this.job}.`;
    };

    getYearsLeft() {
        return 65 - this.age;
    };
};

class Student extends Person {
    constructor(firstName, lastName, age, grade) {
        super(firstName, lastName, age);
        this.grade = grade;
    };

    getBio() {
        const message = this.grade >= 70 ? `${this.firstName} ${this.lastName} is passing the course` : `${this.firstName} ${this.lastName} is failing the course`;
        return message;
    };

    updateGrade(grade) {
        this.grade += grade;
    };
};

const Test = function (firstName) {
    this.firstName = firstName;
}

const test = new Test("James");
console.log(test);

const me = new Employee('James', 'Fink', 30, ['reading'], 'Student');
me.fullName = 'Caterina Gennero';
console.log(me);

// me.updateGrade(20);
// console.log(me.getBio());
// me.updateGrade(-30);
// console.log(me.getBio());

const kim = new Employee('Kim', 'Charters', 25, ['biking', 'weed'], 'Event Planner');
console.log(kim.getBio());

