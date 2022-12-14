import React from 'react';
import Table from 'react-bootstrap/Table';

function TableComponent({ data, handleDelete, heandleUpdate }) {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last  Name</th>
                        <th>Fullname </th>
                        <th>Id</th>
                        <th>Acction Delete</th>
                        <th>Acction Update</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((a, index) =>
                            <tr key={a.id}>
                                <td>{a.name} </td>
                                <td>{a.lastname} </td>
                                <td>{a.name + " " + a.lastname} </td>
                                <td  >{a.id} </td>
                                <td ><button onClick={handleDelete} value={a.id} >delete</button> </td>
                                <td><button onClick={heandleUpdate} value={a.id} >update</button></td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </div >
    );
}

export default TableComponent; 