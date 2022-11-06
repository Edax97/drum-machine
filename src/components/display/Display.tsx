import "./display.scss";

interface PropsType {
  message: string | undefined;
  isDisplaying: boolean | undefined;
}

export const Display = (props: PropsType) => {
  const classMessage = props.isDisplaying ? "visible" : "invisible";
  return (
    <div className="py-2 px-4 rounded-2 d-inline-block" id="display">
      <span className={classMessage}>{props.message}</span>
    </div>
  );
};
