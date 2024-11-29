import { Component, input } from '@angular/core';

@Component({
  selector: 'app-plan',
  imports: [],
  templateUrl: './plan.component.html'
})
export class PlanComponent {
  // Required Input with the required type (without a default value)
  priceMode = input.required<string|number>();
  
  // Optional Input with the required type (with a default value)
  // priceMode = input<string|number>('month');
}