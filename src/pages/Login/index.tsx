import Formulario from '../../components/Formulario';
import { AppContainer, AppContent, KidImage } from './styles';
import kid from '../../assets/kid.jpeg';

function App() {
  return (
    <AppContainer className='App'>
      <AppContent className='coluna-50'>
        <KidImage src={kid} />
      </AppContent>
      <AppContent className='coluna-50'>
        <Formulario />
      </AppContent>
    </AppContainer>
  );
}

export default App;
