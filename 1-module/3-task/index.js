function ucFirst(str) {
  // ваш код...
  
  if(str === ''){
    return '';
  }else if( str === null || str === undefined){
    return '';
  }else{
    let upperedStr = str[0].toUpperCase();

    for(let i = 1; i < str.length; i++){
  
      upperedStr += str[i];
    }
  
    return upperedStr;
  }
}
