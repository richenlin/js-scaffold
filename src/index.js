/*
 * @Description:
 * @Usage:
 * @Author: richen
 * @Date: 2025-03-11 11:11:14
 * @LastEditTime: 2025-03-11 18:04:10
 * @License: BSD (3-Clause)
 * @Copyright (c): <richenlin(at)gmail.com>
 */
import fs from 'fs';

/**
 * @description: test
 * @param {*} params 输入参数
 * @returns {*} 返回参数
 */
export function Test(params) {
  fs.readFileSync(__filename);
  return params;
}
