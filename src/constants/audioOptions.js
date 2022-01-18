export const synthOptions = {
  portamento: 0.01,
  oscillator: {
    type: "sawtooth",
  },
  volume: Math.log(0.25)*10,
  envelope: {
    decay: 25.0,
    sustain: 0.5,
    release: 5.0,
  },
};

export const droneSynthOptions = {
  oscillator: {
    type: "sawtooth",
  },
  volume: Math.log(0.125)*10,
  envelope: {
    sustain: 1,
    release: 5.0,
  },
};

export const reverbOptions = {
  wet: 0.25,
  decay: 8,
};

export const delayOptions = {
  delayTime: "8n.",
  feedback: 0.5,
  wet: 0.15,
};

export const filterOptions = {
  frequency: 500,
  type: "lowpass",
};
