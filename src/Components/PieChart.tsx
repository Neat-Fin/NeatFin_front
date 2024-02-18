import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { Money } from './types';
import { Link } from 'react-router-dom';

const PieChartComponent: React.FC =() => {
  const savedMoneysString = localStorage.getItem('moneys');
  const savedMoneys = savedMoneysString ? JSON.parse(savedMoneysString) : [];


  // 현재 월을 기준으로 소비 내역 필터링
  const hasData = savedMoneys.length > 0;

  const currentMonthMoneys = savedMoneys.filter(
    (money: Money) =>
      new Date(money.date).getMonth() + 1 === new Date().getMonth() + 1 && money.type === 'expense'
  );
  // 카테고리 별 소비액을 계산
  const categoryData: Record<string, number> = currentMonthMoneys.reduce((acc: Record<string, number>, money: Money) => {
    const category = money.category || 'Others';
    acc[category] = (acc[category] || 0) + Number(money.amount);
    return acc;
  }, {});

  // 데이터를 배열 형태로 변환
  const data = Object.keys(categoryData).map((category) => ({
    name: category,
    value: categoryData[category],
  }));

 // 소비액을 기준으로 오름차순 정렬
  const sortedData = data.slice().sort((a, b) => a.value - b.value);


  // 상위 6개 항목 추출
  const topItems = sortedData.slice(0, 6);

  // 나머지 항목들을 합쳐 "기타" 항목으로 생성
  const otherItems = sortedData.slice(6);
  const sumOfOtherItems = otherItems.reduce((sum, item) => sum + item.value, 0);
  const otherCategory = { name: 'Others', value: sumOfOtherItems };
// "Others" 항목의 비율이 0%인 경우 제외
  const finalData = [...topItems, otherCategory].filter(item => item.value > 0);
  interface Props{ //빨간줄 props 설정해서 해결
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
     
  }
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A97C50', '#AF7AC5', '#BFBFBF'];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }:Props) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div>
      {!hasData && (
      <h3 style={{ textAlign: 'center', marginTop: '10vh' }}>
        No expense data available. Please input your expenses to generate the chart.
        <div className='thebokibtn'>
            <Link to="/moneybook">Go to Money Book &gt;</Link>
          </div>
      </h3>
    )}
      <ResponsiveContainer width="100%" height={470}>
        <PieChart>
          <Legend wrapperStyle={{ bottom: 0, left: 0, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '25px' }} />
          <Pie
            data={finalData}
            cx="50%"
            cy="40%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {finalData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      
    </div>
  );
};

export default PieChartComponent;
