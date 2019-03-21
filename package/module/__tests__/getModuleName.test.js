import { expect } from 'chai';
import getModuleName from '../getModuleName';

describe('#getModuleName()', function() {
    it('chai', function() {
        expect(getModuleName('/node_modules/chai/lib/chai/config.js')).to.be.equal('chai');
    });
    it('atob', function() {
        expect(getModuleName('/node_modules/atob/bin/atob.js')).to.be.equal('atob');
    });
    it('mocha', function() {
        expect(getModuleName('/node_modules/mocha/lib/reporters/base.js')).to.be.equal('mocha');
    });
});
