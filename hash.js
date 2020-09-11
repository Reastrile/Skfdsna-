function hash(text) {
  var Characters = ["A","B","C","D","E","F","G","H","I","J","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","?",">","<",":","}","{","+","_","~","`","!","@","#","$","%","^","&","*","(",")","-","=","[","]",";","'",",",".","/"," "];
  var Text = text.split('');
  var NewList = [];

  var x = 0;
  while (x < Text.length) {
	  NewList.push(Characters.indexOf(Text[x]));
	  x = x + 1;
  }

  var output = NewList.map(function (x) {return parseInt(x, 10);});
  output = output.join('');
  output = output * Text.length * Text.length;
  while (output.toString().length < 250) {
	  output = output * 3;
	  output = BigInt(output).toString()
  }

  var letters = [];
  if (output.toString().split('').length % 2 != 0) {
	  output = output.toString().split('');
	  output.push("0");
	  output = output.map(function (x) {return parseInt(x, 10);});
	  output = output.join('');
  }

  x = 0
  output = output.toString().split('');
  output = output.map(function (x) {return parseInt(x, 10);});
  while (x < output.length) {
	  var n1 = output[x].toString();
	  var n2 = output[x+1].toString();
	  letters.push(n1.concat(n2));
	  x = x + 2;
  }

  var FinishedList = [];
  x = 0;
  while (x < letters.length) {
	  if (letters[x] == "00") {
		  FinishedList.push(Characters[0]);
	  } else {
		  FinishedList.push(Characters[parseInt(letters[x],10) - 1]);
	  }
	  x = x + 1;
  }

  return FinishedList.join('');
}

export { hash };
