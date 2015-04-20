/* global index, describe, it, expect, should */

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