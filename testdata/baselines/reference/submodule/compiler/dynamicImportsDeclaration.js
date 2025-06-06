//// [tests/cases/compiler/dynamicImportsDeclaration.ts] ////

//// [case0.ts]
export default 0;

//// [case1.ts]
export default 1;

//// [caseFallback.ts]
export default 'fallback';

//// [index.ts]
export const mod = await (async () => {
  const x: number = 0;
  switch (x) {
    case 0:
      return await import("./case0.js");
    case 1:
      return await import("./case1.js");
    default:
      return await import("./caseFallback.js");
  }
})();

//// [case0.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = 0;
//// [case1.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = 1;
//// [caseFallback.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = 'fallback';
//// [index.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mod = void 0;
exports.mod = await (async () => {
    const x = 0;
    switch (x) {
        case 0:
            return await import("./case0.js");
        case 1:
            return await import("./case1.js");
        default:
            return await import("./caseFallback.js");
    }
})();


//// [case0.d.ts]
declare const _default: number;
export default _default;
//// [case1.d.ts]
declare const _default: number;
export default _default;
//// [caseFallback.d.ts]
declare const _default: string;
export default _default;
//// [index.d.ts]
export declare const mod: typeof import("./case0.js") | typeof import("./case1.js") | typeof import("./caseFallback.js");
