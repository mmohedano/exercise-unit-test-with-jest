

const {squareSum} = require('./app.js')
test ('sum squares numbers 3, 4, 2 to equal 29', () => {
    let total = squareSum([3, 4, 2]);
    expect(total).toEqual(29);