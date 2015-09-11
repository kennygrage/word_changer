describe('phraseChanger', function () {
  it("hello => hi", function() {
    expect(phraseChanger("hello", "hello", "hi")).to.equal("hi");
  });

  it("hello there => hi there", function() {
    expect(phraseChanger("hello there", "hello", "hi")).to.equal("hi there");
  });

  it("Hello there => hi there", function() {
    expect(phraseChanger("Hello there", "hello", "hi")).to.equal("hi there");
  });

  it("Hello there => Hi there", function() {
    expect(phraseChanger("Hello there", "hello", "Hi")).to.equal("Hi there");
  });

  it("Hello there, how are you? => Hello buddy, how are you?", function() {
    expect(phraseChanger("Hello buddy, how are you?", "there", "buddy")).to.equal("Hello buddy, how are you?");
  });

  it("Hello there => Hello there!", function() {
    expect(phraseChanger("Hello there", "there", "there!")).to.equal("Hello there!");
  });

  it("Hello there, how are you? => Hello-there,-how-are-you?", function() {
    expect(phraseChanger("Hello there, how are you?", " ", "-")).to.equal("Hello-there,-how-are-you?");
  });

});
