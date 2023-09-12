import type { AppProps } from 'next/app';
import { Provider } from 'react-redux/es/exports';
import { queryPosts } from 'services/posts';
import store from 'store/index';
import { blogActions } from 'store/reducers/blog';
import 'styles/globals.css';
 
queryPosts().then((posts) => store.dispatch(blogActions.setPosts(posts)));

const App: React.FC<AppProps> = ({ Component, pageProps }) => (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
);

export default App;