/**
 * @jsx React.DOM
 */

'use strict';

var ____ClasseK=React.Component;for(var ____ClasseK____Key in ____ClasseK){if(____ClasseK.hasOwnProperty(____ClasseK____Key)){Box[____ClasseK____Key]=____ClasseK[____ClasseK____Key];}}var ____SuperProtoOf____ClasseK=____ClasseK===null?null:____ClasseK.prototype;Box.prototype=Object.create(____SuperProtoOf____ClasseK);Box.prototype.constructor=Box;Box.__superConstructor__=____ClasseK;function Box(){if(____ClasseK!==null){____ClasseK.apply(this,arguments);}}
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

var ____ClasseL=React.Component;for(var ____ClasseL____Key in ____ClasseL){if(____ClasseL.hasOwnProperty(____ClasseL____Key)){Row[____ClasseL____Key]=____ClasseL[____ClasseL____Key];}}var ____SuperProtoOf____ClasseL=____ClasseL===null?null:____ClasseL.prototype;Row.prototype=Object.create(____SuperProtoOf____ClasseL);Row.prototype.constructor=Row;Row.__superConstructor__=____ClasseL;function Row(){if(____ClasseL!==null){____ClasseL.apply(this,arguments);}}
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

var ____ClasseM=React.Component;for(var ____ClasseM____Key in ____ClasseM){if(____ClasseM.hasOwnProperty(____ClasseM____Key)){Table[____ClasseM____Key]=____ClasseM[____ClasseM____Key];}}var ____SuperProtoOf____ClasseM=____ClasseM===null?null:____ClasseM.prototype;Table.prototype=Object.create(____SuperProtoOf____ClasseM);Table.prototype.constructor=Table;Table.__superConstructor__=____ClasseM;function Table(){if(____ClasseM!==null){____ClasseM.apply(this,arguments);}}
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

var ____ClasseN=React.Component;for(var ____ClasseN____Key in ____ClasseN){if(____ClasseN.hasOwnProperty(____ClasseN____Key)){NumPlayers[____ClasseN____Key]=____ClasseN[____ClasseN____Key];}}var ____SuperProtoOf____ClasseN=____ClasseN===null?null:____ClasseN.prototype;NumPlayers.prototype=Object.create(____SuperProtoOf____ClasseN);NumPlayers.prototype.constructor=NumPlayers;NumPlayers.__superConstructor__=____ClasseN;function NumPlayers(){if(____ClasseN!==null){____ClasseN.apply(this,arguments);}}
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

var ____ClasseO=React.Component;for(var ____ClasseO____Key in ____ClasseO){if(____ClasseO.hasOwnProperty(____ClasseO____Key)){Player[____ClasseO____Key]=____ClasseO[____ClasseO____Key];}}var ____SuperProtoOf____ClasseO=____ClasseO===null?null:____ClasseO.prototype;Player.prototype=Object.create(____SuperProtoOf____ClasseO);Player.prototype.constructor=Player;Player.__superConstructor__=____ClasseO;function Player(){if(____ClasseO!==null){____ClasseO.apply(this,arguments);}}
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

var ____ClasseP=React.Component;for(var ____ClasseP____Key in ____ClasseP){if(____ClasseP.hasOwnProperty(____ClasseP____Key)){Players[____ClasseP____Key]=____ClasseP[____ClasseP____Key];}}var ____SuperProtoOf____ClasseP=____ClasseP===null?null:____ClasseP.prototype;Players.prototype=Object.create(____SuperProtoOf____ClasseP);Players.prototype.constructor=Players;Players.__superConstructor__=____ClasseP;function Players(){if(____ClasseP!==null){____ClasseP.apply(this,arguments);}}
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

var ____ClasseQ=React.Component;for(var ____ClasseQ____Key in ____ClasseQ){if(____ClasseQ.hasOwnProperty(____ClasseQ____Key)){Play[____ClasseQ____Key]=____ClasseQ[____ClasseQ____Key];}}var ____SuperProtoOf____ClasseQ=____ClasseQ===null?null:____ClasseQ.prototype;Play.prototype=Object.create(____SuperProtoOf____ClasseQ);Play.prototype.constructor=Play;Play.__superConstructor__=____ClasseQ;function Play(){if(____ClasseQ!==null){____ClasseQ.apply(this,arguments);}}
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

var ____ClasseR=React.Component;for(var ____ClasseR____Key in ____ClasseR){if(____ClasseR.hasOwnProperty(____ClasseR____Key)){Help[____ClasseR____Key]=____ClasseR[____ClasseR____Key];}}var ____SuperProtoOf____ClasseR=____ClasseR===null?null:____ClasseR.prototype;Help.prototype=Object.create(____SuperProtoOf____ClasseR);Help.prototype.constructor=Help;Help.__superConstructor__=____ClasseR;function Help(){if(____ClasseR!==null){____ClasseR.apply(this,arguments);}}
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
                    "number of rows," + ' ' +
                    "4 players per row." + ' ' +
                    "Press Reset to clear the player names."
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


var ____ClasseS=React.Component;for(var ____ClasseS____Key in ____ClasseS){if(____ClasseS.hasOwnProperty(____ClasseS____Key)){LotteryApp[____ClasseS____Key]=____ClasseS[____ClasseS____Key];}}var ____SuperProtoOf____ClasseS=____ClasseS===null?null:____ClasseS.prototype;LotteryApp.prototype=Object.create(____SuperProtoOf____ClasseS);LotteryApp.prototype.constructor=LotteryApp;LotteryApp.__superConstructor__=____ClasseS;
  function LotteryApp(props) {
    ____ClasseS.call(this,props);
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
