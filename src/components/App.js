import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";


class App extends React.Component {
  state = { language: 'english'};

  onLanguageChange = lang => {
    this.setState({
      language : lang
    });

  }
  componentDidUpdate(){
    //console.log(this.state);
  }

  render () {
    return (
      <div className="ui container">
        <div>
          <b> Select a language:</b>
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
        </div>
        <LanguageContext.Provider value={this.state.language}>
        <UserCreate />
        </LanguageContext.Provider>
      </div>
    )
  }
};

export default App;