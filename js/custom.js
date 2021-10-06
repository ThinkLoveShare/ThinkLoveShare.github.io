var url = window.location.pathname;
console.log(url);
if (url.match(/^\/en\//i)) {
    console.log(url.substring(4));
    window.location = url.substring(4);
}