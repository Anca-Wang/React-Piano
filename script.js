const data = [
    { id: 'Wind Breath', letter: 'Q', src: 'https://music-cdn.icons8.com/preview/328/8d15a8a6-e9ec-4e63-a014-dab799bce528.mp3' },
    
     { id: 'birds', letter: 'A', src: 'https://cdn2.ear0.com:3321/preview?soundid=36694&type=mp3' },
    
    { id: 'Classica Baroque Piano', letter: 'W', src: 'https://music-cdn.icons8.com/preview/307/6be8c056-19e6-4ab4-98a7-4239264e47ee.mp3' },
    
    { id: 'Black forest', letter: 'E', src: 'https://cdn2.ear0.com:3321/preview?soundid=35266&type=mp3' },
   
    { id: 'Soft Classical Piano', letter: 'S', src: 'https://music-cdn.icons8.com/preview/553/7b811e14-e6d3-40d6-bcea-02f953992ddc.mp3' },
    
    { id: 'bird', letter: 'D', src: 'https://cdn2.ear0.com:3321/preview?soundid=37111&type=mp3' },
    
    { id: 'water', letter: 'Z', src: 'https://cdn2.ear0.com:3321/preview?soundid=37444&type=mp3' },
    
    { id: 'water', letter: 'X', src: 'https://cdn2.ear0.com:3321/preview?soundid=36518&type=mp3' },
    
    { id: 'bird', letter: 'C', src: 'https://cdn2.ear0.com:3321/preview?soundid=35306&type=mp3'  },
  ]
  
  class DrumPad extends React.Component {
   
    componentDidMount() {
      console.log(this.audio)
      document.addEventListener('keydown', this.handleKeydown)
      window.focus()
    }
    
   componentWillUnmount() {
     document.removeEventListener('keydown', this.handleKeydown)
   }
    
    handleKeydown = e => {
      if(e.keyCode === this.props.letter.charCodeAt()) {
        this.audio.play()
        this.audio.currentTime = 0
        this.props.handleDisplay(this.props.id)
      }
    }
   
    handleClick = () => {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
    
    render() {
      return (
        <div 
            className='drum-pad' 
            id={this.props.id}
            onClick={this.handleClick}
        >
          <h1>{this.props.letter}</h1>
          <audio id={this.props.letter}
                 className='clip'
                 src={this.props.src}
                 ref={ref => this.audio = ref}
            ></audio>
        </div>
      )
    }
  }
  
  class App extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        display: 'Click or Press a Key'
      }
    }
    
    handleDisplay = display => this.setState({ display })
    
    render(){
      return(
      <div id='drum-machine'>
          <div id='display'>{this.state.display}</div>
          <div id='drum-pads'>{data.map(d => (
            <DrumPad
              key={d.id}
              id={d.id}
              letter={d.letter}
              src={d.src}
              handleDisplay={this.handleDisplay}
            />   
           ))}</div>
      </div>
      )
    }
  }
  
  ReactDOM.render(<App/>, document.getElementById("root"))
  
  
  