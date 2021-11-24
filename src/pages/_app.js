import { Provider as ReduxProvider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'

import { Provider } from 'next-auth/client';

const MyApp = ({ Component, pageProps }) => {
  const { session } = pageProps;

  return (
    <ReduxProvider store={store}>
      <Provider session={session}>
        <Component {...pageProps} />
      </Provider>
    </ReduxProvider>
  )
}

export default MyApp
