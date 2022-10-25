function sum (numbers)
{
    let result =0;
    numbers.forEach(element => {
        result += element;
    });
   
    return result;
}

function avg(numbers)
{
  return sum(numbers)/ numbers.length;

}

function max(numbers)
{
  let max = numbers[0];

  numbers.forEach(n => {
   if( n >= max)
   {
    max = n;
   }
  });
     return max;
}

exports.sum = sum;
exports.avg = avg;
exports.max = max;