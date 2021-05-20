import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import Layout from '@/layouts'
import './global-styles'
import stores from '@/stores'
import { Provider } from 'mobx-react'

ReactDOM.render(
  <Provider stores={stores}>
    <Layout />
  </Provider>,
  document.getElementById('root')
)
