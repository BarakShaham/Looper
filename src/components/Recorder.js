import React, {useState, useEffect} from 'react'
import {RiRecordCircleFill} from 'react-icons/ri';
import {FaStop} from 'react-icons/fa';

// Mic recorder
import MicRecorder from 'mic-recorder-to-mp3';
// new instance of a mic
const Mp3Recorder = new MicRecorder({bitRate: 128});

function Recorder(props) {

    // Record a session
    const [isMicBlocked, setIsMicBlocked] = useState(false)
    const [isRecording, setIsRecording] = useState(false)
    const [recordURL, serRecordURL] = useState('')

    // Checks for mic permissions when component is rendered
    useEffect(() => {
        navigator.getUserMedia({audio: true},
            () => {
                console.log('Permission Granted');
                setIsMicBlocked(false)
            },
            () => {
                console.log('Permission Denied');
                setIsMicBlocked(true)
            },
        );
    })
    // starts recording from the mic
    const recStart = () => {
        if (isMicBlocked) {
            console.log('Permission Denied');
            alert('Please allow mic permissions')
        } else {
            Mp3Recorder
                .start()
                .then(() => {
                    setIsRecording(true)
                }).catch((e) => console.error(e));
        }
    };
    // stops recording and generates a blobUrl and saves it in RecordURL state
    const recStop = () => {
        Mp3Recorder
            .stop()
            .getMp3()
            .then(([buffer, blob]) => {
                const blobURL = URL.createObjectURL(blob)
                serRecordURL(blobURL)
                setIsRecording(false)
            }).catch((e) => console.log(e));
    };

    let recOrReady = '';
    if (isRecording) {
        recOrReady = 'Recording session...'
    } else if (!isRecording && recordURL) {
        recOrReady = 'Your session is ready !!!'
    }

    return (
        <div className='recordContainer'>
            <div className='recButtonsContainer'>
                <button className={'recBtn rec' + " " + isRecording} onClick={recStart} disabled={isRecording}>
                    <RiRecordCircleFill/></button>
                <button className='recBtn' onClick={recStop} disabled={!isRecording}><FaStop/></button>
            </div>
            <text className='recording'> {recOrReady} </text>
            <div className='recPlayer'>

                <audio src={recordURL} controls="controls"/>
            </div>

        </div>
    )
}

export default Recorder;
