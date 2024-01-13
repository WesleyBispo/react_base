import { Router } from 'react-router-dom/cjs/react-router-dom.min';
import history from './services/history';
import Header from './components/Header';
import Routes from './routes';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './store';
import GlobalStyle from './styles/GlobalStyle';
function App() {
    return (
        <Provider store={store}>
            <Router history={history}>
                <GlobalStyle />
                <Header />
                <Routes />
                <ToastContainer
                    position="bottom-left"
                    pauseOnHover={false}
                    autoClose={3000}
                    className="toast-container"
                    theme="colored"
                />
            </Router>
        </Provider>
    );
}

export default App;
