import React from 'react';
import Table from 'react-bootstrap/Table';

function TableComponent({ data, handleDelete }) {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last  Name</th>
                        <th>Fullname </th>
                        <th>Id</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((a, index) =>
                            <tr key={a.id}>
                                <td>{a.name} </td>
                                <td>{a.lastname} </td>
                                <td>{a.fullName} </td>
                                <td  >{a.id} </td>
                                <td ><button onClick={handleDelete} value={a.id} >delete</button> </td>
                            </tr>
                        )
                    }

                </tbody>
            </Table>
        </div >
    );
}

export default TableComponent; 