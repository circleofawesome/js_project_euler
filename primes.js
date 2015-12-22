var num=600851475143;
var factorList=[];
var prime=false;
var largestPrime=0;
for(var i=0;i<1000;i++){
	if(num%i===0){
		factorList.push(i);
	}
}
for(var i=(factorList.length-1);i>0;i--){
	for(var j=2;j<factorList[i]-1;j++){
		if(factorList[i]%j===0){
			prime=false;
			break;
		}
		else if(factorList[i]%j!==0){
			prime=true;
		}
	}
	if(prime===true){
		largestPrime=factorList[i];
		break;
	}
}
console.log(largestPrime);

