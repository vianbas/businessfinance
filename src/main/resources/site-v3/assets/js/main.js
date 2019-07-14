var BASE_URL = window.location.origin;

var coverSuffix = '';
var thumbSuffix = '';
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if (window.screen.width <= 480) {
    coverSuffix = '/width/395/height/252';
    thumbSuffix = '/263x168.jpg';
}
if (window.screen.width >= 768) {
    thumbSuffix = '/263x168.jpg';
}

var xhrDefault = axios.create({
    baseURL: BASE_URL + "/api"
});

var url = window.location.pathname;

var parser = new DOMParser();

var replaceSlotApi = function (elTarget, elString) {
    var elNew = parser.parseFromString(elString, 'text/html');

    elTarget.parentNode.replaceChild(elNew.body.firstChild, elTarget);
};

var truncText = function (text, maxLength, endsc) {
    if (text.length < maxLength)
        return text;
    var m = text.substr(0, maxLength).match(/([^A-Za-z0-9_]*)[A-Za-z0-9_]*$/);
    if (!m) return endsc;
    var lastCharPosition = maxLength - m[0].length;
    if (/[\s\(\[\{]/.test(text[lastCharPosition])) lastCharPosition--;
    return (lastCharPosition ? text.substr(0, lastCharPosition + 1) : '') + endsc;
};

var imgLazyLoad = new LazyLoad({
    elements_selector: ".lazy",
    threshold: 0,
    callback_set: function (element) {
        var defaultImg = element.getAttribute('data-src').split('/');

        if (defaultImg != null) {
            if (element.classList.contains('img-thumb')) {
                element.setAttribute('src', defaultImg[0]+defaultImg[1]+defaultImg[2] + thumbSuffix);
            } else if (element.classList.contains('img-pfl')) {
                element.setAttribute('src', defaultImg);
            } else {
                element.setAttribute('src', defaultImg + coverSuffix);
            }
        }
    }
});