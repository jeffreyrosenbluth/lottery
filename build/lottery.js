/**
 * @jsx React.DOM
 */

'use strict';

var ____Classf2=React.Component;for(var ____Classf2____Key in ____Classf2){if(____Classf2.hasOwnProperty(____Classf2____Key)){Box[____Classf2____Key]=____Classf2[____Classf2____Key];}}var ____SuperProtoOf____Classf2=____Classf2===null?null:____Classf2.prototype;Box.prototype=Object.create(____SuperProtoOf____Classf2);Box.prototype.constructor=Box;Box.__superConstructor__=____Classf2;function Box(){if(____Classf2!==null){____Classf2.apply(this,arguments);}}
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

var ____Classf3=React.Component;for(var ____Classf3____Key in ____Classf3){if(____Classf3.hasOwnProperty(____Classf3____Key)){Row[____Classf3____Key]=____Classf3[____Classf3____Key];}}var ____SuperProtoOf____Classf3=____Classf3===null?null:____Classf3.prototype;Row.prototype=Object.create(____SuperProtoOf____Classf3);Row.prototype.constructor=Row;Row.__superConstructor__=____Classf3;function Row(){if(____Classf3!==null){____Classf3.apply(this,arguments);}}
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

var ____Classf4=React.Component;for(var ____Classf4____Key in ____Classf4){if(____Classf4.hasOwnProperty(____Classf4____Key)){Table[____Classf4____Key]=____Classf4[____Classf4____Key];}}var ____SuperProtoOf____Classf4=____Classf4===null?null:____Classf4.prototype;Table.prototype=Object.create(____SuperProtoOf____Classf4);Table.prototype.constructor=Table;Table.__superConstructor__=____Classf4;function Table(){if(____Classf4!==null){____Classf4.apply(this,arguments);}}
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

var ____Classf5=React.Component;for(var ____Classf5____Key in ____Classf5){if(____Classf5.hasOwnProperty(____Classf5____Key)){NumPlayers[____Classf5____Key]=____Classf5[____Classf5____Key];}}var ____SuperProtoOf____Classf5=____Classf5===null?null:____Classf5.prototype;NumPlayers.prototype=Object.create(____SuperProtoOf____Classf5);NumPlayers.prototype.constructor=NumPlayers;NumPlayers.__superConstructor__=____Classf5;function NumPlayers(){if(____Classf5!==null){____Classf5.apply(this,arguments);}}
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

var ____Classf6=React.Component;for(var ____Classf6____Key in ____Classf6){if(____Classf6.hasOwnProperty(____Classf6____Key)){Player[____Classf6____Key]=____Classf6[____Classf6____Key];}}var ____SuperProtoOf____Classf6=____Classf6===null?null:____Classf6.prototype;Player.prototype=Object.create(____SuperProtoOf____Classf6);Player.prototype.constructor=Player;Player.__superConstructor__=____Classf6;function Player(){if(____Classf6!==null){____Classf6.apply(this,arguments);}}
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

var ____Classf7=React.Component;for(var ____Classf7____Key in ____Classf7){if(____Classf7.hasOwnProperty(____Classf7____Key)){Players[____Classf7____Key]=____Classf7[____Classf7____Key];}}var ____SuperProtoOf____Classf7=____Classf7===null?null:____Classf7.prototype;Players.prototype=Object.create(____SuperProtoOf____Classf7);Players.prototype.constructor=Players;Players.__superConstructor__=____Classf7;function Players(){if(____Classf7!==null){____Classf7.apply(this,arguments);}}
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

var ____Classf8=React.Component;for(var ____Classf8____Key in ____Classf8){if(____Classf8.hasOwnProperty(____Classf8____Key)){Play[____Classf8____Key]=____Classf8[____Classf8____Key];}}var ____SuperProtoOf____Classf8=____Classf8===null?null:____Classf8.prototype;Play.prototype=Object.create(____SuperProtoOf____Classf8);Play.prototype.constructor=Play;Play.__superConstructor__=____Classf8;function Play(){if(____Classf8!==null){____Classf8.apply(this,arguments);}}
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
        React.createElement("div", {className: "col-xs-offset-1 col-xs-1"}, 
          React.createElement("h4", null, "Rows:")
        ), 
        React.createElement("div", {className: "col-xs-1"}, 
          React.createElement("form", {id: "numPlayers"}, 
            React.createElement(NumPlayers, {numPlayers: this.props.numPlayers, onChange: this.props.onNum})
          )
        ), 
        React.createElement("div", {className: "col-xs-offset-2 col-xs-1"}, 
          React.createElement(Help, null)
        )
    )
    );
  }});
;

var ____Classf9=React.Component;for(var ____Classf9____Key in ____Classf9){if(____Classf9.hasOwnProperty(____Classf9____Key)){Help[____Classf9____Key]=____Classf9[____Classf9____Key];}}var ____SuperProtoOf____Classf9=____Classf9===null?null:____Classf9.prototype;Help.prototype=Object.create(____SuperProtoOf____Classf9);Help.prototype.constructor=Help;Help.__superConstructor__=____Classf9;function Help(){if(____Classf9!==null){____Classf9.apply(this,arguments);}}
  Object.defineProperty(Help.prototype,"render",{writable:true,configurable:true,value:function( ) {
    var textStyle = {color: "black", textAlign: 'left'};
    var buttonStyle = {outline: 0, color : 'white', backgroundColor: 'transparent'};
    return (
      React.createElement("div", null, 
        React.createElement("button", {type: "button", className: "btn btn-lg btn-default", "data-toggle": "modal", "data-target": "#myModal", style: buttonStyle}, 
          "Help"
        ), 
        React.createElement("div", {className: "modal fade", id: "myModal", tabindex: "-1", role: "dialog", "aria-labelledby": "myModalLabel"}, 
          React.createElement("div", {className: "modal-dialog", role: "document"}, 
            React.createElement("div", {className: "modal-content"}, 
              React.createElement("div", {className: "modal-header"}, 
                React.createElement("button", {type: "button", className: "close", "data-dismiss": "modal", "aria-label": "Close"}, 
                  React.createElement("span", {"aria-hidden": "true"}, "×")
                ), 
                  React.createElement("h3", {className: "modal-title", id: "myModalLabel", style: textStyle}, "Instructions")
                ), 
                React.createElement("div", {className: "modal-body", style: textStyle}, 
                  React.createElement("h4", null, 
                    "Enter player names then press Play." + ' ' +
                    "Press Play again for a new game with the same players." + ' ' +
                    "You can add or remove players before starting the game." + ' ' +
                    "To change the maximum number of players increase the" + ' ' +
                    "number of rows, 4 players per row." + ' ' +
                    "Press Reset to clear the player names and start over."
                  )
                ), 
                React.createElement("div", {className: "modal-footer"}, 
                  React.createElement("button", {type: "button", className: "btn btn-default", "data-dismiss": "modal"}, "Close")
              )
            )
          )
        )
      )
    );
  }});


var ____Classfa=React.Component;for(var ____Classfa____Key in ____Classfa){if(____Classfa.hasOwnProperty(____Classfa____Key)){LotteryApp[____Classfa____Key]=____Classfa[____Classfa____Key];}}var ____SuperProtoOf____Classfa=____Classfa===null?null:____Classfa.prototype;LotteryApp.prototype=Object.create(____SuperProtoOf____Classfa);LotteryApp.prototype.constructor=LotteryApp;LotteryApp.__superConstructor__=____Classfa;
  function LotteryApp(props) {
    ____Classfa.call(this,props);
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
