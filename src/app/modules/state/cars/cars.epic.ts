import "rxjs/add/observable/interval";
import "rxjs/add/observable/empty";
import "rxjs/add/observable/from";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/withLatestFrom";
// TODO: move all adds to a separate file
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Action, Store } from "@ngrx/store";
import { Effect } from "@ngrx/effects";
import { v4 as uuid } from "uuid";

import { AddCar, MoveCar } from "./cars.action";
import { AppState } from "../state.models";
import { LightState } from "../../../types/TrafficLight";

const maxCarsUntilTrafficLight = 6;
const progressToTrafficLight = 125;
const widthOfCar = 24;

@Injectable()
export class CarsEffects {
  appState$: Observable<AppState>;

  @Effect()
  addCars$: Observable<Action> = Observable
    .interval(3000)
    .map(() => new AddCar({ id: uuid(), lane: 1 }));

  @Effect()
  moveCars$: Observable<Action> = Observable
    .interval(50)
    .withLatestFrom(this.store.select(s => s))
    .mergeMap(([, state]) => {
      const movements: Action[] = [];

      state.cars.cars.forEach(car => {
        // Get traffic light on lane of the car
        const trafficLight = state.trafficLights.trafficLights
         .filter(light => light.id === car.lane) // TODO: car.lane should be lightId
         .pop();

        // get position from
        const carsOnLane = state.cars.cars.filter(c => c.lane === car.lane);
        const carsInFrontUntilTrafficLight = carsOnLane.filter(c => c.progress < (progressToTrafficLight + 1) && c.progress > car.progress);

        let canCarMove = false;
        if (trafficLight && trafficLight.color === LightState.Green) {
          canCarMove = true;
        } else if (car.progress < (progressToTrafficLight - carsInFrontUntilTrafficLight.length * widthOfCar)) {
          canCarMove = true;
        } else if (car.progress > progressToTrafficLight) {
          canCarMove = true;
        }

        if (canCarMove) {
          movements.push(new MoveCar({ id: car.id }));
        }
      });
      return Observable.from(movements);
    });


  constructor (private store: Store<AppState>) {}
}
