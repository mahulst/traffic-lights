import "rxjs/add/observable/interval";
import "rxjs/add/observable/empty";
import "rxjs/add/observable/from";
import "rxjs/add/operator/do";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/withLatestFrom";

import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Action, Store } from "@ngrx/store";
import { Effect } from "@ngrx/effects";
import { v4 as uuid } from "uuid";

import { AddCar, MoveCar } from "./cars.action";
import { AppState } from "../state.models";
import { LightState } from "../../../types/TrafficLight";

const progressToTrafficLight = 125;
const widthOfCar = 24;

@Injectable()
export class CarsEffects {
  @Effect()
  addCars$: Observable<Action> = Observable.interval(3000).map(() => {
    const lane = Math.ceil(Math.random() * 4);
    return new AddCar({ id: uuid(), lane: lane });
  });

  @Effect()
  moveCars$: Observable<Action> = Observable.interval(50)
    .withLatestFrom(
      this.store.select(s => {
        return s;
      })
    )
    .mergeMap(([, state]) => {
      const movements: Action[] = [];
      state.cars.cars.forEach(car => {
        // Get traffic light on lane of the car
        const trafficLight = state.trafficLights.trafficLights
          .filter(light => light.id === car.lane)
          .pop();

        const carsOnLane = state.cars.cars.filter(c => c.lane === car.lane);
        const carsInFrontUntilTrafficLight = carsOnLane.filter(
          c =>
            c.progress < progressToTrafficLight + 1 && c.progress > car.progress
        );

        let canCarMove = false;
        if (trafficLight && trafficLight.color === LightState.Green) {
          // Light is green
          canCarMove = true;
        } else if (
          car.progress <
          progressToTrafficLight -
            carsInFrontUntilTrafficLight.length * widthOfCar
        ) {
          // Car is not yet at the stop light (keep in account amount of cars between current car and stoplight)
          canCarMove = true;
        } else if (car.progress > progressToTrafficLight) {
          // Car has passed the stoplight
          canCarMove = true;
        }

        if (canCarMove) {
          movements.push(new MoveCar({ id: car.id }));
        }
      });
      return Observable.from(movements);
    });

  constructor(private store: Store<AppState>) {}
}
