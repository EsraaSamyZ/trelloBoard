export const getSignalColor = (signal) => {
    switch (signal) {
      case 'strong':
        return 'text-green-500';
      case 'medium':
        return 'text-yellow-500';
      case 'weak':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };
  