// --- Entry file index.js ---
import { C } from "./common";

new C();

// --- Common module export file common.js ---
// Note that export * from "./C"; must be written at the top, because the C module is a module dependent on A and C and needs to be cached first
export * from "./C";
export * from "./A";
export * from "./B";

// --- Base class module C.js ---
import { A } from "./common";
import { B } from "./common";

export class C {}

// --- submodule A.js ---
// The import here will report an error Super expression must either be null or a function
import { C } from "./common";
export class A extends C {
  constructor() {
    super("");
  }
}

// --- submodule B.js ---
import { C } from "./common";
export class B extends C {
  constructor() {
    super("");
  }
}
