function showTitle(title: string) {
    console.log('\n\n=> ' + title + '\n');
}

function showBoolean() {
    let a: boolean;
    showTitle('Boolean');
    console.log('Boolean with default value: ' + a);
    a = false;
    console.log('Boolean with false value: ' + a);
    a = true;
    console.log('Boolean with true value: ' + a);
    let b: boolean = true && a;
}

function showNumber() {
    showTitle('Number');
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
    showTitle('String');
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
    showTitle('Array');
    let list: number[] = [1, 2, 3];
    let greetings: Array<String> = ['Hello', 'Hi'];

    console.log('List: ' + list);
    console.log('Greetings: ' + greetings);
}

function showTuple() {
    showTitle('Tuple');
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
    showTitle('Enum');
    enum Color {Red = 2, Green, Blue = 6}
    let c: string = Color[3];
    console.log(c);
    console.log(Color[1]);
    console.log(Color[6]);
    console.log(Color[2]);
}

function showAny() {
    showTitle('Any');
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

showBoolean();
showNumber();
showString();
showArray();
showTuple();
showEnum();
showAny();
