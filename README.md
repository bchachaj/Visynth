### JS Project Proposal: 3d Audio Visualization

   Working Title: Boombox
### Abstract
This project aims to take advantage of the Web Audio API to render three dimensional animations driven by the audio frequencies. It has high potential for being a very visually appealing project with many avenues for user interaction, as well as a promising way to showcase JavaScript skills. Also see it as an opportunity to tackle a more mathematically intensive project than I have done in the past.


### Functionality & MVP  

With this Boombox, users will be able to:

- [ ] Upload an mp3 file to be played
- [ ] See an accurate visual representation of the audio
- [ ] Be able to affect the animations via keyboard

### Wireframes

The entirety of the application will be housed in one screen, with a file upload and a user control context menu. The complexity of the user controls will depend on the time required to bootstrap the project.

### Architecture and Technologies

This project will be implemented with the following technologies:

- `JavaScript` for game logic,
- `Three.js` for 3D modeling,
- `Webpack` to bundle js files.
- `SCSS` for styling and variables


### Implementation Timeline

**Day 1**: Further familiarization with Three.js. Plan to initialize the logic for rendering a scene, camera, lighting. Configure a file upload for the mp3 file as well.

**Day 2**: Determine which scaling functions will be implemented to create the final product.  Will require a multitude of functions to receive the audio frequencies, scale/constrain them appropriately, and then map it unto a three dimensional rendering.  

**Day 3**: Ensure that the MVP is functional and extensible, and begin adding controls that allow for manipulation of the rendering. This might include the geometrical shape of objects displayed, the 'material' of the objects, the color scheme/response, etc.

### Bonus features

-Incorporate an environmental effect like gravity on the audio-driven objects
-Allow user to control camera via mouse
