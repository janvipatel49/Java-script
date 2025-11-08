//palindrome-->

let word=prompt("enter a word");
let reverse= "";

let i;
for(i=word.length-1;i>=0;i-- )
{
    reverse=reverse+word[i];
}
 if(word==reverse){
    alert("word is palindrome");
 }
 else{
    alert("word is not palindrome");
 }

