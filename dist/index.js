"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DragonSaysLikeAboutSomething = void 0;
var canvas_1 = require("canvas");
var DragonSaysLikeAboutSomething = /** @class */ (function () {
    function DragonSaysLikeAboutSomething(text) {
        this.HEIGHT = 900;
        this.WIDTH = 1600;
        this.BASE_IMAGE_PATH = "./assets/dragon.jpg";
        this.FONT_PATH = "./assets/fonts/lefthand_her_free.otf";
        (0, canvas_1.registerFont)(this.FONT_PATH, { family: "left-handed_girlfriend" });
        var canvas = (0, canvas_1.createCanvas)(this.WIDTH, this.HEIGHT);
        this.ctx = canvas.getContext("2d");
        this.text = text;
    }
    DragonSaysLikeAboutSomething.prototype.draw = function () {
        return __awaiter(this, void 0, void 0, function () {
            var image;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0, canvas_1.loadImage)(this.BASE_IMAGE_PATH)];
                    case 1:
                        image = _a.sent();
                        this.ctx.drawImage(image, 0, 0, this.WIDTH, this.HEIGHT);
                        this.ctx.font = '60px "Noto Sans JP"';
                        this.ctx.fillStyle = "black";
                        this.ctx.textAlign = "center";
                        this.ctx.fillText(this.text.split('')
                            .reduce(function (acc, c, i) {
                            return i % 8 ? acc
                                : __spreadArray(__spreadArray([], acc, true), [_this.text.split('').slice(i, i + 8).join('')], false);
                        }, [])
                            .join('\n'), (375 + (this.text.length > 6 ? this.text.length > 12 ? this.text.length : this.text.length * 5 : this.text.length * 12)), (this.text.length > 6 ? (200 + (250 * this.text.length % 8)) : (this.HEIGHT / 2 - 100)));
                        return [2 /*return*/, this.ctx.canvas.toBuffer()];
                }
            });
        });
    };
    return DragonSaysLikeAboutSomething;
}());
exports.DragonSaysLikeAboutSomething = DragonSaysLikeAboutSomething;
