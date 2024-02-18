import PieChartComponent from "./PieChart";
import '../Styles/Chartstyle.css';

function Chart() {
  // 현재 날짜를 얻기 위해 Date 객체를 생성
  const currentDate = new Date();
  // getMonth() 메서드를 사용하여 현재 월을 얻음 (0부터 시작하므로 1을 더해줌)
  const currentMonth = currentDate.toLocaleDateString('en-US', { month: 'long' });


  return (
    <div className="chartContainer">
      <div className='mypageheader'>
        <h3>Chart</h3>
      </div>
      <div >
      <h1>{currentMonth}</h1>
      <p>
            Understanding your expenses is crucial for financial well-being.
            The pie chart above provides a visual breakdown of your spending
            categories.
          </p>
         <div className="pieContainer" >
          <PieChartComponent />
        </div>
        <div>
          
          <p>
            Take control of your budget by analyzing where your money goes. Use
            this information to make informed decisions and achieve your
            financial goals.
          </p>
          
        </div>        
      </div>
      
    </div>
  );
}

export default Chart;
