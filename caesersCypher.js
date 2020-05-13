//Caesers Cypher

function rot13(str) {
var newStr = ""; 
  for ( var i = 0; i < str.length; i++ ) {     
    var  xChar = str.charCodeAt(i);  
 if ( xChar < 65 || xChar > 90 ) {
          xChar = xChar;
      }else {
        xChar += 13;       
  if ( xChar > 90 ) {
          xChar = ( xChar - 90 ) + 64;
        }
      }  
    newStr += String.fromCharCode(xChar);
  }
  return newStr;
}

rot13("SERR PBQR PNZC");