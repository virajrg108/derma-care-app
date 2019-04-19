'use strict';
class Topbar extends React.Component {
  render() {
    return (
      <div className="topbar">
        <img className="menu-icon" src="../img/menu.svg" />
        DermaCare

      </div>
    )
  }
}
class Main extends React.Component {
  readURL = (input) => {
    console.log(input);
    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function (e) {
        $('#blah')
          .attr('src', e.target.result)
          .width(150)
          .height("auto");
      };
  
      reader.readAsDataURL(input.files[0]);
    }
  }
  render() {
    return (
      <div>
        <label htmlFor="files" className="btn">Select Image</label>
        <input id="files" style={{visibility:"hidden"}} type="file" onChange={this.readURL(this)}/>
      </div>
    )
  }
}

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }

    return (
      <div>
        <Topbar />
        <Main />
      </div>
    );
  }
}

let domContainer = document.querySelector('#root');
ReactDOM.render(<Index />, domContainer);