import faker from '@faker-js/faker';

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
    address: string;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
      address: faker.address.city(),
    };
  }
}
