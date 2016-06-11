import {Component} from 'angular2/core';
import {InputComponent} from "./bindings/input.component";
import {ConfirmComponent} from "./bindings/confirm.component";

@Component({ 

selector: 'app', 
template: `
<div class="container">
	<my-input (submitted)="onSubmit($event)" [myself]="confirmedMyself"></my-input>

</div>	

<div class="container">
	<my-confirm (confirmed)="onConfirm($event)" [myself]="myself"></my-confirm>

</div>

`, 

directives: [InputComponent, ConfirmComponent]

})


export class AppComponent {

myself = {name: '', age: ''};
confirmedMyself = {name: '', age: ''};

onSubmit(myself: {name: myself.name, age: myself.age}) {
	this.myself = myself;
}
 onConfirm(myself: {name: string, age: string}) {
 this.confirmedMyself = {name: myself.name, age: myself.age};
 }
}
