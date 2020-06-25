import { addLocaleData } from "react-intl";
import locale_en from './en.json';
import locale_es from './es.json';

addLocaleData([...locale_en, ...locale_es]);