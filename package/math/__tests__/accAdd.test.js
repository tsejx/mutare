import { expect } from 'chai';
import accAdd from '../accAdd';

describe('#accAdd()', function() {
    it('0.1+0.2=0.3', function() {
        expect(accAdd(0.1, 0.2)).to.be.equal(0.3);
    });
    it('0.2+0.7=0.9', function() {
        expect(accAdd(0.2, 0.7)).to.be.equal(0.9);
    });
    it('0.012+0.013=0.025', function() {
        expect(accAdd(0.012, 0.013)).to.be.equal(0.025);
    });
    it('0.1239+0.4321', function() {
        expect(accAdd(0.1239, 0.4321)).to.be.equal(0.556);
    });
    it('0.12345+0.11125', function() {
        expect(accAdd(0.12345, 0.11125)).to.be.equal(0.2347);
    });
    it('0.000001+0.000004=0.000005', function() {
        expect(accAdd(0.000001, 0.000004)).to.be.equal(0.000005);
    });
    it('9007199254740992+3=9007199254740995', function() {
        expect(accAdd(9007199254740992, 3)).to.be.equal(9007199254740995);
    });
});
