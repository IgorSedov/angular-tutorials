import { Component, input } from '@angular/core';

@Component({
  selector: 'app-plan',
  imports: [],
  templateUrl: './plan.component.html'
})
export class PlanComponent {
  priceMode = input('month'); // Price Mode (with a default value)
  name = input('default'); // Plan Name (with a default value)
  hourlyPrice = input(0); // Price per hour (with a default value)
  storage = input(0); // Plan Storage in TB (with a default value)
}