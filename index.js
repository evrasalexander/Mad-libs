function createParagraph(){
var word1 = document.getElementById('word1').value;
var word2 = document.getElementById('word2').value;
var word3 = document.getElementById('word3').value;
var word4 = document.getElementById('word4').value;
var word5 = document.getElementById('word5').value;
var word6 = document.getElementById('word6').value;
var word7 = document.getElementById('word7').value;
var word8 = document.getElementById('word8').value;
var word9 = document.getElementById('word9').value;
var word10 = document.getElementById('word10').value;
var word11 = document.getElementById('word11').value;
var word12 = document.getElementById('word12').value;
var word13 = document.getElementById('word13').value;
var word14 = document.getElementById('word14').value;
var word15 = document.getElementById('word15').value;
var word16 = document.getElementById('word16').value;



var paragraph = 'Red, '+ word1 +' apples! Today we are going to '+ word2 +' apples. I am going to '+ word3 +' the most. My '+ word4 +' and I are having an '+ word5 +' picking contest this year. Every '+ word6 +' we go to '+ word7 +' farm to pick a '+ word8 +' of apples. This year, '+ word9 +' wants to make '+ word10 +', so we need a lot. When we arrive to '+ word11 +', '+ word12 +' counts out our apples. We anxiously await the final count. My '+ word13 +' and I '+ word14 +'! Well actually I had one more than they did, but it had a '+ word15 +' slimy worm in it. That night we had '+ word16 +' applesauce!';

document.getElementById('answer').innerHTML = paragraph;
}