import { useDisplayService } from "../../services/use-display-service";
import { Display } from "../display/Display";

export const ControlPanel = () => {
  const displayService = useDisplayService();
  return (
    <div className="pt-2" id="controls">
      <div className="pt-2 fs-4">Drum Machine</div>
      <div className="pt-3">
        <Display
          message={displayService?.message}
          isDisplaying={displayService?.isDisplaying}
        />
      </div>
      <div className="pt-3">
        <a
          href="https://github.com/Edax97/drum-machine"
          className="link-secondary"
        >
          Github
        </a>
      </div>
    </div>
  );
};
