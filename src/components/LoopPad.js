import React, {useRef, useEffect} from 'react'

function LoopPad(props) {
    const audioEl = useRef(null);

    // plays / stops track when component parent state changes
    useEffect(() => {
        if (props.isPlaying) {
            audioEl.current.currentTime = 0;
            audioEl.current.play();
        } else {
            audioEl.current.pause();
            audioEl.current.currentTime = 0;
        }
    });

    // adds an active / notActive class name to the pad
    const isActive = props.isPlaying ? (' active') : (' notActive')

    return (
        <div className='padContainer'>
            <button className={"play-btn" + isActive} onClick={() => {
                props.setIsPlaying(props.id)
            }}>
                <audio src={props.src} ref={audioEl} loop={props.isPlaying}></audio>
                <div className='padTitleContainer'>
                    <text className='padTitle'>{props.title}</text>
                </div>
            </button>
        </div>
    )
}

export default LoopPad;
