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

var ____Class1G=React.Component;for(var ____Class1G____Key in ____Class1G){if(____Class1G.hasOwnProperty(____Class1G____Key)){Box[____Class1G____Key]=____Class1G[____Class1G____Key];}}var ____SuperProtoOf____Class1G=____Class1G===null?null:____Class1G.prototype;Box.prototype=Object.create(____SuperProtoOf____Class1G);Box.prototype.constructor=Box;Box.__superConstructor__=____Class1G;function Box(){if(____Class1G!==null){____Class1G.apply(this,arguments);}}
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

var ____Class1H=React.Component;for(var ____Class1H____Key in ____Class1H){if(____Class1H.hasOwnProperty(____Class1H____Key)){Row[____Class1H____Key]=____Class1H[____Class1H____Key];}}var ____SuperProtoOf____Class1H=____Class1H===null?null:____Class1H.prototype;Row.prototype=Object.create(____SuperProtoOf____Class1H);Row.prototype.constructor=Row;Row.__superConstructor__=____Class1H;function Row(){if(____Class1H!==null){____Class1H.apply(this,arguments);}}
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

var ____Class1I=React.Component;for(var ____Class1I____Key in ____Class1I){if(____Class1I.hasOwnProperty(____Class1I____Key)){Table[____Class1I____Key]=____Class1I[____Class1I____Key];}}var ____SuperProtoOf____Class1I=____Class1I===null?null:____Class1I.prototype;Table.prototype=Object.create(____SuperProtoOf____Class1I);Table.prototype.constructor=Table;Table.__superConstructor__=____Class1I;function Table(){if(____Class1I!==null){____Class1I.apply(this,arguments);}}
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

var ____Class1J=React.Component;for(var ____Class1J____Key in ____Class1J){if(____Class1J.hasOwnProperty(____Class1J____Key)){NumPlayers[____Class1J____Key]=____Class1J[____Class1J____Key];}}var ____SuperProtoOf____Class1J=____Class1J===null?null:____Class1J.prototype;NumPlayers.prototype=Object.create(____SuperProtoOf____Class1J);NumPlayers.prototype.constructor=NumPlayers;NumPlayers.__superConstructor__=____Class1J;function NumPlayers(){if(____Class1J!==null){____Class1J.apply(this,arguments);}}
  Object.defineProperty(NumPlayers.prototype,"handleChange",{writable:true,configurable:true,value:function() {
    this.props.onChange(React.findDOMNode(this.refs.numPlayers).value);
  }});

  Object.defineProperty(NumPlayers.prototype,"render",{writable:true,configurable:true,value:function() {
    var inputStyle = { backgroundColor: 'transparent',
                       color: 'white',
                      //  height: '45px',
                      //  width:  '90px'
                       };

    return (
      React.createElement("div", {className: "form-group"}, 
        React.createElement("label", {for: "rows"}, "Rows"), 
        React.createElement("input", {className: "form-control", type: "text", id: "rows", 
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

var ____Class1K=React.Component;for(var ____Class1K____Key in ____Class1K){if(____Class1K.hasOwnProperty(____Class1K____Key)){Player[____Class1K____Key]=____Class1K[____Class1K____Key];}}var ____SuperProtoOf____Class1K=____Class1K===null?null:____Class1K.prototype;Player.prototype=Object.create(____SuperProtoOf____Class1K);Player.prototype.constructor=Player;Player.__superConstructor__=____Class1K;function Player(){if(____Class1K!==null){____Class1K.apply(this,arguments);}}
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

var ____Class1L=React.Component;for(var ____Class1L____Key in ____Class1L){if(____Class1L.hasOwnProperty(____Class1L____Key)){Players[____Class1L____Key]=____Class1L[____Class1L____Key];}}var ____SuperProtoOf____Class1L=____Class1L===null?null:____Class1L.prototype;Players.prototype=Object.create(____SuperProtoOf____Class1L);Players.prototype.constructor=Players;Players.__superConstructor__=____Class1L;function Players(){if(____Class1L!==null){____Class1L.apply(this,arguments);}}
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

var ____Class1M=React.Component;for(var ____Class1M____Key in ____Class1M){if(____Class1M.hasOwnProperty(____Class1M____Key)){Play[____Class1M____Key]=____Class1M[____Class1M____Key];}}var ____SuperProtoOf____Class1M=____Class1M===null?null:____Class1M.prototype;Play.prototype=Object.create(____SuperProtoOf____Class1M);Play.prototype.constructor=Play;Play.__superConstructor__=____Class1M;function Play(){if(____Class1M!==null){____Class1M.apply(this,arguments);}}
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
        React.createElement("div", {className: "col-xs-1"}, 
          React.createElement("button", {type: "button", 
                  className: "btn btn-default btn-lg", 
                  id: "play", 
                  style: buttonStyle, 
                  onMouseUp: this.handlePlay.bind(this)}, 
            "Play"
          )
        ), 
        React.createElement("div", {className: "col-xs-offset-1 col-xs-2"}, 
          React.createElement("button", {type: "button", 
                  className: "btn btn-default btn-lg", 
                  id: "reset", 
                  style: buttonStyle, 
                  onMouseUp: this.handleReset.bind(this)}, 
            "Reset"
          )
        ), 
        React.createElement("div", {className: "col-xs-offset-4 col-xs-1"}, 
          React.createElement("form", {id: "numPlayers"}, 
            React.createElement(NumPlayers, {numPlayers: this.props.numPlayers, onChange: this.props.onNum})
          )
        )
    )
    );
  }});
;

var ____Class1N=React.Component;for(var ____Class1N____Key in ____Class1N){if(____Class1N.hasOwnProperty(____Class1N____Key)){LotteryApp[____Class1N____Key]=____Class1N[____Class1N____Key];}}var ____SuperProtoOf____Class1N=____Class1N===null?null:____Class1N.prototype;LotteryApp.prototype=Object.create(____SuperProtoOf____Class1N);LotteryApp.prototype.constructor=LotteryApp;LotteryApp.__superConstructor__=____Class1N;
  function LotteryApp(props) {
    ____Class1N.call(this,props);
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
