const merge = require('./app');

test('Сортировка двух упорядоченных массивов в массив nums1', () => {
  let nums1 = [1, 2, 3, 0, 0, 0];
  const m = 3;
  const nums2 = [2, 5, 6];
  const n = 3;
  merge(nums1, m, nums2, n);
  expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
});

test('Сортировка в пустой массив nums1', () => {
  let nums1 = [0];
  const m = 0;
  const nums2 = [1];
  const n = 1;
  merge(nums1, m, nums2, n);
  expect(nums1).toEqual([1]);
});

test('Сортировка с пустым массивом nums2', () => {
  let nums1 = [1];
  const m = 1;
  const nums2 = [];
  const n = 0;
  merge(nums1, m, nums2, n);
  expect(nums1).toEqual([1]);
});

test('Сортировка с обратными значениями', () => {
  let nums1 = [4, 5, 6, 0, 0, 0];
  const m = 3;
  const nums2 = [1, 2, 3];
  const n = 3;
  merge(nums1, m, nums2, n);
  expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
});

test('Сортировка с несколькими повторяющимися элементами', () => {
  let nums1 = [2, 2, 3, 0, 0, 0];
  const m = 3;
  const nums2 = [2, 2, 3];
  const n = 3;
  merge(nums1, m, nums2, n);
  expect(nums1).toEqual([2, 2, 2, 2, 3, 3]);
});
