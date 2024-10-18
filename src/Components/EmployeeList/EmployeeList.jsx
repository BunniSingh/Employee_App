import React from 'react'
import style from './EmployeeList.module.css';
const EmployeeList = ({employeeData}) => {
    
    // Add employee to teamList
    const addEmployeeInTeamList = (employee) => {
        console.log("Adding in teamList");
    }

  return (
    <div>
        <h1 className={style.heading}>EmployeeList</h1>
        <div className={style['employeeList-container']}>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Salary</th>
                        <th>Add</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeData.map((employee) => (
                        <tr className={style.row} key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.first_name}</td>
                            <td>{employee.age}</td>
                            <td>{employee.gender}</td>
                            <td><button className={style.btn} onClick={addEmployeeInTeamList}>+</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default EmployeeList