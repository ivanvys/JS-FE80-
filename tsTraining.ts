const arrayOfNumbers:number[]=[1,1,2,2,2,3,3,3,4,4,5,5,5];

const numbrs = (value:number[])=>{value.reduce((acc:object, element:number) => {
    if (acc[element]) {
      acc[element] += 1;
    } else {
      acc[element] = 1;
    }
    return acc;
  }, {})}


  console.log(numbrs(arrayOfNumbers));
  