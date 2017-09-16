import { Base } from "../base";

function showBoolean() {
    let a: boolean;
    Base.showTitle('Boolean');
    console.log('Boolean with default value: ' + a);
    a = false;
    console.log('Boolean with false value: ' + a);
    a = true;
    console.log('Boolean with true value: ' + a);
    let b: boolean = true && a;
}

function showNumber() {
    Base.showTitle('Number');
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;

    console.log('Decimal number: ' + decimal);
    console.log('Hex number: ' + hex);
    console.log('Binary number: ' + binary);
    console.log('Octal number: ' + octal);
}

function showString() {
    Base.showTitle('String');
    let fullName: string = `Bob Bobbington`;
    let age: number = 37;
    let sentence: string = `
    Hello, my name is ${ fullName }.
    I'll be ${ age + 1 } years old next month.`;

    console.log('FullName: ' + fullName);
    console.log('Age: ' + age);
    console.log('Sentence: ' + sentence);
}


function showArray() {
    Base.showTitle('Array');
    let list: number[] = [1, 2, 3];
    let greetings: Array<String> = ['Hello', 'Hi'];

    console.log('List: ' + list);
    console.log('Greetings: ' + greetings);
}

function showTuple() {
    Base.showTitle('Tuple');
    let x: [string, number];
    x = ['hello', 10];
    let y: [string, [string, number]];
    y = ['main element', ['child element', 3]];

    console.log('Simple Tuple: ' + x);
    console.log('Simple Tuple: ' + x[0]);
    console.log('Simple Tuple: ' + x[1]);

    console.log('Nested Tuple: ' + y);
    console.log('Nested Tuple: ' + y[0]);
    console.log('Nested Tuple: ' + y[1]);
    console.log('Nested Tuple: ' + y[0][0]);
    console.log('Nested Tuple: ' + y[1][0]);
    console.log('Nested Tuple: ' + y[1][1]);
}

function showEnum() {
    Base.showTitle('Enum');
    enum Color {Red = 2, Green, Blue = 6}
    let c: string = Color[3];
    console.log(c);
    console.log(Color[1]);
    console.log(Color[6]);
    console.log(Color[2]);
}

function showAny() {
    Base.showTitle('Any');
    let anything: any;
    anything = [31, false, [ 4 ], 'hello!', function() {console.log('hey!');}];    

    console.log(anything);
    console.log(anything[0]);
    console.log(anything[1]);
    console.log(anything[2]);
    console.log(anything[3]);

    anything[2].unshift(3);
    console.log(anything[2]);

    anything[2] = true;
    console.log(anything[2]);
    anything[4]();
}

function showVoid() {
    Base.showTitle('Void');
    let x: void = null;
    console.log(x);
    x = undefined;
    console.log(x);
}

function showNullUndefined() {
    Base.showTitle('Null / Undefined');
    let x: null = null;
    console.log('Null:' + x);
    x = undefined;
    console.log('Null:' + x);
    let y: undefined = null;
    console.log('Undefined:' + y);
    y = undefined;
    console.log('Undefined:' + y);
}

function showTypeAssertions() {
    Base.showTitle('Type Assertions');
    let x: any = '13';
    let value1: number = <number> x;
    console.log('With <>, is it true? [' + value1 + ']');
    let value2: number = x as number;
    console.log('With \'as\', is it true? [' + value2 + ']');
}

showBoolean();
showNumber();
showString();
showArray();
showTuple();
showEnum();
showAny();
showVoid();
showNullUndefined();
showTypeAssertions();

