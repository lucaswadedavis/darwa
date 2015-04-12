var darwa = function(x){
  var mutation = null;
  if (typeof x === 'number'){
    mutation = x * (Math.random()+0.5);
  }
  if (typeof x === 'string'){
    if (x.substr(0,4) === 'rgb('){
      var colors = x.substr(4).split(',');
      for (var i=0;i<colors.length;i++){
        colors[i] =Math.floor( ( parseInt(colors[i], 10) ) * (Math.random() + 0.5) );
        colors[i] = Math.max(colors[i], 0);
        colors[i] = Math.min(colors[i], 255);
      }
      mutation = "rgb(" + ( colors.join(",") ) + ")";
    }
  }
  
  
  return mutation;  
};

module.exports = darwa;

