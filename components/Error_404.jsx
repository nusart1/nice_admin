import './Error_404.css';
import err_404 from './assets/image(error_404).png';

const Error_404 = ({ setActiveComponent }) => {
  const goHome = () => {
    setActiveComponent('Dashboard');
  };

  return (
    <div className='Error'>
      <div className='giant_h'>
        <h1>404</h1>
        <p>The page you are looking for doesn't exist.</p>
        <button onClick={goHome}>Back to home</button>
      </div>
      <div>
        <img src={err_404} alt="image" />
      </div>
      <span>Designed by <strong>BootstrapMade</strong></span>
    </div>
  );
};

export default Error_404;
