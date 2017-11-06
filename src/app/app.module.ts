import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { TrafficLightComponent } from "./modules/intersection/traffic-light/traffic-light.component";
import { IntersectionComponent } from "./modules/intersection/intersection.component";
import { CarComponent } from "./modules/intersection/car/car.component";
import { StateModule } from "./modules/state/state.module";

@NgModule({
  declarations: [
    AppComponent,
    TrafficLightComponent,
    IntersectionComponent,
    CarComponent
  ],
  imports: [BrowserModule, StateModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
