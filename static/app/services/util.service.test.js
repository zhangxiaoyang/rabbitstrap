/**
 * Created by dq on 16/2/4.
 */
/*
describe("A sepc ",function(){
    var foo;
    beforeEach(function(){
        foo = 0;
        foo += 1;

    })

    afterEach(function(){

        foo = 0;
    })

    it('is just a function, so it can contain any code.',function(){
        expect(foo).toEqual(1);
    })

    it('can hav mor than one expection.', function () {
        expect(foo).toEqual(1);
        expect(true).toEqual(true);
    })

})
*/

describe('Util Service Test.', function () {
beforeEach(module('rsApp'));
    it('should reverse a string', inject(function (UtilService) {
        expect(UtilService.reverse('abcd')).toEqual('dcba');
    }))

})
