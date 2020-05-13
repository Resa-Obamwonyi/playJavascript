//Telephone Number Validator
//Using Strictly Regex
function telephoneCheck(str) {

   var teleCheckRegex = /^1?( )?((\(\d{3}\))|( \d{3} )|(\d{3}))( |\-)?(\d{3})( |-)?(\d{4}$)/.test(str);
   return teleCheckRegex;  
}

//Using Ifs and Regexs
function telephoneCheck(str) {
    // Good luck!
    var countDash = 0;
    var countPar = 0;
    str = str.replace(/\s*/g, '');
    if (str.search(/\W*\D*[^-()]*/g)) {
        return false;
    }
    str = str.split('');
    for (var i = 0; i < str.length; i++) {
        if (str[i].search(/[()]/) != -1) countPar++;
        if (str[i].search(/[\-]/) != -1) countDash++;
    }
    if (((countDash !== 2 && countDash !== 1) && countDash > 0 ) || (countPar !== 2 && countPar > 0)) {
        return false;
    } else if (countPar > 0 && str[str.indexOf('(') + 4] != ')') {
        return false;
    }
    console.log(str);    
    return (str.length - (countDash + countPar) == 11 && str[0] == 1) || str.length - (countDash + countPar) == 10;
}