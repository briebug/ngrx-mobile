import { Component, Input, OnChanges, SimpleChanges, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Customer } from '../../app/state/customer/customer.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { takeWhile, skip, debounceTime } from 'rxjs/operators';

/**
 * Generated class for the CustomerDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'customer-details',
  templateUrl: 'customer-details.html'
})
export class CustomerDetailsComponent implements OnChanges, OnDestroy {
  @Input() customer: Customer;
  @Output() customerChange = new EventEmitter<Customer>();

  customerForm: FormGroup;
  private alive = true;

  constructor(private fb: FormBuilder) {
    this.buildForm();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['customer'] && changes['customer'].currentValue) {
      this.customerForm.patchValue(this.customer);
    }
  }

  ngOnDestroy() {
    this.alive = false;
  }

  buildForm() {
    console.log('buildForm');
    this.customerForm = this.fb.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });

    this.customerForm.valueChanges
      .pipe(takeWhile(() => this.alive), skip(1), debounceTime(500))
      .subscribe(value => {
        if (!this.customerForm.valid) {
          return;
        }

        this.customerChange.emit(value);
      });
  }
}
