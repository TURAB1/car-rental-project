import React, { useEffect,useState } from 'react'

const News = () => {
    const [newsData,setNewsData]=useState(null)
    useEffect(() => {
        fetch('https://newsdata.io/api/1/news?apikey=pub_398597730d74d20392b106ad0dd36c1322456&category=science')
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log(JSON.stringify(data));
            setNewsData(data);
          });
      }, []);
  return (
    <div className='page-margin'>
     {
     newsData ? newsData.results.map((item, index) => <h3 style={{marginBottom:20}} key={index} onClick={()=>console.log(item.link)}>{item.title} </h3>) : <p>Loading...</p>


     }
    </div>
  )
}

export default News
