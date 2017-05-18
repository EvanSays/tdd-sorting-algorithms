import { expect, assert } from 'chai';
import mergeSort from '../scripts/mergeSort.js'
import genRandNum from '../scripts/genRandNum.js'
import genRandChar from '../scripts/genRandChar.js'

describe('Merge Sort', () => {

  it('should be a function', () => {
    assert.isFunction(mergeSort)
  })

  it('should sort a small array of + and - numbers', () => {
    const randomArray = genRandNum(10)
    let compSorted = Array.from(randomArray);

    compSorted = [...randomArray].sort((a, b) => a - b);
    expect(mergeSort(randomArray)).to.deep.equal(compSorted)
  })

  it('should sort a large array of + and - numbers', () => {
    const randomArray = genRandNum(10000)
    let compSorted = Array.from(randomArray);

    compSorted = [...randomArray].sort((a, b) => a - b);
    expect(mergeSort(randomArray)).to.deep.equal(compSorted)
  })

  it('should sort a small array of uppercase and lowercase characters', () => {
    const randomArray = genRandChar(10);
    let compSorted = Array.from(randomArray).sort();

    expect(mergeSort(randomArray.split(''))).to.deep.equal(compSorted);
  })

  it('should sort a large array of uppercase and lowercase characters', () => {
    const randomArray = genRandChar(10000)
    let compSorted = Array.from(randomArray).sort();

    expect(mergeSort(randomArray.split(''))).to.deep.equal(compSorted)
  })
})
