import './Header.css'

function Header() {
  return (
    <div className="header-container">
      <div className='div-img'>
        <img src={require('../images/Vector (5).png')} className='images-vetor5' />
        <img src={require('../images/Vector (6).png')} className='images-vetor6' />
        <img src={require('../images/Vector (7).png')} className='images-vetor7' />
        <div className='billable-hours'>Billable Hours</div>
      </div>
      <p className='text'>Set an hourly rate to your contracts to mark them as billable. Get amount reports and generate invoices to get paid.</p>
      <button className='start-div'>Start 7 Days Free Trial</button>
      <p className='text-required'>Use now, pay in 30 days. No credit card required</p>
      <img src={require('../images/Image.png')} className='images-image' />
      <img src={require('../images/Image (2).png')} className='images-image2' />
      <p className='text-amount'>Amount Reports</p>
      <p className='text2'>If you’re working on an hourly rate, it will be a good idea to make your contracts billable  by adding an hourly rate in the contract's settings.</p>
      <p className='text3'>By doing so your tracked time will be converted into an amount and you will be able to see the reports both in hours and amounts. Amount reports show the billed amount of each member by day, week or month.</p>
      <img src={require('../images/Rectangle 2246 (1).png')} className='images-Rectangle' />
      <p className='permissions'>Permissions to Financial Information</p>
      <p className='theOwner'>The owner is eligible to give visibility of the contract's rate to certain team members. You can set up the rate visibility from the member’s list.</p>
      <p className='setting'>Setting “Show hourly rate” will mean the member is able to see all financial information related to his/her contract and role permission.</p>
      <p className='if-a-member'>If a member has no permission to financial information,  he/she cannot view any kind of financial information, as well as is not able to generate invoices.</p>
      <img src={require('../images/Image (1).png')} className='images-image1' />
      <p className='workspace'>Workspace Permissions</p>
      <p className='financial'>Financial Permissions for Member Types</p>
      <div className='div-container-images'>
      <div className='ownerdiv'></div>
      <img src={require('../images/Sample_User_Icon.png')} className='images-Sample' />
      <p className='p-owner'>Owner</p>
      <p className='owner-level'>Owner is eligible to set up the access of financial information on a workspace level.</p>
      <div className='yellow'></div>
      <img src={require('../images/Sample_User_Icon.png')} className='images-Sample-yellow' />
      <p className='p-yellow'>Executive Manager</p>
      <div className='Pm'></div>
      <img src={require('../images/Sample_User_Icon.png')} className='images-Sample-Pm' />
      <p className='p-Pm'>Project Manager</p>
      <div className='div-green'></div>
      <img src={require('../images/Sample_User_Icon.png')} className='images-Sample-green' />
      <p className='p-green'>Project Manager</p>
      <div className='div-client'></div>
      <img src={require('../images/Sample_User_Icon.png')} className='images-Sample-client' />
      <p className='p-client'>Client</p>
      <img src={require('../images/Image (4).png')} className='images-Sample-image4' />
      </div>
      <div className='features-page'>
      <p className='p-title'>Features</p>
        <div className='Invoice-Generating-div'>
          <img/>
          <p className='Invoice-Generating-p'>Invoice Generating</p>
          <p className='Invoice-Generating-text'>Track billable time and instantly generate the amount to be paid in a form of invoice to send to your clients.</p>
        </div>
        <div className='Real-time-reports-div'>
          <img/>
          <p className='Invoice-Generating-p'>Real-time reports</p>
          <p className='Invoice-Generating-text'>Have a full understanding of where your team is heading by analyzing their performance in real-time reports.</p>
        </div>
        <div className='Time-Tracking-with-Screenshots-div'>
          <p className='Invoice-Generating-p'>Time Tracking with Screenshots</p>
          <p className='Invoice-Generating-text'>See how your employees are spending their working time with the help of 4 different screenshot modes.</p>
        </div>
        <p className='more-text'>More Features</p>
        <div className='faqs-container'>
          <p className='faqs'>FAQs</p>
          <span className='gic'></span>
          <p className='title-gic'>Can I choose the currency for the generated amount?</p>
          <p className='gic-text'>Yes, if you are the Owner of the workspace you can choose your preferred currency from the drop-down list of profile settings.</p>
          <div className='slaq'></div>
          <span className='gic1'></span>
          <p className='title-gic-1'>Where can I view the amount reports?</p>
          <p className='gic-text-1'>You can find the amount reports on the timesheet reports page. You can view them both on hours and amounts.</p>
          <div className='slaq1'></div>

          <span className='gic2'></span>
          <p className='title-gic-2'>How can I set an hourly rate?</p>
          <p className='gic-text-2'>You can go to members page from your dashboard, select your preferred contract and put an hourly rate for a certain team member.</p>
          <div className='slaq2'></div>

          <span className='gic3'></span>
          <p className='title-gic-3'>Who can set an hourly rate?</p>
          <p className='gic-text-3'>The owner and also the executive manager if the owner gives permission to him/her.</p>
          <div className='slaq3'></div>
          <span className='gic4'></span>
        </div>
      </div>
    </div>
  );
}

export default Header;
