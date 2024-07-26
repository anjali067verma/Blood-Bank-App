import React from 'react';
import Layout from '../../components/shared/Layout/Layout';
import { useSelector } from 'react-redux';
const AdminHome = () => {
    const { user } = useSelector((state) => state.auth);
    return (
        <Layout>
            <div className='container'>
                <div className='d-flex flex-column mt-4'>
                    <h1>Welcome Admin <i className='text-success'>{user?.name}</i></h1>
                    <h3>Manage Blood Bank</h3>
                    <hr />
                    <p className='text-justify'>
                        Welcome to our Blood Bank, a beacon of hope and life-saving medical care.
                    </p>
                    <p className='text-justify'>A blood bank is a critical healthcare institution dedicated to the collection, testing, processing, and storage of blood and its components, playing an indispensable role in life-saving medical treatments. Blood banks ensure a steady and safe supply of blood for patients undergoing surgeries, trauma care, cancer treatments, chronic illnesses, and various medical emergencies. By maintaining an organized inventory of different blood types, they can quickly respond to the urgent needs of hospitals and clinics, ensuring that patients receive compatible blood transfusions, which are crucial for survival in life-threatening situations.</p>

                    <p className='text-justify'>One of the most significant impacts of blood banks is their ability to save lives during critical moments. In the aftermath of accidents or natural disasters, timely blood transfusions can make the difference between life and death. Additionally, blood banks support patients with conditions such as anemia, hemophilia, and those undergoing chemotherapy, by providing necessary blood products that aid in their treatment and recovery.</p>

                    <p className='text-justify'>Furthermore, blood banks promote public health through blood donation drives and awareness campaigns, encouraging voluntary blood donations. This community involvement not only sustains the blood supply but also fosters a spirit of solidarity and compassion. By ensuring a reliable and safe blood supply, blood banks are vital in preserving life and enhancing the quality of healthcare services worldwide.</p>

                    <p className='text-justify'>Thank you for your support and contribution to this life-saving mission. Together, we can make a difference, one donation at a time.
                    </p>
                </div>
            </div>
        </Layout >
    );
};
export default AdminHome;
