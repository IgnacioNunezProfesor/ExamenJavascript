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
console.log("\n Parsing ", url, "Output ", parseURL(url));


array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function rotateArray(arr, n) {
    const len = arr.length;
    n = n % len;
    return arr.slice(-n).concat(arr.slice(0, -n));
}
console.log("Dato de entrada: ", array);
console.log("\n Rotación de la lista 4 elementos: ", rotateArray(array, 4));