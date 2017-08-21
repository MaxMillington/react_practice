//const myMock = jest.fn();
myMock('1');
myMock('a', 'b');
console.log(myMock.mock.calls);
// > [ [1], ['a', 'b'] ]

// const myMock = jest.fn();
console.log(myMock());
// > undefined

myMock.mockReturnValueOnce(10)
    .mockReturnValueOnce('x')
    .mockReturnValue(true);

console.log(myMock(), myMock(), myMock(), myMock());
// > 10, 'x', true, true


const myMockFn = jest.fn(cb => cb(null, true));

myMockFn((err, val) => console.log(val));
// > true

myMockFn((err, val) => console.log(val));
// > true



const myMockFn = jest.fn(() => 'default')
    .mockImplementationOnce(() => 'first call')
    .mockImplementationOnce(() => 'second call');

console.log(myMockFn(), myMockFn(), myMockFn(), myMockFn());
// > 'first call', 'second call', 'default', 'default'


// The mock function was called at least once
expect(mockFunc).toBeCalled();

// The mock function was called at least once with the specified args
expect(mockFunc).toBeCalledWith(arg1, arg2);

// The last call to the mock function was called with the specified args
expect(mockFunc).lastCalledWith(arg1, arg2);

