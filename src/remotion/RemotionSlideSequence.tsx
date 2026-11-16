import React from 'react';
import { Sequence, useCurrentFrame, interpolate } from 'remotion';
import { Slide1Title } from '../slides/Slide1Title';
import { Slide2Roadmap } from '../slides/Slide2Roadmap';
import { Slide3StatsIntro } from '../slides/Slide3StatsIntro';
import { Slide4StatsDetails } from '../slides/Slide4StatsDetails';
import { Slide5ToolsIntro } from '../slides/Slide5ToolsIntro';
import { Slide6ToolsCompare } from '../slides/Slide6ToolsCompare';
import { Slide7HarmIntro } from '../slides/Slide7HarmIntro';
import { Slide8HarmMind } from '../slides/Slide8HarmMind';
import { Slide9HarmLife } from '../slides/Slide9HarmLife';
import { Slide10WhyQuit } from '../slides/Slide10WhyQuit';
import { Slide11HowToInfect } from '../slides/Slide11HowToInfect';
import { Slide12Conclusion } from '../slides/Slide12Conclusion';
import '../deck.css';

export const RemotionSlideSequence: React.FC = () => {
  const SLIDE_DURATION = 150; // 5s @ 30fps

  const slides = [
    Slide1Title,
    Slide2Roadmap,
    Slide3StatsIntro,
    Slide4StatsDetails,
    Slide5ToolsIntro,
    Slide6ToolsCompare,
    Slide7HarmIntro,
    Slide8HarmMind,
    Slide9HarmLife,
    Slide10WhyQuit,
    Slide11HowToInfect,
    Slide12Conclusion
  ];

  return (
    <div style={{ width: '100%', height: '100%', backgroundColor: '#140b05' }}>
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
  const opacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        opacity,
        position: 'relative',
        display: 'flex',
      }}
    >
      {children}
    </div>
  );
};
