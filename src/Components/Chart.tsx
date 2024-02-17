import PieChartComponent from "./PieChart";
 
import '../Styles/Chartstyle.css';
function Chart() {
  return (
    <div className="chartContainer">
      <div className='mypageheader'>
        <h3>Chart</h3>
      </div>
      <div >
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
