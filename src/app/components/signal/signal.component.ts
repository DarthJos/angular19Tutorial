import { ChangeDetectionStrategy, Component, signal } from '@angular/core';


@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css'
})

export class SignalComponent {
  firstName = signal("Josimar");
  lastName = signal<string>("Reyes");
  courseName: string = "Angular";
  rollNo = signal<number>(0);

  constructor() {
    const value = this.firstName();
    setTimeout(()=>{
      this.courseName = "ReactJS";
      this.firstName.set("Luis Alberto")
    }, 5000);
  }

  onIncrement() {
    this.rollNo.update(oldValue => oldValue + 1)
  }
}
