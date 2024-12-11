import logo from './logo.svg';
import './App.css';
import ExampleFilterConcept2 from './hooks/ExampleFilterConcept2';
import PropDrilling from './hooks/PropDrilling';
import PropDrillUseContext, { useName } from './hooks/PropDrillUseContext';
import AuthProvider, { useAuth } from './hooks/ExampleContext/AuthContext';
import Navbar from './hooks/ExampleContext/Navbar';
import DashBoard from './hooks/ExampleContext/DashBoard';
import Counter from './hooks/UseReducer';
import UseReducerExample1 from './hooks/UseReducerExample1';
import { Home1 } from './hooks/UseMemoExam1';
import Home from './hooks/UseMemo/Home';
import ArrayMethodsExample from './ArrayMethods/ArrayMethodsExample';
import ReduceMethodsExample from './ArrayMethods/ReduceMethod';
import ShoppingCart from './hooks/PrevState';
import ToggleComponent from './hooks/PrevState';
import UsestateObjectspread from './hooks/UsestateObjectspread';
import { useContext } from 'react';
function App() {


  return (
    <div className="App">
      <UsestateObjectspread/> 
<ToggleComponent/>
      <ExampleFilterConcept2/>
<ArrayMethodsExample/>
<ReduceMethodsExample/>


{/*
<Home/>
<UseReducerExample1/>      
<Home1/>
<Navbar/>
<DashBoard/>
</AuthProvider> */}
      </div>
  );
}

export default App;
