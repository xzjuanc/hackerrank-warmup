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

const findDigits = (n)=>{
    const array = Array.from(String(n), Number);
    let divisorcount = 0;
    console.log('array',array);
    console.log('numero',n);
    console.log('len',array.length)

    for(let x = 0; x < array.length; x++){
        if(array[x] != 0)
            if( n % array[x] == 0)
                divisorcount++;
    }
    console.log(divisorcount);
    return divisorcount;
}

const minimumDistances = (a)=>{
    let map = new Map(), found = false,
    minDistance = Number.MAX_VALUE;
    for (let i= 0; i < array.length; i++)
    {
        let value = array[i];
        if (map.has(value))
        {
            let prevIndex = map.get(value),
            distance = Math.abs(i - prevIndex);
            found = true;
            if (distance < minDistance)
                minDistance = distance;

        }
        else 
            map.set(value,i);

    }

    if (found)
    {
        return minDistance;
    }
    return -1;

}

const nimbleGame = (s) =>{
    let sum = 0, result = "";
    for (let x=0; x < s.length; x++)
    {
        if (s[x] % 2 == 1)
            sum ^= x;

    }
    
    if (sum > 0)
        result = "First";
    else 
        result = "Second";
    
    return result;
}

module.exports={
    arrayLeftRotation,
    findDigits,
    minimumDistances,
    nimbleGame

}