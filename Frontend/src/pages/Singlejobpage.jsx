import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../components/Spinner';
import '../css/Singlejobpage.css';

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
        <>
            {
            job ?

            // the rendered page
            <div className='SingleJobpage' > 
            <div className='Backtojoblistings'> <Link to= "/">Back To Job Listings</Link> </div> 

            <div className='SingleJobcontainer'>
                <div className='SingleJobcontainerleft'>

                    <div className='SingleJobcontainerlefttop'>
                        <p className='Jobtype'>{job.type}</p>
                        <h2>{job.title}</h2>
                        <p>{job.location}</p>
                    </div>

                    <div className='SingleJobcontainerleftbottom'> 
                        <h4>Job Description</h4>
                        <p>{job.description}</p>
                        <h4>Salary</h4>
                        <p>{job.salary}</p>
                    </div>

                </div>

                <div className="SingleJobcontainerright">
                    <div className="SingleJobcontainerrighttop">
                    <h4>Company Info</h4>
                    <h3> {job.company.name}</h3>
                    <p>
                        {job.company.description}
                    </p>
                    <h4>Contact Email</h4>
                    <p>{job.company.contactEmail}</p>
                    <h4>Contact Phone</h4>
                    <p>{job.company.contactPhone}</p>


                    </div>

                    <div className="SingleJobcontainerrightbottom">
                        <h3>Manage Job</h3>
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                    

                </div>

            </div>




            </div>
            

            
            
            
            
            
            
            
            
            
            
            
            : <Spinner loading={true} />}   
        </>
    );
};

export default Singlejobpage;
