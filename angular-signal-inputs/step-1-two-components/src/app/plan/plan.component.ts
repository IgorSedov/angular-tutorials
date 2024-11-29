import { Component, input } from '@angular/core';

@Component({
  selector: 'app-plan',
  imports: [],
  templateUrl: './plan.component.html'
})
export class PlanComponent {
  priceMode = input('month'); // Signal Input with a default value
}
