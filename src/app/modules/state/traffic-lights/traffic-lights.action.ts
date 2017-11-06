import { Action } from "@ngrx/store";

export const TOGGLE_TRAFFIC_LIGHT = "[Traffic lights] Toggle";

export class ToggleTrafficLight implements Action {
  readonly type = TOGGLE_TRAFFIC_LIGHT;
  constructor(public payload: { id: number }) {}
}

export type All = ToggleTrafficLight;
