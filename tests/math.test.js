const { add, calculateTip,fareheitToCelsius, celsiusToFarenheit } = require('../src/math')

test('Should calculate total with tip', () => {
    const total = calculateTip(10, .3)
    expect(total).toBe(13)

    // if(total !== 13){
    //     throw new Error('Total tip should be 13. Got ' + total)
    // }
})

test('should calculate total with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})

test('Should convert 32 F to 0 C', () => {
    const f= fareheitToCelsius(32)
    expect(f).toBe(0)
})


test('Should add two numbers', (done) => {
    add(2,3).then((sum) => {
        expect(sum).toBe(5)
        done()
    })
})


test('Should add two numbers async/await', async () => {
    const sum = await add(10,22)
    expect(sum).toBe(32)
})