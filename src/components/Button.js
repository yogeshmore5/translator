import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component{
  //Consumer approach appears to be little bit complex than this.context however it is very useful when there is a need to consume data of multiple contexts.
  //Using this.context we can use get value from only single contexts
  render() {
    return(
      <div>
        <ColorContext.Consumer>
          { (color) =>
            <button className={`ui button ${color}`}>
              <LanguageContext.Consumer>
                {(value) => value === 'english' ? 'Submit' : 'Voorleggen' }
              </LanguageContext.Consumer>
            </button>
          }
        </ColorContext.Consumer>

      </div>
    );
  }
}
export default Button;