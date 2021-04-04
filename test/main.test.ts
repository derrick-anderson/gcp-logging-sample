const { greetings } = require('../src/main');

test('greetings returns correct name position', () => {
    expect(greetings('Bob')).toBe("Hello Bob. How are you?");
})