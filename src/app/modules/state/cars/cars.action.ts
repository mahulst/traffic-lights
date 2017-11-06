import { Action } from "@ngrx/store";

export const TICK = "[Cars] Tick";
export const MOVE_CAR = "[Cars] Move car";
export const ADD_CAR = "[Cars] Add car";

export class Tick implements Action {
  readonly type = TICK;
}

export class MoveCar implements Action {
  readonly type = MOVE_CAR;

  constructor(public payload: { id: string }) {}
}

export class AddCar implements Action {
  readonly type = ADD_CAR;

  constructor(public payload: { id: string; lane: number }) {}
}
export type All = Tick | MoveCar | AddCar;
