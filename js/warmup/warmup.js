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

module.exports ={
    sockMerchant,
    repeatedString
}