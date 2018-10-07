import React, {PureComponent} from "react";
import MultiSelect from "../lib";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends PureComponent {
  options() {
    var step,
      options = [];
    for (step = 1; step < 10; step++) {
      options.push({id: step, label: "Element " + step});
    }
    return options;
  }

  renderGettingStarted() {
    return (
      <div>
        <h3>Getting Started</h3>

        <p>
          Start by installing react-select
          <pre>{`yarn add react-select`}</pre>
        </p>

        <p>
          Import the default export and render in your component:
          <pre>
            {`
import React, { Component } from 'react';
import Select from 'react-select'

var step, options = [];
for (step = 1; step < 100; step++) {
  options.push({id: step, label: "Element " + step});
}

<MultiSelect options={options} />
`}
          </pre>
        </p>
      </div>
    );
  }

  renderProps() {
    return (
      <div>
        <h3> Props </h3>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Default</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>afterSelect</td>
              <td>function</td>
              <td>
                <code>
                  function()
                  {}
                </code>
              </td>
              <td>Function to call after one item is selected.</td>
            </tr>
            <tr>
              <td>afterDeselect</td>
              <td>function</td>
              <td>
                <code>
                  function()
                  {}
                </code>
              </td>
              <td>Function to call after one item is deselected.</td>
            </tr>
            <tr>
              <td>showSelectAllBtn</td>
              <td>bool</td>
              <td>
                <code>false</code>
              </td>
              <td>Show/Hide select/deselect all button.</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  renderDemos() {
    return (
      <div>
        <h3>Demos</h3>

        <b>Select/Unselect All Button</b>
        <MultiSelect options={this.options()} showSelectAllBtn={true} />

        <b>Callback</b>
        <MultiSelect
          options={this.options()}
          onSelect={val => {
            alert("Selected label:" + val.label);
          }}
          onDeSelect={val => {
            alert("Deselected label:" + val.label);
          }}
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <h2>React Multiselect</h2>
        </nav>

        <div className="container-fluid text-center">
          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6 text-left">
              <div className="col-md-12">{this.renderGettingStarted()}</div>
              <div className="col-md-12">
                <MultiSelect options={this.options()} />
              </div>
              <div className="col-md-12">{this.renderProps()}</div>
              <div className="col-md-12">{this.renderDemos()}</div>
            </div>
            <div className="col-md-3" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
