import  { useEffect, useState, ChangeEvent  } from 'react';
import "../Styles/Accountstyle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faEnvelope  } from '@fortawesome/free-solid-svg-icons';
 
interface UserInfo {
  email: string;
  name: string;
  picture: string;
}
function Account() {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [spendingAmount, setSpendingAmount] = useState("");
  const [pledgeText, setPledgeText] = useState("");

  useEffect(() => {
    // 세션 스토리지에서 정보 읽어오기
    const storedEmail = sessionStorage.getItem('email');
    const storedName = sessionStorage.getItem('name');
    const storedPicture = sessionStorage.getItem('picture');

    if (storedEmail && storedName && storedPicture) {
      const userObj: UserInfo = {
        email: storedEmail,
        name: storedName,
        picture: storedPicture,
      };
      setUserInfo(userObj);
    }
    const storedSpendingAmount = localStorage.getItem("spendingAmount");
    const storedPledgeText = localStorage.getItem("pledgeText");

    if (storedSpendingAmount) {
      setSpendingAmount(storedSpendingAmount);
    }

    if (storedPledgeText) {
      setPledgeText(storedPledgeText);
    }
  }, []);  
  const handleSpendingAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSpendingAmount(value);
  };

  const handlePledgeTextChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setPledgeText(value);
  };

  // 버튼 클릭 시 로컬 스토리지에 저장
  const handleSaveButtonClick = () => {
    localStorage.setItem("spendingAmount", spendingAmount);
    localStorage.setItem("pledgeText", pledgeText);
  };

  return(
       <div className='AContainer'>
        <div className='mypageheader'>
        <h3>Edit profile</h3>
      </div>
        {userInfo ? (
        <div >                
        <div className="AccountContainer">        
        <div className="profile-container">
        <img className="profileimg" src={userInfo.picture} alt="googleaccountimg" />
        <div className="profile-info">
        <h2>Hi {userInfo.name}</h2>         
        </div>      
        </div>      
       <h3><FontAwesomeIcon icon={faEnvelope} /> Email</h3>
        <div className="nickinput" >{userInfo.email}</div> 
            <p>Managed by Google</p>
         </div>
         <div className="AccountContainer">
         <h3>Set a target spending amount for this month</h3>

         <input
        type="text"
        className="nickinput"
        value={spendingAmount}
        onChange={handleSpendingAmountChange}
      />
      

      <h3>Make a pledge to keep your goal</h3>
      <div className='textareaBox'>
        <textarea
          id="myTextArea"
          placeholder=' '
          value={pledgeText}
          onChange={handlePledgeTextChange}
        />
        
      </div>
      <button className='savebtn' onClick={handleSaveButtonClick}>Save</button>

         </div>
      
        <div className="AccountContainer">
        <h3>Delete account</h3> <button className="savebtn">Delete</button>
        </div>
        </div>
      ) : (
        <p>No user information available.</p>
      )}
       </div>


    )
}
export default Account;