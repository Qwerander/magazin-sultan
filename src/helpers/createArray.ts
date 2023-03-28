export const numberToArray = (n: number): Array<number> => {
    const result = [];
    for (let i = 1; i <= n; i++) {
        result.push(i)
    } 
    return result;
};