import React, { useState, useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Navbar from '../components/Navbar';

const Table = () => {
    const url = "https://jsonplaceholder.typicode.com/comments"
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await fetch(url)
                const data = await res.json();
                console.log(data);
                setUsers(data)
            } catch (err) {
                console.log(err);
            }
        };
        getUsers();

    }, []);

    const columns = [
        {
            field: 'id', headerName: 'ID', width: 100
        },
        {
            field: 'name', headerName: 'User name', width: 300,
        },
        {
            field: 'email', headerName: 'Email', type: 'email', width: 300,
        },

        {
            field: 'body', headerName: 'Body', width: 400,
        }
    ];

    return (
        <div>
            <Navbar />
            <div className='h-[500px] 	md:px-8 py-4 bg-white '>
                <DataGrid
                    disableSelectionOnClick
                    rows={users}
                    columns={columns}
                    pageSize={9}
                    getRowId={(row) => row.id}
                    rowHeight={40}
                    rowsPerPageOptions={[9]}
                />
            </div>
        </div>
    );
}

export default Table;
