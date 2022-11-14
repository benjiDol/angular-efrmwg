import { Component } from '@angular/core';
import { Measurement } from './model/measurement';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'measurement-input';

  units = ['°C','W','ppm','%']
  temperature = 17.3
  name = 'Wohnzimmer'
  unit = '°C'

}
