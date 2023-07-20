export const myFun = (printMe: string): string => {
	console.log('printMe', printMe)
	const manyStrings: string[] = Array.from(printMe, (current, i) => `I am number ${i}: ${current}`)
	console.log(`manyStrings: ${JSON.stringify(manyStrings, null, 2)}`)
	return `I am the passed string!..... ${printMe}`
}

const foo = myFun('good morning')

console.log('hi')
