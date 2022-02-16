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

module.exports ={
    sockMerchant,
    repeatedString,
    jumpingOnClouds
}