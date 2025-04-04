//// [tests/cases/compiler/constraintsThatReferenceOtherContstraints1.ts] ////

//// [constraintsThatReferenceOtherContstraints1.ts]
interface Object { }

class Foo<T, U extends T> { }
class Bar<T extends Object, U extends T> {
    data: Foo<Object, Object>; // Error 1 Type 'Object' does not satisfy the constraint 'T' for type parameter 'U extends T'.
}

var x: Foo< { a: string }, { a: string; b: number }>; // Error 2 Type '{ a: string; b: number; }' does not satisfy the constraint 'T' for type 


//// [constraintsThatReferenceOtherContstraints1.js]
class Foo {
}
class Bar {
    data; // Error 1 Type 'Object' does not satisfy the constraint 'T' for type parameter 'U extends T'.
}
var x; // Error 2 Type '{ a: string; b: number; }' does not satisfy the constraint 'T' for type 
