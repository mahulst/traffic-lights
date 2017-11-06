import { LightState, TrafficLight } from "../../../types/TrafficLight";
import * as TrafficLightsActions from "./traffic-lights.action";
import { TrafficLightsState } from "./traffic-lights.models";

type Action = TrafficLightsActions.All;

const initialState = {
  trafficLights: [
    { id: 1, color: LightState.Red },
    { id: 2, color: LightState.Red },
    { id: 3, color: LightState.Red },
    { id: 4, color: LightState.Red }
  ]
};

export function trafficLightsReducer(
  state: TrafficLightsState = initialState,
  action: Action
): TrafficLightsState {
  switch (action.type) {
    case TrafficLightsActions.TOGGLE_TRAFFIC_LIGHT:
      const newTrafficLights: TrafficLight[] = state.trafficLights.map(
        light => {
          // Toggle clicked traffic light
          if (light.id === action.payload.id) {
            const toggledColor =
              light.color === LightState.Red
                ? LightState.Green
                : LightState.Red;
            return { ...light, color: toggledColor };
          }

          // Reset all green lights to red
          if (light.color === LightState.Green) {
            return { ...light, color: LightState.Red };
          }

          // No change
          return light;
        }
      );

      return { ...state, trafficLights: newTrafficLights };

    default:
      return state;
  }
}
