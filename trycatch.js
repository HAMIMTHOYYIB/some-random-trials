function divide(a,b) {
    let out = 0
try{
        if ( b===0) {
            throw new Error("The divider not be 0");
        }else{
            out = a/b
        }
        console.log(out);
    }catch(err){
        console.log("An error occured." , err);
    }
}
divide(100,3);
