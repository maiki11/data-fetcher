const useFetchData = () => {
  const fetchData = async (url:string) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Something is wrong with the endpoint...');
    }
    const data = await response.json();
    return data;
  };

  return { fetchData };
};

export default useFetchData;