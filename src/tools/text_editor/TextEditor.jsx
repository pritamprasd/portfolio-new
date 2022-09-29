import React, { useEffect, useState } from 'react';
import styles from './TextEditor.module.css';

export default function TextEditor() {
    const [imageSelected, setImageSelected] = useState(null);
    const [predictions, setpredictions] = useState(null);
    useEffect(() => {
        async function doitnaw() {
            if (imageSelected !== null) {
                var tf = require('@tensorflow/tfjs');
                const mobilenet = require('@tensorflow-models/mobilenet');
                const img = document.getElementById('main_image');
                const model = await mobilenet.load();
                const predictions = await model.classify(img);
                setpredictions(predictions);
            }
            console.log('Predictions: ');
            console.log(predictions);
        }
        doitnaw();
    }, [imageSelected]);

    function loadImage(event) {
        console.log(event.target.files[0]);
        setImageSelected(event.target.files[0]);
    }

    return (
        <div className={styles.image_container}>
            {imageSelected && <img className={styles.uploaded_image} id="main_image" alt='Whooopss!!'
                src={URL.createObjectURL(imageSelected)}></img>}
            {imageSelected && <button onClick={() => setImageSelected(null)}>Remove</button>}
            {imageSelected && predictions && <h3>{predictions[0]['className']}</h3>}
            {!imageSelected && <label className={styles.upload_label}>
                <input className={styles.upload_button} type="file" onChange={loadImage} />
                Upload
            </label>}
        </div>
    )
}
