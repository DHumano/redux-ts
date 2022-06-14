import Button from '@mui/material/Button';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Counter from '../../features/counter/Counter';

const Home = () => (
  <div>
    <Button variant="contained">
      <Link to="/list">list</Link>
    </Button>
    <Counter />
  </div>
);

// eslint-disable-next-line no-unused-vars
const mapStateToProps = (state: { posts: any }) => ({
  posts: state.posts
});

export default connect()(Home);
