const chai = require('chai');
const expect = chai.expect;
const calculator = require('../app/calculator');

describe('add()', function() {
        it('returns 7 when adding 5 and 2', function() {
            expect(calculator.add(5,   2)).to.equal(7);
        });
        it('returns 8 when adding 6 with 2', function(){
            expect(calculator.add(6,2)).to.equal(8);
        });
        
});
    
describe('sub()', function() {
        it('returns 2 when subtracting 3 with 1', function() {
            expect(calculator.sub(3, 1)).to.equal(2);
        });
        
 
});
    
describe('mul()', function() {
        it('returns 12 when multiplying 4 and 3', function() {
            expect(calculator.mul(4, 3)).to.equal(12);
        });
   
});
    
describe('div()', function() {
        it('returns 3 when dividing 9 and 3', function() {
            expect(calculator.div(9, 3)).to.equal(3);
        });
        
     
});

