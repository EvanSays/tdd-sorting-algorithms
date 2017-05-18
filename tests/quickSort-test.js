import { expect, assert } from 'chai';
import quickSort from '../scripts/quickSort.js'
import genRandNum from '../scripts/genRandNum.js'
import genRandChar from '../scripts/genRandChar.js'

describe('Quick Sort', () => {
  it('should be a function', () => {
    assert.isFunction(quickSort)
  })

  it('should sort a small array of + and - numbers', () => {
    const randomArray = genRandNum(10)
    let compSorted = Array.from(randomArray);

    compSorted = [...randomArray].sort((a, b) => a - b);
    expect(quickSort(randomArray)).to.deep.equal(compSorted)
  })

  it('should sort a large array of + and - numbers', () => {
    const randomArray = genRandNum(120000)
    let compSorted = Array.from(randomArray);

    compSorted = [...randomArray].sort((a, b) => a - b);
    expect(quickSort(randomArray)).to.deep.equal(compSorted)
  })

  it('should sort a small array of uppercase and lowercase characters', () => {
    const randomArray = genRandChar(10);
    let compSorted = Array.from(randomArray).sort();

    expect(quickSort(randomArray.split(''))).to.deep.equal(compSorted)
  })

  it('should sort a large array of uppercase and lowercase characters', () => {
    const randomArray = genRandChar(80000)
    let compSorted = Array.from(randomArray).sort();

    expect(quickSort(randomArray.split(''))).to.deep.equal(compSorted)
  })
})
