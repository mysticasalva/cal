//function countv(string) {

	//var vowel_list='aiueoAIUEO';
	//var Vcount=0;
	//for(i=0;i< str.lenght;i++){
		//if (vowel_list.indexOf(str[i])!==-1){
		//	Vcount+=1;
		//}
	//}
	//return Vcount;

//}
//console.log(vowel("you"));

//write a javascript function that accepts an array 
//as a parameter and return an array an of all even numbers
//between 1 to 100

//let newArray=new array(100)
//let n=0
//while(n<=newArray.lenght){
	//newArray[n]=n+1
	//n++
//}
//console.log(newArray)

//write a javascript function that accepts a two numbers
//as a parameter and return an array of all odd numbers
//between them
function twoNumbers(a,b){
	let newArray=[]
	for (var i=a;i<=b;i++){
		if(i%2!=0){
		 newArray.push(i)
		}
	}
    return newArray
}
console.log(twoNumbers(1,10))

//write a javascript program to check three numbers.if the 
//three numbers are the same return 30,otherwise return 40
//and if two numbers are same return 20.

let x=2
let y=4
let z=3
if (x==y==z) {
	console.log(30)
}
else if (x==y!=z) {
	console.log(20)
}
else{
	console.log(40)
}






//write a javascript program to convert a given number to
//hours and minutes.