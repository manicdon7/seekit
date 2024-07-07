var expect = require('chai').expect,
    path = require('path'),
    nmResolve = require('./index.js');

describe('node-modules-resolve', function() {
    it('should resolve existing path', function() {
        expect(nmResolve('chai')).to.have.string(path.sep);
    });

    it('should resolve existing path', function() {
        expect(nmResolve('chai/../chai')).to.have.string(path.sep);
    });

    it('should throw exception on unexisting path', function() {
        expect(function() {
            nmResolve('chai/unexisting');
        }).to.throw(Error);
    });
});