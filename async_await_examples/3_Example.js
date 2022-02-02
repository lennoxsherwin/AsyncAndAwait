const p1 = () => {
    return new Promise(resolve => {
      setTimeout(() => resolve('I wrote one book'), 5000)
    })
  }
  
  const p2 = async () => {
    const output= await p1()   //  p2 will executes after p1
    return output + '\nand I read'
  }
  
  const p3= async () => {
    const output = await p2()  // p3 will executes after p2
    return output + '\nand I read as well'
  }
  
  p3().then(res => {
    console.log(res)
  })