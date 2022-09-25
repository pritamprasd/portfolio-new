import React, { useEffect, useState } from 'react'
import useGlobalState from '../utils/store';
import styles from './ToolsPage.module.css'


export default function ToolsPage() {
  const [config, _] = useGlobalState('config');
  const [tools, settools] = useState([]);
  useEffect(() => {
    settools(config.tools.map(t => config.descriptions[t]));  
  }, [config]);
  
  return (
    <div>
      <div className={styles.toolsheader}>Tools</div>
      <div className={styles.toolscontainer}>
        {tools.map(t => <Tooltile key={t} toolid={t?.toolid} name={t?.name} desc={t?.description}/>)}
      </div>
    </div>
  )
}


export function Tooltile({toolid, name, desc}){
  const path = '/icons/'+ toolid + '.svg';
  console.log(path)
  const [_, setCurrentTool] = useGlobalState('current_view');
  function openTool(){
    setCurrentTool(toolid)
  }
  return(
    <div className={styles.tooltile} onClick={openTool}>
      <img src={path} className={styles.toolicon}/>
      <div className={styles.tooltitle}>{name}</div>
      <div className={styles.tooldesc}>{desc}</div>
    </div>
  );
}