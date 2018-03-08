import React, {PureComponent} from 'react';
import MultiSelect from '../lib';
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends PureComponent {
  render(){
    const selectableOptions = [
      { id: 1, label: 'Hi'},
      { id: 3, label: 'Bye'}
    ]

    const selectedOptions = [
      { id: 2, label: 'Hello'}
    ]

    return(
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src="/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" />
          </a>
        </nav>
        <div className="container-fluid text-center">
          <div className="row content">
            <div className="col-sm-2 sidenav">
              <p><a href="#">Link</a></p>
              <p><a href="#">Link</a></p>
              <p><a href="#">Link</a></p>
            </div>
            <div className="col-sm-8 text-left">
            <MultiSelect
              selectedOptions={selectedOptions}
              selectableOptions={selectableOptions}
           />
            </div>
            <div className="col-sm-2 sidenav">
              <div className="well">
                <p>ADS</p>
              </div>
              <div className="well">
                <p>ADS</p>
              </div>
            </div>
          </div>
        </div>


      </div>
    )
  }
}

export default App;
