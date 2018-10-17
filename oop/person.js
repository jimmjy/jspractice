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

    setName(fullName) {
        const names = fullName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, likes, job) {
        super(firstName, lastName, age, likes);
        this.job = job;
    };

    getBio() {
        return `${this.firstName} ${this.lastName} is a ${this.job}.`;
    };

    getYearsLeft() {
        return 65 - this.age;
    };
};


const me = new Employee('James', 'Finkelstein', 30, ['Biking', 'Coding'], 'Web Developer');
me.setName('Alexis Turner');
console.log(me.getBio());
console.log(me.getYearsLeft());


const person2 = new Person('Clancy', 'Turner', 51);
console.log(person2.getBio());