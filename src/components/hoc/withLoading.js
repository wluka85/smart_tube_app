import React, {Component} from 'react';

export default Cmp => {
    return class extends Component {
        
        isVideoLoads(videoId, showVideo) {
            return !videoId && showVideo;
        }

        render () {
            const {videoId, showVideo, ...passThroughProps} = this.props;
            if (this.isVideoLoads(videoId, showVideo)) {
                return (
                    <div className='modal'>
                        <div className="video-container">
                            <p>Loading...</p>  
                        </div>
                    </div>
                )
            }

            return <Cmp {...passThroughProps}/>;
        }
    };
};