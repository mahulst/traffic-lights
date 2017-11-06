export interface Car {
  lane: number;
  progress: number;
  id: string;
}

export interface CarsState {
  cars: Car[];
}
