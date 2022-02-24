export const fetcher = (path, options = {}) =>
    fetch(path, options).then(r => r.json())
