/* eslint-disable no-alert */
import React, { PureComponent } from 'react';
import MultiSelect from '../lib';
import './style.css';
import './custom-bootstrap.css';

class App extends PureComponent {
  static options() {
    let step;

    const options = [];
    for (step = 1; step < 10; step += 1) {
      options.push({ id: `${step}`, label: `Element ${step}` });
    }
    return options;
  }

  static renderGettingStarted() {
    const options = App.options();
    options[4].disabled = true;

    return (
      <div>
        <h3 className="border-bottom">Getting Started</h3>

        <p>Start by installing react-box-select</p>
        <pre>yarn add react-box-select</pre>

        <p>Import the default export and render in your component:</p>
        <div className="col-md-7 padding-left-0">
          <pre>
            {`
import React, { Component } from 'react';
import MultiSelect from 'react-box-select'
import 'react-box-select/build/css/index.css';

var step, options = [];
for (step = 1; step < 100; step++) {
  options.push({id: step, label: "Element " + step});
}

<MultiSelect options={options} />
`}
          </pre>
        </div>
        <div className="col-md-5">
          <MultiSelect options={options} />
        </div>
      </div>
    );
  }

  static renderProps() {
    return (
      <div>
        <br />
        <h3 className="border-bottom">Props</h3>
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
              <td>onChange</td>
              <td>function</td>
              <td>
                <code>
                  function()
                  {}
                </code>
              </td>
              <td>returns updated list after option is selected/deselected</td>
            </tr>
            <tr>
              <td>onSelect</td>
              <td>function</td>
              <td>
                <code>
                  function()
                  {}
                </code>
              </td>
              <td>returns selected option</td>
            </tr>
            <tr>
              <td>onDeselect</td>
              <td>function</td>
              <td>
                <code>
                  function()
                  {}
                </code>
              </td>
              <td>returns deselected options</td>
            </tr>
            <tr>
              <td>showSelectAllBtn</td>
              <td>bool</td>
              <td>
                <code>false</code>
              </td>
              <td>show/hide select/deselect all link</td>
            </tr>
            <tr>
              <td>disabled</td>
              <td>bool</td>
              <td>
                <code>false</code>
              </td>
              <td>disable option</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  static renderDemos() {
    return (
      <div>
        <h3 className="border-bottom">Demos</h3>

        <br />
        <p>Select/Unselect All Button</p>
        <div className="col-md-7 padding-left-0">
          <pre>
            {`
<MultiSelect
  options={...options()}
  showSelectAllBtn={true}
/>
`}
          </pre>
        </div>
        <div className="col-md-5">
          <MultiSelect options={App.options()} showSelectAllBtn />
        </div>

        <br />
        <br />
        <p>Callback</p>
        <div className="col-md-7 padding-left-0">
          <pre>
            {`
<MultiSelect
  options={...options}
  onChange={(updatedOption) => {
    console.log(updatedOption);
  }}
  onSelect={val => {
    alert("Selected label:" + val.label);
  }}
  onDeSelect={val => {
    alert("Deselected label:" + val.label);
  }}
/>
`}
          </pre>
        </div>
        <div className="col-md-5">
          <MultiSelect
            options={App.options()}
            onChange={(updatedOption) => {
              console.log(updatedOption);
            }}
            onSelect={(val) => {
              alert(`Selected label:${val.label}`);
            }}
            onDeSelect={(val) => {
              alert(`Deselected label:${val.label}`);
            }}
          />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <span className="navbar-brand">React BoxSelect</span>
            <span className="navbar-brand">
              <a className="github-button pull-right" href="https://github.com/pratik14/react-box-select">
                Github
              </a>
            </span>
          </div>
        </nav>
        <br />
        <div className="container-fluid text-center">
          <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8 text-left">
              <div className="col-md-12">{App.renderGettingStarted()}</div>
              <div className="col-md-12">{App.renderProps()}</div>
              <div className="col-md-12">{App.renderDemos()}</div>
            </div>
            <div className="col-md-2" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
