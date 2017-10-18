import { Base } from "../base";

(function showHiddenInterface() {
    Base.showTitle('showHiddenInterface');

    function print(person: {name: string, age: number}) {
        console.log(person.name + '-' + person.age);
    }

    let person = { name: 'Leonardo', age: 35 };
    print(person);
})();

(function showFirstInterface() {
    Base.showTitle('showFirstInterface');
    
    interface Person {
        name: string, age: number;
    }

    function print(person: Person) {
        console.log(person.name + '-' + person.age);
    }

    let person = { name: 'Leonardo', age: 34 };
    print(person);
    person = { age: 35, name: 'Leonardo' };
    print(person);
})();

(function showOptionalProperties() {
    Base.showTitle('showOptionalProperties');

    interface Person {
        name: String,
        age?: number
    }

    function addPerson(name, age?) : Person {
        let person: Person = { age: age = 18, name : name };
        return person;
    }

    let person = addPerson('Leonardo');
    console.log('person = ' + JSON.stringify(person));   
})();

(function showReadOnlyProperties() {
    Base.showTitle('showReadOnlyProperties');

    interface Person {
        readonly name: String,
        readonly age: number
    }

    function addPerson(name, age?) : Person {
        let person: Person = { age: age = 19, name : name };
        return person;
    }

    let person = addPerson('Leonardo');
    console.log('person = ' + JSON.stringify(person));

    // Uncomment it. It causes Error! ;)
    // person.age = 35;
    // person.name = 'Leonardo';

    let p: Person [] = [person];
    let people: ReadonlyArray<Person> = p;
    console.log('people = ' + JSON.stringify(people));

    // Uncomment it. It causes Error! ;)
    // people[0] = person;
})();

(function showExcessPropertyChecks() {
    Base.showTitle('showExcessPropertyChecks');

    interface Person {
        name: String,
        age?: number,
        [propName: string]: any
    }

    let person: Person = { name: 'Leo', hage: 4 };

    function printPerson(person: Person) {
        console.log('the person is = ' + JSON.stringify(person));
    }

    printPerson(person);
})();

(function showFunctionType() {
    Base.showTitle('showFunctionType');

    interface SomeFuncType {
        (...numbers) : number
    }

    let sum: SomeFuncType = (...number) => {
        let total = 0;

        number.forEach(function(element){
            total += element;
        });

        return total;
    }

    console.log("The sum result of function type is: " + sum(1,3,4,5));
})();

(function showIndexableType() {
    Base.showTitle('showIndexableType');

    interface SomeIndex {
        [index: number] : string;
    }

    let someArray: SomeIndex = ["hey", "hi", "uou"];

    console.log("Accessing by Number Index (someArray[1]): " + someArray[1]);
    console.log("Accessing by Number Index (someArray[\"hey\"]): " + someArray["hey"]);


    interface SomeNumberIndex {
        [index: number] : number;
    }

    let someOtherArray: SomeNumberIndex = [3, 5, 6];

    console.log("Accessing by Number Index (someArray[1]): " + someOtherArray[1]);
    console.log("Accessing by Number Index (someArray[\"hey\"]): " + someOtherArray["hey"]);

    
    interface SomeStringIndex {
        [index: string] : number;
    }

    let someStringIndexStringArray: SomeStringIndex = {};
    someStringIndexStringArray["hey"] = 1;
    someStringIndexStringArray["hi"] = 3;
    someStringIndexStringArray["uou"] = 5;
    
    console.log("Accessing by String Index (someArray[1]): " + someStringIndexStringArray[1]);
    console.log("Accessing by String Index (someArray[\"hey\"]): " + someStringIndexStringArray["hey"]);
    console.log("Accessing by String Index (someArray[\"hi\"]): " + someStringIndexStringArray["hi"]);
    console.log("Accessing by String Index (someArray[\"uou\"]): " + someStringIndexStringArray["uou"]);
})();

(function showClassType() {
    Base.showTitle('showClassType');

    interface Person {
        name: string;
        age: number;
        updateAge();
    }

    class Leonardo implements Person {
        name: string = "Leonardo";
        age: number;
        updateAge() {
            this.age = 35;
        }
    }

    let leo: Person = new Leonardo();
    console.log(leo);
    let age = leo.updateAge();
    console.log(leo);
})();


(function showImplementingInterfaceWithConstructor() {
    Base.showTitle('showImplementingInterfaceWithConstructor');

    interface Animal {
        lifes: number,
        name: string,
        talk();
    }

    interface AnimalConstructor {
        new (lifes: number, name: string): Animal;
    }

    function createAnimal(ctor: AnimalConstructor, lifes: number, name: string) {
        return new ctor(lifes, name);
    }

    class Dog implements Animal {
        lifes: number = 1;
        name: string = "Dog";

        constructor(lifes: number, name: string) {
            this.lifes = lifes;
            this.name = name;
        }

        talk() {
            console.log("Au au!");
        }
    }

    let animal: Animal = createAnimal(Dog, 1, 'Dolly');

    console.log('The animal with name [%s] with [%s]', animal.name, animal.lifes)
})();

(function showImplementingInheritance() {
    Base.showTitle('showImplementingInheritance');

    interface Animal {
        age: number
        gener: string
    }

    interface Person extends Animal {
        name: string
    }

    let me = <Person>{}
    me.age = 35
    me.name = 'Leonardo'
    me.gener = 'male'

    console.log('It\'s me: ' + JSON.stringify(me))
})();