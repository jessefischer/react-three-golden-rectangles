import { useState, useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import * as Tone from "tone";

import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import InfiniteGridHelper from "./lib/InfiniteGridHelper";

import "./App.css";

import ThreeGoldenRectangles from "./components/ThreeGoldenRectangles";
import Icosahedron from "./components/Icosahedron";
import Controls from "./components/Controls";

import { DEFAULTS } from "./constants/defaults";
import { COLORS } from "./constants/colors";
import { synthOptions, droneSynthOptions, reverbOptions, delayOptions, filterOptions } from "./constants/audioOptions"

const App = () => {
  const [appState, setAppState] = useState({
    ...DEFAULTS
  });

  const [started, setStarted] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [dronePlaying, setDronePlaying] = useState(false);

  const [selectedRect, setSelectedRect] = useState(0);

  const synth1 = useRef(); // lower octave
  const synth2 = useRef(); // higher octave
  const droneSynth = useRef();
  const seq = useRef();

  const light1 = useRef();
  const light2 = useRef();

  const rectRefs = [useRef(), useRef(), useRef()];

  // const {intensity} = useSpring({
  //   intensity: playing ? 1.5 : 0,
  //   config: {
  //     duration: 750 // msec
  //   }});

  // Set up synth
  useEffect(() => {
    const filter = new Tone.Filter(filterOptions).connect(
      new Tone.PingPongDelay(delayOptions)
        .connect(new Tone.Reverb(reverbOptions).toDestination())
    );

    synth1.current = new Tone.Synth(synthOptions).connect(filter);
    synth2.current = new Tone.Synth(synthOptions).connect(filter);
    droneSynth.current = new Tone.PolySynth({...droneSynthOptions, polyphony: 2}).connect( filter);
    return () => {
      synth1.current.dispose();
      synth2.current.dispose();
      droneSynth.current.dispose();
    };
  }, []);

  useEffect(() => {
    synth1.current.volume.value = Math.log( appState.melody ) * 10;
    synth2.current.volume.value = Math.log( appState.melody ) * 10;
  }, [appState.melody]);

  useEffect(() => {
    droneSynth.current.volume.value = Math.log( appState.drone ) * 10;
  }, [appState.drone]);

  const handleDroneStopStart = ( () => {
    if ( dronePlaying ) {
      stopDrone();
    }
    else {
      startDrone();
    }
    setDronePlaying( !dronePlaying );
  })

  const startDrone = (()=> {
    droneSynth.current.triggerAttack(["B1","B2"]);
  })

  const stopDrone = (()=> {
    droneSynth.current.triggerRelease(["B1","B2"]);
  })

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
    setStarted( true );
  };

  const handlePlay = (index, sequence) => {
    if (!started) {
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
    }, sequence).start();
    seq.current.set({ loop: false });
    Tone.Transport.schedule(() => {
      setPlaying( false );
    }, "+0:1:3");
    setSelectedRect( index );
    setPlaying( true );
  };

  // const AnimatedSelectiveBloom = animated(SelectiveBloom);

  return (
    <>
      <Canvas
      camera={{position: [1.5,2.5,2.5]}}
      >        
        <OrbitControls target={[0, 1, 0]} />
        <directionalLight position={[-10, 20, 40]} ref={light1} />
        <directionalLight position={[2, 3, -4]} ref={light2} />
        <ThreeGoldenRectangles
          ref={rectRefs}
          position={[0, 1, 0]}
          opacity={appState.rectOpacity}
          autorotate={appState.autorotate}
          handlePlay={handlePlay}
          playingRect={playing ? selectedRect : null}
        />
        <Icosahedron
          position={[0, 1, 0]}
          opacity={appState.icoOpacity}
          autorotate={appState.autorotate}
        />
        <InfiniteGridHelper color={new THREE.Color(COLORS.Cyan)} />

        <EffectComposer>
        {/* <AnimatedSelectiveBloom
            lights={[light1,light2]}
            selection={rectRefs[selectedRect]}
            intensity={intensity}
            height={750}
            luminanceThreshold={0}
            luminanceSmoothing={0}
          /> */}
        <Bloom 
          intensity={0.25}
          luminanceThreshold={0}
          luminanceSmoothing={0}
          height={750}
        />
        </EffectComposer>
      </Canvas>
      <Controls
        icoOpacity={appState.icoOpacity}
        rectOpacity={appState.rectOpacity}
        autorotate={appState.autorotate}
        melody={appState.melody}
        drone={appState.drone}
        dronePlaying={dronePlaying}
        handleDroneStopStart={handleDroneStopStart}
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
