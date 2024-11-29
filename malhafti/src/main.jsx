import { createRoot } from 'react-dom/client'
import './index.css'
import Malhfa from './myProject/App.jsx'
import { Provider } from 'react-redux'
// import { legacy_createStore } from 'redux'
import store from './myProject/reducer.jsx'
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Malhfa/>
  </Provider>,
)