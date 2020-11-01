var data = [];

var dataStr = "1.Memory One<br>\
<br>\
Japanese Cartoon<br>\
<br>\
<br>\
2.Memory two<br>\
<br>\
Japanese Cartoon<br>\
<br>\
<br>\
3.Memory three<br>\
<br>\
Japanese Cartoon<br>\
<br>\
<br>\
4.Memory four<br>\
<br>\
American Movie<br>\
<br>\
<br>\
5.Memory five<br>\
<br>\
American TV Series<br>\
<br>\
<br>\
6.Memory six<br>\
<br>\
American Movie<br>\
<br>\
<br>\
7.Memory seven<br>\
<br>\
American Movie<br>\
"
var d = dataStr.split("<br><br><br>");
for(var i = 0; i<d.length; i++){
  var c = d[i].split("<br><br>");
  data.push({
    img: c[0]+ ".jpg",
    caption: c[0].split(".")[1],
    desc: c[1]
  });
}

