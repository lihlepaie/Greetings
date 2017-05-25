describe('The greet namesGreeted', function(){

    it('should greet different userName', function(){
        assert.equal('Hello, Asanda', greet('Asanda'));
    });
    it('should greet different userName', function(){

        assert.equal('Hello, Pasie', greet('Pasie'));
    });
});
