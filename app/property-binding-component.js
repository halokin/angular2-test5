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
    var core_1, core_2;
    var PropertyBindingComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            PropertyBindingComponent = (function () {
                function PropertyBindingComponent() {
                    this.name = '';
                    this.age = '10';
                    this.hobbiesChanged = new core_1.EventEmitter();
                }
                PropertyBindingComponent.prototype.onHobbiesChanged = function (hobbies) {
                    this.hobbiesChanged.emit(hobbies);
                };
                __decorate([
                    core_2.Input('myAge'), 
                    __metadata('design:type', Object)
                ], PropertyBindingComponent.prototype, "age", void 0);
                PropertyBindingComponent = __decorate([
                    core_1.Component({
                        selector: 'my-property-binding',
                        template: "\n  <h2>this is the child component</h2>\n  Name:{{name}}\n  Age{{age}}\n  <h4>My Hobbies</h4>\n\n<input type=\"text\" (keyup)=\"onHobbiesChanged(hobbies.value)\" #hobbies>\n  ",
                        inputs: ['name:myName'],
                        outputs: ['hobbiesChanged']
                    }), 
                    __metadata('design:paramtypes', [])
                ], PropertyBindingComponent);
                return PropertyBindingComponent;
            }());
            exports_1("PropertyBindingComponent", PropertyBindingComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BlcnR5LWJpbmRpbmctY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQWdCQTtnQkFBQTtvQkFDQSxTQUFJLEdBQUcsRUFBRSxDQUFDO29CQUNNLFFBQUcsR0FBRyxJQUFJLENBQUM7b0JBQzNCLG1CQUFjLEdBQUcsSUFBSSxtQkFBWSxFQUFVLENBQUM7Z0JBSzVDLENBQUM7Z0JBSkQsbURBQWdCLEdBQWhCLFVBQWlCLE9BQWU7b0JBQzlCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUVsQyxDQUFDO2dCQUxIO29CQUFDLFlBQUssQ0FBQyxPQUFPLENBQUM7O3FFQUFBO2dCQWZmO29CQUFDLGdCQUFTLENBQUM7d0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjt3QkFDL0IsUUFBUSxFQUFDLGtMQU9SO3dCQUNELE1BQU0sRUFBRSxDQUFDLGFBQWEsQ0FBQzt3QkFDdkIsT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7cUJBQzVCLENBQUM7OzRDQUFBO2dCQVNGLCtCQUFDO1lBQUQsQ0FSQSxBQVFDLElBQUE7WUFSRCwrREFRQyxDQUFBIiwiZmlsZSI6InByb3BlcnR5LWJpbmRpbmctY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0lucHV0fSBmcm9tICdhbmd1bGFyMi9jb3JlJzsgIFxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdteS1wcm9wZXJ0eS1iaW5kaW5nJyxcbiAgdGVtcGxhdGU6YFxuICA8aDI+dGhpcyBpcyB0aGUgY2hpbGQgY29tcG9uZW50PC9oMj5cbiAgTmFtZTp7e25hbWV9fVxuICBBZ2V7e2FnZX19XG4gIDxoND5NeSBIb2JiaWVzPC9oND5cblxuPGlucHV0IHR5cGU9XCJ0ZXh0XCIgKGtleXVwKT1cIm9uSG9iYmllc0NoYW5nZWQoaG9iYmllcy52YWx1ZSlcIiAjaG9iYmllcz5cbiAgYCxcbiAgaW5wdXRzOiBbJ25hbWU6bXlOYW1lJ10sIFxuICBvdXRwdXRzOiBbJ2hvYmJpZXNDaGFuZ2VkJ11cbn0pXG5leHBvcnQgY2xhc3MgUHJvcGVydHlCaW5kaW5nQ29tcG9uZW50e1xubmFtZSA9ICcnO1xuQElucHV0KCdteUFnZScpIGFnZSA9ICcxMCc7XG5ob2JiaWVzQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xub25Ib2JiaWVzQ2hhbmdlZChob2JiaWVzOiBzdHJpbmcpe1xuICB0aGlzLmhvYmJpZXNDaGFuZ2VkLmVtaXQoaG9iYmllcyk7XG5cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
