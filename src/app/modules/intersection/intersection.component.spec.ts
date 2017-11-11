import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { IntersectionComponent } from "./intersection.component";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/empty";
import "rxjs/add/observable/of";
import { LightState } from "../../types/TrafficLight";
import { TrafficLightComponent } from "./traffic-light/traffic-light.component";
import { CarComponent } from "./car/car.component";
import { Subject } from "rxjs/Subject";
import { By } from "@angular/platform-browser";
import { ToggleTrafficLight } from "../state/traffic-lights/traffic-lights.action";

describe("IntersectionComponent", () => {
  let component: IntersectionComponent;
  let fixture: ComponentFixture<IntersectionComponent>;

  const stub: any = {};
  beforeEach(
    async(() => {
      stub.Store = jasmine.createSpyObj("Store", ["select", "dispatch"]);
      stub.StoreObservable = new Subject();
      stub.Store.select.and.returnValue(stub.StoreObservable);
      TestBed.configureTestingModule({
        declarations: [
          IntersectionComponent,
          TrafficLightComponent,
          CarComponent
        ],
        providers: [{ provide: Store, useValue: stub.Store }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(IntersectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe("Clicking a traffic light", () => {
    it("should dispatch a ToggleTrafficLight event with the correct id", () => {
      const trafficLight1 = { id: 1, color: LightState.Red };
      component.trafficLights$ = Observable.of([trafficLight1]);

      fixture.detectChanges();
      const trafficLightElement = fixture.debugElement.query(
        By.css("#traffic-light-1")
      );
      trafficLightElement.nativeElement.click();
      fixture.detectChanges();

      const expectedAction = new ToggleTrafficLight({ id: 1 });
      expect(stub.Store.dispatch).toHaveBeenCalledWith(expectedAction);
    });
  });

  describe("getTrafficLightById", () => {
    it("should return an observable with only cars of the given traffic light", () => {
      const trafficLight1 = { id: 1, color: LightState.Red };
      const trafficLight2 = { id: 2, color: LightState.Red };
      const trafficLight3 = { id: 3, color: LightState.Red };
      component.trafficLights$ = Observable.of([
        trafficLight1,
        trafficLight2,
        trafficLight3
      ]);

      const result = component.getTrafficLightById(3);
      result.subscribe(selectedTrafficLight => {
        expect(selectedTrafficLight).toBe(trafficLight3);
      });
    });
  });

  describe("getCarsOnLane", () => {
    it("should return an observable of lists of cars to draw on a given lane", () => {
      const car1 = { id: "1", progress: 0, lane: 1 };
      const car2 = { id: "2", progress: 0, lane: 2 };
      const car3 = { id: "3", progress: 0, lane: 3 };
      const car4 = { id: "4", progress: 0, lane: 1 };

      component.cars$ = Observable.of([car1, car2, car3, car4]);

      const result = component.getCarsOnLane(1);
      result.subscribe(selectedCars => {
        expect(selectedCars).toEqual([car1, car4]);
      });
    });
  });
});
