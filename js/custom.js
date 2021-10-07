var url = window.location.pathname;
if (url.match(/^\/(en|fr)\//i)) {
    window.location.replace(url.substring(3));
}