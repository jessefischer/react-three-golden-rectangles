const Controls = ({
  icoOpacity,
  rectOpacity,
  autorotate,
  melody,
  drone,
  dronePlaying,
  handleUpdateControls,
  handleDroneStopStart,
}) => {
  return (
    <div className="controls">
      <div className="controlsInner">
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          name="icoOpacity"
          value={icoOpacity}
          onChange={handleUpdateControls}
        />
        <label htmlFor="icoOpacity">Icosahedron</label>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          name="rectOpacity"
          value={rectOpacity}
          onChange={handleUpdateControls}
        />
        <label htmlFor="rectOpacity">Golden Rectangles</label>
        <input
          type="range"
          min={-1}
          max={1}
          step={0.1}
          name="autorotate"
          value={autorotate}
          onChange={handleUpdateControls}
        />
        <label htmlFor="autorotate">Autorotate</label>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          name="melody"
          value={melody}
          onChange={handleUpdateControls}
        />
        <label htmlFor="melody">Melody</label>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          name="drone"
          value={drone}
          onChange={handleUpdateControls}
        />
        <label htmlFor="drone">Drone</label>
      </div>
      <div className="droneStopStart" onClick={handleDroneStopStart}>
        {dronePlaying ? "stop drone" : "start drone"}
      </div>
    </div>
  );
};

export default Controls;
