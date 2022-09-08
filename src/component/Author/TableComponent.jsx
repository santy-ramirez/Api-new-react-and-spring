import React from 'react';
import Table from 'react-bootstrap/Table';

function TableComponent({ data, handleDelete }) {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>last  Name</th>
                        <th>fullname </th>
                        <th>data</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((a, index) =>
                            <tr key={a.id}>
                                <td>{a.name} </td>
                                <td>{a.lastname} </td>
                                <td>{a.fullName} </td>
                                <td onClick={handleDelete}   >{a.id} </td>
                            </tr>

                        )
                    }

                </tbody>
            </Table>
        </div>
    );
}

export default TableComponent; 