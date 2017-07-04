/**
 * Created by solam on 2017/7/3.
 */
var fs = require('fs');
var info = {};

fs.readFile('setting.txt', 'utf-8', function (err, buf) {
    if (err) return err;

    info.line = [];
    var arr = buf.toString().split("\n");

    for (var i = 0; i < arr.length; i++) {
        info.line[i] = arr[i].slice(0, -1);
    }

    var text = JSON.stringify(info);
    fs.writeFile("setting.json", text, function (err) {
        if (err) throw err;
    });
})