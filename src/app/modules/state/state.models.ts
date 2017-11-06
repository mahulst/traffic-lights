import { TrafficLightsState } from "./traffic-lights/traffic-lights.models";
import { CarsState } from "./cars/cars.models";

export interface AppState {
  trafficLights: TrafficLightsState;
  cars: CarsState;
}
