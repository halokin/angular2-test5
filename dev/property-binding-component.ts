import {Component, EventEmitter} from 'angular2/core';
import {Input} from 'angular2/core';  

@Component({
  selector: 'my-property-binding',
  template:`
  <h2>this is the child component</h2>
  Name:{{name}}
  Age{{age}}
  <h4>My Hobbies</h4>

<input type="text" (keyup)="onHobbiesChanged(hobbies.value)" #hobbies>
  `,
  inputs: ['name:myName'], 
  outputs: ['hobbiesChanged']
})
export class PropertyBindingComponent{
name = '';
@Input('myAge') age = '10';
hobbiesChanged = new EventEmitter<string>();
onHobbiesChanged(hobbies: string){
  this.hobbiesChanged.emit(hobbies);

  }
}
