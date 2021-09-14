import React from 'react'
import PropTypes from 'prop-types'
import CssBaseline from '@mui/material/CssBaseline'

import { Layout } from '../src/layouts'
import { Provider } from 'react-redux'
import { createStore } from '../src/store'

function MyApp ({ Component, pageProps }) {
  const store = createStore(pageProps)
  return (
    <Provider store={store}>
      <Layout>
        <CssBaseline />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired
}

export default MyApp
