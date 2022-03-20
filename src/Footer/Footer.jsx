import './Footer.css'
function Footer() {
  return (
    <div className="footer-container">
     <div className="search-container">
     <img src={require('../images/Rectangle 604.png')} className='images-Rectangle-footer' />
    <p className='time-trcker-title'>Track Billable Hours with WebWork Time Tracker</p>
    <input className='search-input-footer'/>
    <button className='input-button'>Start 7 Days Free Trial</button>
    <table className='table'>
       <tr className='ul-tabel'>
         <th>Time Tracking Software</th>
         <th>Integration</th>
         <th>Powerful Yet Simple</th>
         <th>Resources</th>
       </tr>
       <tr className='ul-tabel'>
         <td>Features</td>
         <td>Asana</td>
         <td>Monitor Employees</td>
         <td>Sitemap</td>
       </tr>
       <tr className='ul-tabel'>
         <td>Pricing</td>
         <td>Jira</td>
         <td>Boost Productivity</td>
         <td>Privacy Policy</td>
       </tr>
       <tr className='ul-tabel'>
         <td>Start free trial</td>
         <td>Bitbucket</td>
         <td>How to save time</td>
         <td>Terms of service</td>
       </tr>
       <tr className='ul-tabel'>
         <td>Time tracking with screenshots</td>
         <td>See all</td>
         <td>Download tracker</td>
         <td>Contact Us</td>
       </tr>
     </table>
     <div className='div-footer-end'>
       <div>
       <img src={require('../images/Vector (1).png')} className='images-vetor1-fotter'/>
        <img src={require('../images/Vector.png')} className='images-vetor-fotter'/>
       <img src={require('../images/Vector (2).png')} className='images-web'/>
        <img src={require('../images/Vector (3).png')} className='images-work' />
        <div className='div-images'>
        <img src={require('../images/Vector (8).png')} className='images-Vector8' />
        <img src={require('../images/Vector (10).png')} className='images-Vector10' />
        <img src={require('../images/Vector (11).png')} className='images-Vector11' />
        <img src={require('../images/Vector (12).png')} className='images-Vector12' />
        <img src={require('../images/Vector (13).png')} className='images-Vector13' />
        </div>
       </div>
     </div>
     </div>
    </div>
  );
}

export default Footer;
