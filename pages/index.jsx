import {yamlToJson} from '../utils/transformers'
import {configUrl} from '../utils/config'
import Sidebar from '../containers/sidebar/Sidebar.jsx';
import MainCanvas from '../containers/main_canvas/MainCanvas';

export async function getStaticProps() {
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
    <div>
      <div>Welcome to Next.js! {config.title}</div>
      <Sidebar/>
      <MainCanvas/>
    </div>
  )
}

export default Index