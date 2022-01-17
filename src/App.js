import { useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import * as Tone from "tone";

import { OrbitControls } from "@react-three/drei";
import { EffectComposer, SelectiveBloom } from "@react-three/postprocessing";
import InfiniteGridHelper from "./lib/InfiniteGridHelper";

import "./App.css";

import ThreeGoldenRectangles from "./components/ThreeGoldenRectangles";
import Icosahedron from "./components/Icosahedron";
import Controls from "./components/Controls";

import { DEFAULTS } from "./constants/defaults";
import { COLORS } from "./constants/colors";

const App = () => {
  const [appState, setAppState] = useState({
    ...DEFAULTS,
    playing: false,
    started: false,
  });

  const synth1 = useRef(); // lower octave
  const synth2 = useRef(); // higher octave
  const seq = useRef();

  const light1 = useRef();
  const light2 = useRef();

  const refs = []
  refs[0] = useRef();
  refs[1] = useRef();
  refs[2] = useRef();

  useEffect(() => {
    const filter = new Tone.Filter(500, "lowpass").connect(
      new Tone.PingPongDelay("8n.", 0.2)
        .set({ wet: 0.1 })
        .connect(new Tone.Reverb({ wet: 0.25, decay: 8 }).toDestination())
    );
    const synthOptions = {
      portamento: 0.01,
      oscillator: {
        type: "sawtooth",
      },
      volume: -6,
      envelope: {
        decay: 25.0,
        sustain: 0,
        release: 5.0,
      },
    };
    synth1.current = new Tone.Synth(synthOptions).connect(filter);
    synth2.current = new Tone.Synth(synthOptions).connect(filter);
    return () => {
      synth1.current.dispose();
      synth2.current.dispose();
    };
  }, []);

  const handleUpdateControls = (e) => {
    setAppState((currentState) => ({
      ...currentState,
      [e.target.name]: e.target.value,
    }));
  };

  const initTone = () => {
    Tone.start();
    Tone.Transport.bpm.value = appState.bpm;
    Tone.Transport.start();
    setAppState((currentState) => ({ ...currentState, started: true }));
  };

  const handlePlay = (sequence) => {
    if (!appState.started) {
      initTone();
    }
    if (seq.current) {
      seq.current.dispose();
    }
    seq.current = new Tone.Sequence((time, note) => {
      synth1.current.triggerAttackRelease(note, "4n", time);
      synth2.current.triggerAttackRelease(
        Tone.Frequency(note).toFrequency() * 2,
        "4n",
        time
      );
    }, sequence).start(Tone.Transport.now());
    seq.current.set({ loop: false });
  };

  return (
    <>
      <Canvas
      camera={{position: [0,1.5,2.5]}}
      >        
        <OrbitControls target={[0, 1, 0]} />
        <directionalLight position={[-10, 20, 40]} ref={light1} />
        <directionalLight position={[2, -3, -4]} ref={light2} />
        <ThreeGoldenRectangles
          ref={refs}
          position={[0, 1, 0]}
          opacity={appState.rectOpacity}
          autorotate={appState.autorotate}
          handlePlay={handlePlay}
        />
        <Icosahedron
          position={[0, 1, 0]}
          opacity={appState.icoOpacity}
          autorotate={appState.autorotate}
        />
        <InfiniteGridHelper color={new THREE.Color(COLORS.Cyan)} />

        <EffectComposer>
        <SelectiveBloom
            lights={[light1]}
            selection={[refs[1],refs[0]]}
            intensity={1.0}
            luminanceThreshold={0}
            luminanceSmoothing={0.8}
          />

        </EffectComposer>
      </Canvas>
      <Controls
        icoOpacity={appState.icoOpacity}
        rectOpacity={appState.rectOpacity}
        autorotate={appState.autorotate}
        handleUpdateControls={handleUpdateControls}
      />

      <div className="source">
        <a href="https://github.com/jessefischer/three-golden-rectangles">
          Source / Credits
        </a>
      </div>
    </>
  );
};

export default App;
