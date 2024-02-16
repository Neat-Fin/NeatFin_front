import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate(-1); // -1은 뒤로 가기
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
        <img src="https://img.freepik.com/free-vector/404-error-with-a-landscape-concept-illustration_114360-7968.jpg?size=626&ext=jpg&ga=GA1.1.122962151.1708063673&semt=ais" alt="404" />
      </div>
      <button className='submitbtn' onClick={handleBackButtonClick}>뒤로 가기</button>
    </div>
  );
};

export default NotFoundPage;

