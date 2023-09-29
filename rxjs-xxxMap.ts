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
const source2$ = from([1000, 8000, 5000]);
source2$
.pipe(
  map((val ) => { 
      console.log('map val', val)
      return timer(val).pipe(map(() => val))
  }),
  switchMap(val => [val]),
  switchMap(data => {
    // console.log('switchMap data', data)
    return data
  })
  )
.subscribe(console.log
  // (data) => {
  // data.subscribe((data) => {
  //     console.log(data)
  // })
  // }
);
