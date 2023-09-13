function firstNonRepeatedChar(str) {
 // Write your code here
 if(!str){
 return null;
 }

 const charCount =newArray(26).fill(0);

 for(let i=0;i<str.length;i++){
 const char=str[i];
 charCount[char.charCodeAt(0)-'a'.charCodeAt(0)]++;
 }

 for(let i=0;i<str.length;i++){
 const char=str[i];
 if(charCount[char.charCodeAt(0)-'a'.charCodeAt(0)]==1){
 return char;
 }
 }
}
/*const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); */
