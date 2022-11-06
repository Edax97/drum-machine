import { useEffect } from "react";
import { padsData } from "../../services/pads-data";
import { useDisplayService } from "../../services/use-display-service";
import { DrumPad } from "../drum-pad/DrumPad";
import "./pad-bank.scss";

export const PadBank = () => {
  useEffect(() => {
    window.addEventListener("keydown", playOnKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const displayService = useDisplayService();

  const playAudio = (key: string) => {
    const description = padsData.find((pad) => pad.key === key)?.description;
    displayService?.startDisplay(description || "empty");

    const audioElement = document.getElementById(key) as HTMLMediaElement;
    audioElement.play();
  };
  const playOnKey = (event: KeyboardEvent) => {
    const padPressed = padsData.find(
      (pad) => event.key.toUpperCase() === pad.key
    );
    if (padPressed) playAudio(padPressed.key);
  };
  return (
    <div id="pad-bank">
      {padsData.map((pad) => {
        return (
          <DrumPad
            key={pad.key}
            keyPad={pad.key}
            src={pad.src}
            clickPad={playAudio}
          />
        );
      })}
    </div>
  );
};
