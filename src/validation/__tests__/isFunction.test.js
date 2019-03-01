import { expect } from 'chai';
import isFunction from '../isFunction';

describe('#isFunction', function(){
    it('should return `false` for non-functions', function(){
        expect(isFunction([1, 2, 3], false)).to.be.false
        expect(isFunction(true)).to.be.false
        expect(isFunction(new Date)).to.be.false
        expect(isFunction(new Error)).to.be.false
        expect(isFunction({a: 123})).to.be.false
        expect(isFunction(2)).to.be.false
        expect(isFunction('a')).to.be.false
        expect(isFunction(/t$/)).to.be.false
        expect(isFunction(Symbol(123))).to.be.false
    })
})