import React, { useEffect, useState,useCallback } from 'react'
import { useSelector } from 'react-redux';
import API from '../services/API';
import Layout from '../components/shared/Layout/Layout';
import moment from 'moment';
const Donation = () => {
    const { user } = useSelector((state) => state.auth);
    const [data, setData] = useState([]);
    //find donar records
    const getDonars = useCallback(async () => {
        try {
            const { data } = await API.post('/inventory/get-inventory-hospital', {
                filters: {
                    inventoryType: 'in',
                    donar: user?._id,
                },
            });
            if (data?.success) {
                setData(data?.inventory);
            }
        } catch (error) {
        }
    },[user?._id]);
    useEffect(() => {
        getDonars();
    }, [getDonars]);
    return (
        <Layout>
            <div className='container mt-4'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Blood Group</th>
                            <th scope="col">Inventory Type</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Email</th>
                            <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((record) => (
                            <tr key={record._id}>
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
        </Layout>
    );
}
export default Donation;
