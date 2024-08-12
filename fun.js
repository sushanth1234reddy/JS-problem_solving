function hell(i){
    if(i<=10){
    console.log(i);
    i=i+1;
    hell(i);
    }
    
}
hell(1);