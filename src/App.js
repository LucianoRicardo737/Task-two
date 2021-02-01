
import Index from "./components/Index";

import { useQuery } from "@apollo/react-hooks";

import { motion } from 'framer-motion';

import {getSellerPublication} from './query/getSellerPublications'

function App() {

  const { loading, error, data } = useQuery(getSellerPublication);

  if (loading) console.log("Loading Data...");
  if (error) console.log("Fail to load data");
  if (data) console.log("data loaded successfully");

  return (
    <div className="App">
      <div className='container-fluid text-center mt-5' id='container'>
        
        {
          loading===true ? 
          <motion.div
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.1 }}
          style={{ opacity: "0" }} > 
          
            <p>Loading Data...</p> 
          
          </motion.div> 
          :
            <Index data={data} />
        }

      </div>
    </div>
  );
}

export default App;
