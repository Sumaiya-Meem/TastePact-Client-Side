import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import useFood from "../../Hooks/useFood";
import { useTable } from 'react-table';
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import { FiEdit } from 'react-icons/fi';
import { RiDeleteBin2Fill} from 'react-icons/ri';
import {  MdManageAccounts} from 'react-icons/md';
import axios from 'axios';
import Swal from 'sweetalert2';

import "./table.css"

const ManageFood = () => {
    const { user } = useContext(AuthContext);
    const loggedUser = user.email;
    const { isLoading, error, data } = useFood();
    const [addFood, setAddFood] = useState([]);

    useEffect(() => {
        document.title = 'HarvestSwap | Manage Food';

        if (!isLoading && !error && data) {
            const foodAddedByUser = data.filter(food => food.userEmail === loggedUser);
            setAddFood(foodAddedByUser);
        }
    }, [isLoading, error, data, loggedUser]);


    const columns = React.useMemo(
        () => [
            {
                Header: 'Food Name',
                accessor: 'foodName',
            },
            {
                Header: 'Image',
                accessor: 'foodImage',
                Cell: row => <img src={row.value} alt="Food" style={{ width: '50px', height: '50px', borderRadius: '10%' }} />,
            },
            {
                Header: 'Expired Date',
                accessor: 'date',
            },
            {
                Header: 'Pickup Location',
                accessor: 'location',
            },
            {
                Header: 'Quantity',
                accessor: 'quantity',
            },
            {
                Header: 'About This Food',
                accessor: 'note',
                Cell: row => (
                        <div className="note"> 
                        {row.value}
                    </div>
                ),
            },
            {
                Header: 'Actions',
                Cell: ({ row }) => (
                    <div>
                        <button >Manage</button>
                        <button >Update</button>
                        <button >Delete</button>
                    </div>
                ),
            },
        ],
        []
    );

    const tableInstance = useTable({ columns, data: addFood });


    const handleDelete =(id) =>{
        Swal.fire({
            title: 'Are you sure to delete?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#ee5253',
            cancelButtonColor: '#2e86de',
            confirmButtonText: 'Yes, delete it!'
        })
        .then((res)=>{
           if(res.isConfirmed){
            axios.delete(`https://share-nourishment-server-side.vercel.app/addedFoods/${id}`)
            .then(res => {
                        console.log(res.data)
                        if (res.data.deletedCount > 0) {
                            const addFoodWithoutDelete =addFood.filter((food)=>food._id!==id) 
                        setAddFood(addFoodWithoutDelete)
                              Swal.fire(
                                'Deleted!',
                                'success'
                              )
                        }
                    })

           }
        })
        
       
    }


    return (
        <div className="mt-6">
            <table className="table" {...tableInstance.getTableProps()}>
            <thead>
                    <tr>
                        <th>Serial No</th>
                        {tableInstance.headerGroups.map(headerGroup => (
                            headerGroup.headers.map(column => (
                                <th  key={column.getHeaderProps().key} {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            ))
                        ))}
                    </tr>
                </thead>
                <tbody {...tableInstance.getTableBodyProps()}>
                    {tableInstance.rows.map(row => {
                        tableInstance.prepareRow(row);
                        return (
                            <tr key={row.id} {...row.getRowProps()}>
                                <td>{row.index + 1}</td>
                                {row.cells.map(cell => (
                                    <td key={cell.getCellProps().key} {...cell.getCellProps()}>
                                        {cell.column.Header === 'Actions' ? (
                                            <div className="flex flex-col gap-2 items-center">
                                                 <Link to={`/manageFood/${row.original._id}`}>
                                                        <Button className="w-8 h-8 bg-[#718093]" >
                                                        <MdManageAccounts className="mr-1 h-5 w-5" />
                                                            
                                                    </Button>
                                                </Link>
                                               
                                                <Link to={`/updateFood/${row.original._id}`}>
                                                    <Button className="w-8 h-8" >
                                                        <FiEdit className="mr-1 h-5 w-5" />
                                                            
                                                    </Button>
                                                </Link>
                                                <button>
                                                
                                                <Button className="w-8 h-8 bg-red-600" onClick={() => handleDelete(row.original._id)}>
                                                        <RiDeleteBin2Fill className="h-5 w-5" />

                                                    </Button>
                                                </button>
                                            </div>
                                        ) : cell.render('Cell')}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ManageFood;
