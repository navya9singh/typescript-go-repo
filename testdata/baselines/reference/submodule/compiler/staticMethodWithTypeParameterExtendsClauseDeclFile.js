//// [tests/cases/compiler/staticMethodWithTypeParameterExtendsClauseDeclFile.ts] ////

//// [staticMethodWithTypeParameterExtendsClauseDeclFile.ts]
class privateClass {
}

export class publicClass {
}

export class publicClassWithWithPrivateTypeParameters {
    private static myPrivateStaticMethod1<T extends privateClass>() { // do not emit extends clause
    }
    private myPrivateMethod1<T extends privateClass>() { // do not emit extends clause
    }
    private static myPrivateStaticMethod2<T extends publicClass>() { // do not emit extends clause
    }
    private myPrivateMethod2<T extends publicClass>() { // do not emit extends clause
    }
    public static myPublicStaticMethod<T extends publicClass>() {
    }
    public myPublicMethod<T extends publicClass>() {
    }
}


//// [staticMethodWithTypeParameterExtendsClauseDeclFile.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicClassWithWithPrivateTypeParameters = exports.publicClass = void 0;
class privateClass {
}
class publicClass {
}
exports.publicClass = publicClass;
class publicClassWithWithPrivateTypeParameters {
    static myPrivateStaticMethod1() {
    }
    myPrivateMethod1() {
    }
    static myPrivateStaticMethod2() {
    }
    myPrivateMethod2() {
    }
    static myPublicStaticMethod() {
    }
    myPublicMethod() {
    }
}
exports.publicClassWithWithPrivateTypeParameters = publicClassWithWithPrivateTypeParameters;


//// [staticMethodWithTypeParameterExtendsClauseDeclFile.d.ts]
export declare class publicClass {
}
export declare class publicClassWithWithPrivateTypeParameters {
    private static myPrivateStaticMethod1;
    private myPrivateMethod1;
    private static myPrivateStaticMethod2;
    private myPrivateMethod2;
    static myPublicStaticMethod<T extends publicClass>(): void;
    myPublicMethod<T extends publicClass>(): void;
}
