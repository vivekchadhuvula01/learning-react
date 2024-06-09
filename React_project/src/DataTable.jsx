import React, { useState } from 'react'

const DataTable = () => {
    const [formData, setFormData] = useState({
        name: '',
        gender: '',
        age: '',
    })
    const [editId, setEditId] = useState(false)
    const [data, setData] = useState([])
    const handleInput = (e) => {
        // sreadoperator separates the form from the data source .
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleAddData = (e) => {
        if (formData.name && formData.gender && formData.age) {
            const newitem = {
                id: Date.now(),
                name: formData.name,
                gender: formData.gender,
                age: formData.age,
            }
            setData([...data, newitem])
            setFormData({
                name: '',
                gender: '',
                age: '',
            }) //making the form data empty
        }

    }
    const handleDelete = (id) => {
        const updatedList = data.filter((item) => item.id !== id)
        setData(updatedList)
    }
    // console.log(data)
    return (
        <div className="container">
            <div className="add-container">
                <div className="info-container">
                    <input
                        type="text"
                        placeholder='Name'
                        name='name'
                        value={formData.name}
                        onChange={handleInput}

                    />
                    <input
                        type="text"
                        placeholder='Gender'
                        name='gender'
                        value={formData.gender}
                        onChange={handleInput}

                    />
                    <input
                        type="text"
                        placeholder='Age'
                        name='age'
                        value={formData.age}
                        onChange={handleInput}

                    />
                </div>
                <button className="add" onClick={handleAddData}>Add</button>
            </div>
            <div className="search-table-container">
                <input
                    type="text"
                    placeholder='Search By Name'
                    className='search-input'
                    value={''}
                    onChange={() => { }}

                />
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) => (
                                <tr key={item.id}>
                                    <td id={item.id}>{item.name}</td>
                                    <td id={item.id}>{item.gender}</td>
                                    <td id={item.id}>{item.age}</td>
                                    <td className='actions'>
                                        <button className='edit' onClick={() => setEditId(item.id)}>Edit</button>
                                        <button className='delete' onClick={() => handleDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
                <div className="pagintion">

                </div>
            </div>
        </div>
    )
}

export default DataTable
