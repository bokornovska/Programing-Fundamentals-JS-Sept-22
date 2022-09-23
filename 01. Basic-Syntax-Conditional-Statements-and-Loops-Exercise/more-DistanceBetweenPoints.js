function distance(X1, Y1, X2, Y2){

    let x = X2-X1;
    let y = Y2-Y1;

    let result = Math.sqrt(x * x + y * y);

    console.log(result)
}
distance(2,4,5,0)