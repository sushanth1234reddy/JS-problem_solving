function fizzbuzz(i,n){
    for(i;i<=n;i++){
        if(i%2==0 && i%3==0){
            console.log(i+"FizzBuzz");
        }
        else if(i%2==0){
            console.log(i+"Fizz");
        }
        else if(i%3==0){
            console.log(i+"Buzz");
        }
        else{
            console.log(i+"Sushanth");
        }
    }
}
fizzbuzz(20,40);