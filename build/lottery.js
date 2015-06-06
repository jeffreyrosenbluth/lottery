/**
 * @jsx React.DOM
 */

'use strict';

var N = 4;

var ____Class70=React.Component;for(var ____Class70____Key in ____Class70){if(____Class70.hasOwnProperty(____Class70____Key)){Box[____Class70____Key]=____Class70[____Class70____Key];}}var ____SuperProtoOf____Class70=____Class70===null?null:____Class70.prototype;Box.prototype=Object.create(____SuperProtoOf____Class70);Box.prototype.constructor=Box;Box.__superConstructor__=____Class70;function Box(){if(____Class70!==null){____Class70.apply(this,arguments);}}
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

var ____Class71=React.Component;for(var ____Class71____Key in ____Class71){if(____Class71.hasOwnProperty(____Class71____Key)){Row[____Class71____Key]=____Class71[____Class71____Key];}}var ____SuperProtoOf____Class71=____Class71===null?null:____Class71.prototype;Row.prototype=Object.create(____SuperProtoOf____Class71);Row.prototype.constructor=Row;Row.__superConstructor__=____Class71;function Row(){if(____Class71!==null){____Class71.apply(this,arguments);}}
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

var ____Class72=React.Component;for(var ____Class72____Key in ____Class72){if(____Class72.hasOwnProperty(____Class72____Key)){Table[____Class72____Key]=____Class72[____Class72____Key];}}var ____SuperProtoOf____Class72=____Class72===null?null:____Class72.prototype;Table.prototype=Object.create(____SuperProtoOf____Class72);Table.prototype.constructor=Table;Table.__superConstructor__=____Class72;function Table(){if(____Class72!==null){____Class72.apply(this,arguments);}}
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

var ____Class73=React.Component;for(var ____Class73____Key in ____Class73){if(____Class73.hasOwnProperty(____Class73____Key)){Player[____Class73____Key]=____Class73[____Class73____Key];}}var ____SuperProtoOf____Class73=____Class73===null?null:____Class73.prototype;Player.prototype=Object.create(____SuperProtoOf____Class73);Player.prototype.constructor=Player;Player.__superConstructor__=____Class73;function Player(){if(____Class73!==null){____Class73.apply(this,arguments);}}
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

var ____Class74=React.Component;for(var ____Class74____Key in ____Class74){if(____Class74.hasOwnProperty(____Class74____Key)){Players[____Class74____Key]=____Class74[____Class74____Key];}}var ____SuperProtoOf____Class74=____Class74===null?null:____Class74.prototype;Players.prototype=Object.create(____SuperProtoOf____Class74);Players.prototype.constructor=Players;Players.__superConstructor__=____Class74;function Players(){if(____Class74!==null){____Class74.apply(this,arguments);}}
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

var ____Class75=React.Component;for(var ____Class75____Key in ____Class75){if(____Class75.hasOwnProperty(____Class75____Key)){Play[____Class75____Key]=____Class75[____Class75____Key];}}var ____SuperProtoOf____Class75=____Class75===null?null:____Class75.prototype;Play.prototype=Object.create(____SuperProtoOf____Class75);Play.prototype.constructor=Play;Play.__superConstructor__=____Class75;function Play(){if(____Class75!==null){____Class75.apply(this,arguments);}}
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

var ____Class76=React.Component;for(var ____Class76____Key in ____Class76){if(____Class76.hasOwnProperty(____Class76____Key)){LotteryApp[____Class76____Key]=____Class76[____Class76____Key];}}var ____SuperProtoOf____Class76=____Class76===null?null:____Class76.prototype;LotteryApp.prototype=Object.create(____SuperProtoOf____Class76);LotteryApp.prototype.constructor=LotteryApp;LotteryApp.__superConstructor__=____Class76;
  function LotteryApp(props) {
    ____Class76.call(this,props);
    var anims = _.fill(Array(4*N), {anim: '', delay: '0s'});
    var cellColors = _.map(_.range(4*N), function()  {
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
        React.createElement(Table, {colors: this.state.cellColors, names: this.state.names, anims: this.state.anims}), 
        React.createElement(Players, {names: this.state.names, onUserInput: this.handleName})
      )
    );
  }});
;

React.render(React.createElement(LotteryApp, null), document.getElementById('content'));
