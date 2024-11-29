import { Component } from '@angular/core';
import { PlanComponent } from '../plan/plan.component';

@Component({
  selector: 'app-page',
  imports: [PlanComponent],
  templateUrl: './page.component.html'
})
export class PageComponent {
  // Default price display mode on the page
  displayMode = 'hour';

  // Test Function
  updateMode() {
    this.displayMode = 'test';
    this.displayMode = 'min';
  }
}