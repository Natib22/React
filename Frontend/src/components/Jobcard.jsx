import {useState }from 'react';
import { Link } from 'react-router-dom';
import '../css/Jobcard.css';

const Jobcard = ({ job }) => {


 let [showFullDescription, setShowFullDescription] = useState(false);

 let description = job.description;

 if (!showFullDescription && description.length > 100) {
   description = description.substring(0, 90) + '...';
 }


  return (
    <div className='Jobcard'>

      <p className='Jobtype'> {job.type}</p>
      <h3>{job.title}</h3>
      <div>{description}</div>
      <button onClick= {() => setShowFullDescription(!showFullDescription)}   className='Moreorless'>{showFullDescription ? "Less" : "More"}</button>
      <p className='Jobsalary'>{job.salary}</p>

      <div className='Joblocation'> 
       <p> {job.location} </p>
        <Link to = {`/Jobs/${job.id}`}>Read more</Link>

      </div>

      
    </div>
  );
};

export default Jobcard;
