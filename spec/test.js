/* global index, describe, it, expect, should */


describe("darwa.letter()",function(){
  
  it('exists',function(){
    expect(darwa.letter).to.be.a('function');
  });
  
  it('returns null when invoked without arguments',function(){
    expect( darwa.letter() ).to.equal(null);
  });
 
  it('returns a string when given a string', function(){
    expect( darwa.letter('h') ).to.be.a('string') ;
  });
  
  it('returns a consonant when given a consonant', function(){
    expect( darwa.letter('h') ).to.match(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/) ;
  });
  
  it('returns a vowel when given a vowel', function(){
    expect( darwa.letter('a') ).to.match(/[a|e|i|o|u|y]/) ;
  });
  
});

describe('darwa()', function () {
  
  it('exists', function () {
    expect(darwa).to.be.a('function');

  });

  it('returns null if it doesn\'t have a good way to mutate the input', function () {
    expect( darwa("str") ).to.equal(null);
  });

  it('returns a number when a number is given', function () {
    expect( darwa(100) ).to.be.a('number');
  });
  
  it('returns a string when an rgb color string is given', function(){
    expect( darwa('rgb(100,100,100)') ).to.be.a('string');
  });

  it('returns an rgb value when an rgb value is given', function(){
    expect( darwa('rgb(100,100,100)') ).to.match(/^rgb/);
  });

});

describe("darwa.int()",function(){
  
  it('exists',function(){
    expect(darwa.int).to.be.a('function');
  });
  
  it('returns null if given something other than a number',function(){
    expect(darwa.int('fone') ).to.equal(null);
  });
  
  it('returns a number if given a number',function(){
    expect(darwa.int(10) ).to.be.a('number');
  });
  
  it('returns a number close to the one it was given',function(){
    expect(darwa.int(100) ).to.be.closeTo(100,50);
  });
  
  it('returns whole numbers',function(){
    expect(darwa.int(100) % 1).to.equal(0);
  });
  
});

describe("darwa.float()",function(){
  
  it('exists',function(){
    expect(darwa.float).to.be.a('function');
  });
  
  it('returns null if passed something other than a number',function(){
    expect( darwa.float('feon') ).to.equal(null);
  });
  
  it('returns a number if passed a number',function(){
    expect(darwa.float(3) ).to.be.a('number');
  });
  
  it('returns a number that is close to the number passed in', function(){
    for (var i=0;i<100;i++){
      expect(darwa.float(i*10) ).to.be.closeTo(i*10,(i*10)/2);
    }
  });
  
  it('returns a number that is close to the number passed in - respecting the delta value', function(){
    for (var i=0;i<100;i++){
      expect(darwa.float(i*10,0.01) ).to.be.closeTo(i*10,i*10*0.01);
    }
  });
  
});

describe("darwa.rgb()",function(){
  
  it('exists',function(){
    expect(darwa.rgb).to.be.a('function');
  });
  
  it('returns a color when invoked without arguments',function(){
    expect( darwa.rgb() ).to.contain('rgb(')
  });
  
  it('returns null when not given a string.',function(){
    expect( darwa.rgb(0) ).to.equal(null);
  });
  
  it('returns null when given an improper string.', function(){
    expect( darwa.rgb('hsb(20,3,3)') ).to.equal(null);
  });
  
});