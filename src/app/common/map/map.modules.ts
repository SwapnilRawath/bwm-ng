
import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { MapService } from './map.service';
@NgModule({
  declarations: [
    MapComponent 
  ],
  exports: [
    MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDDVP9eYj9QlLFw8f-SJlaGNc4_QSpawWo'
    })
  ],
  providers: [
    MapService
  ]
 
})
export class MapModule { }
