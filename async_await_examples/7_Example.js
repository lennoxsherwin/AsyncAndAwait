
 function function1() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("it will print the output after 5 sec"), 
      5000)
    });
  
    let result =  promise;

   console.log(result); 
   console.log("test");
  }
  
  function1();
