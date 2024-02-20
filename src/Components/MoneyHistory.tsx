import React from "react";
import { Money } from "./types";  
import "../Styles/Historystyle.css"

interface MoneyHistoryProps {
  moneys: Money[];
}

const MoneyHistory: React.FC<MoneyHistoryProps> = ({ moneys }) => {
  // 날짜를 기준으로 오름차순으로 정렬하는 함수
  const sortByDate = (a: Money, b: Money) => new Date(a.date).getTime() - new Date(b.date).getTime();

  // moneys 배열을 날짜순으로 정렬
  const sortedMoneys = moneys.slice().sort(sortByDate);

  return (
    <div className='historyContainer'>
      {sortedMoneys.length === 0 ? (
        <p className="noHistoryMessage">No records are currently registered.</p>
      ) : (
        <table className="historytable">
          <tbody>
            {sortedMoneys.map((money) => (
              <tr key={money.id}>
                <td>{money.date}</td>
                <td>{money.detail}</td>
                <td style={{ color: money.type === "income" ? "blue" : "inherit" }}>
                  {money.amount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MoneyHistory;
