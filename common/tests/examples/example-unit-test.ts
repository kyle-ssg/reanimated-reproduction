describe('functionName', () => {
  it('should do x', function() {
    expect("x".toUpperCase()).toEqual("X");
    expect("x".toUpperCase()).toBeTruthy();
    expect({ a:1 }).toEqual({ a:1 });
  });
})
