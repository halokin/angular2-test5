System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var InputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InputComponent = (function () {
                function InputComponent() {
                    this.myself = { name: '', age: '' };
                    this.isFilled = false;
                    this.isValid = false;
                    this.submitted = new core_1.EventEmitter();
                }
                InputComponent.prototype.onKeyup = function () {
                    if (this.myself.name != '' && this.myself.age != '') {
                        this.isFilled = true;
                    }
                    else {
                        this.isFilled = false;
                    }
                    if (this.myself.name != '' && /^\d+$/.test(this.myself.age)) {
                        this.isValid = true;
                    }
                    else {
                        this.isValid = false;
                    }
                };
                InputComponent.prototype.onSubmit = function () {
                    this.submitted.emit(this.myself);
                };
                InputComponent = __decorate([
                    core_1.Component({
                        selector: 'my-input',
                        template: "\n<h1> details please</h1>\n<div>\n\t<label for=\"name\">Your name</label>\n\t<input type=\"text\" id=\"name\" [(ngModel)]=\"myself.name\" (keyup)=\"onKeyup()\">\n</div>\n\n<div>\n\t<label for=\"age\">Your age</label>\n\t<input type=\"text\" id=\"age\" [(ngModel)]=\"myself.age\" (keyup)=\"onKeyup()\">\n</div>\n<br>\n<div class=\"\">Filled out: {{isFilled ? 'yes' : 'no'}}</div>\n<div class=\"\">Valid {{isValid ? 'Yes' : 'No'}}</div>\n<br>\n<button [disabled]=\"!isValid\" (click)=\"onSubmit()\">Submit</button>\n\t",
                        inputs: ['myself'],
                        outputs: ['submitted']
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputComponent);
                return InputComponent;
            }());
            exports_1("InputComponent", InputComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2lucHV0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQXdCQTtnQkFBQTtvQkFDQyxXQUFNLEdBQUcsRUFBQyxJQUFJLEVBQUMsRUFBRSxFQUFFLEdBQUcsRUFBQyxFQUFFLEVBQUMsQ0FBQztvQkFDM0IsYUFBUSxHQUFHLEtBQUssQ0FBQztvQkFDakIsWUFBTyxHQUFHLEtBQUssQ0FBQztvQkFDaEIsY0FBUyxHQUFHLElBQUksbUJBQVksRUFBK0IsQ0FBQztnQkFrQjdELENBQUM7Z0JBaEJBLGdDQUFPLEdBQVA7b0JBQ0EsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3RELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUNyQixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNSLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO29CQUN0QixDQUFDO29CQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM5RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztvQkFDcEIsQ0FBQztvQkFBQyxJQUFJLENBQUMsQ0FBQzt3QkFDUixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztvQkFDckIsQ0FBQztnQkFDRixDQUFDO2dCQUNELGlDQUFRLEdBQVI7b0JBQ0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNsQyxDQUFDO2dCQTNDRDtvQkFBQyxnQkFBUyxDQUFFO3dCQUNYLFFBQVEsRUFBRSxVQUFVO3dCQUNwQixRQUFRLEVBQUUsdWdCQWdCVDt3QkFDRCxNQUFNLEVBQUUsQ0FBQyxRQUFRLENBQUM7d0JBQ2xCLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztxQkFDdEIsQ0FBQzs7a0NBQUE7Z0JBdUJGLHFCQUFDO1lBQUQsQ0F0QkEsQUFzQkMsSUFBQTtZQXRCRCwyQ0FzQkMsQ0FBQSIsImZpbGUiOiJiaW5kaW5ncy9pbnB1dC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCAoe1xuXHRzZWxlY3RvcjogJ215LWlucHV0Jyxcblx0dGVtcGxhdGU6IGBcbjxoMT4gZGV0YWlscyBwbGVhc2U8L2gxPlxuPGRpdj5cblx0PGxhYmVsIGZvcj1cIm5hbWVcIj5Zb3VyIG5hbWU8L2xhYmVsPlxuXHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiBbKG5nTW9kZWwpXT1cIm15c2VsZi5uYW1lXCIgKGtleXVwKT1cIm9uS2V5dXAoKVwiPlxuPC9kaXY+XG5cbjxkaXY+XG5cdDxsYWJlbCBmb3I9XCJhZ2VcIj5Zb3VyIGFnZTwvbGFiZWw+XG5cdDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWdlXCIgWyhuZ01vZGVsKV09XCJteXNlbGYuYWdlXCIgKGtleXVwKT1cIm9uS2V5dXAoKVwiPlxuPC9kaXY+XG48YnI+XG48ZGl2IGNsYXNzPVwiXCI+RmlsbGVkIG91dDoge3tpc0ZpbGxlZCA/ICd5ZXMnIDogJ25vJ319PC9kaXY+XG48ZGl2IGNsYXNzPVwiXCI+VmFsaWQge3tpc1ZhbGlkID8gJ1llcycgOiAnTm8nfX08L2Rpdj5cbjxicj5cbjxidXR0b24gW2Rpc2FibGVkXT1cIiFpc1ZhbGlkXCIgKGNsaWNrKT1cIm9uU3VibWl0KClcIj5TdWJtaXQ8L2J1dHRvbj5cblx0YCxcblx0aW5wdXRzOiBbJ215c2VsZiddLFxuXHRvdXRwdXRzOiBbJ3N1Ym1pdHRlZCddXG59KVxuZXhwb3J0IGNsYXNzIElucHV0Q29tcG9uZW50IHtcblx0bXlzZWxmID0ge25hbWU6JycsIGFnZTonJ307XG5cdGlzRmlsbGVkID0gZmFsc2U7XG5cdGlzVmFsaWQgPSBmYWxzZTtcblx0c3VibWl0dGVkID0gbmV3IEV2ZW50RW1pdHRlcjx7bmFtZTogc3RyaW5nLCBhZ2U6IHN0cmluZ30+KCk7XG5cblx0b25LZXl1cCgpIHtcblx0aWYgKHRoaXMubXlzZWxmLm5hbWUgIT0gJycgJiYgdGhpcy5teXNlbGYuYWdlICE9ICcnKSB7XG5cdHRoaXMuaXNGaWxsZWQgPSB0cnVlO1xuXHR9IGVsc2Uge1xuXHR0aGlzLmlzRmlsbGVkID0gZmFsc2U7XG5cdH1cblxuXHRpZiAodGhpcy5teXNlbGYubmFtZSAhPSAnJyAmJiAvXlxcZCskLy50ZXN0KHRoaXMubXlzZWxmLmFnZSkpIHtcblx0dGhpcy5pc1ZhbGlkID0gdHJ1ZTtcblx0fSBlbHNlIHtcblx0dGhpcy5pc1ZhbGlkID0gZmFsc2U7XG5cdH1cbn1cbm9uU3VibWl0KCl7XG5cdHRoaXMuc3VibWl0dGVkLmVtaXQodGhpcy5teXNlbGYpO1xufVxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
