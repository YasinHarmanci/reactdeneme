import React, {Component} from 'react';

class DrumKit extends Component {




    render() {
        return (
            <div>
                <audio data-key="65" src="sounds/clap.wav"/>
                <audio data-key="83" src="sounds/clap.wav"/>
                <audio data-key="68" src="sounds/clap.wav"/>
                <audio data-key="70" src="sounds/clap.wav"/>
                <audio data-key="71" src="sounds/clap.wav"/>
                <audio data-key="74" src="sounds/clap.wav"/>
                <audio data-key="75" src="sounds/clap.wav"/>
                <audio data-key="76" src="sounds/clap.wav"/>
            </div>
        );
    }
}

export default DrumKit;