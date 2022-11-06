export interface DisplayServiceType {
  isDisplaying: boolean;
  message: string;
  startDisplay: (message: string) => any;
}
