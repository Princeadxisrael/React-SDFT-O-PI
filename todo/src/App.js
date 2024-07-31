import Button from "./Button";
import Gallery from "./Gallery";
import Profile from "./Profile";
import "./App.css";

//rendering list
//events
//hooks
//state
//props
const products = [
  { title: "cabbage", isFruit: false, id: 1 },
  { title: "Mango", isFruit: true, id: 2 },
  { title: "Cucumber", isFruit: false, id: 3 },
  { title: "bananas", isFruit: true, id: 4 },
];

function App() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{ color: product.isFruit ? "magenta" : "darkgreen" }}
    >
      {product.title}
    </li>
  ));
  return (
    <div className="App">
      {/* <h1>MY Todo APP</h1>
      <h2> testing app</h2> */}
      {/* <Button />

      <ul>{listItems}</ul>
      <Profile /> */}
      <Gallery />
      <Gallery />
    </div>
  );
}

export default App;
