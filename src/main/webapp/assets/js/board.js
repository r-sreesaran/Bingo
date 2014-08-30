/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Board = {
    value:'',
    position:'',
    color:'',
    getValue : function() {
      return this.value;  
    },
    setValue : function(value) {
      this.value = value;  
    },
    getPosition : function() {
      return this.position; 
    },
    setPosition : function(position) {
      this.position = position;
    },
    getColor : function() {
      return this.color;  
    },
    setColor : function(color) { 
      this.color = color;
    }
    
};

    