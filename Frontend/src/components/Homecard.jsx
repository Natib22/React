
import Card from './Card'
import '../css/Homecard.css'

const Homecard = () => {
  return (
    <div className='Homecard'>
       <Card title='For Developers' subtitle='Browse our react jobs and start your career today' button_content='Browse job' bg='#f7fafc' /> 
       <Card title='For Employers' subtitle='List your job to find the best developer' button_content='Apply Now' bg='#e0e7ff' button_back='#3932bb' />
    </div>
  )
}

export default Homecard
