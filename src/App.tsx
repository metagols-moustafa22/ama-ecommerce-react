import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./core/redux/store";
import { Navigation } from "./Routes";

const ProviderLayout = () => {
  return (
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );
};

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ProviderLayout />
      </Provider>
    </div>
  );
}

export default App;
