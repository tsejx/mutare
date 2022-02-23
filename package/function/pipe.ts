export function pipe(...fns) {
    return fns.reduce((f, g) => {
        return function(...args) {
            return g(f(...args));
        };
    });
}
