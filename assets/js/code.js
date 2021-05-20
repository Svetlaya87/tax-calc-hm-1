function calcTax() {
const Deduction = 12550;

sumFromUser = ( ( +Math.abs(sumInput.value) ) - Deduction);

const rate1=10/100; //10%     0-  9950 doll
const rate2=12/100;//12%   9951- 40525 
const rate3=22/100;//22%  40526- 86375
const rate4=24/100;//24%  86376-164925
const rate5=32/100;//32% 164926-209425
const rate6=35/100;//35% 209426-523600
const rate7=37/100;//37% 523600-more

const uppBorderRate1 =  9950;
const uppBorderRate2 = 40525;
const uppBorderRate3 = 86375;
const uppBorderRate4 =164925;
const uppBorderRate5 =209425;
const uppBorderRate6 =523600;



let sumTaxRate1=0, sumTaxRate2=0, sumTaxRate3=0, sumTaxRate4=0, sumTaxRate5=0, sumTaxRate6=0, sumTaxRate7=0;

let sumTaxTotal=0;


    if (sumFromUser<0) {
        sumTaxTotal=0;
        console.log(sumTaxTotal);

        SumTax2021.innerHTML=` ${ ( Math.round(sumTaxTotal*100) )/100 }&#36;`;
    }


    else if (sumFromUser>=0 && sumFromUser<=uppBorderRate1) {
    
        sumTaxRate1 =sumFromUser*rate1;
        sumTaxTotal = sumTaxRate1;

        console.log(sumTaxTotal);

        SumTax2021.innerHTML=` ${ ( Math.round(sumTaxTotal*100) )/100 }&#36;`;

    
    } 
    
    else if ( sumFromUser>=(uppBorderRate1+1) && sumFromUser<=uppBorderRate2 ) {
        sumTaxRate1 = uppBorderRate1*rate1;
        sumTaxRate2 = (sumFromUser- uppBorderRate1) * rate2;
        sumTaxTotal = sumTaxRate1+sumTaxRate2;

        console.log(sumTaxTotal);

        SumTax2021.innerHTML=` ${ ( Math.round(sumTaxTotal*100) )/100 }&#36;`;


    } 
    
    else if ( sumFromUser>=(uppBorderRate2+1) && sumFromUser<=uppBorderRate3 ){
        sumTaxRate1 = uppBorderRate1 * rate1;
        sumTaxRate2 = (uppBorderRate2 - uppBorderRate1) * rate2;
        sumTaxRate3 = (sumFromUser - uppBorderRate2) * rate3;
        sumTaxTotal = sumTaxRate1 + sumTaxRate2 + sumTaxRate3;

        console.log(sumTaxTotal);
        
        SumTax2021.innerHTML=` ${ ( Math.round(sumTaxTotal*100) )/100 }&#36;`;

    }

    else if ( sumFromUser>=(uppBorderRate3+1) && sumFromUser<=uppBorderRate4 ){
        sumTaxRate1 = uppBorderRate1 * rate1;
        sumTaxRate2 = (uppBorderRate2 - uppBorderRate1) * rate2;
        sumTaxRate3 = (uppBorderRate3 - uppBorderRate2) * rate3;
        sumTaxRate4 = (sumFromUser - uppBorderRate3) * rate4;

        sumTaxTotal = sumTaxRate1 + sumTaxRate2 + sumTaxRate3 + sumTaxRate4;

        console.log(sumTaxTotal);

        SumTax2021.innerHTML=` ${ ( Math.round(sumTaxTotal*100) )/100 }&#36;`;


    }

    else if ( sumFromUser>=(uppBorderRate4+1) && sumFromUser<=uppBorderRate5 ){
        sumTaxRate1 = uppBorderRate1 * rate1;
        sumTaxRate2 = (uppBorderRate2 - uppBorderRate1) * rate2;
        sumTaxRate3 = (uppBorderRate3 - uppBorderRate2) * rate3;
        sumTaxRate4 = (uppBorderRate4 - uppBorderRate3) * rate4;
        sumTaxRate5 = (sumFromUser - uppBorderRate4) * rate5;

        sumTaxTotal = sumTaxRate1 + sumTaxRate2 + sumTaxRate3 + sumTaxRate4 + sumTaxRate5;

        console.log(sumTaxTotal);

        SumTax2021.innerHTML=` ${ ( Math.round(sumTaxTotal*100) )/100 }&#36;`;


    }


    else if ( sumFromUser>=(uppBorderRate5+1) && sumFromUser<=uppBorderRate6 ){
        sumTaxRate1 = uppBorderRate1 * rate1;
        sumTaxRate2 = (uppBorderRate2 - uppBorderRate1) * rate2;
        sumTaxRate3 = (uppBorderRate3 - uppBorderRate2) * rate3;
        sumTaxRate4 = (uppBorderRate4 - uppBorderRate3) * rate4;
        sumTaxRate5 = (uppBorderRate5 - uppBorderRate4) * rate5;
        sumTaxRate6 = (sumFromUser - uppBorderRate5) * rate6;

        sumTaxTotal = sumTaxRate1 + sumTaxRate2 + sumTaxRate3 + sumTaxRate4 + sumTaxRate5 + sumTaxRate6;

        console.log(sumTaxTotal);

        SumTax2021.innerHTML=` ${ ( Math.round(sumTaxTotal*100) )/100 }&#36;`;

    }

    else if ( sumFromUser>=(uppBorderRate6+1)){
        sumTaxRate1 = uppBorderRate1 * rate1;
        sumTaxRate2 = (uppBorderRate2 - uppBorderRate1) * rate2;
        sumTaxRate3 = (uppBorderRate3 - uppBorderRate2) * rate3;
        sumTaxRate4 = (uppBorderRate4 - uppBorderRate3) * rate4;
        sumTaxRate5 = (uppBorderRate5 - uppBorderRate4) * rate5;
        sumTaxRate6 = (uppBorderRate6 - uppBorderRate5) * rate6;

        sumTaxRate7 = (sumFromUser - uppBorderRate6) * rate7;

        sumTaxTotal = sumTaxRate1 + sumTaxRate2 + sumTaxRate3 + sumTaxRate4 + sumTaxRate5 + sumTaxRate6 + sumTaxRate7;

        console.log(sumTaxTotal);

        SumTax2021.innerHTML=` ${ ( Math.round(sumTaxTotal*100) )/100 }&#36;`;

    }



}

//[^+-/*A-Za-zА-Яа-я_.,!?:…][0-9][^+-/*A-Za-zА-Яа-я_.,!?:…]
//[^+-/*A-Za-zА-Яа-я_.,!?:…][0-9](*)[^+-/*A-Za-zА-Яа-я_.,!?:…]