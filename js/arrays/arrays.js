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
        if (s[x] % 2 == 1){
            console.log('iteration: ', x);
            console.log('sum before: ', sum);
            console.log('sx: ', s[x]);
            console.log('resto: ', s[x]% 2);
            console.log('valor x: ', x);
            sum ^= x;
            console.log('sum after: ', sum);
        }   
    }
    
    console.log('sum', sum);
    if (sum > 0)
        result = "First";
    else 
        result = "Second";
    
    console.log(result);
    return result;
}

const minimumBribes = (q)=> {

}

const minimumSwaps = (arr) => {
    let min = Math.min.apply(null,arr),
    max = Math.min.apply(null,arr);

    for(let x= 0;x < arr; x++){

    }
    console.log('min', min);
    console.log('max',max);
    
}

const miniMaxSum = (arr) => {
    // Write your code here
    let max = Math.max(...arr),
    min = Math.min(...arr),
    indexmin = arr.indexOf(min),
    indexmax = arr.indexOf(max),
    arrmin = [...arr],
    arrmax = [...arr],
    summin =0, summax = 0;
    
    arrmax.splice(indexmin, 1);

    arrmin.splice(indexmax, 1);

    summin = arrmin.reduce((a,b)=> a+b,0);
    
    summax = arrmax.reduce((a,b)=> a+b,0);
    
    console.log(summin + ' ' + summax);
}


const birthdayCakeCandles = (candles) => {
    // Write your code here
    let max = Math.max(candles),
    count = 0;
    
    console.log(candles);
    console.log('raaa ',max);
    for(let x =0; x < candles.length; x++){
        if(candles[x] == max)
            count++;
    }
    
    console.log(count);
    return count;
}

const gradingStudents = (grades)=> {
    // Write your code here
    let rnumber= 5, nextround = 0;

    for (let x=0; x < grades.length; x++){
        if (grades[x] >= 38 ){
            nextround = Math.ceil(grades[x] /rnumber) * rnumber;
            grades[x] = nextround - grades[x] < 3 ? nextround : grades[x];
        }    
    }

    return grades;
}

const timeConversion = (s)=> {
    // Write your code here
    let flag = s.slice(-2),
    ts = s.replace('AM','').replace('PM','').split(':'),
    h = ts[0], m = ts[1], sx= ts[2],
    hs= "",tt="";

    if(flag == "AM"){
        if(parseInt(h) == 12)
            hs = "00";
        else
            hs = h;
    }else{
        if(parseInt(h) == 12)
            hs = h;
        else
            hs = (12 + parseInt(h)).toString();
        
    }
        
    
    tt = hs +":" + m + ":" + sx;

    console.log('conversion', tt)
    return tt;
}

const divisibleSumPairs = (n, k, ar)=> {
    // Write your code here
    let countsumpair = 0;

    if(n>= 2 && n <= 100 && k >= 1 && k<= 100){
        for(let x= 0; x < n ; x++){
            for(let y=x+1; y < n; y++){
                if((ar[x] + ar[y]) % k == 0)
                    countsumpair++;
            }
        }
    }

    return countsumpair;
}

const breakingRecords = (scores) => {
    // Write your code here
    let countmax= 0, countmin = 0, result =[],
    max = Number.MIN_VALUE,
    min = Number.MAX_VALUE;

    for(let x = 0; x < scores.length; x++){
        if(x== 0){
            if (scores[x] > max)
                max = scores[x];

            if (scores[x] < min)
                min = scores[x];
        }
        
        if(x>0){
            if(scores[x] > scores[x-1] && scores[x] > max){
                max = scores[x];
                countmax++;
            }
            
            if(scores[x] < scores[x-1] && scores[x] < min){
                min = scores[x];
                countmin++;
            }     
        }
    }
    result.push(countmax);
    result.push(countmin);
    
    console.log(result);
    return result;
}

const migratoryBirds = (arr) =>{
    // Write your code here
    let map = new Map(), array = [];

    for (let x = 0; x < arr.length; x++){
        let value = arr[x];

        if(map.has(value)){
            let c = map.get(value);
            c.count++;
            map.set(value,{id:value, count: c.count});
        }
        else{
            map.set(value,{id:value, count: 1});
        }
    }

    map.forEach(( item)=>{
        array.push(item);
    });

    const maxcount = array.reduce( (a,b)=>{
        return (a.count > b.count) ? a : b;
    }).count;

    const filter = array.filter(a => a.count == maxcount);

    const minarray = filter.reduce((a,b)=>{
        return a.id < b.id ? a : b;
    })

    return minarray.id;

}

function pickingNumbers(a) {
    // Write your code here
    let arraycount = [],i = 0, max = 0;
    for(let x= 0; x < a.length; x++){
        arraycount[i]  = 1;
        for(y = x+1; y < a.length; y++){
            if(Math.abs(a[y] - a[x]) >= 0 && Math.abs(a[y] - a[x]) <= 1 ){
                //console.log('x ', x);
                //console.log('y ', y);
                //console.log('current: ', a[x] );
                //console.log('after: ', a[y] );
                
                arraycount[i]++;
            }
                
        }
        i++;
    }

    //console.log(arraycount);
    
    if(arraycount.length > 0)
        max = Math.max(...arraycount);
    
    console.log(max)
    return max;
}



module.exports={
    arrayLeftRotation,
    findDigits,
    minimumDistances,
    nimbleGame,
    miniMaxSum,
    birthdayCakeCandles,
    gradingStudents,
    timeConversion,
    divisibleSumPairs,
    breakingRecords,
    migratoryBirds,
    pickingNumbers

}