import { useState, useEffect, useRef } from 'react';
import { storyblokEditable } from '@storyblok/react/rsc';
import SmallWidth from '../layouts/SmallWidth';

export default function VideoFullWidth({ blok }) {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);


    useEffect(() => {
        window.addEventListener('scroll', function () {
            if (isScrolledIntoView(videoRef.current) && !playing) {
                setPlaying(true);
                videoRef.current.play();
            }
        });
    }, [])

    function isScrolledIntoView(elem) {
        var rect = elem.getBoundingClientRect();
        var elemTop = rect.top;
        var elemBottom = rect.bottom;

        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

        return isVisible;
    }

    return (
        <section
            className="bg-white pb-5 lg:pb-24"
            {...storyblokEditable(blok)}
        >
            <SmallWidth>
                <video
                    ref={videoRef}
                    controls={true}
                    autoPlay={false}
                    muted={true}
                    src={blok?.video.filename}
                    loop={true}
                />
            </SmallWidth>
        </section>
    );
}
