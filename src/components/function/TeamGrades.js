export function calculateGroupAverages(scores) {
  const groupSizes = [7, 7, 7, 7, 7, 7, 7, 7, 6];
  let totalScore = 0;
  let numGroups = 0;
  let groupAverages = [];

  for (let i = 0; i < groupSizes.length; i++) {
    const groupStart = numGroups * groupSizes[i];
    const groupEnd = Math.min(groupStart + groupSizes[i], scores.length);
    const groupScores = scores.slice(groupStart, groupEnd);

    const groupAverage =
      groupScores.reduce((sum, score) => sum + score, 0) / groupScores.length;
    totalScore += groupAverage;
    numGroups++;
    groupAverages.push(groupAverage);
  }

  return groupAverages;
}
