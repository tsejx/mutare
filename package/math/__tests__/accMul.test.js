import { expect } from 'chai';
import { accMul } from '../src/accMul';

describe('When using accMul', function() {
  it('39.7*100', function() {
    expect(accMul(39.7, 100)).to.be.equal(3970);
  });
  it('19.9*100', function() {
    expect(accMul(19.9, 100)).to.be.equal(1990);
  });
  it('0.28*100', function() {
    expect(accMul(0.28, 100)).to.be.equal(28);
  });
  it('0.57*100', function() {
    expect(accMul(0.57, 100)).to.be.equal(57);
  });
  it('0.2*3', function() {
    expect(accMul(0.2, 3)).to.be.equal(0.6);
  });
  it('0.223*12.184', function() {
    expect(accMul(0.223, 12.184)).to.be.equal(2.717032);
  });
  it('0.612*100', function() {
    expect(accMul(0.612, 100)).to.be.equal(61.2);
  });
  it('0.7*180', function() {
    expect(accMul(0.7, 180)).to.be.equal(126);
  });
  it('0.0000001*54000000', function() {
    expect(accMul(0.0000001, 54000000)).to.be.equal(5.4);
  });
});
