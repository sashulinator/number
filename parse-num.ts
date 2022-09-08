import { isNumber } from '@savchenko91/schema-validator'

export function parseNum(num: string | number = '', defaultNumber = 0): number {
  if (isNumber(num)) {
    return num ?? defaultNumber
  }

  return parseInt(num, 10) || defaultNumber
}
