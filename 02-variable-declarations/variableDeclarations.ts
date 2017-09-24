import { Base } from "../base";

function showVarScope() {
    Base.showTitle('showVarScope');

    var a = 1;

    function sumVar(){
        a += 1;
        return a;
    }

    console.log('a = ' + a);
    console.log('sumVar() = ' + sumVar());
    console.log('a = ' + a);
    a = sumVar();
    console.log('a = ' + a);
    console.log('sumVar() = ' + sumVar());
    console.log('a = ' + a);
    console.log('sumVar() = ' + sumVar());
}

function showVarDeclaration() {
    Base.showTitle('showVarDeclaration');
    var someVar: String = 'Hello var!';
    console.log(someVar);
}

function showScopingRules() {
    Base.showTitle('showScopingRules');

    var i = 1;
    
    if (i < 3) {
        var someVar: String = 'Hello var inside if!';
    }

    console.log(someVar);
}

function showLet() {
    Base.showTitle('showLet');

    var someLet: String = 'Hello let!';
    console.log(someLet);
}

function showConstDeclaration() {
    Base.showTitle('showConstDeclaration');

    const person = {
        name: 'Leonardo',
        age: 18
    };

    console.log('A const with value = ' + JSON.stringify(person));

    person.age = 35;

    console.log('A const with value = ' + JSON.stringify(person));
}

function showDestructuring() {
    Base.showTitle('showDestructuring');

    let ages = [41,55, 53, 17, 87];
    let [first, ...second] = ages;

    console.log('first: ' + first);
    console.log('second: ' + second);
}

function showObjectDestructuring() {
    Base.showTitle('showObjectDestructuring');

    let person = {
        name: 'Leonardo',
        age: 18
    };

    let { age, name } = person;

    console.log('name: ' + name);
    console.log('age: ' + age);

    let personFullName = {
        firstname: 'Leonardo',
        lastname: 'Cristofari',
        age: 35
    };

    let { firstname, ...others } = personFullName;

    console.log('firstname: ' + firstname);
    console.log('others.age: ' + others.age);
    console.log('others.lastname: ' + others.lastname);
}

function showDestructuringPropertyRenaming() {
    Base.showTitle('showDestructuringPropertyRenaming');

    let person = {
        name: 'Leonardo',
        age: 18
    };

    let { name: myname, age: myage } = person;

    console.log('myName: ' + myname);
    console.log('myAge: ' + myage);
}

function showDestructuringDefaultVariables() {
    Base.showTitle('showDestructuringDefaultVariables');

    let person = {
        name: 'Leonardo',
        age: 18
    };

    let { name: myname, age: myage = 34 } = person;

    console.log('myName: ' + myname);
    console.log('myAge: ' + myage);

    let person2 = {
        name: 'Leonardo',
        age: undefined
    };

    let { name: myname2, age: myage2 = 34 } = person2;
    console.log('Using default:');
    console.log('myName2: ' + myname2);
    console.log('myAge2: ' + myage2);
}

function showDestructuringFunctionsDeclaration() {
    Base.showTitle('showDestructuringFunctionsDeclaration');

    function sum ({x: number1, y: number2}: {x: number, y: number}) {
        return number1 + number2;
    }

    console.log('sum({ x: 2, y: 5 })) = ' + sum({ x: 2, y: 5 }));
}

function showSpread() {
    Base.showTitle('showSpread');

    let first = [3, 4, 5, 6, 7];
    let second = [8, 9, 10, 11];
    let allNUmber = [1, 2, ...first, ...second, 12];

    console.log(allNUmber);

    let hand = { fingers: 5 };
    let arm = { elbow: 1, ...hand};
    let leg = { feet: 2 };
    let body = { ...arm, ...leg };
    console.log(body);
}


showVarScope();
showVarDeclaration();
showScopingRules();
showLet();
showConstDeclaration();
showDestructuring();
showObjectDestructuring();
showDestructuringPropertyRenaming();
showDestructuringDefaultVariables();
showDestructuringFunctionsDeclaration();
showSpread();
