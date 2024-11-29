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

  changeMode() {
    this.displayMode = (this.displayMode === 'hour') ? 'month' : 'hour';
  }
}