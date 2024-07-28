import { useState, useEffect } from 'react';
import Jobcard from './Jobcard';
import '../css/Jobcard.css';
import Spinner from './Spinner';

const Jobs = ({ isHome }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:3001');
       
        const result = await response.json();
        
        const limit = isHome ? 3 : result.jobs.length;
        const current = result.jobs.slice(0, limit);

        setData(current);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchJobs();
  }, [isHome]);

  if (loading) return <Spinner loading={loading} />;
  if (error) return <h1>Something went wrong</h1>;

  return (
    <div className='Jobcardcontainer'>
      <h2>{isHome ? "Recent Jobs" :"Browse Jobs"}</h2>
      {data.map((job) => (
        <Jobcard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default Jobs;
