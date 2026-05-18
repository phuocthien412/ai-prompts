import React, { useEffect, useRef } from 'react';

interface BackgroundVideoProps {
  src: string;
}

const BackgroundVideo: React.FC<BackgroundVideoProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const opacityRef = useRef(0);
  const animationRef = useRef<number | null>(null);
  const fadingOutRef = useRef(false);

  const animateOpacity = (target: number, duration: number) => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const startOpacity = opacityRef.current;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const newOpacity = startOpacity + (target - startOpacity) * progress;
      opacityRef.current = newOpacity;
      
      if (videoRef.current) {
        videoRef.current.style.opacity = newOpacity.toString();
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video) return;

    const remainingTime = video.duration - video.currentTime;

    // Start fade out 0.55s before end
    if (remainingTime <= 0.55 && !fadingOutRef.current) {
      fadingOutRef.current = true;
      animateOpacity(0, 500);
    }
  };

  const handleVideoEnd = () => {
    const video = videoRef.current;
    if (!video) return;

    // Set opacity to 0 just in case
    video.style.opacity = '0';
    opacityRef.current = 0;

    // Reset for next loop
    setTimeout(() => {
      video.currentTime = 0;
      video.play().catch(console.error);
      fadingOutRef.current = false;
      animateOpacity(1, 500);
    }, 100);
  };

  const handleLoadedData = () => {
    animateOpacity(1, 500);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.autoplay = true;
      video.playsInline = true;
      
      // Force play and fade in if already ready or as a fallback
      const attemptPlay = async () => {
        try {
          await video.play();
          // If video starts playing, ensure we fade in
          if (opacityRef.current === 0) {
            animateOpacity(1, 800);
          }
        } catch (err) {
          console.error("Video autoplay failed:", err);
          // Still fade in so we don't have a black screen if it's just paused
          animateOpacity(1, 800);
        }
      };
      attemptPlay();
    }
  }, [src]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black -z-10">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover translate-y-[17%] transition-none"
        onTimeUpdate={handleTimeUpdate}
        onEnded={handleVideoEnd}
        onLoadedData={handleLoadedData}
        onCanPlay={handleLoadedData}
        muted
        autoPlay
        playsInline
        style={{ opacity: 0 }}
      />
    </div>
  );
};

export default BackgroundVideo;
