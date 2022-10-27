
import './App.css';
import Card from './components/Card';
const data = [
  {
    title: "Pen",
    price: "25",
    color: "blue",
    date: new Date(2019,11,8),
  },
  {
    title: "Paper",
    price: "35",
    color: "white",
    date: new Date(2020,6,4),
  },
  {
    title: "Apple",
    price: "80",
    color: "red",
    date: new Date(2021,2,12),
  },
];
function App() {
  return (
    <div className="App">
      {data.map(({title, price, color, date}) => {
        return (
          <div>
            <Card title={title} price={price} color={color} date={date}/>
          </div>
        )
      })}
    </div>
  );
}

export default App;

x = 10
x = 10;
y = x
y = x;
z = x + 1
j +=2;


