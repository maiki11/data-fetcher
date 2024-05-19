import { useEffect, useState } from 'react';
import useFetchData from '../hooks/useFetchData';
import Card from '../components/Card';
import {Data} from '../models/data';
import { useTheme } from '../context/ThemeContext';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const { fetchData } = useFetchData();
  const { theme } = useTheme();

  useEffect(() => {
    fetchData('https://jsonplaceholder.typicode.com/posts')
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className={`dashboard row ${theme}`}>
      {data.length >0 ?  
        data.map((item:Data) => <Card theme={theme} key={item.id} data={item} />)
       : (
        <p>Nothing to show...</p>
      )}
    </div>
  );
};

export default Dashboard;