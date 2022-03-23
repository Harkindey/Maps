import { User } from './User';
import { Company } from './Company';
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

  addUserMarker(user: User): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lng: user.location.lng,
        lat: user.location.lat,
      },
    });
  }
  addCompanyMarker(company: Company): void {}
}
