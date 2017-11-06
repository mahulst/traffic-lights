import * as CarsActions from "./cars.action";
import { CarsState } from "./cars.models";

type Action = CarsActions.All;

const initialState = {
  cars: []
};

export function carsReducer(
  state: CarsState = initialState,
  action: Action
): CarsState {
  switch (action.type) {
    case CarsActions.MOVE_CAR:
      const newCars = state.cars.map(car => {
        if (car.id === action.payload.id) {
          return { ...car, progress: car.progress + 1 };
        }
        return car;
      });

      return { ...state, cars: newCars };

    case CarsActions.ADD_CAR:
      const newCar = {...action.payload, progress: 0 };
      return { ...state, cars: [ ...state.cars, newCar ] };
    default:
      return state;
  }
}
