import {
  discardPeriodicTasks,
  fakeAsync,
  TestBed,
  tick
} from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { Observable } from "rxjs/Observable";

import { CarsEffects } from "./cars.effects";
import { Store } from "@ngrx/store";
import { LightState } from "../../../types/TrafficLight";
import { ReplaySubject } from "rxjs/ReplaySubject";

describe("My Effects", () => {
  let effects: CarsEffects;
  let actions: Observable<any>;
  const stub: any = {};
  beforeEach(() => {
    stub.Store = jasmine.createSpyObj("Store", ["select"]);
    stub.StoreSelect$ = new ReplaySubject();

    stub.Store.select.and.returnValue(stub.StoreSelect$.asObservable());

    TestBed.configureTestingModule({
      imports: [
        // any modules needed
      ],

      providers: [
        { provide: Store, useValue: stub.Store },
        CarsEffects,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(CarsEffects);
  });

  it(
    "should add a car every three seconds on a random lane with a random unique id",
    fakeAsync(() => {
      effects.addCars$.subscribe((result: any) => {
        expect(result.type).toBe("[Cars] Add car");
        expect(result.payload.id).toEqual(jasmine.any(String));
        expect(result.payload.lane).toEqual(jasmine.any(Number));
      });
      tick(3001);

      discardPeriodicTasks();
    })
  );

  describe("moveCars$", () => {
    it(
      "should dispatch a MOVE_CAR action for every car on a lane with a green light",
      fakeAsync(() => {
        const trafficLights = {
          trafficLights: [{ id: 1, color: LightState.Green }]
        };
        const cars = { cars: [{ id: "1", progress: 500, lane: 1 }] };
        stub.StoreSelect$.next({ trafficLights, cars });
        effects.moveCars$.subscribe((result: any) => {
          expect(result.type).toBe("[Cars] Move car");
          expect(result.payload.id).toEqual("1");
        });
        tick(50);

        discardPeriodicTasks();
      })
    );

    it(
      "should dispatch a MOVE_CAR action for cars passed the traffic light",
      fakeAsync(() => {
        const trafficLights = {
          trafficLights: [{ id: 1, color: LightState.Red }]
        };
        const cars = { cars: [{ id: "1", progress: 500, lane: 1 }] };
        stub.StoreSelect$.next({ trafficLights, cars });
        effects.moveCars$.subscribe((result: any) => {
          expect(result.type).toBe("[Cars] Move car");
          expect(result.payload.id).toEqual("1");
        });
        tick(51);

        discardPeriodicTasks();
      })
    );

    it(
      "should dispatch a MOVE_CAR action for cars with a red light and that have not yet reached the traffic light",
      fakeAsync(() => {
        const trafficLights = {
          trafficLights: [{ id: 1, color: LightState.Red }]
        };
        const cars = { cars: [{ id: "1", progress: 0, lane: 1 }] };
        stub.StoreSelect$.next({ trafficLights, cars });
        effects.moveCars$.subscribe((result: any) => {
          expect(result.type).toBe("[Cars] Move car");
          expect(result.payload.id).toEqual("1");
        });
        tick(51);

        discardPeriodicTasks();
      })
    );

    it(
      "should NOT dispatch a MOVE_CAR action for cars standing at a red traffic light",
      fakeAsync(() => {
        const trafficLights = {
          trafficLights: [{ id: 1, color: LightState.Red }]
        };
        const cars = { cars: [{ id: "1", progress: 125, lane: 1 }] };
        stub.StoreSelect$.next({ trafficLights, cars });
        effects.moveCars$.subscribe((result: any) => {
          throw new Error("Should not come here");
        });
        tick(51);

        discardPeriodicTasks();
      })
    );
  });
});
