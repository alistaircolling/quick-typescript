export const myFun = (printMe: string): string => {
	console.log('printMe', printMe)
	return `I am the passed string!..... ${printMe}`
}


const foo = myFun('good morning')

console.log('hi')
