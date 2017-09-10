import * as THREE from 'three';
import objectFactory from './objectFactory';
import visualMediator from './mediator';
import Visualizer from './visualizer';
import visualizerTypes from './visualizerTypes';

//med.state === what objects to show 
//
const defaultState = 'disk';

let state = defaultState;

const viz  =  new Visualizer();

window.onload = () => {
  viz.initialize();
  viz.state = state;
  viz.generateObjects();
  viz.processAudio();
  //object set c = [...click]

};


//event handling 
const vizToggles = document.querySelectorAll('.viz-button');

vizToggles.forEach((button) => {
  button.addEventListener('click', () => {
    viz.state = button.dataset.type;
    viz.initialize();
    viz.generateObjects();
  });

  if(button.dataset.type === viz.state) {
    button.classList.add('highlighted');
  }
});


// const handleStateChange = (data, state) => {
//   debugger;
//   visualMediator().setVisualState(data);
// };

//end event handling 

export default state;

//bottom of file















