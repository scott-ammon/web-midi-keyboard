## Web MIDI Api Visualizer

This React app uses the experimental [Web MIDI Api](https://webaudio.github.io/web-midi-api/) to visualize data ingest from a connected MIDI device. 

MIDI messages sent from a connected device are ingested using the api, stored in state and passed to components using React's Context feature.