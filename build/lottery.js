/**
 * @jsx React.DOM
 */

'use strict';

var N = 4;

var ____Classe=React.Component;for(var ____Classe____Key in ____Classe){if(____Classe.hasOwnProperty(____Classe____Key)){Box[____Classe____Key]=____Classe[____Classe____Key];}}var ____SuperProtoOf____Classe=____Classe===null?null:____Classe.prototype;Box.prototype=Object.create(____SuperProtoOf____Classe);Box.prototype.constructor=Box;Box.__superConstructor__=____Classe;function Box(){if(____Classe!==null){____Classe.apply(this,arguments);}}
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

var ____Classf=React.Component;for(var ____Classf____Key in ____Classf){if(____Classf.hasOwnProperty(____Classf____Key)){Row[____Classf____Key]=____Classf[____Classf____Key];}}var ____SuperProtoOf____Classf=____Classf===null?null:____Classf.prototype;Row.prototype=Object.create(____SuperProtoOf____Classf);Row.prototype.constructor=Row;Row.__superConstructor__=____Classf;function Row(){if(____Classf!==null){____Classf.apply(this,arguments);}}
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

var ____Classg=React.Component;for(var ____Classg____Key in ____Classg){if(____Classg.hasOwnProperty(____Classg____Key)){Table[____Classg____Key]=____Classg[____Classg____Key];}}var ____SuperProtoOf____Classg=____Classg===null?null:____Classg.prototype;Table.prototype=Object.create(____SuperProtoOf____Classg);Table.prototype.constructor=Table;Table.__superConstructor__=____Classg;function Table(){if(____Classg!==null){____Classg.apply(this,arguments);}}
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

var ____Classh=React.Component;for(var ____Classh____Key in ____Classh){if(____Classh.hasOwnProperty(____Classh____Key)){Player[____Classh____Key]=____Classh[____Classh____Key];}}var ____SuperProtoOf____Classh=____Classh===null?null:____Classh.prototype;Player.prototype=Object.create(____SuperProtoOf____Classh);Player.prototype.constructor=Player;Player.__superConstructor__=____Classh;function Player(){if(____Classh!==null){____Classh.apply(this,arguments);}}
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

var ____Classi=React.Component;for(var ____Classi____Key in ____Classi){if(____Classi.hasOwnProperty(____Classi____Key)){Players[____Classi____Key]=____Classi[____Classi____Key];}}var ____SuperProtoOf____Classi=____Classi===null?null:____Classi.prototype;Players.prototype=Object.create(____SuperProtoOf____Classi);Players.prototype.constructor=Players;Players.__superConstructor__=____Classi;function Players(){if(____Classi!==null){____Classi.apply(this,arguments);}}
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

var ____Classj=React.Component;for(var ____Classj____Key in ____Classj){if(____Classj.hasOwnProperty(____Classj____Key)){Play[____Classj____Key]=____Classj[____Classj____Key];}}var ____SuperProtoOf____Classj=____Classj===null?null:____Classj.prototype;Play.prototype=Object.create(____SuperProtoOf____Classj);Play.prototype.constructor=Play;Play.__superConstructor__=____Classj;function Play(){if(____Classj!==null){____Classj.apply(this,arguments);}}
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

var ____Classk=React.Component;for(var ____Classk____Key in ____Classk){if(____Classk.hasOwnProperty(____Classk____Key)){LotteryApp[____Classk____Key]=____Classk[____Classk____Key];}}var ____SuperProtoOf____Classk=____Classk===null?null:____Classk.prototype;LotteryApp.prototype=Object.create(____SuperProtoOf____Classk);LotteryApp.prototype.constructor=LotteryApp;LotteryApp.__superConstructor__=____Classk;
  function LotteryApp(props) {
    ____Classk.call(this,props);
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
