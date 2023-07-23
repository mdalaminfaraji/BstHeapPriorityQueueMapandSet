//Write a code on how to calculate the number of vowels and consonants in a string?(Use Javascript only)

let L='AEIOUabcde';
let countVowel=0, countConsonant=0;
for(let i=0; i<L.length; i++){

    if(L[i]=='a'||L[i]=='e'||L[i]=='i'||L[i]=='o' ||L[i]=='u' ||L[i]=='A' ||L[i]=='E' ||L[i]=='I' ||L[i]=='O'||L[i]=='U'){
      countVowel++;
    }else{
        countConsonant++;
    }
}
console.log('countVowel:' +countVowel, "countConsonant:" + countConsonant);