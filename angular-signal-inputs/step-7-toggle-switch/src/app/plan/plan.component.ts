import { Component, input } from '@angular/core';

@Component({
  selector: 'app-plan',
  imports: [],
  templateUrl: './plan.component.html'
})
export class PlanComponent {
  // Price Mode (optional input signal with a default value)
  priceMode = input('month');

  // Plan Name (optional input signal with a default value)
  name = input('default');

  // Price per hour (required input signal with a required type)
  hourlyPrice = input.required<number>();

  // Plan Storage in TB (required input signal with a required type)
  storage = input.required<number>();
}