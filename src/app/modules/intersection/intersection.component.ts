import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { LightState, TrafficLight } from "../../types/TrafficLight";
import { Observable } from "rxjs/Observable";
import { AppState } from "../state/state.models";
import { ToggleTrafficLight } from "../state/traffic-lights/traffic-lights.action";
import "rxjs/add/operator/map";
import { Car } from "../state/cars/cars.models";

@Component({
  selector: "app-intersection",
  templateUrl: "./intersection.component.html",
  styleUrls: ["./intersection.component.css"]
})
export class IntersectionComponent {
  public trafficLights$: Observable<TrafficLight[]>;
  public cars$: Observable<Car[]>;
  public lightState = LightState;

  constructor(private store: Store<AppState>) {
    this.trafficLights$ = this.store.select(s => s.trafficLights.trafficLights);
    this.cars$ = this.store.select(s => s.cars.cars);
  }

  toggleTrafficLight(id: number) {
    this.store.dispatch(new ToggleTrafficLight({ id }));
  }

  getTrafficLightById(id: number): Observable<TrafficLight | undefined> {
    return this.trafficLights$.map(lights => {
      return lights.filter(light => light.id === id).pop();
    });
  }

  getCarsOnLane(lane: number): Observable<Car[] | undefined> {
    return this.cars$.map(cars => {
      return cars.filter(car => car.lane === lane);
    });
  }
}
