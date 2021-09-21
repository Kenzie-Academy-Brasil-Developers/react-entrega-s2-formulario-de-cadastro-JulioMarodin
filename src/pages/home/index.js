import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import './styles.css';

const Home = ({ name }) => {
  const history = useHistory();
  return (
    <div className="home">
      <div className="divHome">Bem vindo {name}!</div>
      <div className="buttonHome">
        <Button
          onClick={() => history.push('/')}
          type="submit"
          variant="contained"
          color="primary"
        >
          Voltar
        </Button>
      </div>
    </div>
  );
};

export default Home;
