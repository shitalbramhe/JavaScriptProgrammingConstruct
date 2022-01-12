function poweroftwo(num){
    for (let index=0; index<=limit; index++) {
        let power = (Math.pow(num, index));
    if(power < 256 ){
        console.log(power)
    }
}
   }
   const num = 2;
   let limit = 12;
   poweroftwo(num);