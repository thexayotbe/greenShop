import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Root from "./root";
import store from "./redux";
import ModalController from "./Components/ModalController";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ModalController />
      <Root />
    </BrowserRouter>
  </Provider>
);
