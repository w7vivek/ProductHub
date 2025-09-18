// import "./App.css";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Login from "./Components/Login";
// import Home from "./Components/Home";
// import Vegetables from "./Components/Vegetables";
// import Fruits from "./Components/Fruits";
// import Layout from "./Components/Layout";
// import Cart from "./Components/Cart";
// import Aboutus from "./Components/Aboutus";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route element={<Layout />}>
//           <Route path="/main_page" element={<Home />} />
//           <Route path="/vegetables" element={<Vegetables />} />
//           <Route path="/fruits" element={<Fruits />} />
//           <Route path="/cart_buy" element={<Cart />} />
//           <Route path="/about" element={<Aboutus />} />  {/* lowercase and consistent */}
//         </Route>
//       </Routes>
//     </Router>
//   );
// }

// export default App;



import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Vegetables from "./Components/Vegetables";
import Fruits from "./Components/Fruits";
import Layout from "./Components/Layout";
import Cart from "./Components/Cart";
import Aboutus from "./Components/Aboutus";

function App() {
  return (
    <Router basename="/ProductHub">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="main_page" element={<Home />} />
          <Route path="vegetables" element={<Vegetables />} />
          <Route path="fruits" element={<Fruits />} />
          <Route path="cart_buy" element={<Cart />} />
          <Route path="about" element={<Aboutus />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
