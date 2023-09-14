import type { AppProps } from 'next/app';
import { Provider } from 'react-redux/es/exports';
import store from 'store/index';
import 'styles/globals.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
);

export default App;