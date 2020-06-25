import React from "react";
import ReactDOM from "react-dom";
import "../src/component/index.css";
import App from "../src/component/App";
import { IntlProvider } from "react-intl";
import messages_es from "./locale/es.json";
import messages_en from "./locale/en.json";

const messages = {
    'es': messages_es,
    'en': messages_en
};
const language = navigator.language.split(/[-_]/)[0];

ReactDOM.render(
    <IntlProvider locale={language} messages={messages[language]}>
        <App />
    </IntlProvider>,
    document.getElementById('root')
);