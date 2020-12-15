import React from 'react'
import "./App.css";
import Table from "./components/tables";
import tablereducer from "./reducers/tablereducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider} from "react-redux";


const store = createStore(
  tablereducer,
 applyMiddleware(thunk)
);

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Table />
      </div>
    </Provider>
  );
}

export default App;
