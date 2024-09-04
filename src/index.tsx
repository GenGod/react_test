import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import { store } from "./store";
import SquareList from './components/SquareList/SquareList';

const domNode = document.getElementById('root')!;
const root = createRoot(domNode);

root.render(
  <Provider store={store}>
    <div className="App">
      <SquareList />
    </div>
  </Provider>
);
