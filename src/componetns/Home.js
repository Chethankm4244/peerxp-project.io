import React,{useState} from 'react'

import Swal from 'sweetalert2';

import Header from './Header';
import List from './List';
import Add from './Add';
import Edit from './Edit';

import { expenseData } from './data';

const Home = () => {

  
    const [expense, setExpense] = useState(expenseData);
    const [selectedExpense, setSelectedExpense] = useState(null);
    const [isAdding, setIsAdding] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const handleEdit = (id) => {
        const [employee] = expense.filter(employee => employee.id === id);

        setSelectedExpense(employee);
        setIsEditing(true);
    }

    const handleDelete = (id) => {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        }).then(result => {
            if (result.value) {
                const [employee] = expense.filter(employee => employee.id === id);

                Swal.fire({
                    icon: 'success',
                    title: 'Deleted!',
                    text:  `data has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                });

                setExpense(expense.filter(employee => employee.id !== id));
            }
        });
    }


  return (
    <div className='container'>
    {/* List */}
    {!isAdding && !isEditing && (
        <>
            <Header
                setIsAdding={setIsAdding}
            />
            <List
                expense={expense}
                handleEdit={handleEdit}
                handleDelete={handleDelete}
                // data = {search(expenseData)}
            />
        </>
    )}
    {/* Add */}
    {isAdding && (
        <Add
            expense={expense}
            setExpense={setExpense}
            setIsAdding={setIsAdding}
        />
    )}
    {/* Edit */}
    {isEditing && (
        <Edit
            expense={expense}
            selectedExpense={selectedExpense}
            setExpense={setExpense}
            setIsEditing={setIsEditing}
        />
    )}
</div>
  )
}

export default Home
