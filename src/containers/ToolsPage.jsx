import React from 'react'
import useGlobalState from '../utils/store';
import styles from './ToolsPage.module.css'


export default function ToolsPage() {
  const [config, _] = useGlobalState('config');
  const toolsdesc = Object.keys(config.descriptions);
  return (
    <div>
      <div className={styles.toolsheader}>Tools</div>
      <div className={styles.toolscontainer}>
        {toolsdesc.map(t => <Tooltile title={t} name={config.descriptions[t].name} desc={config.descriptions[t].description}/>)}
      </div>
    </div>
  )
}


export function Tooltile({title,name, desc}){
  const path = '/icons/'+ title + '.svg'
  return(
    <div className={styles.tooltile}>
      <img src={path} className={styles.toolicon}/>
      <div className={styles.tooltitle}>{name}</div>
      <div className={styles.tooldesc}>{desc}</div>
    </div>
  );
}