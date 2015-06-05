/**
 * @jsx React.DOM
 */

'use strict';

let N = 4;

var ____Class7=React.Component;for(var ____Class7____Key in ____Class7){if(____Class7.hasOwnProperty(____Class7____Key)){Box[____Class7____Key]=____Class7[____Class7____Key];}}var ____SuperProtoOf____Class7=____Class7===null?null:____Class7.prototype;Box.prototype=Object.create(____SuperProtoOf____Class7);Box.prototype.constructor=Box;Box.__superConstructor__=____Class7;function Box(){if(____Class7!==null){____Class7.apply(this,arguments);}}
  Object.defineProperty(Box.prototype,"render",{writable:true,configurable:true,value:function() {
    let divStyle =
      { backgroundColor:          this.props.bgcolor,
        WebkitAnimationDelay:     this.props.name ? this.props.animData.delay : '0s',
        animationDelay:           this.props.name ? this.props.animData.delay : '0s',
        WebkitAnimationDuration: '2s',
        animationDuration:       '2s'
      };
    let classes = "col-xs-3 animated " + this.props.animData.anim;
    return (React.createElement("div", {className: classes, style: divStyle}, this.props.name));
  }});
;

var ____Class8=React.Component;for(var ____Class8____Key in ____Class8){if(____Class8.hasOwnProperty(____Class8____Key)){Row[____Class8____Key]=____Class8[____Class8____Key];}}var ____SuperProtoOf____Class8=____Class8===null?null:____Class8.prototype;Row.prototype=Object.create(____SuperProtoOf____Class8);Row.prototype.constructor=Row;Row.__superConstructor__=____Class8;function Row(){if(____Class8!==null){____Class8.apply(this,arguments);}}
  Object.defineProperty(Row.prototype,"render",{writable:true,configurable:true,value:function() {
    let boxes = _.map(_.range(4), function(i)  {return (
      React.createElement(Box, {bgcolor: this.props.colors[i], 
           name: this.props.names[i], 
           animData: this.props.anims[i], 
           key: i}
      )
    );}.bind(this));
    return ( React.createElement("div", {className: "row"}, " ", boxes, " ") );
  }});
;

var ____Class9=React.Component;for(var ____Class9____Key in ____Class9){if(____Class9.hasOwnProperty(____Class9____Key)){Table[____Class9____Key]=____Class9[____Class9____Key];}}var ____SuperProtoOf____Class9=____Class9===null?null:____Class9.prototype;Table.prototype=Object.create(____SuperProtoOf____Class9);Table.prototype.constructor=Table;Table.__superConstructor__=____Class9;function Table(){if(____Class9!==null){____Class9.apply(this,arguments);}}
  Object.defineProperty(Table.prototype,"render",{writable:true,configurable:true,value:function() {
    let rows = _.map(_.range(N), function(i)  {return (
      React.createElement(Row, {colors: this.props.colors.slice(4*i, 4*i + 4), 
           names: this.props.names.slice(4*i, 4*i + 4), 
           anims: this.props.anims.slice(4*i, 4*i + 4), 
           key: i}
      )
    );}.bind(this));
    return (React.createElement("div", {className: "col-xs-9"}, rows));
  }});
;

var ____Classa=React.Component;for(var ____Classa____Key in ____Classa){if(____Classa.hasOwnProperty(____Classa____Key)){Player[____Classa____Key]=____Classa[____Classa____Key];}}var ____SuperProtoOf____Classa=____Classa===null?null:____Classa.prototype;Player.prototype=Object.create(____SuperProtoOf____Classa);Player.prototype.constructor=Player;Player.__superConstructor__=____Classa;function Player(){if(____Classa!==null){____Classa.apply(this,arguments);}}
  Object.defineProperty(Player.prototype,"handleChange",{writable:true,configurable:true,value:function() {
    this.props.onUserInput(this.props.num,
    React.findDOMNode(this.refs.textInput).value);
  }});

  Object.defineProperty(Player.prototype,"render",{writable:true,configurable:true,value:function() {
    let inputStyle = {backgroundColor: 'rgb(200,200,200)'};
    return (
      React.createElement("div", {className: "form-group"}, 
        React.createElement("input", {className: "form-control", type: "text", 
               placeholder: 'Player ' + ( 1 + this.props.num), 
               id: this.props.num, 
               ref: "textInput", 
               value: this.props.name, 
               onChange: this.handleChange.bind(this), 
               style: inputStyle}
        )
      )
    );
  }});
;

var ____Classb=React.Component;for(var ____Classb____Key in ____Classb){if(____Classb.hasOwnProperty(____Classb____Key)){Players[____Classb____Key]=____Classb[____Classb____Key];}}var ____SuperProtoOf____Classb=____Classb===null?null:____Classb.prototype;Players.prototype=Object.create(____SuperProtoOf____Classb);Players.prototype.constructor=Players;Players.__superConstructor__=____Classb;function Players(){if(____Classb!==null){____Classb.apply(this,arguments);}}
  Object.defineProperty(Players.prototype,"render",{writable:true,configurable:true,value:function() {
    let players = _.map(_.range(4*N), function(n)  {return (
      React.createElement(Player, {key: n, num: n, name: this.props.names[n], onUserInput: this.props.onUserInput})
    );}.bind(this));
    return (
      React.createElement("div", {className: "col-xs-2 col-xs-offset-1"}, 
        React.createElement("form", {id: "players"}, players)
      )
    )
  }});
