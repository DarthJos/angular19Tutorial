import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.css'
})
export class LinkedSignalComponent {
  firstName = signal<string>("Josi");
  lastName = signal<string>("Reyes");

  fullName = linkedSignal({
    source: this.firstName,
    computation: (newOption, previous) => {
      const fullName = newOption + " " + this.lastName();
      return fullName;
    }
  })

  changeName() {
    this.firstName.set("JOSIMAR");
  }
}
