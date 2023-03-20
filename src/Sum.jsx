
export function Sum({numbers}){
    return <h1>{numbers.reduce((a,b) => a + b)}</h1>
}