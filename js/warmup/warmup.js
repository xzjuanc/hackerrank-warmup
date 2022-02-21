const sockMerchant = (n,ar)=>{
    let quantitycolor={},sockpair={},totalpair = 0;

    if(n>=1 && n<=100 && n == ar.length){
        ar.forEach(item => {
            quantitycolor[item] = (quantitycolor[item]||0) + 1;
        });

        for(const raa in quantitycolor){

            const x =  Math.floor(quantitycolor[raa] / 2);
            sockpair[raa] = x;

            if(x > 0)
                totalpair= totalpair + x;
        }
    }else{
        totalpair = 0;
    }

    console.log('quantity per color: ',quantitycolor);
    console.log('sock pair per color: ',sockpair);
    console.log('sock pair total: ',totalpair)
    return totalpair;
}

const repeatedString = (s,n)=>{
    let totalocurrence = 0;

    if(s.length>=1 && s.length<=100 && n >= 1 && n <= Math.pow(10,12)){
        if(s.length > n){
            for (let x = 0; x < n-1; x++){
                if(s.charAt(x))
                    totalocurrence++;
            }
        }else{
           //length string
           let ls = s.length,
           //repetitions
           repeated =  Math.floor(n / ls),
           //remainder
           rls = n - repeated*ls;
           //counting a
           totalocurrence = (s.match(/a/g) || []).length * repeated + (s.substring(0,rls).match(/a/g) || []).length;
        }
    }else
        totalocurrence = 0;

    console.log('string: ',s);
    console.log('number: ',n);
    console.log('ocurrence total: ',totalocurrence)
    return totalocurrence;
}

const jumpingOnClouds = (c) => {
    let numberjumps = 0, n = c.length;

    for(let x = 0; x < n -1 ; x++){
        
        if (x+2 < n && c[x+2] == 0)
            x++;
        numberjumps++;
    }

    console.log('min number jumps: ',numberjumps);
    return numberjumps;

}

const countingValleys = (steps,path) =>{
    let arpath = path.split(''),countValleys = 0,countpath = 0,valleystatus = false;

    if(steps>= 2 && steps <= Math.pow(10,6) && steps == path.length){
        for (let x = 0; x < arpath.length; x++){

            if(arpath[x] == 'U')
                countpath++;
                
            if(arpath[x] == 'D')
                countpath--;

            if(countpath < 0 && !valleystatus)
                valleystatus = true;

            if(countpath == 0 && valleystatus){
                countValleys++;
                valleystatus = false;
            }

            //padStart
        }
    }

    console.log('steps: ', steps);
    console.log('path: ', path);
    console.log('countValleys: ', countValleys)
    return countValleys;
}

const diskSpaceAnalysis = (x,space)=>{  
    console.log('array: ',space);
    console.log('segments: ',x);
    console.log('length array: ',space.length);

    let arraymin=[],arrayposicion=[];
    
    if(x <= space.length){
        
        for (let i=0; i< space.length; i++){
            if(i+x <= space.length){
                arrayposicion.push(i);
            }
        }

        console.log('array position', arrayposicion);

        for (let j=0; j < arrayposicion.length;j++){
            console.log('array segment: ' +j,space.slice(arrayposicion[j],arrayposicion[j] + x));
            arraymin.push(Math.min.apply(null,space.slice(arrayposicion[j],arrayposicion[j] + x)));
        }

        console.log('array minimum: ',arraymin);
        console.log('value maximum array: ', Math.max.apply(null,arraymin));
    }
    
    return Math.max.apply(null,arraymin);
}

module.exports ={
    sockMerchant,
    repeatedString,
    jumpingOnClouds,
    countingValleys,
    diskSpaceAnalysis,
    
}