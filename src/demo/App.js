import React, {PureComponent} from 'react';
import MultiSelect from '../lib';
import 'bootstrap/dist/css/bootstrap.min.css'


class App extends PureComponent {
  render(){
    var step, options = [];
    for (step = 1; step < 100; step++) {
      options.push({id: step, label: 'Element ' + step})
    }

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
            <div className="col-sm-2 text-left" />
            <div className="col-sm-4 text-left">
              <MultiSelect
                options={options}
              />
              <MultiSelect
                options={options}
                showSelectAllBtn={true}
              />
            </div>
            <div className="col-sm-2 text-left" />
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
