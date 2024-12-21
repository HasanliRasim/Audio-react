import { useRef, useState } from "react";
import styles from "./Main.module.scss";

const Main = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);

  const handlePlay = () => {
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
  };

  const handleForward = () => {
    audioRef.current.currentTime += 10;
  };

  const handleBackward = () => {
    audioRef.current.currentTime -= 10;
  };

  const handleMute = () => {
    setIsMuted(true);
    audioRef.current.muted = true;
  };

  const handleUnmute = () => {
    setIsMuted(false);
    audioRef.current.muted = false;
  };

  return (
    <div className={styles.div}>
      <audio
        className={styles.audio}
        ref={audioRef}
        src="./src/assets/TheBattleofLife.mp3"
        controls
      />
      <div className={styles.divBtn}>
        <button className={styles.btn} onClick={handlePlay}>Play</button>
        <button className={styles.btn} onClick={handlePause}>Pause</button>
        <button className={styles.btn} onClick={handleForward}>10sec+</button>
        <button className={styles.btn} onClick={handleBackward}>10sec-</button>
        <button className={styles.btn} onClick={handleMute} disabled={isMuted}>
          Mute
        </button>
        <button className={styles.btn} onClick={handleUnmute} disabled={!isMuted}>
          Unmute
        </button>
      </div>
    </div>
  );
};

export default Main;
