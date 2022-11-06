import "./drum-pad.scss";

interface PropsType {
  keyPad: string;
  src: string;
  clickPad: (key: string) => any;
}

export const DrumPad = (props: PropsType) => {
  return (
    <div
      id={"id_" + props.keyPad}
      className="drum-pad rounded-1 fs-5 text-black"
      role="button"
      onClick={() => props.clickPad(props.keyPad)}
    >
      {props.keyPad}
      <audio id={props.keyPad} src={props.src} className="clip"></audio>
    </div>
  );
};
