/*const decreaseBtn = document.querySelector('#decrease');
const resetBtn = document.querySelector('#reset');
const increaseBtn = document.querySelector('#increase');

let count = 0

document.getElementById('num').innerHTML = count;



decreaseBtn.addEventListener('click', function(){
     count--;
     document.getElementById('num').innerHTML = count;
     if(count < 0)
 { document.getElementById('num').style.color = 'red';

 }
 else if(count === 0 ) { document.getElementById('num').style.color = 'black';
 } else { document.getElementById('num').style.color = 'green';

 }
});



increaseBtn.addEventListener('click', function(){
     count++;
     document.getElementById('num').innerHTML = count;
     if(count > 0)
 { document.getElementById('num').style.color = 'green';
 }
 else if(count === 0 ) { document.getElementById('num').style.color = 'black';

} else{ document.getElementById('num').style.color = 'red';}

});



resetBtn.addEventListener('click', function(){
     count = 0;
     document.getElementById('num').innerHTML = count;

     if(count === 0)
 { document.getElementById('num').style.color = 'black';

 }
});

let counN = 55;
console.log('ijeoma is ' + counN);
console.log(`ijeoma is ${counN}`);



// area of a triangle
    const baseValue =('10 ');
const heightValue = ('20');

const areaValue = (baseValue * heightValue) / 2;

console.log(
  `The area of the triangle is ${areaValue}`
);*/

/*currency value conventer
var nairaValue = ('493');
var dollarsValue = ('1');

const nairaDollar = (nairaValue * dollarsValue);
console.log(nairaDollar);

//Naira to Pounds
var nairaValue = ('710');
var poundsValue = ('1');
const nairaPoundsValue = (nairaValue * poundsValue);
console.log(nairaPoundsValue);

//naira to euro

var nairaValue = ('610');
var euroValue = ('1');
const nairaEuroValue = (nairaValue * euroValue);
console.log(nairaEuroValue);


//square root
//const number = prompt('please Enter your number:');

//let squareRoot = Math.sqrt(number);

//document.getElementById('sqrt').innerHTML = `the square Root of ${number} is ${squareRoot}`;
//console.log(squareRoot);

//calculating the area of a triangle
const base = prompt('Enter the Base Triangle:');
const height = prompt('Enter the height Triangle:');

let Area = 1/2 * base * height;
console.log('the Area is ',Area);*/
//dollar input

const naira = document.getElementById('naira');

naira.addEventListener("input", nairaConverter);

function nairaConverter(e) {
    let nairaC = e.target.value;
    document.getElementById('dollar').value = nairaC / 493;
    document.getElementById('pounds').value = nairaC / 710;
    document.getElementById('Euro').value = nairaC / 595;

}

