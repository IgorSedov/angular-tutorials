import { Component, input, computed, effect } from '@angular/core';

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

  // Plan Price (computed signal)
  price = computed(() => {
    if (this.priceMode() === 'month') {
      return Math.round(this.hourlyPrice() * 24 * 30);
    }
    return this.hourlyPrice();
  });

  // Plan Discount (computed signal)
  discount = computed(() => {
    return (this.hourlyPrice() > 0.2) ? 10 : 0;
  });

  /**
   * We can use Signal Inputs together with Signal Effects
   */
  private logDiscount = effect(() => {
    console.log(this.discount() + '%');
    console.log('Mode: ' + this.priceMode());
  });
  private logPrice = effect(() => {
    console.log(this.priceMode() + ':' + this.priceMode());
  });

  /**
   * Demo
   * Signal Inputs, like Computed Signals, are read-only
   */
  test() {
    this.priceMode(); // Good (read-only)
    // this.priceMode = 'week'; // Error
    // this.priceMode.set('week'); // Error

    this.name(); // Good (read-only)
    // this.name = 'test'; // Error
    // this.name.set('test'); // Error

    this.hourlyPrice(); // Good (read-only)
    // this.hourlyPrice = 5; // Error
    // this.hourlyPrice.set(5); // Error

    this.storage(); // Good (read-only)
    // this.storage = 100; // Error
    // this.storage.set(100); // Error
  }
}