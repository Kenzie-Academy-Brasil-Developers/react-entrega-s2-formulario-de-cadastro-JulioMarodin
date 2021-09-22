import { Button } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import './styles.css';

const Home = () => {
  const { user } = useParams();
  const history = useHistory();
  return (
    <div className="home">
      <div className="divHome">Bem vindo {user}!</div>
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
