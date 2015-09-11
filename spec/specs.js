describe('romanFinder', function () {
  it("Number > 3999 returns false", function() {
    expect(romanFinder(4000)).to.equal("Error: Not between 1 and 3999.");
  });

});
