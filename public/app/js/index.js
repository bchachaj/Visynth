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
  vizToggles[0].classList.add('highlighted');
};


//event handling
const vizToggles = document.querySelectorAll('.viz-button');
let css = viz.state;

vizToggles.forEach((button) => {
  button.addEventListener('click', () => {
    viz.state = button.dataset.type;
    viz.initialize();

    viz.generateObjects();
    for(let i = 0; i < vizToggles.length; i++) {
      vizToggles[i].classList.remove('highlighted');
    }
    button.classList.add('highlighted');

  });
});




export default state;

//bottom of file
