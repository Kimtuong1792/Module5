"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-calculator-app';
        this.result = '';
        this.calculates = 0;
        this.inputAdd = '';
        this.operatorAdd1 = '';
        this.operatorAdd2 = '';
        this.check = true;
    }
    AppComponent.prototype.allClear = function () {
        this.result = '';
    };
    AppComponent.prototype.backspace = function () {
        this.result = this.result.slice(0, this.result.length - 1);
    };
    AppComponent.prototype.pressKey = function (input) {
        this.result += input;
    };
    AppComponent.prototype.calculate = function () {
        this.check = true;
        for (var i = 0; i < this.result.length; i++) {
            if (this.result.charAt(i) != '+' && this.result.charAt(i) != '-' && this.result.charAt(i) != '*' && this.result.charAt(i) != '/') {
                this.inputAdd += this.result.charAt(i);
            }
            else {
                if (this.result.charAt(i - 1) == '+' || this.result.charAt(i - 1) == '-' || this.result.charAt(i - 1) == '*' || this.result.charAt(i - 1) == '/' || i == this.result.length - 1) {
                    this.check = false;
                    break;
                }
                if (this.operatorAdd1 == '') {
                    this.operatorAdd1 += this.result.charAt(i);
                }
                else if (this.operatorAdd2 == '') {
                    this.operatorAdd2 += this.result.charAt(i);
                }
                else {
                    this.operatorAdd1 = this.operatorAdd2;
                    this.operatorAdd2 = this.result.charAt(i);
                }
                if (this.operatorAdd2 != '') {
                    if (this.operatorAdd1 == '+') {
                        this.calculates = this.calculates + parseFloat(this.inputAdd);
                    }
                    if (this.operatorAdd1 == '-') {
                        this.calculates = this.calculates - parseFloat(this.inputAdd);
                    }
                    if (this.operatorAdd1 == '*') {
                        this.calculates = this.calculates * parseFloat(this.inputAdd);
                    }
                    if (this.operatorAdd1 == '/') {
                        this.calculates = this.calculates / parseFloat(this.inputAdd);
                    }
                }
                else {
                    this.calculates = parseFloat(this.inputAdd);
                }
                this.inputAdd = '';
            }
            if (i == this.result.length - 1) {
                if (this.operatorAdd2 == '') {
                    this.operatorAdd2 = this.operatorAdd1;
                }
                if (this.operatorAdd2 == '+') {
                    this.calculates = this.calculates + parseFloat(this.inputAdd);
                }
                else if (this.operatorAdd2 == '-') {
                    this.calculates = this.calculates - parseFloat(this.inputAdd);
                }
                else if (this.operatorAdd2 == '*') {
                    this.calculates = this.calculates * parseFloat(this.inputAdd);
                }
                else if (this.operatorAdd2 == '/') {
                    this.calculates = this.calculates / parseFloat(this.inputAdd);
                }
                else {
                    this.calculates = parseFloat(this.inputAdd);
                }
            }
        }
        this.result = '';
        if (this.check) {
            this.result = String(this.calculates);
        }
        else {
            this.result = 'Wrong input';
        }
        this.calculates = 0;
        this.inputAdd = '';
        this.operatorAdd1 = '';
        this.operatorAdd2 = '';
    };
    AppComponent = __decorate([
        (0, core_1.Component)({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
