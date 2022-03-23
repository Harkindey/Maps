import { User } from './User';
import { Company } from './Company';

interface IMappable {
  location: {
    lng: number;
    lat: number;
  };
}
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(public divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 5,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: IMappable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lng: mappable.location.lng,
        lat: mappable.location.lat,
      },
    });
  }

  //   addCompanyMarker(company: Company): void {
  //     new google.maps.Marker({
  //       map: this.googleMap,
  //       position: {
  //         lng: company.location.lng,
  //         lat: company.location.lat,
  //       },
  //     });
  //   }
}
