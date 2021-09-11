const number:number[] = [1,10,20,50,77];
number[0] = 20;
number.push(100);
const namess:string[] = ['rakib','rocky','ft','fatema'];
namess[0] = 'rk';
namess.push('rakib');

// for loop  array type
let max = 0;
for(const num of  number){
    if( num > max){
        max = num;
    }
}