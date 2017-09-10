

const visualMediator = function() {

  // constructor(){
  //  this.state = 'disk';
  // }
  // let default = 'disk';
  let state;

  return {

	  init: function() {
		  this.state = 'disk';
		  console.log('howdy');

	  },

	  

	  setVisualState: function(obj) {
	  	console.log(obj);
	  	this.state = obj;
	  }

  }

};


// visualMediator.prototype.setVisualState = (obj) => {
//    this.state = obj;
// };


export default visualMediator;