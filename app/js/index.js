import * as THREE from 'three';
import objectFactory from './objectFactory';
import visualMediator from './mediator';
import Visualizer from './visualizer';

//med.state === what objects to show 
//
let state = 'disk';

let viz  =  new Visualizer();

window.onload = () => {
  // let viz = new Visualizer();
  // let viz  =  new Visualizer();
  viz.initialize();
  viz.processAudio();
  let med = visualMediator();
  med.init();
  //object set c = [...click]

};


//event handling 
const vizToggles = document.querySelectorAll('.viz-button');

vizToggles.forEach((button) => {
  button.addEventListener('click', () => {
    viz.state = button.dataset.type;
    console.log(viz.state);
  });
});


// const handleStateChange = (data, state) => {
//   debugger;
//   visualMediator().setVisualState(data);
// };

//end event handling 

export default state;

//bottom of file















