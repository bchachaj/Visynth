import * as THREE from 'three';
import objectFactory from './objectFactory';
import Visualizer from './visualizer';
import visualizerTypes from './visualizerTypes';

const defaultState = 'disk';
let state = defaultState;
const viz = new Visualizer();

window.onload = () => {
  viz.initialize();
  viz.state = state;
  viz.generateObjects();
  viz.processAudio();

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




export default state;

//bottom of file
