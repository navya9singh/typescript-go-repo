//// [tests/cases/compiler/functionWithDefaultParameterWithNoStatements13.ts] ////

//// [functionWithDefaultParameterWithNoStatements13.ts]
var v: any[];

function foo(a = [1 + 1]) { }

function bar(a = [1 + 1]) {
}

//// [functionWithDefaultParameterWithNoStatements13.js]
var v;
function foo(a = [1 + 1]) { }
function bar(a = [1 + 1]) {
}
