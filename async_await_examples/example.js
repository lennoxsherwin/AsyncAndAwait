function delay(ms) {
    return new Promise(function(resolve) {
      setTimeout(resolve, ms);
    });
}

async function asynAwait() {
    console.log("Knock, knock!");

    delay(2000);
    console.log("Who's there?");

    delay(2000);
    console.log("async/await");
}
asynAwait();