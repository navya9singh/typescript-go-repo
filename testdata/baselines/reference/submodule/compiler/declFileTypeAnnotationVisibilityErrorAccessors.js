//// [tests/cases/compiler/declFileTypeAnnotationVisibilityErrorAccessors.ts] ////

//// [declFileTypeAnnotationVisibilityErrorAccessors.ts]
module m {
    class private1 {
    }

    export class public1 {
    }

    module m2 {
        export class public2 {
        }
    }

    export class c {
        // getter with annotation
        get foo1(): private1 {
            return;
        }

        // getter without annotation
        get foo2() {
            return new private1();
        }

        // setter with annotation
        set foo3(param: private1) {
        }

        // Both - getter without annotation, setter with annotation
        get foo4() {
            return new private1();
        }
        set foo4(param: private1) {
        }

        // Both - with annotation
        get foo5(): private1 {
            return;
        }
        set foo5(param: private1) {
        }

        // getter with annotation
        get foo11(): public1 {
            return;
        }

        // getter without annotation
        get foo12() {
            return new public1();
        }

        // setter with annotation
        set foo13(param: public1) {
        }

        // Both - getter without annotation, setter with annotation
        get foo14() {
            return new public1();
        }
        set foo14(param: public1) {
        }

        // Both - with annotation
        get foo15(): public1 {
            return;
        }
        set foo15(param: public1) {
        }

        // getter with annotation
        get foo111(): m2.public2 {
            return;
        }

        // getter without annotation
        get foo112() {
            return new m2.public2();
        }

        // setter with annotation
        set foo113(param: m2.public2) {
        }

        // Both - getter without annotation, setter with annotation
        get foo114() {
            return new m2.public2();
        }
        set foo114(param: m2.public2) {
        }

        // Both - with annotation
        get foo115(): m2.public2 {
            return;
        }
        set foo115(param: m2.public2) {
        }
    }
}


//// [declFileTypeAnnotationVisibilityErrorAccessors.js]
var m;
(function (m) {
    class private1 {
    }
    class public1 {
    }
    m.public1 = public1;
    let m2;
    (function (m2) {
        class public2 {
        }
        m2.public2 = public2;
    })(m2 || (m2 = {}));
    class c {
        // getter with annotation
        get foo1() {
            return;
        }
        // getter without annotation
        get foo2() {
            return new private1();
        }
        // setter with annotation
        set foo3(param) {
        }
        // Both - getter without annotation, setter with annotation
        get foo4() {
            return new private1();
        }
        set foo4(param) {
        }
        // Both - with annotation
        get foo5() {
            return;
        }
        set foo5(param) {
        }
        // getter with annotation
        get foo11() {
            return;
        }
        // getter without annotation
        get foo12() {
            return new public1();
        }
        // setter with annotation
        set foo13(param) {
        }
        // Both - getter without annotation, setter with annotation
        get foo14() {
            return new public1();
        }
        set foo14(param) {
        }
        // Both - with annotation
        get foo15() {
            return;
        }
        set foo15(param) {
        }
        // getter with annotation
        get foo111() {
            return;
        }
        // getter without annotation
        get foo112() {
            return new m2.public2();
        }
        // setter with annotation
        set foo113(param) {
        }
        // Both - getter without annotation, setter with annotation
        get foo114() {
            return new m2.public2();
        }
        set foo114(param) {
        }
        // Both - with annotation
        get foo115() {
            return;
        }
        set foo115(param) {
        }
    }
    m.c = c;
})(m || (m = {}));


//// [declFileTypeAnnotationVisibilityErrorAccessors.d.ts]
declare namespace m {
    class private1 {
    }
    export class public1 {
    }
    namespace m2 {
        class public2 {
        }
    }
    export class c {
        // getter with annotation
        get foo1(): private1;
        // getter without annotation
        get foo2(): private1;
        // setter with annotation
        set foo3(param: private1);
        // Both - getter without annotation, setter with annotation
        get foo4(): private1;
        set foo4(param: private1);
        // Both - with annotation
        get foo5(): private1;
        set foo5(param: private1);
        // getter with annotation
        get foo11(): public1;
        // getter without annotation
        get foo12(): public1;
        // setter with annotation
        set foo13(param: public1);
        // Both - getter without annotation, setter with annotation
        get foo14(): public1;
        set foo14(param: public1);
        // Both - with annotation
        get foo15(): public1;
        set foo15(param: public1);
        // getter with annotation
        get foo111(): m2.public2;
        // getter without annotation
        get foo112(): m2.public2;
        // setter with annotation
        set foo113(param: m2.public2);
        // Both - getter without annotation, setter with annotation
        get foo114(): m2.public2;
        set foo114(param: m2.public2);
        // Both - with annotation
        get foo115(): m2.public2;
        set foo115(param: m2.public2);
    }
    export {};
}
