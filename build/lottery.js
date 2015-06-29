/**
 * @jsx React.DOM
 */

'use strict';

var ____Class6c=React.Component;for(var ____Class6c____Key in ____Class6c){if(____Class6c.hasOwnProperty(____Class6c____Key)){Box[____Class6c____Key]=____Class6c[____Class6c____Key];}}var ____SuperProtoOf____Class6c=____Class6c===null?null:____Class6c.prototype;Box.prototype=Object.create(____SuperProtoOf____Class6c);Box.prototype.constructor=Box;Box.__superConstructor__=____Class6c;function Box(){if(____Class6c!==null){____Class6c.apply(this,arguments);}}
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

var ____Class6d=React.Component;for(var ____Class6d____Key in ____Class6d){if(____Class6d.hasOwnProperty(____Class6d____Key)){Row[____Class6d____Key]=____Class6d[____Class6d____Key];}}var ____SuperProtoOf____Class6d=____Class6d===null?null:____Class6d.prototype;Row.prototype=Object.create(____SuperProtoOf____Class6d);Row.prototype.constructor=Row;Row.__superConstructor__=____Class6d;function Row(){if(____Class6d!==null){____Class6d.apply(this,arguments);}}
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

var ____Class6e=React.Component;for(var ____Class6e____Key in ____Class6e){if(____Class6e.hasOwnProperty(____Class6e____Key)){Table[____Class6e____Key]=____Class6e[____Class6e____Key];}}var ____SuperProtoOf____Class6e=____Class6e===null?null:____Class6e.prototype;Table.prototype=Object.create(____SuperProtoOf____Class6e);Table.prototype.constructor=Table;Table.__superConstructor__=____Class6e;function Table(){if(____Class6e!==null){____Class6e.apply(this,arguments);}}
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

var ____Class6f=React.Component;for(var ____Class6f____Key in ____Class6f){if(____Class6f.hasOwnProperty(____Class6f____Key)){NumPlayers[____Class6f____Key]=____Class6f[____Class6f____Key];}}var ____SuperProtoOf____Class6f=____Class6f===null?null:____Class6f.prototype;NumPlayers.prototype=Object.create(____SuperProtoOf____Class6f);NumPlayers.prototype.constructor=NumPlayers;NumPlayers.__superConstructor__=____Class6f;function NumPlayers(){if(____Class6f!==null){____Class6f.apply(this,arguments);}}
  Object.defineProperty(NumPlayers.prototype,"handleChange",{writable:true,configurable:true,value:function() {
    this.props.onChange(4 * React.findDOMNode(this.refs.numPlayers).value);
  }});

  Object.defineProperty(NumPlayers.prototype,"render",{writable:true,configurable:true,value:function() {
    var inputStyle = {backgroundColor: 'transparent', color: 'white'};

    return (
      React.createElement("div", {className: "form-group"}, 
        React.createElement("input", {className: "form-control", type: "text", 
               placeholder: "4", 
               id: "num", 
               ref: "numPlayers", 
               value: this.props.numPlayers / 4, 
               onChange: this.handleChange.bind(this), 
               style: inputStyle}
        )
      )
    );
  }});
;

var ____Class6g=React.Component;for(var ____Class6g____Key in ____Class6g){if(____Class6g.hasOwnProperty(____Class6g____Key)){Player[____Class6g____Key]=____Class6g[____Class6g____Key];}}var ____SuperProtoOf____Class6g=____Class6g===null?null:____Class6g.prototype;Player.prototype=Object.create(____SuperProtoOf____Class6g);Player.prototype.constructor=Player;Player.__superConstructor__=____Class6g;function Player(){if(____Class6g!==null){____Class6g.apply(this,arguments);}}
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

var ____Class6h=React.Component;for(var ____Class6h____Key in ____Class6h){if(____Class6h.hasOwnProperty(____Class6h____Key)){Players[____Class6h____Key]=____Class6h[____Class6h____Key];}}var ____SuperProtoOf____Class6h=____Class6h===null?null:____Class6h.prototype;Players.prototype=Object.create(____SuperProtoOf____Class6h);Players.prototype.constructor=Players;Players.__superConstructor__=____Class6h;function Players(){if(____Class6h!==null){____Class6h.apply(this,arguments);}}
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

var ____Class6i=React.Component;for(var ____Class6i____Key in ____Class6i){if(____Class6i.hasOwnProperty(____Class6i____Key)){Play[____Class6i____Key]=____Class6i[____Class6i____Key];}}var ____SuperProtoOf____Class6i=____Class6i===null?null:____Class6i.prototype;Play.prototype=Object.create(____SuperProtoOf____Class6i);Play.prototype.constructor=Play;Play.__superConstructor__=____Class6i;function Play(){if(____Class6i!==null){____Class6i.apply(this,arguments);}}
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
        React.createElement("div", {className: "col-xs-offset-3 col-xs-1"}, 
          React.createElement("p", null, "Rows:")
        ), 
        React.createElement("div", {className: "col-xs-1"}, 
          React.createElement("form", {id: "numPlayers"}, 
            React.createElement(NumPlayers, {numPlayers: this.props.numPlayers, onChange: this.props.onNum})
          )
        )
    )
    );
  }});
;

var ____Class6j=React.Component;for(var ____Class6j____Key in ____Class6j){if(____Class6j.hasOwnProperty(____Class6j____Key)){LotteryApp[____Class6j____Key]=____Class6j[____Class6j____Key];}}var ____SuperProtoOf____Class6j=____Class6j===null?null:____Class6j.prototype;LotteryApp.prototype=Object.create(____SuperProtoOf____Class6j);LotteryApp.prototype.constructor=LotteryApp;LotteryApp.__superConstructor__=____Class6j;
  function LotteryApp(props) {
    ____Class6j.call(this,props);
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
    var emptyAnims = _.fill(Array(n), {anim: '', delay: '0s'});
    var cellColors = _.map(_.range(n), function()  {
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
    var emptyAnims = _.fill(Array(this.state.numPlayers), {anim: '', delay: '0s'});
    this.setState({names: [], anims: emptyAnims});
  }});

  Object.defineProperty(LotteryApp.prototype,"handlePlay",{writable:true,configurable:true,value:function() {
    var numPlayers = this.state.numPlayers;
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
    var numPlayers = this.state.numPlayers;
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
