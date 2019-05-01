// Ivan Zhang
// SoftDev2 pd7
// K #22: Closure
// 2019-05-01
function repeat(word = ''){
  var printAble = word;
  function r(num){
    if (num == 2){
      if(printAble == ''){
        printAble = 'hello'
      }
      else{
        printAble = 'goodbye';
      }
      console.log(printAble + printAble);
    }
    if (num == 3){
      printAble = 'cool';
      console.log(printAble + printAble + printAble);
    }
  }
  return r;
}

var r1 = repeat();
r1(2);
r1(2);
repeat('cool')(3);
