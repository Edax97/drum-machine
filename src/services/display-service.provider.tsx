import { Component, createContext } from "react";
import { DisplayServiceType } from "../types/display-service.type";

export const DisplayServiceContext = createContext<DisplayServiceType | null>(
  null
);

export class DisplayServiceProvider extends Component<any> {
  startDisplay = (message: string) => {
    this.setState({ ...this.state, isDisplaying: true, message });
    setTimeout(() => {
      this.setState({ ...this.state, isDisplaying: false, message: "empty" });
    }, 2000);
  };

  state: DisplayServiceType = {
    isDisplaying: false,
    message: "empty",
    startDisplay: this.startDisplay,
  };

  render() {
    return (
      <DisplayServiceContext.Provider value={this.state}>
        {this.props.children}
      </DisplayServiceContext.Provider>
    );
  }
}
