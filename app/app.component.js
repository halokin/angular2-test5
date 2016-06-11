System.register(['angular2/core', "./bindings/input.component", "./bindings/confirm.component"], function(exports_1, context_1) {
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
    var core_1, input_component_1, confirm_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (input_component_1_1) {
                input_component_1 = input_component_1_1;
            },
            function (confirm_component_1_1) {
                confirm_component_1 = confirm_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.myself = { name: '', age: '' };
                    this.confirmedMyself = { name: '', age: '' };
                }
                AppComponent.prototype.onSubmit = function (myself) {
                    this.myself = myself;
                };
                AppComponent.prototype.onConfirm = function (myself) {
                    this.confirmedMyself = { name: myself.name, age: myself.age };
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app',
                        template: "\n<div class=\"container\">\n\t<my-input (submitted)=\"onSubmit($event)\" [myself]=\"confirmedMyself\"></my-input>\n\n</div>\t\n\n<div class=\"container\">\n\t<my-confirm (confirmed)=\"onConfirm($event)\" [myself]=\"myself\"></my-confirm>\n\n</div>\n\n",
                        directives: [input_component_1.InputComponent, confirm_component_1.ConfirmComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUF5QkE7Z0JBQUE7b0JBRUEsV0FBTSxHQUFHLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFDLENBQUM7b0JBQzdCLG9CQUFlLEdBQUcsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUMsQ0FBQztnQkFRdEMsQ0FBQztnQkFORCwrQkFBUSxHQUFSLFVBQVMsTUFBNEM7b0JBQ3BELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO2dCQUN0QixDQUFDO2dCQUNBLGdDQUFTLEdBQVQsVUFBVSxNQUFtQztvQkFDN0MsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxFQUFDLENBQUM7Z0JBQzVELENBQUM7Z0JBL0JGO29CQUFDLGdCQUFTLENBQUM7d0JBRVgsUUFBUSxFQUFFLEtBQUs7d0JBQ2YsUUFBUSxFQUFFLDhQQVdUO3dCQUVELFVBQVUsRUFBRSxDQUFDLGdDQUFjLEVBQUUsb0NBQWdCLENBQUM7cUJBRTdDLENBQUM7O2dDQUFBO2dCQWNGLG1CQUFDO1lBQUQsQ0FYQSxBQVdDLElBQUE7WUFYRCx1Q0FXQyxDQUFBIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0lucHV0Q29tcG9uZW50fSBmcm9tIFwiLi9iaW5kaW5ncy9pbnB1dC5jb21wb25lbnRcIjtcbmltcG9ydCB7Q29uZmlybUNvbXBvbmVudH0gZnJvbSBcIi4vYmluZGluZ3MvY29uZmlybS5jb21wb25lbnRcIjtcblxuQENvbXBvbmVudCh7IFxuXG5zZWxlY3RvcjogJ2FwcCcsIFxudGVtcGxhdGU6IGBcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cblx0PG15LWlucHV0IChzdWJtaXR0ZWQpPVwib25TdWJtaXQoJGV2ZW50KVwiIFtteXNlbGZdPVwiY29uZmlybWVkTXlzZWxmXCI+PC9teS1pbnB1dD5cblxuPC9kaXY+XHRcblxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuXHQ8bXktY29uZmlybSAoY29uZmlybWVkKT1cIm9uQ29uZmlybSgkZXZlbnQpXCIgW215c2VsZl09XCJteXNlbGZcIj48L215LWNvbmZpcm0+XG5cbjwvZGl2PlxuXG5gLCBcblxuZGlyZWN0aXZlczogW0lucHV0Q29tcG9uZW50LCBDb25maXJtQ29tcG9uZW50XVxuXG59KVxuXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuXG5teXNlbGYgPSB7bmFtZTogJycsIGFnZTogJyd9O1xuY29uZmlybWVkTXlzZWxmID0ge25hbWU6ICcnLCBhZ2U6ICcnfTtcblxub25TdWJtaXQobXlzZWxmOiB7bmFtZTogbXlzZWxmLm5hbWUsIGFnZTogbXlzZWxmLmFnZX0pIHtcblx0dGhpcy5teXNlbGYgPSBteXNlbGY7XG59XG4gb25Db25maXJtKG15c2VsZjoge25hbWU6IHN0cmluZywgYWdlOiBzdHJpbmd9KSB7XG4gdGhpcy5jb25maXJtZWRNeXNlbGYgPSB7bmFtZTogbXlzZWxmLm5hbWUsIGFnZTogbXlzZWxmLmFnZX07XG4gfVxufVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
