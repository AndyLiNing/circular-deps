/ --- Entry file index.js ---
import { C } from "./C";

new C();

// --- Base class module C.js ---
import { A } from "./A";
import { B } from "./B";

export class C {}

// --- submodule A.js ---
// The import here will report an error: Super expression must either be null or a function
import { C } from "./C";
export class A extends C {
  constructor() {
    super("");
  }
}

// --- submodule B.js ---
import { C } from "./C";
export class B extends C {
  constructor() {
    super("");
  }
}
