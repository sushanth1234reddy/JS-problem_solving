function bill(x,y,gst=5){
    let total=x+y;
    let tax=total*(gst/100);
    let final=total+tax;
    console.log(final);
}
bill(20,25);