import 'tailwindcss/505.css';
import 'tailwindcss/style.css';
import { AppWrapper } from 'context/AppContext';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
