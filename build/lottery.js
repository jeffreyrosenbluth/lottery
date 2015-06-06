/**
 * @jsx React.DOM
 */

'use strict';

var N = 4;

var ____Class3v=React.Component;for(var ____Class3v____Key in ____Class3v){if(____Class3v.hasOwnProperty(____Class3v____Key)){Box[____Class3v____Key]=____Class3v[____Class3v____Key];}}var ____SuperProtoOf____Class3v=____Class3v===null?null:____Class3v.prototype;Box.prototype=Object.create(____SuperProtoOf____Class3v);Box.prototype.constructor=Box;Box.__superConstructor__=____Class3v;function Box(){if(____Class3v!==null){____Class3v.apply(this,arguments);}}
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

var ____Class3w=React.Component;for(var ____Class3w____Key in ____Class3w){if(____Class3w.hasOwnProperty(____Class3w____Key)){Row[____Class3w____Key]=____Class3w[____Class3w____Key];}}var ____SuperProtoOf____Class3w=____Class3w===null?null:____Class3w.prototype;Row.prototype=Object.create(____SuperProtoOf____Class3w);Row.prototype.constructor=Row;Row.__superConstructor__=____Class3w;function Row(){if(____Class3w!==null){____Class3w.apply(this,arguments);}}
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

var ____Class3x=React.Component;for(var ____Class3x____Key in ____Class3x){if(____Class3x.hasOwnProperty(____Class3x____Key)){Table[____Class3x____Key]=____Class3x[____Class3x____Key];}}var ____SuperProtoOf____Class3x=____Class3x===null?null:____Class3x.prototype;Table.prototype=Object.create(____SuperProtoOf____Class3x);Table.prototype.constructor=Table;Table.__superConstructor__=____Class3x;function Table(){if(____Class3x!==null){____Class3x.apply(this,arguments);}}
  Object.defineProperty(Table.prototype,"render",{writable:true,configurable:true,value:function() {
    var rows = _.map(_.range(N), function(i)  {return (
      React.createElement(Row, {colors: this.props.colors.slice(4*i, 4*i + 4), 
           names: this.props.names.slice(4*i, 4*i + 4), 
           anims: this.props.anims.slice(4*i, 4*i + 4), 
           key: i}
      )
    );}.bind(this));
    return (React.createElement("div", {className: "col-xs-9"}, rows));
  }});
;

var ____Class3y=React.Component;for(var ____Class3y____Key in ____Class3y){if(____Class3y.hasOwnProperty(____Class3y____Key)){Player[____Class3y____Key]=____Class3y[____Class3y____Key];}}var ____SuperProtoOf____Class3y=____Class3y===null?null:____Class3y.prototype;Player.prototype=Object.create(____SuperProtoOf____Class3y);Player.prototype.constructor=Player;Player.__superConstructor__=____Class3y;function Player(){if(____Class3y!==null){____Class3y.apply(this,arguments);}}
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

var ____Class3z=React.Component;for(var ____Class3z____Key in ____Class3z){if(____Class3z.hasOwnProperty(____Class3z____Key)){Players[____Class3z____Key]=____Class3z[____Class3z____Key];}}var ____SuperProtoOf____Class3z=____Class3z===null?null:____Class3z.prototype;Players.prototype=Object.create(____SuperProtoOf____Class3z);Players.prototype.constructor=Players;Players.__superConstructor__=____Class3z;function Players(){if(____Class3z!==null){____Class3z.apply(this,arguments);}}
  Object.defineProperty(Players.prototype,"render",{writable:true,configurable:true,value:function() {
    var players = _.map(_.range(4*N), function(n)  {return (
      React.createElement(Player, {key: n, num: n, name: this.props.names[n], onUserInput: this.props.onUserInput})
    );}.bind(this));
    return (
      React.createElement("div", {className: "col-xs-2 col-xs-offset-1"}, 
        React.createElement("form", {id: "players"}, players)
      )
    )
  }});
;

