import { trafficLightsReducer } from "./traffic-lights.reducer";
import { ToggleTrafficLight } from "./traffic-lights.action";
import { LightState } from "../../../types/TrafficLight";

describe("TrafficLightsReducer", () => {
  it("should toggle the color from Red to Green on TOGGLE_TRAFFIC_LIGHT", () => {
    const action = new ToggleTrafficLight({ id: 1 });
    const newState = trafficLightsReducer(undefined, action);
    expect(newState.trafficLights[0].color).toBe(LightState.Green);

    const newState2 = trafficLightsReducer(newState, action);
    expect(newState2.trafficLights[0].color).toBe(LightState.Red);
  });

  it("should reset all other traffic lights to Red on TOGGLE_TRAFFIC_LIGHT", () => {
    const action = new ToggleTrafficLight({ id: 1 });
    const newState = trafficLightsReducer(undefined, action);
    expect(newState.trafficLights[0].color).toBe(LightState.Green);

    const action2 = new ToggleTrafficLight({ id: 2 });
    const newState2 = trafficLightsReducer(newState, action2);
    expect(newState2.trafficLights[0].color).toBe(LightState.Red);
  });
});
