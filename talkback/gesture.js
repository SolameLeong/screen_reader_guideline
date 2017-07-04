/**
 * Created by solam on 2017/7/3.
 */
window.onload = function () {
    var a = new Vue({
        el: '#ges',
        data: {
            lines: [],
            text: null
        },
        mounted: function() {
            this.$http.get('data/gesture.json').then(function(response){
                return response.json()
            }).then(function (data) {
                this.lines = data.line;
                this.text = this.getOutput(this.lines);
            })
        },
        methods: {
            getOutput: function (lines) {
                var text = '';
                for (var i = 0; i < lines.length; i++) {
                    if (lines[i].slice(-1) == '.') {
                        text += '<h1>' + lines[i].slice(0, -1) + '</h1>';
                    } else if (lines[i].slice(-1) == ',') {
                        text += '<h2>' + lines[i].slice(0, -1) + '</h2>';
                    } else {
                        text += '<p>' + lines[i] + '</p>';
                    }
                }
                console.log(text);
                return text;
            }
        }
    });
    var b = new Vue({
        el: '#set',
        data: {
            lines: [],
            text: null
        },
        mounted: function() {
            this.$http.get('data/setting.json').then(function(response){
                return response.json()
            }).then(function (data) {
                this.lines = data.line;
                this.text = this.getOutput(this.lines);
            })
        },
        methods: {
            getOutput: function (lines) {
                var text = '';
                for (var i = 0; i < lines.length; i++) {
                    if (lines[i].slice(-1) == '.') {
                        text += '<h1>' + lines[i].slice(0, -1) + '</h1>';
                    } else if (lines[i].slice(-1) == ',') {
                        text += '<h2>' + lines[i].slice(0, -1) + '</h2>';
                    } else {
                        text += '<p>' + lines[i] + '</p>';
                    }
                }
                console.log(text);
                return text;
            }
        }
    });
};