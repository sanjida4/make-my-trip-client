import React, { useEffect, useState } from 'react';
import Sidebar from '../Dashboard/Sidebar/Sidebar';
import ManageDataTable from './ManageDataTable';

const ManagePackage = () => {
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data))
    }, []);

    const handleDeleteProduct = id => {
        fetch(`http://localhost:5000/packages/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.response) {
                    alert('Deleted Successfully');
                    const remainingPackages = packages.filter((packages) => packages._id !== id);
                    setPackages(remainingPackages);
                }
            })
            .catch(error => console.log(error));
    }

    return (
        <div className="container-fluid row" >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", height: "100vh", right: 0, backgroundColor: "#FFF5EE" }}>
                <h4 className="mt-4 mb-5" style={{color: 'darkblue'}}>All Packages</h4>
                <ManageDataTable handleDeleteProduct={handleDeleteProduct} packages={packages}></ManageDataTable>
            </div>
        </div>
    );
};

export default ManagePackage;