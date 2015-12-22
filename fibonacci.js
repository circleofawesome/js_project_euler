var fib=[1,2];
for(var i=2;i=i;i++){
	fib.push(fib[i-2]+fib[i-1]);
	if(fib[i]>4000000){
		fib.splice(i,1);
		break;
	}
}
//up to here we have our Fibonacci series up to less than 4 million

var sum=0;
for(var i=0;i<32;i++){
	if(fib[i]%2===0){
		sum=sum+fib[i];
	}
}
console.log(sum);

