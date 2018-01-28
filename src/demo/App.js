import React, {PureComponent} from 'react';
import MultiSelect from '../lib';


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
        <MultiSelect
          selectedOptions={selectedOptions}
          selectableOptions={selectableOptions}
       />
      </div>
    )
  }
}

export default App;
