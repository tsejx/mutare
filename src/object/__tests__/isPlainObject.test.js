import { expect } from 'chai';
import isPlainObject from '../isPlainObject';

describe('#isPlainObject()', function() {
    it('object', function() {
        expect(isPlainObject({})).to.be.true;
    });
    it('undefined', function() {
        expect(isPlainObject(undefined)).to.be.false;
    });
    it('null', function() {
        expect(isPlainObject(null)).to.be.false;
    });
    it('number', function() {
        expect(isPlainObject(1)).to.be.false;
        expect(isPlainObject(NaN)).to.be.false;
    });
    it('string', function() {
        expect(isPlainObject('Hello world!')).to.be.false;
    });
    it('regexp', function() {
        expect(isPlainObject(/[0-9]/g)).to.be.false;
    });
});
