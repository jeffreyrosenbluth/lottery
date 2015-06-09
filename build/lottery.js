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

var ____Classdp=React.Component;for(var ____Classdp____Key in ____Classdp){if(____Classdp.hasOwnProperty(____Classdp____Key)){Box[____Classdp____Key]=____Classdp[____Classdp____Key];}}var ____SuperProtoOf____Classdp=____Classdp===null?null:____Classdp.prototype;Box.prototype=Object.create(____SuperProtoOf____Classdp);Box.prototype.constructor=Box;Box.__superConstructor__=____Classdp;function Box(){if(____Classdp!==null){____Classdp.apply(this,arguments);}}
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

var ____Classdq=React.Component;for(var ____Classdq____Key in ____Classdq){if(____Classdq.hasOwnProperty(____Classdq____Key)){Row[____Classdq____Key]=____Classdq[____Classdq____Key];}}var ____SuperProtoOf____Classdq=____Classdq===null?null:____Classdq.prototype;Row.prototype=Object.create(____SuperProtoOf____Classdq);Row.prototype.constructor=Row;Row.__superConstructor__=____Classdq;function Row(){if(____Classdq!==null){____Classdq.apply(this,arguments);}}
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

var ____Classdr=React.Component;for(var ____Classdr____Key in ____Classdr){if(____Classdr.hasOwnProperty(____Classdr____Key)){Table[____Classdr____Key]=____Classdr[____Classdr____Key];}}var ____SuperProtoOf____Classdr=____Classdr===null?null:____Classdr.prototype;Table.prototype=Object.create(____SuperProtoOf____Classdr);Table.prototype.constructor=Table;Table.__superConstructor__=____Classdr;function Table(){if(____Classdr!==null){____Classdr.apply(this,arguments);}}
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

var ____Classds=React.Component;for(var ____Classds____Key in ____Classds){if(____Classds.hasOwnProperty(____Classds____Key)){NumPlayers[____Classds____Key]=____Classds[____Classds____Key];}}var ____SuperProtoOf____Classds=____Classds===null?null:____Classds.prototype;NumPlayers.prototype=Object.create(____SuperProtoOf____Classds);NumPlayers.prototype.constructor=NumPlayers;NumPlayers.__superConstructor__=____Classds;function NumPlayers(){if(____Classds!==null){____Classds.apply(this,arguments);}}
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

var ____Classdt=React.Component;for(var ____Classdt____Key in ____Classdt){if(____Classdt.hasOwnProperty(____Classdt____Key)){Player[____Classdt____Key]=____Classdt[____Classdt____Key];}}var ____SuperProtoOf____Classdt=____Classdt===null?null:____Classdt.prototype;Player.prototype=Object.create(____SuperProtoOf____Classdt);Player.prototype.constructor=Player;Player.__superConstructor__=____Classdt;function Player(){if(____Classdt!==null){____Classdt.apply(this,arguments);}}
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

var ____Classdu=React.Component;for(var ____Classdu____Key in ____Classdu){if(____Classdu.hasOwnProperty(____Classdu____Key)){Players[____Classdu____Key]=____Classdu[____Classdu____Key];}}var ____SuperProtoOf____Classdu=____Classdu===null?null:____Classdu.prototype;Players.prototype=Object.create(____SuperProtoOf____Classdu);Players.prototype.constructor=Players;Players.__superConstructor__=____Classdu;function Players(){if(____Classdu!==null){____Classdu.apply(this,arguments);}}
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

var ____Classdv=React.Component;for(var ____Classdv____Key in ____Classdv){if(____Classdv.hasOwnProperty(____Classdv____Key)){Play[____Classdv____Key]=____Classdv[____Classdv____Key];}}var ____SuperProtoOf____Classdv=____Classdv===null?null:____Classdv.prototype;Play.prototype=Object.create(____SuperProtoOf____Classdv);Play.prototype.constructor=Play;Play.__superConstructor__=____Classdv;function Play(){if(____Classdv!==null){____Classdv.apply(this,arguments);}}
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

var ____Classdw=React.Component;for(var ____Classdw____Key in ____Classdw){if(____Classdw.hasOwnProperty(____Classdw____Key)){LotteryApp[____Classdw____Key]=____Classdw[____Classdw____Key];}}var ____SuperProtoOf____Classdw=____Classdw===null?null:____Classdw.prototype;LotteryApp.prototype=Object.create(____SuperProtoOf____Classdw);LotteryApp.prototype.constructor=LotteryApp;LotteryApp.__superConstructor__=____Classdw;
  function LotteryApp(props) {
    ____Classdw.call(this,props);
    var anims = _.fill(Array(16), {anim: '', delay: '0s'});
    var cellColors = _.map(_.range(16), function()  {
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
    var n4 = round4(n)
    var emptyAnims = _.fill(Array(n4), {anim: '', delay: '0s'});
    var cellColors = _.map(_.range(n4), function()  {
      return ('#' + Math.floor(_.random(0.1, 0.9) * 16777215).toString(16))
    });
    this.setState({numPlayers: n, anims: emptyAnims});
    this.cellColors = cellColors;
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
