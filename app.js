const merge = (nums1, m, nums2, n) => {
  // Указатели на текущие позиции в nums1 и nums2
  let p1 = m - 1;
  let p2 = n - 1;
  // Указатель на текущую позицию для вставки в nums1
  let p = m + n - 1;

  // Пока есть элементы в nums2
  while (p2 >= 0) {
    // Если есть элементы в nums1 и текущий элемент nums1 больше, чем текущий элемент nums2
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
    }
    p--;
  }
  return nums1
}

module.exports = merge;
