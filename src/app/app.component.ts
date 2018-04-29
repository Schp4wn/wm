import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WorldCup ticker';
  subtitle = 'this is my subtitle';
  paragraph = 'this is my <p>';

  constructor() {
    
  }
  ngOnInit() {
   
  }
  
  

}
