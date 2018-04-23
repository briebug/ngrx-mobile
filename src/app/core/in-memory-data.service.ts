import { Customer } from '../state/customer/customer.model';

export class InMemoryDataService {
  createDb() {
    const customers = [
      { id: 1, firstName: 'Bob', lastName: 'Newman' } as Customer,
      { id: 2, firstName: 'Homer', lastName: 'Simpson' } as Customer,
      { id: 3, firstName: 'Tom', lastName: 'Slick' } as Customer,
      { id: 4, firstName: 'Jane', lastName: 'Doe' } as Customer
    ];

    return { customers };
  }
}