;

var ____Classc=React.Component;for(var ____Classc____Key in ____Classc){if(____Classc.hasOwnProperty(____Classc____Key)){Play[____Classc____Key]=____Classc[____Classc____Key];}}var ____SuperProtoOf____Classc=____Classc===null?null:____Classc.prototype;Play.prototype=Object.create(____SuperProtoOf____Classc);Play.prototype.constructor=Play;Play.__superConstructor__=____Classc;function Play(){if(____Classc!==null){____Classc.apply(this,arguments);}}
  Object.defineProperty(Play.prototype,"handlePlay",{writable:true,configurable:true,value:function() {
    this.props.onPress();
  }});

  Object.defineProperty(Play.prototype,"handleReset",{writable:true,configurable:true,value:function() {
    this.props.onReset();
  }});

  Object.defineProperty(Play.prototype,"render",{writable:true,configurable:true,value:function( ) {
    let buttonStyle = {outline: 0, backgroundColor: 'lightgray'};
    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "col-xs-2"}, 
          React.createElement("button", {type: "button", 
                  className: "btn btn-default btn-lg", 
                  id: "play", 
                  style: buttonStyle, 
                  onMouseUp: this.handlePlay.bind(this)}, 
            "Play / Replay"
          )
        ), 
          React.createElement("div", {className: "col-xs-2"}, 
            React.createElement("button", {type: "button", 
                    className: "btn btn-default btn-lg", 
                    id: "reset", 
                    style: buttonStyle, 
                    onMouseUp: this.handleReset.bind(this)}, 
              "Reset"
          )
        )
      )
    );
  }});


let animations =
  [ 'bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp',
    'fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig',
    'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig',
    'flipOutX', 'flipOutY', 'lightSpeedOut', 'rotateOut', 'rotateOutDownLeft',
    'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight',
    'rollOut', 'zoomOut', 'zoomOutDown', 'zoomOutRight', 'zoomOutUp',
    'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'
  ];

let winner =
  ['bounce', 'flash', 'flip', 'rubberBand', 'shake', 'swing', 'tada', 'wobble'];

var ____Classd=React.Component;for(var ____Classd____Key in ____Classd){if(____Classd.hasOwnProperty(____Classd____Key)){LotteryApp[____Classd____Key]=____Classd[____Classd____Key];}}var ____SuperProtoOf____Classd=____Classd===null?null:____Classd.prototype;LotteryApp.prototype=Object.create(____SuperProtoOf____Classd);LotteryApp.prototype.constructor=LotteryApp;LotteryApp.__superConstructor__=____Classd;
  function LotteryApp(props) {
    ____Classd.call(this,props);
    let anims = _.fill(Array(4*N), {anim: '', delay: '0s'});
    let cellColors   = _.map(_.range(4*N), function()  {
      return ('#' + Math.floor(_.random(0.1, 0.9) * 16777215).toString(16))
    });
    this.state = {names: [], anims: anims, cellColors: cellColors};
    this.handleName = this.handleName.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  Object.defineProperty(LotteryApp.prototype,"handleName",{writable:true,configurable:true,value:function(i, name) {
    let arr = this.state.names.slice();
    arr[i] = name;
    this.setState({names: arr});
  }});

  Object.defineProperty(LotteryApp.prototype,"handleReset",{writable:true,configurable:true,value:function() {
    let emptyAnims = _.fill(Array(4*N), {anim: '', delay: '0s'});
    this.setState({names: [], anims: emptyAnims});
  }});

  Object.defineProperty(LotteryApp.prototype,"handlePlay",{writable:true,configurable:true,value:function() {
    let names = this.state.names;
    let $__0=   _.partition(_.range(4*N), function(n)  {return names[n];}),alive=$__0[0],dead=$__0[1];
    alive = _.shuffle(alive);
    dead  = _.shuffle(dead);

    let animMix = _.shuffle(animations);
    let winnerAnims = _.shuffle(winner)
    let boxAnims = [];
    boxAnims[alive[alive.length -1]] = {anim: winnerAnims[0], delay: 2 * alive.length + 's'};
    for (let i = 0; i < (alive.length - 1); i++) {
      boxAnims[alive[i]] = {anim: animMix[i % 31], delay: 2 + 2 * i + 's'};
    }
    for (let i = 0; i < dead.length; i++) {
      boxAnims[dead[i]] = {anim: 'fadeOut', delay: '0s'};
    }
    this.setState({anims: this.state.anims})
    this.setState({anims: boxAnims});
  }});

  Object.defineProperty(LotteryApp.prototype,"render",{writable:true,configurable:true,value:function() {
    return (
      React.createElement("div", {className: "container"}, 
        React.createElement(Play, {onPress: this.handlePlay, onReset: this.handleReset}), 
        React.createElement(Table, {colors: this.state.cellColors, names: this.state.names, anims: this.state.anims}), 
        React.createElement(Players, {names: this.state.names, onUserInput: this.handleName})
      )
    );
  }});
;

React.render(React.createElement(LotteryApp, null), document.getElementById('content'));
