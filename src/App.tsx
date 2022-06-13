import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./core/redux/store";
import { Navigation } from "./Routes";
import { selectDir } from "./core/redux/app/appSlice";
import { I18nextProvider } from "react-i18next";
import { ThemeProvider } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i18n from "./utils/i18n";
import React from "react";

const ProviderLayout: React.FC = () => {
  const {
    i18n: { language },
  } = useTranslation();
  const dir = useSelector(selectDir);
  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider dir={dir}>
        <div lang={language} dir={dir}>
          <BrowserRouter>
            <Navigation />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </I18nextProvider>
  );
};

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        {/* <I18nextProvider i18n={i18n}> */}
        <ProviderLayout />
        {/* </I18nextProvider> */}
      </Provider>
    </div>
  );
}

export default App;
