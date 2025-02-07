// crear utils 

export const calculatePercentage = (score: number, total: number): string => {
  return ((score / total) * 100).toFixed(2) + "%";
};

