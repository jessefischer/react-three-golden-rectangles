const Controls = ({ icoOpacity, rectOpacity, autorotate, handleUpdateControls }) => {
  return (
    <div className="controls">
      <div>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          name="icosahedronOpacity"
          value={icoOpacity}
          onChange={handleUpdateControls}
        />
        <label htmlFor="icosahedronOpacity">Icosahedron</label>
      </div>
      <div>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          name="rectanglesOpacity"
          value={rectOpacity}
          onChange={handleUpdateControls}
        />
        <label htmlFor="rectanglesOpacity">Golden Rectangles</label>
      </div>
      <div>
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
