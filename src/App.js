import './App.css';
import { Auth } from 'aws-amplify';
import Layout from './components/Layout'


const App = () => {
  return (
    <div>
      <Layout>
      <div className='bg-green-600'> 
        <p> Layout child</p>
      </div>
      </Layout>

    </div>
  )
};  
export default App;
