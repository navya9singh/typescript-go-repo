//// [tests/cases/compiler/commentOnArrayElement5.ts] ////

//// [commentOnArrayElement5.ts]
const array = [
    /* element 1 */
    1,
    /* end of element 1 */
    /* extra comment */
];


//// [commentOnArrayElement5.js]
const array = [
    /* element 1 */
    1,
    /* end of element 1 */
    /* extra comment */
];
