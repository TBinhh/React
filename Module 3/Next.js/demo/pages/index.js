import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/About.module.css'
import Layout from '../components/main_layout';

import {getStudents} from './student_list';

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <h1> This is homepage</h1>
//       <Layout href='./login'>Login</Layout>
//     </div>
//   )
// }

// thực hành 1
export default function Home() {
  return (
    <div >

      <Layout>
        <h1> This is homepage</h1>
      </Layout>
    </div>
  )
}



// thực hành 2
// export default function Home() {
//   return (
//     <div>
//       <table>
//         <th>
//           <tr>
//             <td>ID</td>
//             <td>Name</td>
//             <td>Action</td>
//           </tr>
//         </th>
//         <tbody>
//           {getStudents().map((student, index) => (
//             <tr key={index}>
//               <td>{student.id}</td>
//               <td>{student.name}</td>
//               <td>
//                 <Link href={`/post/${student.id}`}>
//                   <a>Show</a>
//                 </Link>
//               </td>
//             </tr>
//           )

//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// }