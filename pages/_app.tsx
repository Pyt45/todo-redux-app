import { Provider } from 'react-redux'
import '../styles/globals.css'
// import 'tailwindcss/tailwind.css'
import { store } from '../App/store';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
