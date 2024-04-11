const core = (a, b) => {
    const c = 0;
    for (let index = 0; index < a; index++) {
        c += b*b
    }
}

const _core = core
export { _core as core }