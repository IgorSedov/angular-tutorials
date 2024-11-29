import { Component, input } from '@angular/core';

@Component({
  selector: 'app-plan',
  imports: [],
  templateUrl: './plan.component.html'
})
export class PlanComponent {
  priceMode = input('month', {
    transform: (value: string|number) => {
      return value + 'ly';
    },
    alias: 'mode'
  });
}