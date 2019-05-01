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

function make_counter(){
  var num = 1;
  function rand(i = 0){
      console.log(num);
      num ++;
      function access(){
        return num;
      }
      return access;
  }

  return rand;
}

var ctr1 = make_counter();
var ctr2 = make_counter();

ctr1();
ctr1();
ctr2();
ctr1();
ctr2();

console.log(ctr1()());
