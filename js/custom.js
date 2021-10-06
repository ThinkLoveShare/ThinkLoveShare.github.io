var url = window.location.pathname;
if (url.match(/^\/en\//i)) {
    window.location.replace(url.substring(3));
}