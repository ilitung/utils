/*
 * @Author: your name
 * @Date: 2021-12-06 11:21:25
 * @LastEditTime: 2021-12-06 11:26:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /utils/numUtils.js
 */

export default {
  /** 自动补全字符串 例如:工号
   * @description: 
   * @param {value} location
   * @param {Number} num
   * @param {String} value
   * @return {string}
   */
  pad(location = 'start', num = 8, value = '') {
    if (location == 'start') {
      return value.padStart(num, '0')
    } else {
      return value.padEnd(num, '0')
    }
  }
}