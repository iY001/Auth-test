import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddForm from './AddForm';
import Table from './Table';


function Dashboard() {
    const [Data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showForm, setShowForm] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get("http://localhost:5000/empolyee");
                setData(res.data.data);
            } catch (err) {
                console.error(err);
                setError("Error fetching data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    console.log(Data);

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/empolyee/${id}`);
        } catch (error) {
            console.log(error)
            setError("Error deleting data");
        }
    }
    return (
        <div className="md:py-2 lg:px-4">
            <h1 className="text-3xl text-main font-medium">Dashboard</h1>

            {loading && <p>Loading...</p>}

            {error && <p style={{ color: 'red' }}>Error: {error}</p>}

            <Table Data={Data} handleDelete={handleDelete} />

            <div className='flex justify-end p-12'>
                <button onClick={() => setShowForm(!showForm)} className='bg-main hover:bg-opacity-80 focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 active:ring-gray-400 text-white font-bold rounded-[4.4px] py-4 px-8'>Add User</button>
            </div>
            {showForm && <AddForm showForm={showForm} setShowForm={setShowForm} />}
        </div>
    );
}

export default Dashboard;
