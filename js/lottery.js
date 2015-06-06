/**
 * @jsx React.DOM
 */

'use strict';

var N = 4;

class Box extends React.Component {
  render() {
    var divStyle =
      { backgroundColor:          this.props.bgcolor,
        WebkitAnimationDelay:     this.props.name ? this.props.animData.delay : '0s',
        animationDelay:           this.props.name ? this.props.animData.delay : '0s',
        WebkitAnimationDuration: '2s',
        animationDuration:       '2s'
      };
    var classes = "col-xs-3 animated " + this.props.animData.anim;

    return (<div className={classes} style={divStyle}>{this.props.name}</div>);
  }
};

class Row extends React.Component {
  render() {
    var boxes = _.map(_.range(4), i => {return (
      <Box bgcolor  = {this.props.colors[i]}
           name     = {this.props.names[i]}
           animData = {this.props.anims[i]}
           key={i}
      />
    );});

    return ( <div className="row"> {boxes} </div> );
  }
};

class Table extends React.Component {
  render() {
    var rows = _.map(_.range(N), i => {return (
      <Row colors = {this.props.colors.slice(4*i, 4*i + 4)}
           names  = {this.props.names.slice(4*i, 4*i + 4)}
           anims  = {this.props.anims.slice(4*i, 4*i + 4)}
           key    = {i}
      />
    );});

    return (<div className="col-xs-9">{rows}</div>);
  }
};

class Player extends React.Component {
  handleChange() {
    this.props.onUserInput(this.props.num,
    React.findDOMNode(this.refs.textInput).value);
  }

  render() {
    var inputStyle = {backgroundColor: 'transparent', color: 'white'};

    return (
      <div className       = "form-group">
        <input className   = "form-control" type="text"
               placeholder = {'Player ' + ( 1 + this.props.num)}
               id          = {this.props.num}
               ref         = "textInput"
               value       = {this.props.name}
               onChange    = {this.handleChange.bind(this)}
               style       = {inputStyle}
        />
      </div>
    );
  }
};

class Players extends React.Component {
  render() {
    var players = _.map(_.range(4*N), n => {return (
      <Player key={n} num={n} name={this.props.names[n]} onUserInput={this.props.onUserInput}/>
    );});

    return (
      <div className="col-xs-2 col-xs-offset-1">
        <form id="players">{players}</form>
      </div>
    );
  }
};

class Play extends React.Component {
  handlePlay() {
    this.props.onPress();
  }

  handleReset() {
    this.props.onReset();
  }

  render () {
    var buttonStyle = {outline: 0, color : 'white', backgroundColor: 'transparent'};

    return (
      <div className="row">
        <div className="col-xs-1">
          <button type="button"
                  className="btn btn-default btn-lg"
                  id="play"
                  style={buttonStyle}
                  onMouseUp={this.handlePlay.bind(this)}>
            Play - Replay
          </button>
        </div>
          <div className="col-xs-1 col-xs-offset-7">
            <button type="button"
                    className="btn btn-default btn-lg"
                    id="reset"
                    style={buttonStyle}
                    onMouseUp={this.handleReset.bind(this)}>
              Reset
          </button>
        </div>
      </div>
    );
  }
};

class LotteryApp extends React.Component {
  constructor(props) {
    super(props);
    var anims = _.fill(Array(4*N), {anim: '', delay: '0s'});
    var cellColors = _.map(_.range(4*N), () => {
      return ('#' + Math.floor(_.random(0.1, 0.9) * 16777215).toString(16))
    });

    this.state = {names: [], anims: anims, cellColors: cellColors};
    this.handleName = this.handleName.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleName(i, name) {
    var arr = this.state.names.slice();

    arr[i] = name;
    this.setState({names: arr});
  }

  handleReset() {
    var emptyAnims = _.fill(Array(4*N), {anim: '', delay: '0s'});
    this.setState({names: [], anims: emptyAnims});
  }

  handlePlay() {
    var names = this.state.names;
    var [alive, dead] = _.partition(_.range(4*N), n => names[n]);
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

    _.forEach(_.initial(alive), n => {
      boxAnims[n] = {anim: animMix[idx % 31], delay: 2 + 2 * idx + 's'};
      idx += 1;
    });

    _.forEach(dead, n => {
       boxAnims[n] = {anim: 'fadeOut', delay: '0s'};
    });

    this.setState({anims: this.state.anims});
    this.setState({anims: boxAnims});
  }

  render() {
    return (
      <div className='container'>
        <h1>Lottery</h1>
        <Play onPress={this.handlePlay} onReset={this.handleReset}/>
        <Table colors={this.state.cellColors} names={this.state.names} anims={this.state.anims}/>
        <Players names={this.state.names} onUserInput={this.handleName}/>
      </div>
    );
  }
};

React.render(<LotteryApp />, document.getElementById('content'));
