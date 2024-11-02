import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const navigate = useNavigate();
  return (
    <div className="app-container">
      <button className="explore-button" onClick={() => navigate('/home')}>
        启航
      </button>
    </div>
  );
}

export default App;
