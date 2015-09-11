describe('phraseChanger', function () {
  it("hello => hi", function() {
    expect(phraseChanger("hello", "hello", "hi")).to.equal("hi");
  });

  it("hello there => hi there", function() {
    expect(phraseChanger("hello there", "hello", "hi")).to.equal("hi there");
  });

});
