import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component{

  render() {
    return (
      <div className="ui field">
        <label>
        <LanguageContext.Consumer>
            {(value) => value === 'english' ? 'Name' : 'Naam' }
          </LanguageContext.Consumer>
        </label>
        <input type="text" name="language" />
      </div>
    );
  }
}
export default Field;