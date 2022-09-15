import {yamlToJson} from '../utils/transformers'
import {configUrl} from '../utils/config'
import Navbar from '../containers/navbar/Navbar.jsx';
import MainCanvas from '../containers/main_canvas/MainCanvas';
import styles from './index.module.css'

export async function getStaticProps() {
  console.log(`NEXT_PUBLIC_SAMPLE_ENV: ${process.env.NEXT_PUBLIC_SAMPLE_ENV}`)  
  const res = await fetch(configUrl).catch(err => console.error(`---1 ${err}`));
  const body = await res.text();  
  const config = yamlToJson(body)
  return {
    props: {
      config
    },
  }
}

function Index({config}) {
  return(
    <div className={styles.global_window}>
      <Navbar className={styles.main_nav}/>
      <MainCanvas className={styles.main_view}/>
    </div>
  )
}

export default Index