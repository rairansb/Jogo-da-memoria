import * as C from './App.styles';
import logoImage from './assets/logo.svg';
import { InfoItem } from './components/infoitem';

function App() {
  return (
    <C.container>
      <C.Info>
        <C.LogoLink href="">
          <img src={logoImage} width="200" alt="" />
        </C.LogoLink>

        <C.InfoArea>
          <InfoItem label="Tempo" value="00:00" />
          <InfoItem label="Movimentos" value="0" />
        </C.InfoArea>

        <button>Reiniciar</button>
      </C.Info>
      <C.GridArea>...</C.GridArea>
    </C.container>
  );
}

export default App;
