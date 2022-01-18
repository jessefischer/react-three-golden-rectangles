const Controls = ({
  icoOpacity,
  rectOpacity,
  autorotate,
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
        <label htmlFor="icoOpacity">Icosahedron / Drone</label>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          name="rectOpacity"
          value={rectOpacity}
          onChange={handleUpdateControls}
        />
        <label htmlFor="rectOpacity">Golden Rectangles / Melody</label>
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
      </div>
      <div className="droneStopStart" onClick={handleDroneStopStart}>
        {dronePlaying ? "stop drone" : "start drone"}
      </div>
    </div>
  );
};

export default Controls;
