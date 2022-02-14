import { Input } from 'antd'
import { useState } from 'react';
import Queryresult from '../components/Queryresult';
import Querydata from '../utils/InvData.json'
import './Query.css'
const { Search } = Input;

function Query() {
  const [searchError, setSearchError] = useState(false);
  const [showResults, setShowResults] = useState(false)
  // console.log(Querydata[0]);
  const onSearch = val => {
    if (!val.trim() || !(/^[0-9]*$/.test(val))) {
      setSearchError(true);
      setShowResults(false);
    }
    else {
      setSearchError(false);
      setShowResults(true);
      console.log('No error found, proceed to query')
    }
  }
  return <div className='query'>
    <h2>Query Customer</h2>
    <div className='params'>
      <h3>Customer Account No </h3>
      <Search placeholder="Enter Customer Account" size='large'
        onSearch={onSearch} enterButton />
      {searchError && <label className='error'>Invalid Account No</label>}
    </div>
    {showResults && <Queryresult dataSource={[Querydata[2]]} /> }
  </div>;
}

export default Query;
