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

    console.log('quantity per color',quantitycolor);
    console.log('sock pair per color',sockpair);
    console.log('sock pair total',totalpair)
    return totalpair;
}

const repeatedString = (s,n)=>{
    let saux=s,naux=n,totalocurrence = 0;

    
    if(s.length>=1 && s.length<=100 && n >= 1 && n <= Math.pow(10,12)){

        if(saux.length >= n){
            saux = saux.substring(0,n);
        }else{
            while(saux.length < n){
                if(saux.length + s.length >= n){
                    let res = n - saux.length,
                    subs = s.substring(0,res);
                    
                    saux = saux.concat(subs);
                }else
                    saux = saux.concat(s);
    
            }
        }
        
        totalocurrence = (saux.match(/a/g) || []).length;
    }else{
        totalocurrence = 0;
    }

    console.log('string',s);
    console.log('number',n);
    //console.log('repeated string',saux);
    console.log('ocurrence total',totalocurrence)
    return totalocurrence;
}

module.exports ={
    sockMerchant,
    repeatedString
}