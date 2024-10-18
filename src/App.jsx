import './App.css';
import TeamList from './Components/TeamList/TeamList';
import EmployeeList from './Components/EmployeeList/EmployeeList';
import data from './static/employeeData.json';

function App() {
  return (
    <>
      <div className='container'>
        <div className="left">
          <EmployeeList employeeData={data}/>
        </div>

        <div className="right">
          <TeamList />
        </div>
      </div>
    </>
  )
}

export default App
