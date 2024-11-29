import { Component } from '@angular/core';
//Import a component for use in an application component
import { PageComponent } from './page/page.component';

@Component({
  selector: 'app-root',
  // Import a component for use in an application template
  imports: [PageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
