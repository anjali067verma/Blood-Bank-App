import React, { useState, useEffect, useCallback } from 'react';
import Header from '../../components/shared/Layout/Header';
import API from '../../services/API';
import moment from 'moment';
import './Analytics.css'; // Import the custom CSS file

const Analytics = () => {
    const [data, setData] = useState([]);
    const [inventoryData, setInventoryData] = useState([]);
    const colors = ['#FFF5E1', '#FF6969', '#C80036', '#EF9C66', '#E9B5D2', '#DF0054', '#FCE2AE', '#FF6666'];

    // GET BLOOD GROUP DATA
    const getBloodGroupData = useCallback(async () => {
        try {
            const response = await API.get('/analytics/bloodGroups-data');
            if (response.data?.success) {
                setData(response.data?.bloodGroupData);
            }
        } catch (error) {
            console.log(error);
        }
    },[]);

    // Lifecycle method
    useEffect(() => {
        getBloodGroupData();
    }, [getBloodGroupData]);

    // GET function
    const getBloodRecords = useCallback(async () => {
        try {
            const response = await API.get('/inventory/get-recent-inventory');
            if (response.data?.success) {
                setInventoryData(response.data?.inventory);
            }
        } catch (error) {
            console.log(error);
        }
    },[]);

    useEffect(() => {
        getBloodRecords();
    }, [getBloodRecords]);

    return (
        <>
            <Header />
            <div className='d-flex flex-row flex-wrap'>
                {data?.map((record, i) => (
                    <div className="card m-2 p-1"
                        key={i}
                        style={{ width: '18rem', backgroundColor: `${colors[i % colors.length]}` }}>
                        <div className="card-body">
                            <h1 className="card-title bg-light text-dark text-center mb-3">{record.bloodGroup}</h1>
                            <p className="card-text">
                                Total In : <b>{record.totalIn}</b> (ml)
                            </p>
                            <p className="card-text">
                                Total Out : <b>{record.totalOut}</b> (ml)
                            </p>
                        </div>
                        <div className='card-footer text-light bg-dark'>
                            Total Available : <b>{record.availableBlood}</b> (ml)
                        </div>
                    </div>
                ))}
            </div>
            <div className='container my-3'>
                <h1 className='my-3 text-center'>Recent Blood Transactions</h1>
                <table className="table table-hover table-bordered">
                    <thead className="thead-custom">
                        <tr>
                            <th scope="col">Blood Group</th>
                            <th scope="col">Inventory Type</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Email</th>
                            <th scope="col">Time & Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventoryData?.map((record, index) => (
                            <tr key={record._id} className={`table-row-${index % 6}`}>
                                <td>{record.bloodGroup}</td>
                                <td>{record.inventoryType}</td>
                                <td>{record.quantity} (ml)</td>
                                <td>{record.email}</td>
                                <td>{moment(record.createdAt).format('DD/MM/YYYY hh:mm A')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Analytics;
