import { Component } from '@angular/core';
import { AppDataService } from '../../services/app-data.service';
import { Observable } from 'rxjs';
import { Post } from '../../common/interfaces';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'observable-examples',
  imports: [CommonModule],
  templateUrl: './observable-examples.component.html',
  styleUrl: './observable-examples.component.css'
})
export class ObservableExamplesComponent {
  public postData$!: Observable<Post>;

  //COLD observable
  //Para este ejemplo en vez de usar el subscribe explicito usamos el pipe Async en el html
  constructor(private appDataService: AppDataService) {
    this.postData$ = this.appDataService.getPost();
  }
}
