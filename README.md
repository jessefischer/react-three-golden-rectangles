# Three Golden Rectangles

This project is to demonstrate the astounding geometry of three intersecting, orthogonal, golden rectangles and an inscribed regular icosahedron, as well as the three interrelated musical tonalities of G, Eb, and B

## Golden Rectangles

Golden rectangles are rectangles such that the ratio of length to width is 1 to *phi*, where *phi* is approximately 1.618033988749895, otherwise known as the Golden Ratio, the Golden Mean, or the Golden Section.

## Regular Icosahedron

A regular icosahedron is one of the five Platonic solids or polyhedra, consisting of 20 regular equilateral triangles.

## Giant Steps, Mark Turner, and Me

["Giant Steps"](https://www.youtube.com/watch?v=KwIC6B_dvW4) was John Coltrane's seminal composition from the 1960 album of the same name. It represents a breakthru of Trane-ian proportions, creating a completely new harmonic pathway for modern jazz, distinct from the type of harmonic motion that was typical of the previous decades in jazz and classical music. Instead of songs being based on a single tonal center (the "root" or "tonic") and chords moving only to keys nearby on the circle of fifths, "Giant Steps" features no set tonal center, rather a succession of quickly shifting chords separated by major thirds (a distance of 4 semitones away). This type of harmony divides the 12-tone scale into three equal portions, much like you can divide the color wheel into three equal portions by choosing three triadic colors.

Saxophonist Mark Turner's opening statement on his 1998 _In This World_ album, the stunning original composition ["Mesa"](https://www.youtube.com/watch?v=sGou3kczCVY), begins with a drone in the key of B, accompanied by the same 6-note melodic cell being repeated in the successive keys of B, Eb, and G -- the same major-third harmonic motion as in "Giant Steps". The 6-note melodic cell represents what could be called a [Mixolydian Pentatonic](https://ianring.com/musictheory/scales/1201) tonality in the Wesetern system. Similar scales or tonalities exist around the world, such as the Raga Savethri in the South Indian Carnatic system. I've always loved the haunting symmetry and hidden beauty of "Mesa" as well as "Giant Steps" and this is my attempt to merge triadic color theory, "Giant Steps" harmony, and the properties of three intersecting golden rectangles.

## How to Use

* Use the controls at the bottom of the screen to adjust the opacities of the Icosahedron and the three Golden Rectangles, and the speed at which they spin around the origin.
* Click/tap the "start drone" button to start a musical drone in the key of B.
* Click/tap each golden rectangle to play a melody in the corresponding keys of G, Eb, or B.
* The Icosahedron opacity also controls the volume of the drone, and the Golden Rectangles opacity also controls the volume of the melody.
* Drag or swipe to change the position of the camera
* Scroll the mouse wheel or pinch to zoom in/out.

## Credits

This project was intended as an example to teach myself [`Three.js`](https://threejs.org/) and [`react-three-fiber`](https://github.com/pmndrs/react-three-fiber). I also used [`math.js`](https://mathjs.org/docs/reference/functions/sqrt.html) for some constants and functions. I used [`@react-three/postprocessing`](https://docs.pmnd.rs/react-postprocessing/introduction) for post-processing, [`react-spring`](https://react-spring.io/) for animnation, and [`Tone.js`](https://tonejs.github.io/) for audio. The app was bootstrapped with [`Create React App`](https://create-react-app.dev/). I also incorporated some code from [@FyreStar](https://github.com/Fyrestar) for the [`InfiniteGridHelper`](https://github.com/Fyrestar/THREE.InfiniteGridHelper). For more about saxophonist/composer Mark Turner's composition "Mesa" on which this melody is based, see Brad Mehldau's notes on his album [In This World](https://www.bradmehldau.com/mark-turner).

Many thanks to my dad, the educator [Richard Allen Fischer](http://richardallenfischer.com/), for showing me these cool constructions when I was a kid, and taking me to the fabled [Geometry and the Imagination](https://lamington.wordpress.com/about/) course at Princeton University taught by Bill Thurston, John Conway, and Peter Doyle back in the 80's. The idea of inscribing an icosahedron on three intersecting golden rectangles appears to have originated in 15th Century Italy by [Luca Pacioli](https://en.wikipedia.org/wiki/Divina_proportione), who may have in fact stolen it from [Piero della Francesca](https://en.wikipedia.org/wiki/Piero_della_Francesca)
