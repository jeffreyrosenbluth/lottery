/**
 * @jsx React.DOM
 */

'use strict';

function round4(m) {
  var n = Math.floor(m);
  var rem = n % 4;
  if (rem === 0) {
    return n;
  }
  return n + 4 - rem;
};

var ____Classd1=React.Component;for(var ____Classd1____Key in ____Classd1){if(____Classd1.hasOwnProperty(____Classd1____Key)){Box[____Classd1____Key]=____Classd1[____Classd1____Key];}}var ____SuperProtoOf____Classd1=____Classd1===null?null:____Classd1.prototype;Box.prototype=Object.create(____SuperProtoOf____Classd1);Box.prototype.constructor=Box;Box.__superConstructor__=____Classd1;function Box(){if(____Classd1!==null){____Classd1.apply(this,arguments);}}
  Object.defineProperty(Box.prototype,"render",{writable:true,configurable:true,value:function() {
    var divStyle =
      { backgroundColor:          this.props.bgcolor,
        WebkitAnimationDelay:     this.props.name ? this.props.animData.delay : '0s',
        animationDelay:           this.props.name ? this.props.animData.delay : '0s',
        WebkitAnimationDuration: '2s',
        animationDuration:       '2s'
      };
    var classes = "col-xs-3 animated " + this.props.animData.anim;

    return (React.createElement("div", {className: classes, style: divStyle}, this.props.name));
  }});
;

var ____Classd2=React.Component;for(var ____Classd2____Key in ____Classd2){if(____Classd2.hasOwnProperty(____Classd2____Key)){Row[____Classd2____Key]=____Classd2[____Classd2____Key];}}var ____SuperProtoOf____Classd2=____Classd2===null?null:____Classd2.prototype;Row.prototype=Object.create(____SuperProtoOf____Classd2);Row.prototype.constructor=Row;Row.__superConstructor__=____Classd2;function Row(){if(____Classd2!==null){____Classd2.apply(this,arguments);}}
  Object.defineProperty(Row.prototype,"render",{writable:true,configurable:true,value:function() {
    var boxes = _.map(_.range(4), function(i)  {return (
      React.createElement(Box, {bgcolor: this.props.colors[i], 
           name: this.props.names[i], 
           animData: this.props.anims[i], 
           key: i}
      )
    );}.bind(this));

    return ( React.createElement("div", {className: "row"}, " ", boxes, " ") );
  }});
;

var ____Classd3=React.Component;for(var ____Classd3____Key in ____Classd3){if(____Classd3.hasOwnProperty(____Classd3____Key)){Table[____Classd3____Key]=____Classd3[____Classd3____Key];}}var ____SuperProtoOf____Classd3=____Classd3===null?null:____Classd3.prototype;Table.prototype=Object.create(____SuperProtoOf____Classd3);Table.prototype.constructor=Table;Table.__superConstructor__=____Classd3;function Table(){if(____Classd3!==null){____Classd3.apply(this,arguments);}}
  Object.defineProperty(Table.prototype,"render",{writable:true,configurable:true,value:function() {
    var rows = _.map(_.range(this.props.numPlayers / 4), function(i)  {return (
      React.createElement(Row, {colors: this.props.colors.slice(4*i, 4*i + 4), 
           names: this.props.names.slice(4*i, 4*i + 4), 
           anims: this.props.anims.slice(4*i, 4*i + 4), 
           key: i}
      )
    );}.bind(this));

    return (React.createElement("div", {className: "col-xs-9"}, rows));
  }});
;

var ____Classd4=React.Component;for(var ____Classd4____Key in ____Classd4){if(____Classd4.hasOwnProperty(____Classd4____Key)){NumPlayers[____Classd4____Key]=____Classd4[____Classd4____Key];}}var ____SuperProtoOf____Classd4=____Classd4===null?null:____Classd4.prototype;NumPlayers.prototype=Object.create(____SuperProtoOf____Classd4);NumPlayers.prototype.constructor=NumPlayers;NumPlayers.__superConstructor__=____Classd4;function NumPlayers(){if(____Classd4!==null){____Classd4.apply(this,arguments);}}
  Object.defineProperty(NumPlayers.prototype,"handleChange",{writable:true,configurable:true,value:function() {
    this.props.onChange(React.findDOMNode(this.refs.numPlayers).value);
  }});

  Object.defineProperty(NumPlayers.prototype,"render",{writable:true,configurable:true,value:function() {
    var inputStyle = { backgroundColor: 'transparent',
                       color: 'white',
                       height: '45px',
                       width:  '90px'};

    return (
      React.createElement("div", {className: "form-group"}, 
        React.createElement("input", {className: "form-control", type: "text", 
               placeholder: "16", 
               id: "num", 
               ref: "numPlayers", 
               value: this.props.numPlayers, 
               onChange: this.handleChange.bind(this), 
               style: inputStyle}
        )
      )
    );
  }});
