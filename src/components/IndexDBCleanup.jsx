import React, { useEffect, useState } from 'react'
import { getAllTableNames, purgeTable } from '../utils/indexdb';
import useGlobalState from '../utils/store';
import styles from './IndexDBCleanup.module.css';
import swal from 'sweetalert';

export default function IndexDBCleanup() {
    const [_, setCurrentView] = useGlobalState('current_view');
    const [allTables, setallTables] = useState([]);
    useEffect(() => {
        async function gelAllTable() {
            const tableNames = await getAllTableNames();
            setallTables(tableNames);
        }
        gelAllTable();
    }, [])

    return (
        <div className={styles.dbcleanupcontainer}>
            <div className={styles.header}>
                <img onClick={() => setCurrentView('settings')} src='/icons/back.svg' />
                <div >Index DB Cleanup</div>
            </div>
            <div style={{ fontSize: 'large' }}>Tables:</div>
            <div className={styles.content}>
                {allTables?.map(t => <TableSetting key={t.name} tablename={t.name} />)}
            </div>
        </div>
    )
}

function TableSetting({ tablename }) {
    console.log(tablename);    
    function clearTable(){
        purgeTable(tablename);
        swal({
            text: `Table ${tablename} cleared`,
            icon: "success",            
        });        
    }
    return (
        <div className={styles.tablesetting}>
            <div>{tablename}</div>
            <button onClick={() => clearTable()}>purge</button>
        </div>
    )
}

