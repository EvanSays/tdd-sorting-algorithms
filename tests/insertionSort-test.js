import { expect, assert } from 'chai';
import insertionSort from '../scripts/insertionSort.js'
import genRandNum from '../scripts/genRandNum.js'
import genRandChar from '../scripts/genRandChar.js'

describe('Insertion Sort', () => {
  it('should be a function', () => {
    assert.isFunction(insertionSort)
  })

  it.only('should sort a small array of + and - numbers', () => {
    const randomArray = genRandNum(10)
    let compSorted = Array.from(randomArray);

    compSorted = [...randomArray].sort((a, b) => a - b);
    console.log(compSorted)
    expect(insertionSort(randomArray)).to.deep.equal(compSorted)
  })

  it('should sort a large array of + and - numbers', () => {
    const randomArray = genRandNum(6000)
    let compSorted = Array.from(randomArray);

    compSorted = [...randomArray].sort((a, b) => a - b);
    expect(insertionSort(randomArray)).to.deep.equal(compSorted)
  })

  it('should sort a small array of uppercase and lowercase characters', () => {
    const randomArray = genRandChar(10);
    let compSorted = Array.from(randomArray).sort();

    expect(insertionSort(randomArray.split(''))).to.deep.equal(compSorted)
  })

  it('should sort a large array of uppercase and lowercase characters', () => {
    const randomArray = genRandChar(6000)
    let compSorted = Array.from(randomArray).sort();

    expect(insertionSort(randomArray.split(''))).to.deep.equal(compSorted)
  })
})
