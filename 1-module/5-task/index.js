function truncate(str, maxlength) {
  // ваш код...
  if(str.length > maxlength){
    let shortedStr = '';

    for(let i = 0; i < (maxlength - 1); i++){
      shortedStr += str[i];
    }
    
    return shortedStr += '…';
  }else{
    return str;
  }

}


