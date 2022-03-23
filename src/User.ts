import faker from '@faker-js/faker';
import { IMappable } from './CustomMap';

export class User implements IMappable {
  name: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  color: string = 'red';

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
      address: faker.address.city(),
    };
  }

  markerContent(): string {
    return `User Name ; ${this.name}`;
  }
}
