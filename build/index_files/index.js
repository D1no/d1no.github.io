function showMore() {
    var x = document.getElementById("showMore");
    if (x.style.display === "none") {
        x.style.display = "block";
    }
    else {
        x.style.display = "none";
    }
}
// Spam Protection
function decode(a) {
    // ROT13 : a Caesar cipher 
    // letter -> letter' such that code(letter') = (code(letter) + 13) modulo 26
    return a.replace(/[a-zA-Z]/g, function (c) {
        return String.fromCharCode((c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
}
;
var personalMail = document.getElementById("personalMail");
personalMail.innerHTML = "<a href=" + decode("znvygb:uryyb@qva.bbb") + ">" + decode("uryyb@qva.bbb") + "</a>";
// Google Analytics
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments);
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-82377720-1', 'auto');
ga('send', 'pageview');