;

var ____Classd5=React.Component;for(var ____Classd5____Key in ____Classd5){if(____Classd5.hasOwnProperty(____Classd5____Key)){Player[____Classd5____Key]=____Classd5[____Classd5____Key];}}var ____SuperProtoOf____Classd5=____Classd5===null?null:____Classd5.prototype;Player.prototype=Object.create(____SuperProtoOf____Classd5);Player.prototype.constructor=Player;Player.__superConstructor__=____Classd5;function Player(){if(____Classd5!==null){____Classd5.apply(this,arguments);}}
  Object.defineProperty(Player.prototype,"handleChange",{writable:true,configurable:true,value:function() {
    this.props.onUserInput(this.props.num,
    React.findDOMNode(this.refs.textInput).value);
  }});

  Object.defineProperty(Player.prototype,"render",{writable:true,configurable:true,value:function() {
    var inputStyle = {backgroundColor: 'transparent', color: 'white'};

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

var ____Classd6=React.Component;for(var ____Classd6____Key in ____Classd6){if(____Classd6.hasOwnProperty(____Classd6____Key)){Players[____Classd6____Key]=____Classd6[____Classd6____Key];}}var ____SuperProtoOf____Classd6=____Classd6===null?null:____Classd6.prototype;Players.prototype=Object.create(____SuperProtoOf____Classd6);Players.prototype.constructor=Players;Players.__superConstructor__=____Classd6;function Players(){if(____Classd6!==null){____Classd6.apply(this,arguments);}}
  Object.defineProperty(Players.prototype,"render",{writable:true,configurable:true,value:function() {
    var players = _.map(_.range(this.props.numPlayers), function(n)  {return (
      React.createElement(Player, {key: n, num: n, name: this.props.names[n], onUserInput: this.props.onUserInput})
    );}.bind(this));

    return (
      React.createElement("div", {className: "col-xs-2 col-xs-offset-1"}, 
        React.createElement("form", {id: "players"}, players)
      )
    );
  }});
;

var ____Classd7=React.Component;for(var ____Classd7____Key in ____Classd7){if(____Classd7.hasOwnProperty(____Classd7____Key)){Play[____Classd7____Key]=____Classd7[____Classd7____Key];}}var ____SuperProtoOf____Classd7=____Classd7===null?null:____Classd7.prototype;Play.prototype=Object.create(____SuperProtoOf____Classd7);Play.prototype.constructor=Play;Play.__superConstructor__=____Classd7;function Play(){if(____Classd7!==null){____Classd7.apply(this,arguments);}}
  Object.defineProperty(Play.prototype,"handlePlay",{writable:true,configurable:true,value:function() {
    this.props.onPress();
  }});

  Object.defineProperty(Play.prototype,"handleReset",{writable:true,configurable:true,value:function() {
    this.props.onReset();
  }});

  Object.defineProperty(Play.prototype,"render",{writable:true,configurable:true,value:function( ) {
    var buttonStyle = {outline: 0, color : 'white', backgroundColor: 'transparent'};

    return (
      React.createElement("div", {className: "row"}, 
        React.createElement("div", {className: "col-xs-2"}, 
          React.createElement("button", {type: "button", 
                  className: "btn btn-default btn-lg", 
                  id: "play", 
                  style: buttonStyle, 
                  onMouseUp: this.handlePlay.bind(this)}, 
            "Play - Replay"
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
        ), 
        React.createElement("div", {className: "col-xs-2"}, 
          React.createElement("form", {id: "numPlayers"}, 
            React.createElement(NumPlayers, {numPlayers: this.props.numPlayers, onChange: this.props.onNum})
          )
        )
    )
    );
  }});
;

var ____Classd8=React.Component;for(var ____Classd8____Key in ____Classd8){if(____Classd8.hasOwnProperty(____Classd8____Key)){LotteryApp[____Classd8____Key]=____Classd8[____Classd8____Key];}}var ____SuperProtoOf____Classd8=____Classd8===null?null:____Classd8.prototype;LotteryApp.prototype=Object.create(____SuperProtoOf____Classd8);LotteryApp.prototype.constructor=LotteryApp;LotteryApp.__superConstructor__=____Classd8;
  function LotteryApp(props) {
    ____Classd8.call(this,props);
    var anims = _.fill(Array(16), {anim: '', delay: '0s'});
    var cellColors = _.map(_.range(100), function()  {
      return ('#' + Math.floor(_.random(0.1, 0.9) * 16777215).toString(16))
    });
    this.cellColors = cellColors;
    this.state = {names: [], anims: anims, numPlayers: 16};
    this.handleNum   = this.handleNum.bind(this);
    this.handleName  = this.handleName.bind(this);
    this.handlePlay  = this.handlePlay.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  Object.defineProperty(LotteryApp.prototype,"handleNum",{writable:true,configurable:true,value:function(n) {
    var emptyAnims = _.fill(Array(round4(n)), {anim: '', delay: '0s'});
    this.setState({numPlayers: n, anims: emptyAnims});
  }});

  Object.defineProperty(LotteryApp.prototype,"handleName",{writable:true,configurable:true,value:function(i, name) {
    var arr = this.state.names.slice();
    arr[i] = name;
    this.setState({names: arr});
  }});

  Object.defineProperty(LotteryApp.prototype,"handleReset",{writable:true,configurable:true,value:function() {
    var emptyAnims = _.fill(Array(round4(this.state.numPlayers)), {anim: '', delay: '0s'});
    this.setState({names: [], anims: emptyAnims});
  }});

  Object.defineProperty(LotteryApp.prototype,"handlePlay",{writable:true,configurable:true,value:function() {
    var numPlayers = round4(this.state.numPlayers);
    var names = this.state.names;
    var $__0=   _.partition(_.range(numPlayers), function(n)  {return names[n];}),alive=$__0[0],dead=$__0[1];
    var animations =
      [ 'bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp',
        'fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig',
        'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig',
        'flipOutX', 'flipOutY', 'lightSpeedOut', 'rotateOut', 'rotateOutDownLeft',
        'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight',
        'rollOut', 'zoomOut', 'zoomOutDown', 'zoomOutRight', 'zoomOutUp',
        'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp' ];
    var animMix = _.shuffle(animations);
    var boxAnims = [];
    var idx = 0;

    alive = _.shuffle(alive);
    dead  = _.shuffle(dead);

    boxAnims[_.last(alive)] = {anim: 'tada', delay: 2 * _.size(alive) + 's'};

    _.forEach(_.initial(alive), function(n)  {
      boxAnims[n] = {anim: animMix[idx % 31], delay: 2 + 2 * idx + 's'};
      idx += 1;
    });

    _.forEach(dead, function(n)  {
       boxAnims[n] = {anim: 'fadeOut', delay: '0s'};
    });

    this.setState({anims: this.state.anims});
    this.setState({anims: boxAnims});
  }});

  Object.defineProperty(LotteryApp.prototype,"render",{writable:true,configurable:true,value:function() {
    var numPlayers = round4(this.state.numPlayers);
    return (
      React.createElement("div", {className: "container"}, 
        React.createElement("h1", null, "Lottery"), 
        React.createElement(Play, {onPress: this.handlePlay, onReset: this.handleReset, numPlayers: this.state.numPlayers, onNum: this.handleNum}), 
        React.createElement(Table, {colors: this.cellColors, names: this.state.names, anims: this.state.anims, numPlayers: numPlayers}), 
        React.createElement(Players, {names: this.state.names, onUserInput: this.handleName, numPlayers: numPlayers})
      )
    );
  }});
;

React.render(React.createElement(LotteryApp, null), document.getElementById('content'));
