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
}
