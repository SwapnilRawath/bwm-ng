import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class MapService {
    private geoCoder;
    private locationCache: any = {};
    constructor() {}
    
    public geocodeLocation(location: string): Observable<any> {
        this.geoCoder = new (<any>window).google.maps.Geocoder();
        return new Observable((observer) => {
            this.geoCoder.geocode({address: location}, (result, status) => {
                if (status === 'OK') {
                    const geometry = result[0].geometry.location;
                    const coordinates = {lat: geometry.lat(), lng: geometry.lng()};
                    observer.next(coordinates);
                } else {
                    observer.error('Locatin cannot be geocoded');
                }
            });
        });
    }
}