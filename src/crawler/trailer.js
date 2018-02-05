var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var puppeteer = require('puppeteer');
var url = 'https://movie.douban.com/tag/#/?sort=T&range=0,10&tags=';
var sleep = function (time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time);
    });
};
var visitPage = function () { return __awaiter(_this, void 0, void 0, function () {
    var startDate, time, browser, page, i, result;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                startDate = new Date();
                time = function () {
                    return Number(new Date()) - Number(startDate);
                };
                console.log('start visit page');
                console.log(time());
                return [4 /*yield*/, puppeteer.launch({
                        args: ['--no-sandbox'],
                        dumpio: false
                    })];
            case 1:
                browser = _a.sent();
                return [4 /*yield*/, browser.newPage()];
            case 2:
                page = _a.sent();
                console.log('open the brower');
                console.log(time());
                // 打开url
                return [4 /*yield*/, page.goto(url, {
                        waitUntil: 'networkidle2'
                    })];
            case 3:
                // 打开url
                _a.sent();
                return [4 /*yield*/, sleep(3000)];
            case 4:
                _a.sent();
                console.log('finish load page');
                console.log(time());
                // 点击加载更多按钮
                return [4 /*yield*/, page.waitForSelector('.more')];
            case 5:
                // 点击加载更多按钮
                _a.sent();
                i = 0;
                _a.label = 6;
            case 6:
                if (!(i < 10)) return [3 /*break*/, 10];
                // 重复点击加载更多按钮
                return [4 /*yield*/, sleep(3000)];
            case 7:
                // 重复点击加载更多按钮
                _a.sent();
                return [4 /*yield*/, page.click('.more')];
            case 8:
                _a.sent();
                console.log('click more');
                _a.label = 9;
            case 9:
                i += 1;
                return [3 /*break*/, 6];
            case 10: return [4 /*yield*/, sleep(3000)];
            case 11:
                _a.sent();
                return [4 /*yield*/, page.evaluate(function () {
                        var $ = window.$;
                        var items = $('.list-wp a');
                        var links = [];
                        console.log('length: ' + items.length);
                        if (items.length >= 1) {
                            items.each(function (index, item) {
                                var it = $(item);
                                var doubanId = it.find('.cover-wp').data('id');
                                var img = it.find('img').attr('src');
                                var title = it.find('.title').text();
                                var rate = it.find('.rate').text();
                                links.push({
                                    doubanId: doubanId,
                                    img: img,
                                    title: title,
                                    rate: rate
                                });
                            });
                        }
                        return links;
                    })];
            case 12:
                result = _a.sent();
                console.log(result);
                console.log(time());
                return [2 /*return*/];
        }
    });
}); };
visitPage();
