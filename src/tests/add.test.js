const add = (a, b) => a + b;

const generateGreet = (name) => `Hello ${name}`;

test('add two numbers', () => {
    const result = add(5,8);
    expect(result).toBe(13); 
});

test('generate greet from name', () => {
    const result = generateGreet('Cathal');
    expect(result).toBe('Hello Cathal');
});