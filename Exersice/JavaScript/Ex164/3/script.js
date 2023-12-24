let data = [
    {
        1: ['data111', 'data112', 'data113'],
        2: ['data121', 'data122', 'data123'],
    },
    {
        1: ['data211', 'data212', 'data213'],
        2: ['data221', 'data222', 'data223'],
    },
    {
        1: ['data411', 'data412', 'data413'],
        2: ['data421', 'data422', 'data423'],
    },
];

for (let item of data) {
    for (let key in item) {
        for (let value of item[key]) {
            console.log(value);
        }
    }
}