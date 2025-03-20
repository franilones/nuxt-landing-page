import { useMediaQuery } from '@vueuse/core'

export const useBreakpoints = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const isTablet = useMediaQuery('(max-width: 1024px)');
    return { isMobile, isTablet };
  };