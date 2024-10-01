function isEmpty(obj) {
  // ваш код...
  let arr = Object.keys(obj);

  if(arr.length > 0){
    return false;
  }else{
    return true;
  }

}