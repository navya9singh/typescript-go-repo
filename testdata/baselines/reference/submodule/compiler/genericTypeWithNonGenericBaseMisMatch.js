//// [tests/cases/compiler/genericTypeWithNonGenericBaseMisMatch.ts] ////

//// [genericTypeWithNonGenericBaseMisMatch.ts]
interface I {
	f: (a: { a: number }) => void
}
class X<T extends { a: string }> implements I {
	f(a: T): void { }
}
var x = new X<{ a: string }>();
var i: I = x; // Should not be allowed -- type of 'f' is incompatible with 'I'


//// [genericTypeWithNonGenericBaseMisMatch.js]
class X {
    f(a) { }
}
var x = new X();
var i = x; // Should not be allowed -- type of 'f' is incompatible with 'I'
