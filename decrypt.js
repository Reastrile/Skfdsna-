function decrypt(text) {
  var Characters = ["A","B","C","D","E","F","G","H","I","J","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","?",">","<",":","}","{","+","_","~","`","!","@","#","$","%","^","&","*","(",")","-","=","[","]",";","'",",",".","/"," "];
  var Text = text.split('');
  var NewText = [];

  for (i = 0 ; i < Text.length ; i++) {
    NewText.push(Characters.indexOf(Text[i]))
  }

  Text = [];
  var x = 0;
  while (x != NewText.length) {
    if (NewText[x] == 1) {
      Text.push(NewText[x + 1]);
      x = x + 2;
    } else {
      Text.push(parseInt(NewText[x + 1].toString().concat(NewText[x + 2].toString()), 10));
      x = x + 3;
    }
  }

  NewText = [];
  for (i = 0 ; i < Text.length ; i++) {
    NewText.push(Characters[Text[i]]);
  }
        
  return NewText.join('')
}
