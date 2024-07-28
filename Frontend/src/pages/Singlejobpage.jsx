import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Spinner from '../components/Spinner';

const Singlejobpage = () => {
    const { id } = useParams();
    const [job, setJob] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const response = await fetch(`http://localhost:3001/jobs/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                console.log(data);
                setJob(data);
            } catch (error) {
                console.error('Error:', error);
                setError(error.message);
            }
        };
        fetchJob();
    }, [id]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {job ? <p>{job.description}</p> : <Spinner loading={true} />}   
        </div>
    );
};

export default Singlejobpage;
