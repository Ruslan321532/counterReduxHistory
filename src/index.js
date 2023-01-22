import React, { PureComponent } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Counter from "./Components/Counter";
import History from "./Components/History";
import reducers from "./reducers";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  color: "turquoise",
  pading: "40px"
};

class App extends PureComponent {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <div style={styles}>
          <h2>
            This is a counter on redax
          </h2>
          <div>
            <Counter />
            <History />
          </div>
        </div>
      </Provider>
    );
  }
}

render(<App />,
document.getElementById("root"));
