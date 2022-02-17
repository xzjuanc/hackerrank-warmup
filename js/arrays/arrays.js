const arrayLeftRotation = (a,d) =>{
    let array = d.split(' ').map(Number), lentotal = a.split(' ').map(Number);
    lenarray = lentotal[0],totalrotation = lentotal[1]; 

    console.log('array init: ', d.split(' '));

    if(lenarray >= 1 && lenarray <= Math.pow(10,5) && totalrotation >= 1 && totalrotation <= lenarray ){
        for(x= 0; x < totalrotation; x++){
            array.push(array.shift());
        }
    }
        
    console.log('total rotations: ', totalrotation);
        
    console.log('result: ', array);
    
    return array;
}

module.exports={
    arrayLeftRotation
}