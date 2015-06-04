/** @jsx React.DOM */

function shuffle(array) {
  var m = array.length, t, i;
  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
  return array;
}

function active(array) {
    return array.filter(function(x){return ($(x).text() !== "");});
}

function inactive(array) {
    return array.filter(function(x){return ($(x).text() === "");});
}

var animations =
  [ 'bounceOut', 'bounceOutDown', 'bounceOutLeft', 'bounceOutRight', 'bounceOutUp',
    'fadeOut', 'fadeOutDown', 'fadeOutDownBig', 'fadeOutLeft', 'fadeOutLeftBig',
    'fadeOutRight', 'fadeOutRightBig', 'fadeOutUp', 'fadeOutUpBig',
    'flipOutX', 'flipOutY', 'lightSpeedOut', 'rotateOut', 'rotateOutDownLeft',
    'rotateOutDownRight', 'rotateOutUpLeft', 'rotateOutUpRight',
    'rollOut', 'zoomOut', 'zoomOutDown', 'zoomOutRight', 'zoomOutUp',
    'slideOutDown', 'slideOutLeft', 'slideOutRight', 'slideOutUp'
  ];

var winner =
  [ 'bounce',
    'flash',
    'flip',
    'rubberBand',
    'shake',
    'swing',
    'tada',
    'wobble'
  ];


class Box extends React.Component {
  render() {
    var divStyle = {backgroundColor: this.props.bgcolor,
                    WebkitAnimationDelay: this.props.name ? this.props.animData.delay : '0',
                    WebkitAnimationDuration: '2s'};
    var classes = "col-xs-3 animated " + this.props.animData.anim;
    console.log(classes);
    return (
      <div className={classes} style={divStyle}>{this.props.name}</div>
    );
  }
};

class Row extends React.Component {
  render() {
    return (
      <div className="row">
        <Box bgcolor={this.props.colors[0]} name={this.props.names[0]} animData={this.props.anims[0]}/>
        <Box bgcolor={this.props.colors[1]} name={this.props.names[1]} animData={this.props.anims[1]}/>
        <Box bgcolor={this.props.colors[2]} name={this.props.names[2]} animData={this.props.anims[2]}/>
        <Box bgcolor={this.props.colors[3]} name={this.props.names[3]} animData={this.props.anims[3]}/>
      </div>
    );
  }
};

class Table extends React.Component {
  render() {
    return (
      <div className="col-xs-9">
        <Row colors={this.props.colors.slice(0,4)} names={this.props.names.slice(0,4)} anims={this.props.anims.slice(0,4)}/>
        <Row colors={this.props.colors.slice(4,8)} names={this.props.names.slice(4,8)} anims={this.props.anims.slice(4,8)}/>
        <Row colors={this.props.colors.slice(8,12)} names={this.props.names.slice(8,12)} anims={this.props.anims.slice(8,12)}/>
        <Row colors={this.props.colors.slice(12,16)} names={this.props.names.slice(12,16)} anims={this.props.anims.slice(12,16)}/>
      </div>
    );
  }
};

class Player extends React.Component {
  handleChange() {
    this.props.onUserInput(this.props.num, this.refs.textInput.getDOMNode().value);
  }

  render() {
    return (
      <div className="form-group">
        <input className="form-control" type="text"
               placeholder={'Player ' + this.props.num}
               id={this.props.num}
               ref="textInput"
               onChange={this.handleChange.bind(this)}
        />
      </div>
    );
  }
};

class Players extends React.Component {
  render() {
    var players = [];
    var playerNums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    playerNums.forEach(n => {
      players.push(<Player key={n} num={n} onUserInput={this.props.onUserInput}/>);
    });
    return (
      <div className="col-xs-2 col-xs-offset-1">
        <form id="players">
          {players}
        </form>
      </div>
    )
  }
};

class Play extends React.Component {
  handleChange() {
    this.props.onPress();
  }
  render () {
    return (
      <div className="row">
        <div className="col-xs-1">
          <button type="button"
            className="btn btn-success btn-lg"
            id="play"
            onMouseUp={this.handleChange.bind(this)}>
            Play
          </button>
        </div>
      </div>
    );
  }
}

class FlipApp extends React.Component {
  constructor(props) {
    super(props);
    var arr = [];
    var anm = [];
    for (var i = 0; i < 16; i++) {
      arr[i] = ''
      anm[i] = {anim: '', delay: 0}
    };
    this.state = {names: arr, anims: anm};
    this.handleName = this.handleName.bind(this);
    this.handlePlay = this.handlePlay.bind(this);
  }

  handleName(i, name) {
    var arr = this.state.names;
    arr[i] = name;
    this.setState({names: arr});
  }

  handlePlay() {
    var names = this.state.names;
    var alive = [];
    var dead = [];
    for (var i = 0; i < 16; i++) {
      if (names[i]) {
        alive.push(i);
      } else {
        dead.push(i);
      }
    }
    alive = shuffle(alive);
    dead = shuffle(dead);
    var animMix = shuffle(animations);
    var winnerAnims = shuffle(winner)
    var boxAnims = [];
    boxAnims[alive[alive.length -1]] = {anim: winnerAnims[0], delay: 2 * alive.length + 's'};
    for (var i = 0; i < (alive.length - 1); i++) {
      boxAnims[alive[i]] = {anim: animMix[i], delay: 2 + 2 * i + 's'};
    }
    for (var i = 0; i < dead.length; i++) {
      boxAnims[dead[i]] = {anim: 'fadeOut', delay: 0};
    }
    this.setState({anims: boxAnims});
  }

  render() {
    return (
      <div className='container'>
        <Play onPress={this.handlePlay}/>
        <Table colors={["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728",
                        "rgba(50,50,50,1)", "#9467bd", "#8c564b", "#e377c2",
                        "#daa520", "#bcbd22", "#c71585", "rgba(86,61,250,1)",
                        "#ff4500", "#87cdfa", "#7f7f7f", "#3cb371"]}
               names={this.state.names}
               anims={this.state.anims}
        />
        <Players onUserInput={this.handleName}/>
      </div>
    );
  }
};

React.render(<FlipApp />, document.getElementById('content'));
