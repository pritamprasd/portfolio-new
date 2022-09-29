import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import styles from './TextEditor.module.css';

export default function TextEditor() {
    const [imageSelected, setImageSelected] = useState(null);
    const [predictions, setpredictions] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function doitnaw() {
            if (imageSelected !== null) {
                setLoading(true);
                var tf = require('@tensorflow/tfjs');
                const mobilenet = require('@tensorflow-models/mobilenet');
                const img = document.getElementById('main_image');
                const model = await mobilenet.load();
                const predictions = await model.classify(img);
                setpredictions(predictions);
                setLoading(false)
            }
            else {
                setpredictions(null);
            }
        }
        doitnaw();
    }, [imageSelected]);

    function loadImage(event) {
        console.log(event.target.files[0]);
        setImageSelected(event.target.files[0]);
    }

    function downloadImage(){
        URL.createObjectURL(imageSelected);
    }
    return (
        <div className={styles.image_container}>
            {!loading && imageSelected && <img className={styles.uploaded_image} id="main_image" alt='Whooopss!!'
                src={URL.createObjectURL(imageSelected)}></img>}
            {!loading && imageSelected && <div className={styles.buttons}>
                <button onClick={() => setImageSelected(null)}>Remove</button>    
                {/* <button onClick={() => downloadImage(null)}>Save</button> */}
            </div>}
            {!loading && imageSelected && predictions &&
                <div className={styles.pred_1}>{predictions[0]['className']}</div>
            }
            {!loading && !imageSelected && <label className={styles.upload_label}>
                <input className={styles.upload_button} type="file" onChange={loadImage} />
                Upload
            </label>}
            {loading && <Loading />}
        </div>
    )
}
