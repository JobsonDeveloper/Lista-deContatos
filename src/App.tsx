import { Provider } from 'react-redux'
import store from './store/store'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './pages/Home/Home'
import GlobalStyles from './Styles/Styles'
import Cadastro from './pages/Cadastro/Cadastro'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/cadastro',
    element: <Cadastro />
  }
])

function App() {
  return (
    <Provider store={store}>
      <Provider store={store}>
        <GlobalStyles />
        <RouterProvider router={rotas} />
      </Provider>
    </Provider>
  )
}

export default App
