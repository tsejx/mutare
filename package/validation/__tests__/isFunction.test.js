import { expect } from 'chai';
import { isFunction } from '../src/isFunction';

describe('When using isFunction', function() {
  it('should return `false` for non-functions', function() {
    expect(isFunction(undefined)).to.be.false;
    expect(isFunction(null)).to.be.false;
    expect(isFunction(2)).to.be.false;
    expect(isFunction(1e21)).to.be.false;
    expect(isFunction(NaN)).to.be.false;
    expect(isFunction(Infinity)).to.be.false;
    expect(isFunction('a')).to.be.false;
    expect(isFunction(true)).to.be.false;
    expect(isFunction(false)).to.be.false;
    expect(isFunction([])).to.be.false;
    expect(isFunction([1, 2, 3])).to.be.false;
    expect(isFunction([() => {}])).to.be.false;
    expect(isFunction({})).to.be.false;
    expect(isFunction({ a: 123 })).to.be.false;
    expect(isFunction(/t$/)).to.be.false;
    expect(isFunction(new Date())).to.be.false;
    expect(isFunction(new Error())).to.be.false;
    expect(isFunction(Symbol(123))).to.be.false;
  });
  it('should return `true` fro differenct kinds of function', function() {
    expect(isFunction(() => {})).to.be.true;
    expect(isFunction(function() {})).to.be.true;
    expect(isFunction(Object)).to.be.true;
  });
});
