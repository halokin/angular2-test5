import {Component, EventEmitter} from 'angular2/core';

@Component ({
	
	selector: 'my-confirm',
	template: `
<h1>you submitted is this correct</h1>
<p>your name is <span>{{myself.name}}</span> and  you're' <span>{{myself.age}}</span></p>
<div>
	<label for="name">Your name</label>
	<input type="text" id="name" [(ngModel)]="myself.name" (keyup)="onKeyup()">
</div>

<div>
	<label for="age">Your age</label>
	<input type="text" id="age" [(ngModel)]="myself.age" (keyup)="onKeyup()">
</div>
<br>
<div class="">Filled out: {{isFilled ? 'yes' : 'no'}}</div>
<div class="">Valid {{isValid ? 'Yes' : 'No'}}</div>
<br>
<button [disabled]="!isValid" (click)="onConfirm()">Submit</button>
	`,
	inputs: ['myself'],
	outputs: ['confirmed']
})

export class ConfirmComponent {
	myself = {name: '', age: ''};
	isFilled = false;
	isValid = false;
	confirmed = new EventEmitter<{name: string, age: string}>();


	onKeyup() {
	if (this.myself.name != '' && this.myself.age != '') {
	this.isFilled = true;
	} else {
	this.isFilled = false;
	}

	if (this.myself.name != '' && /^\d+$/.test(this.myself.age)) {
	this.isValid = true;
	} else {
	this.isValid = false;
	}
}


	onConfirm() {
	this.confirmed.emit(this.myself);
	}
}