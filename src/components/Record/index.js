import React, { useState } from 'react';
import { Button, List } from 'semantic-ui-react';
import VideoRecorder from 'react-video-recorder';
import style from "./Record.module.css";
import { ReactMic } from 'react-mic';
// import { saveAs } from 'file-saver';
// import MicRecorder from 'mic-recorder-to-mp3';
// import AudioRecorder from 'react-audio-recorder';
let cloudinary = require('cloudinary/lib/cloudinary');


//let cloudinary = require('cloudinary-core').Cloudinary.new()
// import { render } from 'react-dom';
// import MediaCapturer from 'react-multimedia-capture';

const Record = ({ nextStep, prevStep, values }) => {

    cloudinary.config({
        cloud_name: 'int4',
        api_key: '212861344353933',
        api_secret: 'F-TVHSfBpJXvrvu1H8sdn64l4P4'
    });

    const [record, setRecord] = useState("");
    const [complete, setComplete] = useState(false);
    const [error, setError] = useState("");

    const saveAndContinue = (e) => {
        e.preventDefault()
        if (complete === false) {
            setError("Neem eerst je verhaal op!")
        } else {
            nextStep()
        }
    }

    const back = (e) => {
        e.preventDefault();
        prevStep();
    }

    console.log(values);

    const startRecording = () => {
        //this.setState({ record: true });
        setRecord(true)
    }

    const stopRecording = () => {
        setRecord(false)
    }

    const onData = (recordedBlob) => {
        setComplete(true);
        console.log('chunk of real-time data is: ', recordedBlob);
    }

    const onStop = (recordedBlob) => {
        console.log('recordedBlob is: ', recordedBlob);
    }

    if (values.selectedoption === 'video') {
        console.log('video');
        return (
            <div className={style.container}>
                <div className={style.header}>
                    <Button onClick={back} className={style.back}><p className={style.back__text}>&lt;</p></Button>
                    <div className={style.procesbar}>

                        <div className={style.procesbar_lijn1}>
                            <div className={style.procesbar__item}>
                                <p className={style.item__number}>1</p>
                                <p className={style.item__text}>Verhaal</p>
                            </div>
                        </div>

                        <div className={style.procesbar_lijn2}>
                            <div className={style.procesbar__item}>
                                <p className={style.item__number}>2</p>
                                <p className={style.item__text}>land</p>
                            </div>
                        </div>

                        <div className={style.procesbar_lijn3}>
                            <div className={style.procesbar__item1}>
                                <p className={style.item__number}>3</p>
                                <p className={style.item__text}>Opname</p>
                            </div>
                        </div>

                        <div className={style.procesbar_lijn4}>
                            <div className={style.procesbar__item}>
                                <p className={style.item__number}>4</p>
                                <p className={style.item__text}>Souvenir</p>
                            </div>
                        </div>

                        <div className={style.procesbar__item}>
                            <p className={style.item__number}>5</p>
                            <p className={style.item__text}>Gegevens</p>
                        </div>
                    </div>
                </div>

                <div className={style.container}>
                    <p>{error}</p>

                    <VideoRecorder className={style.video}
                        onRecordingComplete={(videoBlob, startedAt, thumbnailBlob, duration) => {
                            const urlCreator = window.URL || window.webkitURL
                            const thumbUrl = thumbnailBlob && urlCreator.createObjectURL(thumbnailBlob)
                            const videoUrl = urlCreator.createObjectURL(videoBlob)

                            //let url = videoBlob.toBlobUrl();
                            //console.log(url);
                            console.log(urlCreator);
                            console.log(thumbUrl);
                            console.log(videoUrl);
                            console.log('Video Blob', videoBlob.size, videoBlob, videoUrl)
                            console.log(videoBlob);
                            console.log('Thumb Blob', thumbnailBlob, thumbUrl)
                            console.log('Started:', startedAt)
                            console.log('Duration:', duration)
                            setComplete(true)

                            cloudinary.uploader.upload(`blob:${videoUrl}`,
                                {
                                    responsive_breakpoints:
                                    {
                                        create_derived: true,
                                        bytes_step: 20000,
                                        min_width: 200,
                                        max_width: 1000
                                    }
                                },
                                function (error, result) { console.log(result, error); });
                        }}

                        isFlipped={true}

                    />

                    <Button onClick={back}>Back</Button>
                    <Button onClick={saveAndContinue} className={style.next}><p className={style.next__text}>Volgende</p> </Button>
                </div>
            </div>
        )

    } else {
        console.log('audio');
        return (
            <>
                <div className={style.procesbar}>

                    <div className={style.procesbar_lijn1}>
                        <div className={style.procesbar__item}>
                            <p className={style.item__number}>1</p>
                            <p className={style.item__text}>Verhaal</p>
                        </div>
                    </div>

                    <div className={style.procesbar_lijn2}>
                        <div className={style.procesbar__item}>
                            <p className={style.item__number}>2</p>
                            <p className={style.item__text}>land</p>
                        </div>
                    </div>

                    <div className={style.procesbar_lijn3}>
                        <div className={style.procesbar__item1}>
                            <p className={style.item__number}>3</p>
                            <p className={style.item__text}>Opname</p>
                        </div>
                    </div>

                    <div className={style.procesbar_lijn4}>
                        <div className={style.procesbar__item}>
                            <p className={style.item__number}>4</p>
                            <p className={style.item__text}>Souvenir</p>
                        </div>
                    </div>

                    <div className={style.procesbar__item}>
                        <p className={style.item__number}>5</p>
                        <p className={style.item__text}>Gegevens</p>
                    </div>
                </div>
                < div >
                    <ReactMic
                        record={record}
                        className="sound-wave"
                        onStop={onStop}
                        onData={onData}
                        strokeColor="#000000"
                        backgroundColor="#FF4081" />
                    <button onClick={startRecording} type="button">Start</button>
                    <button onClick={stopRecording} type="button">Stop</button>
                    <Button onClick={back}>Back</Button>
                    <Button onClick={saveAndContinue}>Confirm</Button>
                </div >

            </>

        )
    }
}

export default Record;