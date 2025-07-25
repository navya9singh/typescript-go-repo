package fourslash_test

import (
	"testing"

	"github.com/microsoft/typescript-go/internal/fourslash"
	"github.com/microsoft/typescript-go/internal/testutil"
)

func TestJsxFindAllReferencesOnRuntimeImportWithPaths1(t *testing.T) {
	t.Parallel()
	t.Skip()
	defer testutil.RecoverAndFail(t, "Panic on fourslash test")
	const content = `// @Filename: project/src/foo.ts
import * as x from /**/"@foo/dir/jsx-runtime";
// @Filename: project/src/bar.tsx
export default <div></div>;
// @Filename: project/src/baz.tsx
export default <></>;
// @Filename: project/src/bam.tsx
export default <script src=""/>;
// @Filename: project/src/bat.tsx
export const a = 1;
// @Filename: project/src/bal.tsx

// @Filename: project/src/dir/jsx-runtime.ts
export {}
// @Filename: project/tsconfig.json
{
    "compilerOptions": {
        "moduleResolution": "node",
        "module": "es2020",
        "jsx": "react-jsx",
        "jsxImportSource": "@foo/dir",
        "moduleDetection": "force",
        "paths": {
            "@foo/dir/jsx-runtime": ["./src/dir/jsx-runtime"]
        }
    }
}`
	f := fourslash.NewFourslash(t, nil /*capabilities*/, content)
	f.VerifyBaselineFindAllReferences(t, "")
}
