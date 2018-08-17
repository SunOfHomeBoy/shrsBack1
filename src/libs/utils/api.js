"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var auth_1 = require("./auth");
var json_1 = require("./json");
var redirect_1 = require("./redirect");
var settings_1 = require("./settings");
function api(path, document, callback) {
    axios_1["default"]({
        url: settings_1.settings.pathAPI + path,
        method: 'post',
        data: {
            accessToken: auth_1.auth().accessToken || '',
            appID: settings_1.settings.appID,
            parameters: json_1.json(document)
        },
        transformRequest: [
            function (data) {
                var buf = [];
                for (var i in data) {
                    buf.push.apply(buf, [
                        global.encodeURIComponent(i),
                        '=',
                        global.encodeURIComponent(data[i]),
                        '&'
                    ]);
                }
                return buf.join('');
            }
        ],
        withCredentials: true,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
        .then(function (response) {
        var responseData = response.data;
        console.log("response::", response);
        if (typeof (response) === 'string') {
            responseData = json_1.json(response); // 做字符串解析
        }
        switch (responseData.code) {
            case 404:
                if (settings_1.settings.debug) {
                    console.log('Not Found');
                }
                break;
            case 500:
                if (settings_1.settings.debug) {
                    console.log('Internal Server Error:');
                }
                break;
            default:
                callback(responseData);
        }
    })["catch"](function (reason) {
        // for (let k in reason) {
        //         console.log(k, reason[k]);
        // } 查看 属性
        switch (reason['response']['status']) {
            case 403:
                console.log(403);
                return redirect_1.redirect('/login');
            case 404:
                if (settings_1.settings.debug) {
                    console.log('Not Found');
                }
                break;
            case 500:
                if (settings_1.settings.debug) {
                    console.log('Internal Server Error:');
                }
                break;
            default:
                console.log(reason);
                callback(reason);
        }
        console.log("%c reason %c " + reason + " ", "background:#f00 ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff", "background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #000");
    });
}
exports.api = api;
