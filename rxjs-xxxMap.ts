const source$ = of(2000, 1000);
source$
  .pipe(
    // just so we can log this after the first example has run
    delay(5000),
    mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
  )
  .subscribe(val => console.log(`With mergeMap: ${val}`));

source$
.pipe(
  concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
  )
.subscribe(val =>
  console.log(`With concatMap: ${val}`)
);

source$
.pipe(
  exhaustMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
  )
.subscribe(val =>
  console.log(`With exhaustMap: ${val}`)
);

source$
.pipe(
  switchMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
  )
.subscribe(val =>
  console.log(`With switchMap: ${val}`)
);