var ____Class3A=React.Component;for(var ____Class3A____Key in ____Class3A){if(____Class3A.hasOwnProperty(____Class3A____Key)){Play[____Class3A____Key]=____Class3A[____Class3A____Key];}}var ____SuperProtoOf____Class3A=____Class3A===null?null:____Class3A.prototype;Play.prototype=Object.create(____SuperProtoOf____Class3A);Play.prototype.constructor=Play;Play.__superConstructor__=____Class3A;function Play(){if(____Class3A!==null){____Class3A.apply(this,arguments);}}
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
            "Play - Replay"
          )
        ), 
          React.createElement("div", {className: "col-xs-1 col-xs-offset-7"}, 
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


var animations =
  [ 'bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp',
    'fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig',
    'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig',
    'flipOutX', 'flipOutY', 'lightSpeedOut', 'rotateOut', 'rotateOutDownLeft',
    'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight',
    'rollOut', 'zoomOut', 'zoomOutDown', 'zoomOutRight', 'zoomOutUp',
    'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'
  ];

var ____Class3B=React.Component;for(var ____Class3B____Key in ____Class3B){if(____Class3B.hasOwnProperty(____Class3B____Key)){LotteryApp[____Class3B____Key]=____Class3B[____Class3B____Key];}}var ____SuperProtoOf____Class3B=____Class3B===null?null:____Class3B.prototype;LotteryApp.prototype=Object.create(____SuperProtoOf____Class3B);LotteryApp.prototype.constructor=LotteryApp;LotteryApp.__superConstructor__=____Class3B;
  function LotteryApp(props) {
    ____Class3B.call(this,props);
    var anims = _.fill(Array(4*N), {anim: '', delay: '0s'});
    var cellColors   = _.map(_.range(4*N), function()  {
      return ('#' + Math.floor(_.random(0.1, 0.9) * 16777215).toString(16))
    });
    this.state = {names: [], anims: anims, cellColors: cellColors};
    this.handleName = this.handleName.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  Object.defineProperty(LotteryApp.prototype,"handleName",{writable:true,configurable:true,value:function(i, name) {
    var arr = this.state.names.slice();
    arr[i] = name;
    this.setState({names: arr});
  }});

  Object.defineProperty(LotteryApp.prototype,"handleReset",{writable:true,configurable:true,value:function() {
    var emptyAnims = _.fill(Array(4*N), {anim: '', delay: '0s'});
    this.setState({names: [], anims: emptyAnims});
  }});

  Object.defineProperty(LotteryApp.prototype,"handlePlay",{writable:true,configurable:true,value:function() {
    var names = this.state.names;
    var $__0=   _.partition(_.range(4*N), function(n)  {return names[n];}),alive=$__0[0],dead=$__0[1];
    alive = _.shuffle(alive);
    dead  = _.shuffle(dead);

    var animMix = _.shuffle(animations);
    var boxAnims = [];
    boxAnims[alive[alive.length -1]] = {anim: 'tada', delay: 2 * alive.length + 's'};
    for (var i = 0; i < (alive.length - 1); i++) {
      boxAnims[alive[i]] = {anim: animMix[i % 31], delay: 2 + 2 * i + 's'};
    }
    for (var i = 0; i < dead.length; i++) {
      boxAnims[dead[i]] = {anim: 'fadeOut', delay: '0s'};
    }
    this.setState({anims: this.state.anims})
    this.setState({anims: boxAnims});
  }});

  Object.defineProperty(LotteryApp.prototype,"render",{writable:true,configurable:true,value:function() {
    return (
      React.createElement("div", {className: "container"}, 
        React.createElement("h1", null, "Lottery"), 
        React.createElement(Play, {onPress: this.handlePlay, onReset: this.handleReset}), 
        React.createElement(Table, {colors: this.state.cellColors, names: this.state.names, anims: this.state.anims}), 
        React.createElement(Players, {names: this.state.names, onUserInput: this.handleName})
      )
    );
  }});
;

React.render(React.createElement(LotteryApp, null), document.getElementById('content'));
