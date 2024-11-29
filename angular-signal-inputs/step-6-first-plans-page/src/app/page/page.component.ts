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

  // Base price from which all other prices are calculated
  basePrice = 0.1;

  // Base storage size for plans (TB)
  baseStorage = 2;
}