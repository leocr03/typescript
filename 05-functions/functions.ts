import { Base } from "../base";

(function showFunctionOverload(){
    Base.showTitle('showFunctionOverload');
    function sum(array: number[]): number[];
    function sum(number: number, ...number2: number[]): number;
    function sum(text: string): string;
    function sum(values: any, ...values2: any[]): any {
        let total = 0;

        console.log(typeof values);

        if (typeof values === "string") {
            let array = values.split("-");

            for (let i in array) {
                total += +array[i];
            }
        } else if (typeof values === "number") {
            total = values;

            for (let i in values2) {
                total += +values2[i];
            }
        } else if (typeof values === "object") {
            for (let i in values) {
                total += +values[i];
            }
        }

        return total;
    }

    let text = '1-6-7-8';
    console.log(`sum from text ${text} is ${sum(text)}`);
    text = '13, 9';
    console.log(`sum from number ${text} is ${sum(13, 9)}`);
    text = '[13, 9]';
    console.log(`sum from array ${text} is ${sum([13, 9])}`);
    text = '13, 8, 1, 0';
    console.log(`sum from rest parameters ${text} is ${sum(13, 8, 1, 0)}`);
})();

