export function permute(arr) {
    const getPermutes = arr => {
        const res = [];
        if (arr.length === 2) {
            res.push([...arr]);
            res.push([arr[1], arr[0]]);
            return res;
        }
        let tmp;
        for (let i = 0; i < arr.length; i++) {
            tmp = [...arr];
            const firstItem = tmp.splice(i, 1);
            getPermutes(tmp).forEach(arr => {
                res.push(firstItem.concat(arr));
            });
        }
        return res;
    };
    getPermutes(arr).forEach(v => console.log(v));
}
