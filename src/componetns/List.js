import React,{useState} from 'react'
import './List.css';


const List = ({ expense, handleEdit, handleDelete }) => {

const [search,setSearch]=useState('');
const [date,setDate]=useState('');
  
    
  return (
    <div className='contain-table'>
        <div>
             
    <div className='search-inputs'>
      <input type="text" placeholder='Search expense by Name' onChange={(e)=>setSearch(e.target.value)} />
      <input type="date" placeholder='Filter by Date of Expense' onChange={(e)=>setDate(e.target.value)} />
    </div>
        </div>
            <table >
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Name</th>
                        <th>Category</th>
                        
                        <th>Date of Expence</th>
                        <th>Amount</th>
                        <th>Created by</th>
                        <th colSpan={2}>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {expense.length > 0 ? (
                        expense.filter((employee)=>{
                            return search.toLowerCase() === ''? employee : 
                            employee.name.toLowerCase().includes(search) 
                        }).filter((employee)=>{
                            return date === ''? employee :
                            employee.date.includes(date)
                        }).map((employee, i) => (
                            <tr key={employee.id}>
                                <td>{i + 1}</td>
                                <td>{employee.name}</td>
                                <td>{employee.category}</td>
                                
                                <td>{employee.date}</td>
                                <td>{employee.amount} </td>
                                <td>{employee.created}</td>
                                
                                
                                <td>
                                    <button
                                        onClick={() => handleEdit(employee.id)}
                                        className="edit-button"
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td >
                                    <button
                                        onClick={() => handleDelete(employee.id)}
                                        className="delete-button"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Expenses</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
  )
}

export default List
