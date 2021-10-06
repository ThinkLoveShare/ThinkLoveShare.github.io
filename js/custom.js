var url = window.location.pathname;
alert(url);
if (url.match(/^\/en\//i)) {
    alert(url.substring(4));
    window.location = url.substring(4);
}