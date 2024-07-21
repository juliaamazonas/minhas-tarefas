import { Provider } from 'react-redux'
import BarraLateral from './containers/BarraLateral'
import ListaDeTarefas from './containers/ListaDeTarefas'
import EstiloGlobal, { Container } from './styles'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal></EstiloGlobal>
      <Container>
        <BarraLateral></BarraLateral>
        <ListaDeTarefas></ListaDeTarefas>
      </Container>
    </Provider>
  )
}

export default App
