var darwa = function(x){
  var mutation = null;
  if (typeof x === 'number'){
    mutation = x * (Math.random()+0.5);
  }
  return mutation;  
};

module.exports = darwa;