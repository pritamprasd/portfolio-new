import { React } from 'react';
import Navbar from '../src/containers/navbar/Navbar.jsx';
import MainCanvas from '../src/containers/main_canvas/MainCanvas';
import styles from './index.module.css'
import useGlobalState from '../src/components/utils/store';

// export async function getStaticProps() {
//   console.log(`NEXT_PUBLIC_SAMPLE_ENV: ${process.env.NEXT_PUBLIC_SAMPLE_ENV}`)
//   const config = await get_config();
//   return {
//     props: {
//       config
//     },
//   }
// }

function Index() {
  return (
    <div className={styles.global_window}>
      <Navbar className={styles.main_nav} />
      <MainCanvas className={styles.main_view} />
    </div>
  )
}

export default Index;