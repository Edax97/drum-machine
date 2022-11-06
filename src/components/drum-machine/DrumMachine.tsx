import { ControlPanel } from "../control-panel/ControlPanel";
import { PadBank } from "../pad-bank/PadBank";

export const DrumMachine = () => {
  return (
    <div className="inner-container" id="drum-machine">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-12 p-3">
            <PadBank />
          </div>
          <div className="col-md-5 col-12 p-3">
            <ControlPanel />
          </div>
        </div>
      </div>
    </div>
  );
};
