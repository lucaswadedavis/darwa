var darwa = function(x){
  var mutation = null;
  if (typeof x === 'number'){
    mutation = x * (Math.random()+0.5);
  }
  if (typeof x === 'string'){
    if (x.substr(0,4) === 'rgb('){
      mutation = darwa.rgb(x);
    }
  }
  
  
  return mutation;  
};

darwa.rgb = function(x){
  if ( x === undefined ){ x = "rgb(128,128,128)"; }
  
  var colors = x.substr(4).split(',');
  for (var i=0;i<colors.length;i++){
    colors[i] = Math.floor( ( parseInt(colors[i], 10) ) * (Math.random() + 0.5) );
    colors[i] = Math.max(colors[i], 0);
    colors[i] = Math.min(colors[i], 255);
  }
  return "rgb(" + ( colors.join(",") ) + ")";

};

module.exports = darwa;

