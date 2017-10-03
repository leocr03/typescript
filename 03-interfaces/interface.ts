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
    Base.showTitle('showReadOnlyProperties');

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
