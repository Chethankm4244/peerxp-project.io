
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import './Edit.css'

const Edit = ({ expense, selectedExpense, setExpense, setIsEditing }) => {

    const id = selectedExpense.id;

    const [name, setName] = useState(selectedExpense.name);
    const [category, setCategory] = useState(selectedExpense.category);
    const [date, setDate] = useState(selectedExpense.date);
    const [amount, setAmount] = useState(selectedExpense.amount);
    const [created, setCreated] = useState(selectedExpense.created);
   
    

    const handleUpdate = e => {
        e.preventDefault();

        if (!name || !category || !date || !amount || !created  ) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const employee = {
            id,
            name,
            category,
            date,
            amount,
            created,
            
            
        };

        for (let i = 0; i < expense.length; i++) {
            if (expense[i].id === id) {
                expense.splice(i, 1, employee);
                break;
            }
        }

        setExpense(expense);
        setIsEditing(false);

        Swal.fire({
            icon: 'success',
            title: 'Updated!',
            text: `${employee.name} 's data has been updated.`,
            showConfirmButton: false,
            timer: 1500
        });
    };


  return (
    <div className="a-container">
    <form onSubmit={handleUpdate} className='new-expense'>
        <h1 >Edit Expense</h1>
        <label htmlFor="name">Enter Name</label>
        <input
            id="name"
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
        />
     
         <label htmlFor="category">Select Category</label>
         <select name="category" id="category" value={category} 
          onChange={e => setCategory(e.target.value)} className='select'>
            <option>Travel</option>
            <option >Health</option>
            <option >Home appliances</option>
            <option >Education</option>
            <option >Electronics</option>
            <option >Books</option>
        </select>
          <label htmlFor="date">Select Date</label>
        <input
            id="date"
            type="date"
            name="date"
            value={date}
            onChange={e => setDate(e.target.value)}
        />
         <label htmlFor="amount">Amount</label>
        <input
            id="amount"
            type="number"
            name="amount"
            value={amount}
            onChange={e => setAmount(e.target.value)}
        />
           <label htmlFor="created">Enter E-Mail</label>
        <input
            id="created"
            type="mail"
            name="created"
            value={created}
            onChange={e => setCreated(e.target.value)}
        />
        
      
        <div className='add-buttons'>
            <input type="submit" value="Update" className='submit-btn' />
            <input
                className="cancel-button"
                type="button"
                value="Cancel"
                onClick={() => setIsEditing(false)}
            />
        </div>
    </form>
</div>
  )
}

export default Edit
