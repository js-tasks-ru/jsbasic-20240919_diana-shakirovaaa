let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false,
  a:NaN,
  b:Infinity,
};

function sumSalary(salaries) {
  // ваш код...
  let arr = Object.values(salaries);
  let sum = 0;

  for(let elem of arr){
    if(Number.isNaN(elem) || !Number.isFinite(elem) || typeof(elem) !== 'number'){
      continue;
    }else{
      sum += elem;
    }
  }

  return sum;
}