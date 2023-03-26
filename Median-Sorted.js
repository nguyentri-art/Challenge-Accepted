const findMedian = function (nums1, nums2) {
  const mergerd = [...nums1, ...nums2].sort((a, b) => a - b);

  const len = mergerd.length;

  const mid = Math.floor(len / 2);

  return len % 2 === 0 ? (mergerd[mid - 1] + mergerd[mid]) / 2 : mergerd[mid];
};

let myA = [1, 2, 3];
let myB = [4, 5, 6];

console.log(findMedian(myA, myB));
