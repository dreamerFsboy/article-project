/**
 * 防抖
 * @param {Function} fun 处理的方法
 * @param {number} delay 延迟时间
 * @returns
 */
export function debounce(fun, delay) {
    let timerId = null
    return function () {
      const context = this
      // console.log(timerId)
      timerId && clearTimeout(timerId)
      timerId = setTimeout(() => {
        fun.apply(context, arguments)
        timerId = null
      }, delay)
    }
  }
  
  /**
   * 节流
   * @param {Function} fun 处理的方法
   * @param {number} delay 延迟时间
   * @returns
   */
  export function throttle(fun, delay) {
    let canUse = true
    return function () {
      if (canUse) {
        canUse = false
        setTimeout(() => {
          canUse = true
        }, delay)
        return fun.apply(this, arguments)
      }
    }
  }
  
  export function BinarySearch(nums, num) {
    let left = 0;
    let right = nums.length;
    while (left < right) {
      const mid = (left + right) >>>1;
      if (nums[mid] < num) left = mid + 1;
      else right = mid;
    }
    return left; 
  }