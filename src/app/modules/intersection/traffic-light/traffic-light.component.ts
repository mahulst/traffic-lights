import { Component, EventEmitter, Input, Output } from "@angular/core";
import { LightState } from "../../../types/TrafficLight";

@Component({
  selector: "app-traffic-light",
  templateUrl: "./traffic-light.component.html",
  styleUrls: ["./traffic-light.component.css"]
})
export class TrafficLightComponent {
  @Input() color: LightState;
  @Input() id: number;

  @Output() toggleLight = new EventEmitter();
  public lightState = LightState;

  constructor() {}

  click() {
    this.toggleLight.emit(this.id);
  }
}
