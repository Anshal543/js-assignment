type Input = number | string

function firstElement(arr:Input[]){
    return arr[0]
}

const a = firstElement([1,2,3])
const b = firstElement(['a','b','c'])
console.log(a,b);
// b.toUpperCase() // Error: Property 'toUpperCase' does not exist on type 'number'.

function getFirstElement<T>(arr:T[]){
    return arr[0]
}

const c = getFirstElement([11,"21",31])
const d = getFirstElement(['a','b','c'])
console.log(c,d.toUpperCase());

function getFirstElement1<T>(arr: T[]) {
    return arr[0];
}

const el = getFirstElement1<string|number>(["harkiratSingh", 2]);
// console.log(el.toLowerCase())
