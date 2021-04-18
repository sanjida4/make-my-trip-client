import React from 'react';

const ManageDataTable = ({ packages, handleDeleteProduct }) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                    <th className="text-secondary text-left" scope="col">Sr No</th>
                    <th className="text-secondary" scope="col">Name</th>
                </tr>
            </thead>
            <tbody>
                {
                    packages.length > 0 && packages.map((packages, index) => {
                        return (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{packages.name}</td>
                                <td>
                                    <span onClick={() => handleDeleteProduct(packages._id)} style={{ cursor: 'pointer', color: 'red' }}>Delete</span>
                                </td>
                            </tr>
                        )
                    }

                    )
                }
            </tbody>
        </table>
    );
};

export default ManageDataTable;