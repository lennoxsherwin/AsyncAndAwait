

async function function1() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("it will print the output after 5 sec"), 
      5000)
    });
  
    let result = await promise; // wait until the promise resolves
    console.log(result); 
    console.log("test");
  
  }
  
  function1();




  