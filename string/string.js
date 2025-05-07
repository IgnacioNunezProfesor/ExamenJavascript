function orderString(str) {
    if (typeof str !== 'string') 
        throw new TypeError('Expected a string');

    if (str.length === 0) 
        return '';

    if (str.length === 1) 
        return str;

    return str.split(' ').sort().join(' ');
}

function orderStringByWordLength(str) {
    if (typeof str !== 'string') 
        throw new TypeError('Expected a string');

    if (str.length === 0) 
        return '';

    return str.split(' ').sort((a, b) => a.length - b.length).join(' ');
}

console.log(orderString("kk bb cc dd ee ff gg hh ii jj aa ll mm nn oo pp qq rr ss tt uu vv ww xx yy zz"));
console.log(orderStringByWordLength("kkK b cccc ddddd e f gg hh ii jj aa ll mm nn oo pp qq rr ss tt uu vv ww xx yy zz"));

