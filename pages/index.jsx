import {yamlToJson} from '../utils/transformers'
import {configUrl} from '../utils/config'

function Index({config}) {
  return <div>Welcome to Next.js! {config.title}</div>
}

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


export default Index