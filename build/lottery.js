/**
 * @jsx React.DOM
 */

'use strict';

var N = 4;

var ____ClassU=React.Component;for(var ____ClassU____Key in ____ClassU){if(____ClassU.hasOwnProperty(____ClassU____Key)){Box[____ClassU____Key]=____ClassU[____ClassU____Key];}}var ____SuperProtoOf____ClassU=____ClassU===null?null:____ClassU.prototype;Box.prototype=Object.create(____SuperProtoOf____ClassU);Box.prototype.constructor=Box;Box.__superConstructor__=____ClassU;function Box(){if(____ClassU!==null){____ClassU.apply(this,arguments);}}
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

var ____ClassV=React.Component;for(var ____ClassV____Key in ____ClassV){if(____ClassV.hasOwnProperty(____ClassV____Key)){Row[____ClassV____Key]=____ClassV[____ClassV____Key];}}var ____SuperProtoOf____ClassV=____ClassV===null?null:____ClassV.prototype;Row.prototype=Object.create(____SuperProtoOf____ClassV);Row.prototype.constructor=Row;Row.__superConstructor__=____ClassV;function Row(){if(____ClassV!==null){____ClassV.apply(this,arguments);}}
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

var ____ClassW=React.Component;for(var ____ClassW____Key in ____ClassW){if(____ClassW.hasOwnProperty(____ClassW____Key)){Table[____ClassW____Key]=____ClassW[____ClassW____Key];}}var ____SuperProtoOf____ClassW=____ClassW===null?null:____ClassW.prototype;Table.prototype=Object.create(____SuperProtoOf____ClassW);Table.prototype.constructor=Table;Table.__superConstructor__=____ClassW;function Table(){if(____ClassW!==null){____ClassW.apply(this,arguments);}}
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

var ____ClassX=React.Component;for(var ____ClassX____Key in ____ClassX){if(____ClassX.hasOwnProperty(____ClassX____Key)){Player[____ClassX____Key]=____ClassX[____ClassX____Key];}}var ____SuperProtoOf____ClassX=____ClassX===null?null:____ClassX.prototype;Player.prototype=Object.create(____SuperProtoOf____ClassX);Player.prototype.constructor=Player;Player.__superConstructor__=____ClassX;function Player(){if(____ClassX!==null){____ClassX.apply(this,arguments);}}
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

var ____ClassY=React.Component;for(var ____ClassY____Key in ____ClassY){if(____ClassY.hasOwnProperty(____ClassY____Key)){Players[____ClassY____Key]=____ClassY[____ClassY____Key];}}var ____SuperProtoOf____ClassY=____ClassY===null?null:____ClassY.prototype;Players.prototype=Object.create(____SuperProtoOf____ClassY);Players.prototype.constructor=Players;Players.__superConstructor__=____ClassY;function Players(){if(____ClassY!==null){____ClassY.apply(this,arguments);}}
  Object.defineProperty(Players.prototype,"render",{writable:true,configurable:true,value:function() {
    var players = _.map(_.range(4*N), function(n)  {return (
      React.createElement(Player, {key: n, num: n, name: this.props.names[n], onUserInput: this.props.onUserInput})
    );}.bind(this));

    return (
      React.createElement("div", {className: "col-xs-2 col-xs-offset-1"}, 
        React.createElement("form", {id: "players"}, players)
      )
    );
  }});
;

var ____ClassZ=React.Component;for(var ____ClassZ____Key in ____ClassZ){if(____ClassZ.hasOwnProperty(____ClassZ____Key)){Play[____ClassZ____Key]=____ClassZ[____ClassZ____Key];}}var ____SuperProtoOf____ClassZ=____ClassZ===null?null:____ClassZ.prototype;Play.prototype=Object.create(____SuperProtoOf____ClassZ);Play.prototype.constructor=Play;Play.__superConstructor__=____ClassZ;function Play(){if(____ClassZ!==null){____ClassZ.apply(this,arguments);}}
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
;

var ____Class10=React.Component;for(var ____Class10____Key in ____Class10){if(____Class10.hasOwnProperty(____Class10____Key)){LotteryApp[____Class10____Key]=____Class10[____Class10____Key];}}var ____SuperProtoOf____Class10=____Class10===null?null:____Class10.prototype;LotteryApp.prototype=Object.create(____SuperProtoOf____Class10);LotteryApp.prototype.constructor=LotteryApp;LotteryApp.__superConstructor__=____Class10;
  function LotteryApp(props) {
    ____Class10.call(this,props);
    var anims = _.fill(Array(4*N), {anim: '', delay: '0s'});
    var cellColors = _.map(_.range(4*N), function()  {
      return ('#' + Math.floor(_.random(0.1, 0.9) * 16777215).toString(16))
    });
    this.clrs = cellColors;
    this.state = {names: [], anims: anims};
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
    return (
      React.createElement("div", {className: "container"}, 
        React.createElement("h1", null, "Lottery"), 
        React.createElement(Play, {onPress: this.handlePlay, onReset: this.handleReset}), 
        React.createElement(Table, {colors: this.clrs, names: this.state.names, anims: this.state.anims}), 
        React.createElement(Players, {names: this.state.names, onUserInput: this.handleName})
      )
    );
  }});
;

React.render(React.createElement(LotteryApp, null), document.getElementById('content'));
