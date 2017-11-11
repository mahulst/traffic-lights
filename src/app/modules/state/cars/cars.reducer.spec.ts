import { AddCar, MoveCar } from "./cars.action";
import { carsReducer } from "./cars.reducer";

describe("CarsReducer", () => {
  it("should only change the progress of the car on MOVE_CAR", () => {
    const initialState = {
      cars: [
        { id: "1", progress: 0, lane: 1 },
        { id: "2", progress: 0, lane: 1 }
      ]
    };
    const action = new MoveCar({ id: "1" });
    const newState = carsReducer(initialState, action);
    expect(newState.cars[0].progress).toBe(1);
    expect(newState.cars[1].progress).toBe(0);
  });

  it("should add a new car on ADD_CAR to the correct lane with an initial progress of 0", () => {
    const initialState = { cars: [] };
    const action = new AddCar({ id: "123", lane: 1 });
    const newState = carsReducer(initialState, action);

    expect(newState.cars.length).toBe(1);
    expect(newState.cars[0].lane).toBe(1);
    expect(newState.cars[0].progress).toBe(0);
  });
});
