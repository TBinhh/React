import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout';
import axios from 'axios';
// bài tập 2
// export default function Home() {
//   return (
//     <div className='container'>
//       <Layout>
//         <p>Homepage</p>
//       </Layout>
//     </div>

//   );
// }

// bài tập 3 covid 
export async function getStaticProps() {
  const detail = await axios.get('https://api.covid19api.com/total/country/vietnam')
  return {
    props: {
      covidInfo: resizeBy.data
    }
  }
}

export default function CovidHome ({covidInfo}) {
  return (
    <div>
      <h2>Covid-19</h2>
      {covidInfo.map((value) => (
        <p>{value.Date} - {value.Cases}</p>
      ))}
    </div>
  )
}