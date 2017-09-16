import { Base } from "../base";

function showVarScope() {
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

showVarScope();