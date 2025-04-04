//// [tests/cases/conformance/types/stringLiteral/stringLiteralTypesOverloads05.ts] ////

//// [stringLiteralTypesOverloads05.ts]
interface Animal { animal: {} };
interface Dog extends Animal { dog: {} }
interface Cat extends Animal { cat: {} }
interface Moose extends Animal { moose: {} }

function doThing(x: "dog"): Dog;
function doThing(x: "cat"): Cat;
function doThing(x: string): Animal;
function doThing(x: string, y?: string): Moose {
    return undefined;
}

//// [stringLiteralTypesOverloads05.js]
;
function doThing(x, y) {
    return undefined;
}
