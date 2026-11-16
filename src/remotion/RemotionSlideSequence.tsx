import React from 'react';
import { Sequence, useCurrentFrame, interpolate } from 'remotion';
import { Slide1Title } from '../slides/Slide1Title';
import { Slide2Roadmap } from '../slides/Slide2Roadmap';
import { Slide3StatsMerged } from '../slides/Slide3StatsMerged';
import { Slide4ToolsMerged } from '../slides/Slide4ToolsMerged';
import { Slide5HarmsMerged } from '../slides/Slide5HarmsMerged';
import { Slide6WhyQuit } from '../slides/Slide6WhyQuit';
import { Slide7HowToInfect } from '../slides/Slide7HowToInfect';
import { Slide8Conclusion } from '../slides/Slide8Conclusion';
import '../deck.css';

export const RemotionSlideSequence: React.FC = () => {
  const SLIDE_DURATION = 150; // 5s @ 30fps

  const slides = [
    Slide1Title,
    Slide2Roadmap,
    Slide3StatsMerged,
    Slide4ToolsMerged,
    Slide5HarmsMerged,
    Slide6WhyQuit,
    Slide7HowToInfect,
    Slide8Conclusion
  ];

  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#111827' }}>
      {slides.map((SlideComponent, idx) => (
        <Sequence
          key={idx}
          from={idx * SLIDE_DURATION}
          durationInFrames={SLIDE_DURATION}
        >
          <SlideWrapper>
            <SlideComponent />
          </SlideWrapper>
        </Sequence>
      ))}
    </div>
  );
};

const SlideWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const frame = useCurrentFrame();

  // Subtle zoom-in & fade-in transition
  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp'
  });

  const scale = interpolate(frame, [0, 150], [1, 1.02], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp'
  });

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        opacity,
        transform: `scale(${scale})`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div style={{ width: '100%', height: '100%', position: 'relative' }}>
        {children}
      </div>
    </div>
  );
};
