import React, {useState} from 'react'
import {playlist} from "../tracks/Playlist";
import LoopPad from "./LoopPad";

// bootstrap
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import {Container, Row, Col} from "react-bootstrap";

import Recorder from "./Recorder";
import PlayStopAllBtn from "./PlayStopAllBtn";


function LoopPlayer() {

    // states for all LoopPad children elements
    const [isPlaying, setIsPlaying] = useState([false, false, false, false, false, false, false, false, false]);

    // changes the state of the pad which was clicked
    const reset = (id) => {
        let temp = [...isPlaying]
        temp[id] = !temp[id]
        setIsPlaying(temp)
    }

    return (
        <div>

            <Container className='loopPadContainer'>

                <Row className='loopPads'>

                    <Col className='leftPads'>
                        <LoopPad id={playlist[0].id} src={playlist[0].src} title={playlist[0].title}
                                 isPlaying={isPlaying[0]} setIsPlaying={reset}/>
                        <LoopPad id={playlist[1].id} src={playlist[1].src} title={playlist[1].title}
                                 isPlaying={isPlaying[1]} setIsPlaying={reset}/>
                        <LoopPad id={playlist[2].id} src={playlist[2].src} title={playlist[2].title}
                                 isPlaying={isPlaying[2]} setIsPlaying={reset}/>
                    </Col>

                    <Col className='middlePads'>
                        <LoopPad id={playlist[3].id} src={playlist[3].src} title={playlist[3].title}
                                 isPlaying={isPlaying[3]} setIsPlaying={reset}/>
                        <LoopPad id={playlist[4].id} src={playlist[4].src} title={playlist[4].title}
                                 isPlaying={isPlaying[4]} setIsPlaying={reset}/>
                        <LoopPad id={playlist[5].id} src={playlist[5].src} title={playlist[5].title}
                                 isPlaying={isPlaying[5]} setIsPlaying={reset}/>
                    </Col>

                    <Col className='rightPads'>
                        <LoopPad id={playlist[6].id} src={playlist[6].src} title={playlist[6].title}
                                 isPlaying={isPlaying[6]} setIsPlaying={reset}/>
                        <LoopPad id={playlist[7].id} src={playlist[7].src} title={playlist[7].title}
                                 isPlaying={isPlaying[7]} setIsPlaying={reset}/>
                        <LoopPad id={playlist[8].id} src={playlist[8].src} title={playlist[8].title}
                                 isPlaying={isPlaying[8]} setIsPlaying={reset}/>
                    </Col>

                </Row>

            </Container>
            <div className='recAndPlayBtn'>
                <Recorder/>
                <PlayStopAllBtn isPlaying={isPlaying} setIsPlaying={setIsPlaying}/>
            </div>

        </div>

    )
}

export default LoopPlayer;
