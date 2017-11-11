import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { EffectsModule } from "@ngrx/effects";
import { trafficLightsReducer } from "./traffic-lights/traffic-lights.reducer";
import { carsReducer } from "./cars/cars.reducer";
import { CarsEffects } from "./cars/cars.effects";

@NgModule({
  imports: [
    StoreModule.forRoot({
      trafficLights: trafficLightsReducer,
      cars: carsReducer
    }),
    EffectsModule.forRoot([CarsEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ]
})
export class StateModule {}
