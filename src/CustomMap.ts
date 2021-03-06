export interface IMappable {
  location: {
    lng: number;
    lat: number;
  };
  markerContent(): string;
  colors: string;
}
export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(public divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: IMappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lng: mappable.location.lng,
        lat: mappable.location.lat,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infoWindow.open(this.googleMap, marker);
    });
  }
}
