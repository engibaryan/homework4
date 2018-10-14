 //Use While loop to create a function called 'triangleStars' that prints an upside-down triangle to the console of the given height.  So if we call your function with triangleStars(4), we should see:
const astx =function(x) {
  while(x>0){
    return astx(x-1)+"*";
  }
  x = x-1;
 	 return "";
};
const aaa = function(y){
	if(y===0){
		return "";
	}
	return aaa(y-1)+" ";
};

const triangleStars = function(a) {
	const fff =function(b){
	  while (b>0){
	    console.log(aaa(a-b)+astx(2*b-1));
		fff(b-1);
        b=b-a;
      }
      return ;
};
  return fff(a);
};
const k = triangleStars(4);

 //Write a function that takes a two dimensional array and returns a single array with all the values in the child arrays.

function MergeArrays(d1 , d2) {
	let a = 0;
	let newArray = [];
	while(a < d1.length) {
         newArray[newArray.length] = d1[a];
		a++;
	}
	let b = 0;
	while(b < d2.length) {
		newArray[newArray.length] = d2[b];
		b++;
	}
	console.log(newArray);
	return newArray;
}
MergeArrays([17, 15, 22, 555],[ 788, 21, 40, 22]);


// Create a function 'findMinMax' that returns the largest number from the given array if the second argument is true.  It returns the smallest number in the given array if the second argument is false.
function aravelaguyn(array) {
let a = 0;
let	himikvaAravelaguyn = array[a];
while(a < array.length) {
if (himikvaAravelaguyn < array[a]) {
	himikvaAravelaguyn = array[a];
}
a++;
}

return himikvaAravelaguyn;
}
function nvazaguyn(array) {
	let a1 = 0; 
	let himikvaNvazaguyn = array[a1];
	while(a1 < array.length) {
		if(himikvaNvazaguyn > array[a1]) {
			himikvaNvazaguyn = array[a1];
		}
		a1++;
	}
	return himikvaNvazaguyn;
}

function findMinMax(array ,pulik) {
	if(pulik===true) {
		return aravelaguyn(array);
	}
	else if (pulik === false) {
		return nvazaguyn(array);
	}
}
console.log(findMinMax([-550 ,960, -6009 ,-850], true))

//Create a function 'forEach' that takes an array and a function and then calls the given function once with each value in the given ar
 function forEach (a, b) {
 a1 = 0;
 while(a1 < a.length) {
    b(a[a1]);
 	a1++;
 }
 }
 
 
 forEach([4, 3, 2], function(val) {

  console.log(val);

});
 



//Create a function 'sum' that takes an array of numbers and returns their sum.
function sum (a) {
	let n = 0;
	let sum1 = 0;
	while (n !== a.length) {
		sum1 += a[n]
		n++
	}
	console.log(sum1);
	return sum1;
} 
sum([20, 53, 15])

//Write a function 'reverse' that reverses the given string.
function reverse (b) {
	let a = b.length;
	let b1=0;
	let n5 = 1;
	let b2 = "";
	 while (n5 <= a) {
       b1 = b[a-n5];
        b2 +=b1;
	 	n5++;
	 }
	 console.log(b2);
	 return b2;
}
reverse("LokiN");

//Create a function called checkerboard using While loop which, given a size argument, will draw an n by n checkerboard on the screen.  Example: checkerboard(5)

function aaastx(ast1){
    let asttx = " ";
    while(ast1 > 0){
      asttx = asttx + "*";
      ast1--;
    }
    return asttx;
}

function probel(p1){
  let pr = "";
  while(p1 > 0){
    pr = pr + " ";
    p1--;
  }
  return pr;
}

 function checkerboard(ch){
  let t = 2;
  let f = 0; 
  while(f < ch){
    if(t%2===0){
      console.log(aaastx(ch));  
    }
    if(t%2===1){
    
    console.log(probel(1) + aaastx(ch));
    }
    t++;
    f++;
   }
 }
 checkerboard(5);
