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
    var ConfirmComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ConfirmComponent = (function () {
                function ConfirmComponent() {
                    this.myself = { name: '', age: '' };
                    this.isFilled = false;
                    this.isValid = false;
                    this.confirmed = new core_1.EventEmitter();
                }
                ConfirmComponent.prototype.onKeyup = function () {
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
                ConfirmComponent.prototype.onConfirm = function () {
                    this.confirmed.emit(this.myself);
                };
                ConfirmComponent = __decorate([
                    core_1.Component({
                        selector: 'my-confirm',
                        template: "\n<h1>you submitted is this correct</h1>\n<p>your name is <span>{{myself.name}}</span> and  you're' <span>{{myself.age}}</span></p>\n<div>\n\t<label for=\"name\">Your name</label>\n\t<input type=\"text\" id=\"name\" [(ngModel)]=\"myself.name\" (keyup)=\"onKeyup()\">\n</div>\n\n<div>\n\t<label for=\"age\">Your age</label>\n\t<input type=\"text\" id=\"age\" [(ngModel)]=\"myself.age\" (keyup)=\"onKeyup()\">\n</div>\n<br>\n<div class=\"\">Filled out: {{isFilled ? 'yes' : 'no'}}</div>\n<div class=\"\">Valid {{isValid ? 'Yes' : 'No'}}</div>\n<br>\n<button [disabled]=\"!isValid\" (click)=\"onConfirm()\">Submit</button>\n\t",
                        inputs: ['myself'],
                        outputs: ['confirmed']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ConfirmComponent);
                return ConfirmComponent;
            }());
            exports_1("ConfirmComponent", ConfirmComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBMkJBO2dCQUFBO29CQUNDLFdBQU0sR0FBRyxFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQUUsRUFBQyxDQUFDO29CQUM3QixhQUFRLEdBQUcsS0FBSyxDQUFDO29CQUNqQixZQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNoQixjQUFTLEdBQUcsSUFBSSxtQkFBWSxFQUErQixDQUFDO2dCQXFCN0QsQ0FBQztnQkFsQkEsa0NBQU8sR0FBUDtvQkFDQSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzt3QkFDdEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3JCLENBQUM7b0JBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ1IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7b0JBQ3RCLENBQUM7b0JBRUQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQzlELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO29CQUNwQixDQUFDO29CQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNSLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNyQixDQUFDO2dCQUNGLENBQUM7Z0JBR0Esb0NBQVMsR0FBVDtvQkFDQSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ2pDLENBQUM7Z0JBakRGO29CQUFDLGdCQUFTLENBQUU7d0JBRVgsUUFBUSxFQUFFLFlBQVk7d0JBQ3RCLFFBQVEsRUFBRSxpbkJBaUJUO3dCQUNELE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQzt3QkFDbEIsT0FBTyxFQUFFLENBQUMsV0FBVyxDQUFDO3FCQUN0QixDQUFDOztvQ0FBQTtnQkEyQkYsdUJBQUM7WUFBRCxDQXpCQSxBQXlCQyxJQUFBO1lBekJELCtDQXlCQyxDQUFBIiwiZmlsZSI6ImJpbmRpbmdzL2NvbmZpcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5cbkBDb21wb25lbnQgKHtcblx0XG5cdHNlbGVjdG9yOiAnbXktY29uZmlybScsXG5cdHRlbXBsYXRlOiBgXG48aDE+eW91IHN1Ym1pdHRlZCBpcyB0aGlzIGNvcnJlY3Q8L2gxPlxuPHA+eW91ciBuYW1lIGlzIDxzcGFuPnt7bXlzZWxmLm5hbWV9fTwvc3Bhbj4gYW5kICB5b3UncmUnIDxzcGFuPnt7bXlzZWxmLmFnZX19PC9zcGFuPjwvcD5cbjxkaXY+XG5cdDxsYWJlbCBmb3I9XCJuYW1lXCI+WW91ciBuYW1lPC9sYWJlbD5cblx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgWyhuZ01vZGVsKV09XCJteXNlbGYubmFtZVwiIChrZXl1cCk9XCJvbktleXVwKClcIj5cbjwvZGl2PlxuXG48ZGl2PlxuXHQ8bGFiZWwgZm9yPVwiYWdlXCI+WW91ciBhZ2U8L2xhYmVsPlxuXHQ8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImFnZVwiIFsobmdNb2RlbCldPVwibXlzZWxmLmFnZVwiIChrZXl1cCk9XCJvbktleXVwKClcIj5cbjwvZGl2PlxuPGJyPlxuPGRpdiBjbGFzcz1cIlwiPkZpbGxlZCBvdXQ6IHt7aXNGaWxsZWQgPyAneWVzJyA6ICdubyd9fTwvZGl2PlxuPGRpdiBjbGFzcz1cIlwiPlZhbGlkIHt7aXNWYWxpZCA/ICdZZXMnIDogJ05vJ319PC9kaXY+XG48YnI+XG48YnV0dG9uIFtkaXNhYmxlZF09XCIhaXNWYWxpZFwiIChjbGljayk9XCJvbkNvbmZpcm0oKVwiPlN1Ym1pdDwvYnV0dG9uPlxuXHRgLFxuXHRpbnB1dHM6IFsnbXlzZWxmJ10sXG5cdG91dHB1dHM6IFsnY29uZmlybWVkJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBDb25maXJtQ29tcG9uZW50IHtcblx0bXlzZWxmID0ge25hbWU6ICcnLCBhZ2U6ICcnfTtcblx0aXNGaWxsZWQgPSBmYWxzZTtcblx0aXNWYWxpZCA9IGZhbHNlO1xuXHRjb25maXJtZWQgPSBuZXcgRXZlbnRFbWl0dGVyPHtuYW1lOiBzdHJpbmcsIGFnZTogc3RyaW5nfT4oKTtcblxuXG5cdG9uS2V5dXAoKSB7XG5cdGlmICh0aGlzLm15c2VsZi5uYW1lICE9ICcnICYmIHRoaXMubXlzZWxmLmFnZSAhPSAnJykge1xuXHR0aGlzLmlzRmlsbGVkID0gdHJ1ZTtcblx0fSBlbHNlIHtcblx0dGhpcy5pc0ZpbGxlZCA9IGZhbHNlO1xuXHR9XG5cblx0aWYgKHRoaXMubXlzZWxmLm5hbWUgIT0gJycgJiYgL15cXGQrJC8udGVzdCh0aGlzLm15c2VsZi5hZ2UpKSB7XG5cdHRoaXMuaXNWYWxpZCA9IHRydWU7XG5cdH0gZWxzZSB7XG5cdHRoaXMuaXNWYWxpZCA9IGZhbHNlO1xuXHR9XG59XG5cblxuXHRvbkNvbmZpcm0oKSB7XG5cdHRoaXMuY29uZmlybWVkLmVtaXQodGhpcy5teXNlbGYpO1xuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
