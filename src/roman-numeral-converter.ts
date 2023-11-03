/************************************************************
 * romanObj object contains the critical elements of conversion.
 * All other conversions can derive from an algorithm to
 * generate the conversion from this roman key:value pair.
 * Note: to overcome  "TS7053 Element implicitly has an 'any' type"
 * error romanObj type needed to be specificd as [key:string]: number
 ***************************************************************/
const romanObj: { [key: string]: number } = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
} as const;

/*********************************************
 * Function: convertNumToRoman
 * Input: A decimal number
 * Output: A roman number as string
 * Description:
 * Loops the romanObj until it finds the entry
 * where the num is greater the value of the
 * element in romanObj. It then uses the
 * subtraction notation to add or derive the
 * roman value.
 * The main concept behind this algorithem is to
 * use Object.Keys to obtain an array of keys.
 * Then uses the keys in the array to build the
 * additive notation by simply adding the keys,
 * computing to the final roman value.
 * The additive notation, relies on the subtraction of
 * input number until it becomes zero. Hence
 * the result of conversion.
 **********************************************/

export function convertNumToRoman(num: number = 0): string {
  return Object.keys(romanObj).reduce((conversion: string, key: string) => {
    while (num >= romanObj[key]) {
      conversion += key;
      num -= romanObj[key];
    }
    return conversion;
  }, "");
}

/*************************************************
 * Function: convertRomanToNum
 * Input: A roman number as string
 * Output: A number as decimal
 * Description: It uses the romanObj object which represents
 * the key roman number and the corresponding numbers.
 * The algorithm is based on the array generated from romanObj
 * object.
 * The algorithm checks for romanObj keys that are matching
 * whole or as a substring of input and starts adding the values of
 * romanObj entries to calculate the final numerical conversion
 * value. Note, Upon each substring match
 * the matched substring is removed from the roman string
 * until the roman string length becomes zero. Hence the
 * fincal conversion value to a number.
 **************************************************/

export function convertRomanToNum(roman: string): number {
  return Object.keys(romanObj).reduce((conversion, key) => {
    while (roman.indexOf(key) === 0) {
      conversion += romanObj[key];
      roman = roman.substring(key.length);
    }
    return conversion;
  }, 0);
}
