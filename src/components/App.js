import { useEffect, useState } from 'react';
import CompanyList from './CompanyList';
import Header from './Header';
import callApi from '../services/api';
import '../styles/App.scss';

const App = () => {
  const [company, setCompany] = useState([]);
  const [industry, setIndustry] = useState('all');
  const [hidden, setHidden] = useState('hidden');

  useEffect(() => {
    callApi().then((response) => {
      setCompany(response);
    });
  }, []);
  const filteredData = company.filter(
    (data) => industry === 'all' || data.industry === industry
  );
  const handleSearchIndustry = (value) => {
    setIndustry(value);
  };
  const handleAll = () => {
    setIndustry('all');
  };

  const handleHidden = () => {
    if (hidden === '') {
      setHidden('hidden');
    } else {
      setHidden('');
    }
    handleAll();
  };

  return (
    <div>
      <Header
        handleHidden={handleHidden}
        data={company}
        handleSearchIndustry={handleSearchIndustry}
        //hidden={hidden}
        handleAll={handleAll}
      />

      <CompanyList data={filteredData} />
    </div>
  );
};

export default App;
