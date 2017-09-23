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

function showPropertyRenaming() {
    Base.showTitle('showPropertyRenaming');
}

function showDefaultVariables() {
    Base.showTitle('showDefaultVariables');
}

function showFunctionsDeclaration() {
    Base.showTitle('showFunctionsDeclaration');
}

function showSpread() {
    Base.showTitle('showSpread');
}


showVarScope();
showVarDeclaration();
showScopingRules();
showLet();
showConstDeclaration();
showDestructuring();
showObjectDestructuring();
showPropertyRenaming();
showDefaultVariables();
showFunctionsDeclaration();
showSpread();
