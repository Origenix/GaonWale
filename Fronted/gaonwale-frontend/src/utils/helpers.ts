export const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
};

export const classNames = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

export const getRingColorClass = (color: string) => {
  switch (color) {
    case 'purple': return 'story-ring-purple';
    case 'pink': return 'story-ring-pink';
    case 'blue': return 'story-ring-blue';
    case 'orange': return 'story-ring-orange';
    case 'gradient': return 'story-ring-gradient';
    default: return 'story-ring-gradient';
  }
};
