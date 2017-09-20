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
}

function showScopingRules() {
    Base.showTitle('showScopingRules');
}

function showVariableQuirks() {
    Base.showTitle('showVariableQuirks');
}

function showLet() {
    Base.showTitle('showLet');
}

function showBlockScoping() {
    Base.showTitle('showBlockScoping');
}

function showRedeclarationAndShadowing() {
    Base.showTitle('showRedeclarationAndShadowing');
}

function showBlockScopedVariableCapturing() {
    Base.showTitle('showBlockScopedVariableCapturing');
}

function showConstDeclaration() {
    Base.showTitle('showConstDeclaration');
}

function showLetVsConst() {
    Base.showTitle('showLetVsConst');
}

function showDestructuring() {
    Base.showTitle('showDestructuring');
}

function showObjectDestructuring() {
    Base.showTitle('showObjectDestructuring');
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
showVariableQuirks();
showLet();
showBlockScoping();
showRedeclarationAndShadowing();
showBlockScopedVariableCapturing();
showConstDeclaration();
showLetVsConst();
showDestructuring();
showObjectDestructuring();
showPropertyRenaming();
showDefaultVariables();
showFunctionsDeclaration();
showSpread();
