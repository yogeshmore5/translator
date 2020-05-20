import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";


class App extends React.Component {
  state = { language: 'english'};

  onLanguageChange = lang => {
    this.setState({
      language : lang
    });

  }

  render () {
    return (
      <div className="ui container">
        <div>
          <b> Select a language:</b>
          <i className="flag us" onClick={() => this.onLanguageChange('english')} />
          <i className="flag nl" onClick={() => this.onLanguageChange('dutch')} />
        </div>
        <ColorContext.Provider value={this.state.language === 'english' ? 'red' : 'blue'}>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    )
  }
};

export default App;