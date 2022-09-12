import { useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';

const useScroll = () => {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (event.nativeEvent.contentOffset.y > 0) {
      if (!scrolled) {
        setScrolled(true);
      }
    } else if (scrolled) {
      setScrolled(false);
    }
  };

  return [scrolled, onScroll];
};

export default useScroll;
