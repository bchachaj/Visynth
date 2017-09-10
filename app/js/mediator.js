

const visualMediator = function() {

    // constructor(){
    //  this.state = 'disk';
    // }
    // let default = 'disk';
    let state;

    return {

        init: function() {
            this.state = 'disk';
        },

        setVisualState: function(obj) {
            this.state = obj;
        },

        checkState: function() {
        	return this.state;
        }

    }

};


// visualMediator.prototype.setVisualState = (obj) => {
//    this.state = obj;
// };


export default visualMediator;