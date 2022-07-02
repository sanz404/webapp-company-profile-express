import React from 'react';
import Route from './Routes';

class App extends React.Component{

  render(){
       return (
          <>
            <React.Fragment>
                <div id="loader" className="loading"></div>
                <Route />
            </React.Fragment>
          </>
       )
    }
}

export default App;