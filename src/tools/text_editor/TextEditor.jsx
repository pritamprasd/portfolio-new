import React, { useEffect, useState } from 'react';
import styles from './TextEditor.module.css';

export default function TextEditor() {
    useEffect(() => {
        async function doitnaw(){
            var tf = require('@tensorflow/tfjs');
            

            const mobilenet = require('@tensorflow-models/mobilenet');
            
            const img = document.getElementById('main_image');

            const model = await mobilenet.load();
            const predictions = await model.classify(img);

            console.log('Predictions: ');
            console.log(predictions);
        }
        doitnaw();
    }, []);
    
    return (
        <div className={styles.texteditorcontainer}>
            <div className={styles.image_container}></div>
            <img id="main_image" src='/icons/icon512.png'></img>
        </div>
    )
}
