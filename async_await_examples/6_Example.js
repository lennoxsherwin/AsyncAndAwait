function asyncThing (value) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(value), 7000);
    });
  }
  
  async function main () {
    return [1,2,3,4].map(async (value) => {
      const v = await asyncThing(value);
    console.log(v * 2) ;
    });
  }
  main();