//// [tests/cases/conformance/types/typeRelationships/comparable/optionalProperties01.ts] ////

//// [optionalProperties01.ts]
interface Foo {
  required1: string;
  required2: string;
  optional?: string;
}

const foo1 = { required1: "hello" } as Foo;
const foo2 = { required1: "hello", optional: "bar" } as Foo;


//// [optionalProperties01.js]
const foo1 = { required1: "hello" };
const foo2 = { required1: "hello", optional: "bar" };


//// [optionalProperties01.d.ts]
interface Foo {
    required1: string;
    required2: string;
    optional?: string;
}
declare const foo1: Foo;
declare const foo2: Foo;
