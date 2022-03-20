import './Navigatior.css';

function Navigation() {
  return (
    <div className="navigator">
      <ul className='ul-menu'>
        <li><img src={require('../images/Vector (1).png')} className='images-vetor1'/></li>
        <li><img src={require('../images/Vector.png')} className='images-vetor'/></li>
        <li> <img src={require('../images/Vector (2).png')} className='images-web'/></li>
        <li> <img src={require('../images/Vector (3).png')} className='images-work' /></li>
        <li className='list-home'>Home</li>
        <li className='list-features'>Features</li>
        <li className='list-time'>Time Tracking</li>
        <li className='list-price'>Price</li>
        <li className='list-download'>Download</li>
        <li className='list-login'>Log in</li>
      </ul>
      <button className='get-started-button'>Get Started</button>
    </div>
  );
}

export default Navigation;
