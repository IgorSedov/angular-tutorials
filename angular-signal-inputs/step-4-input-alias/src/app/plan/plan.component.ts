import { Component, input } from '@angular/core';

@Component({
  selector: 'app-plan',
  imports: [],
  templateUrl: './plan.component.html'
})
export class PlanComponent {
  // Optional Input
  priceMode = input('month', {alias: 'planType'});

  // Required Input
  // priceMode = input.required({alias: 'planType'});

  getMode() {
    return this.priceMode();
  }
}