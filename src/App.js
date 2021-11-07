import logo from './logo.svg';
import './App.css';
import BaiTapOanTuXi from './BaiTapOanTuXi/BaiTapOanTuXi';
import {store} from "./Reducer/rootRedecer";
import {Provider} from "react-redux";


function App() {
  return (
    <div className="App">
   <Provider store={store}>
     <BaiTapOanTuXi/>

   </Provider>
    </div>
  );
}

export default App;
