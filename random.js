const answer=Math.floor(Math.random()*10+1)
let guesses=0;  


document.getElementById("submit").onclick=function(){

   let guess= document.getElementById("guessField").value
   guesses+=1;

   if(guess==answer)

   {
    alert(`${answer}is the number. it took you ${guesses} guesses`)
   }

   else if(guess<answer)
   {
    alert("guess number is too small")

   }
   else {
    alert("the number you  guessed is tooo large")
   }


   
}
console.log(answer);
