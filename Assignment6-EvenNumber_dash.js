let num = 252651681468
insertDash(num)


function insertDash(num){
    let str = num.toString()
    let arr = [0, '-', str[0]]
    for(let i = 1; i<str.length;i++){
        if(str[i-1]%2===0 && str[i]%2===0){
          arr.push('-',str[i]);
        }else{
          arr.push(str[i]);
        }
      }
      console.log(arr.join(''));
}