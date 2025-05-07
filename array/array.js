function parseURL(url) {
    const urlParts = [];
    
    const [protocol, rest] = url.split('://');
    urlParts.push(protocol);
    
    const [domainAndPath, queryString] = rest.split('?');
    const [domain, ...pathParts] = domainAndPath.split('/');
    urlParts.push(domain);
    urlParts.push(pathParts.join('/'));
    
    if (queryString) {
        const queryParams = queryString.split('&');
        urlParts.push(...queryParams);
    }
    
    return urlParts;
}

const url = "https://educacionadistancia.juntadeandalucia.es/centros/sevilla/mod/url/view.php?id=762901";
console.log(parseURL(url));

function rotateArray(arr, n) {
    const len = arr.length;
    n = n % len;
    return arr.slice(-n).concat(arr.slice(0, -n));
}

console.log(rotateArray(array, 3));