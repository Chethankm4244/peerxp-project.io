
import React, { useState, useRef, useEffect } from 'react'
import Swal from 'sweetalert2';
import './Add.css'

const Add = ({ expense, setExpense, setIsAdding }) => {

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState('');
    
    const [created, setCreated] = useState('');
   
    
    

    const textInput = useRef(null);

    useEffect(() => {
        textInput.current.focus();
    }, [])

    const handleAdd = e => {
        e.preventDefault();
        if (!name ||!category ||  !date  || !amount || !created) {
            return Swal.fire({
                icon: 'error',
                title: 'Error!',
                text: 'All fields are required.',
                showConfirmButton: true
            });
        }

        const id = expense.length + 1;
        const newEmployee = {
            id,
            name,
            category, 
            date,
            amount,
            created
            
            
        }
        expense.push(newEmployee);
        setExpense(expense);
        setIsAdding(false);

        Swal.fire({
            icon: 'success',
            title: 'Added!',
            text: ` data has been Added.`,
            showConfirmButton: false,
            timer: 1500
        });
    }

  return (
    <div className="a-container">
    <form onSubmit={handleAdd} className='new-expense'>
        <h1 >Add New Expense</h1>
        <label htmlFor="name">Enter Name</label>
        <input
            id="name"
            type="text"
            ref={textInput}
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
            className='date'
        />
         <label htmlFor="amount">Enter Amount</label>
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
            <input type="submit" value="Add-Expence" className='submit-btn' />
            <input
               
                className="cancel-button"
                type="button"
                value="Cancel"
                onClick={() => setIsAdding(false)}
            />
        </div>
    </form>
</div>
  )
}

export default Add
