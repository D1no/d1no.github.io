function showMore() {
  var x = document.getElementById("showMore");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

// Google Analytics
(function (i, s, o, g, r, a, m) {
  i["GoogleAnalyticsObject"] = r;
  (i[r] =
    i[r] ||
    function () {
      (i[r].q = i[r].q || []).push(arguments);
    }),
    (i[r].l = 1 * new Date());
  (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(
  window,
  document,
  "script",
  "https://www.google-analytics.com/analytics.js",
  "ga"
);
ga("create", "UA-82377720-1", "auto");
ga("send", "pageview");

// Hi
console.log(`
     hi
  o-o
 (\\_/)
  \`-\\\` \`--.___,
     '\\( ,_.-'
        \\\\
        ^'
`);
