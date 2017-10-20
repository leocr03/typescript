import { Base } from "../base";

(function showClass() {
    Base.showTitle('showClass');

    class Person {
        name: string

        constructor(name: string) {
            this.name = name;
        }
    }

    let person = new Person('Leonardo');
    console.log(person);
})();

(function showClassInheritance() {
    Base.showTitle('showClassInheritance');

    class Person {
        name: string

        constructor(name: string) {
            this.name = name;
        }
    }

    class Man extends Person {
        gener: string = 'male';
    }

    let person = new Man('Leonardo');
    console.log(person);
})();
