const Controls = ({ icoOpacity, rectOpacity, autorotate, handleUpdateControls }) => {
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
      </div>
    </div>
  );
};

export default Controls;
