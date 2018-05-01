const generateGreet = (name) => `Hello ${name}`;

test('generate greet from name', () => {
    const result = generateGreet('Cathal');
    expect(result).toBe('Hello Cathal');
});