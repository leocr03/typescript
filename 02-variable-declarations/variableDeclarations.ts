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

function showVarScopeWithProblem(){
    Base.showTitle('showVarScopeWithProblem');

    for (var i = 0; i < 10; i++) {
        setTimeout(function() { console.log(i); }, 100 * i);
    }
}

function showVarScopeWithoutProblem(){
    Base.showTitle('showVarScopeWithProblem');

    for (var i = 0; i < 10; i++) {
        // capture the current state of 'i'
        // by invoking a function with its current value
        (function(i) {
            setTimeout(function() { console.log(i); }, 100 * i);
        })(i);
    }
}

showVarScope();
showVarScopeWithProblem();
showVarScopeWithoutProblem();