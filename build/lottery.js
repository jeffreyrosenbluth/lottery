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

var ____Classcf=React.Component;for(var ____Classcf____Key in ____Classcf){if(____Classcf.hasOwnProperty(____Classcf____Key)){Box[____Classcf____Key]=____Classcf[____Classcf____Key];}}var ____SuperProtoOf____Classcf=____Classcf===null?null:____Classcf.prototype;Box.prototype=Object.create(____SuperProtoOf____Classcf);Box.prototype.constructor=Box;Box.__superConstructor__=____Classcf;function Box(){if(____Classcf!==null){____Classcf.apply(this,arguments);}}
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

var ____Classcg=React.Component;for(var ____Classcg____Key in ____Classcg){if(____Classcg.hasOwnProperty(____Classcg____Key)){Row[____Classcg____Key]=____Classcg[____Classcg____Key];}}var ____SuperProtoOf____Classcg=____Classcg===null?null:____Classcg.prototype;Row.prototype=Object.create(____SuperProtoOf____Classcg);Row.prototype.constructor=Row;Row.__superConstructor__=____Classcg;function Row(){if(____Classcg!==null){____Classcg.apply(this,arguments);}}
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

var ____Classch=React.Component;for(var ____Classch____Key in ____Classch){if(____Classch.hasOwnProperty(____Classch____Key)){Table[____Classch____Key]=____Classch[____Classch____Key];}}var ____SuperProtoOf____Classch=____Classch===null?null:____Classch.prototype;Table.prototype=Object.create(____SuperProtoOf____Classch);Table.prototype.constructor=Table;Table.__superConstructor__=____Classch;function Table(){if(____Classch!==null){____Classch.apply(this,arguments);}}
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

var ____Classci=React.Component;for(var ____Classci____Key in ____Classci){if(____Classci.hasOwnProperty(____Classci____Key)){NumPlayers[____Classci____Key]=____Classci[____Classci____Key];}}var ____SuperProtoOf____Classci=____Classci===null?null:____Classci.prototype;NumPlayers.prototype=Object.create(____SuperProtoOf____Classci);NumPlayers.prototype.constructor=NumPlayers;NumPlayers.__superConstructor__=____Classci;function NumPlayers(){if(____Classci!==null){____Classci.apply(this,arguments);}}
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

var ____Classcj=React.Component;for(var ____Classcj____Key in ____Classcj){if(____Classcj.hasOwnProperty(____Classcj____Key)){Player[____Classcj____Key]=____Classcj[____Classcj____Key];}}var ____SuperProtoOf____Classcj=____Classcj===null?null:____Classcj.prototype;Player.prototype=Object.create(____SuperProtoOf____Classcj);Player.prototype.constructor=Player;Player.__superConstructor__=____Classcj;function Player(){if(____Classcj!==null){____Classcj.apply(this,arguments);}}
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

var ____Classck=React.Component;for(var ____Classck____Key in ____Classck){if(____Classck.hasOwnProperty(____Classck____Key)){Players[____Classck____Key]=____Classck[____Classck____Key];}}var ____SuperProtoOf____Classck=____Classck===null?null:____Classck.prototype;Players.prototype=Object.create(____SuperProtoOf____Classck);Players.prototype.constructor=Players;Players.__superConstructor__=____Classck;function Players(){if(____Classck!==null){____Classck.apply(this,arguments);}}
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

var ____Classcl=React.Component;for(var ____Classcl____Key in ____Classcl){if(____Classcl.hasOwnProperty(____Classcl____Key)){Play[____Classcl____Key]=____Classcl[____Classcl____Key];}}var ____SuperProtoOf____Classcl=____Classcl===null?null:____Classcl.prototype;Play.prototype=Object.create(____SuperProtoOf____Classcl);Play.prototype.constructor=Play;Play.__superConstructor__=____Classcl;function Play(){if(____Classcl!==null){____Classcl.apply(this,arguments);}}
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

var ____Classcm=React.Component;for(var ____Classcm____Key in ____Classcm){if(____Classcm.hasOwnProperty(____Classcm____Key)){LotteryApp[____Classcm____Key]=____Classcm[____Classcm____Key];}}var ____SuperProtoOf____Classcm=____Classcm===null?null:____Classcm.prototype;LotteryApp.prototype=Object.create(____SuperProtoOf____Classcm);LotteryApp.prototype.constructor=LotteryApp;LotteryApp.__superConstructor__=____Classcm;
  function LotteryApp(props) {
    ____Classcm.call(this,props);
    var anims = _.fill(Array(100), {anim: '', delay: '0s'});
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
    this.setState({numPlayers: n});
  }});

  Object.defineProperty(LotteryApp.prototype,"handleName",{writable:true,configurable:true,value:function(i, name) {
    var arr = this.state.names.slice();

    arr[i] = name;
    this.setState({names: arr});
  }});

  Object.defineProperty(LotteryApp.prototype,"handleReset",{writable:true,configurable:true,value:function() {
    var emptyAnims = _.fill(Array(100), {anim: '', delay: '0s'});
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
