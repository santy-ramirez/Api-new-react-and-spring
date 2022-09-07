import React from 'react';
import Table from 'react-bootstrap/Table';

function TableComponent({ data }) {
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>

                        <th>First Name</th>
                        <th>last  Name</th>
                        <th>fullname </th>



                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(a =>
                            <tr>
                                <td>{a.name} </td>
                                <td>{a.lastname} </td>
                                <td>{a.fullName} </td>

                            </tr>

                        )
                    }

                </tbody>
            </Table>
        </div>
    );
}

export default TableComponent; 