import images from '../image/index'
import styles from "../styles/modules/Sidebar.modules.scss"
const SideBar = () => {
  return (
    <>
      <div >
       <img src={images.logo} alt="logo"/>
       <h5>Language Acad</h5>
      </div>
      <div>
          <img src={images.charts}alt="charts"/>
          <p>Charts</p>
      </div>
      <div>
          <img src={images.referrals} alt="Referrals"/>
          <p>Referrals</p>
      </div>
      <div>
          <img src={images.transactions} alt="transaction"/>
          <p> Transaction</p>
      </div>
      <div>
          <img src={images.payout} alt="payout"/>
          <p>Payout</p>
      </div>
      <div>
          <img src={images.settings} alt="setting"/>
          <p>Settings</p>
      </div>
      <div>
          <img src={images.Home} alt="home"/>
          <p>Home</p>
      </div>
    </>
  );
}

export default SideBar;
