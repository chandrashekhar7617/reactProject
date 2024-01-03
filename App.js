import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navebar";
import ProductList from "./component/ProductList";
import Footer from "./component/Footer.js";
function App() {
  const product=[
    {
      price:9899,
      name:"Iphone 10s Max",
      quantity:0,
    },
    {
      price:568,
      name:"Realme 11 pro",
      quantity:0,
    }
  ]
  return (
    <>
      <Navbar />
      <main className="container mt-5">
      <ProductList product={product}/>
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default App;
