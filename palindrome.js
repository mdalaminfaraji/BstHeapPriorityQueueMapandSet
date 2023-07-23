//Write a code to calculate if the string is palindrome ? (Use javascript only)

let str="ABCDCBA";
let S = "GeeksforGeeks";
let rev=S.split('').reverse().join('');
console.log(S.split('').reverse().join(''));
if(str==rev){
    console.log("YES Palindrome");
}else{
    console.log("NO Palindrome");
}