import React from 'react';
import { Composition } from 'remotion';
import { RemotionSlideSequence } from './RemotionSlideSequence';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="SlideDeckVideo"
        component={RemotionSlideSequence}
        durationInFrames={12 * 150} // 12 slides * 5 seconds (150 frames @ 30fps)
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};
