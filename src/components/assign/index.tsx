import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Counter from '../../features/counter/Counter';
import * as S from './Styled';

const styleButtons = {
  fontWeigh: 700,
  textDecoration: 'none',
  color: 'white'
};

const Assign = () => (
  <div>
    <S.Wrapper>
      <S.ButtonWrapper>
        <Button variant="contained">
          <Link to="/" style={styleButtons}>
            <S.Title>Create Employee</S.Title>
          </Link>
        </Button>
      </S.ButtonWrapper>
      <S.ButtonWrapper>
        <Button variant="contained">
          <Link to="/list" style={styleButtons}>
            <S.Title>list Employee</S.Title>
          </Link>
        </Button>
      </S.ButtonWrapper>
      <S.ButtonWrapper>
        <Button variant="contained">
          <Link to="/assign" style={styleButtons}>
            <S.Title>Assign Employee </S.Title>
          </Link>
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
    <Counter />
  </div>
);

export default Assign;
