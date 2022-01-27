import mergeSort from './scripts/mergeSort';
import quickSort from './scripts/quickSort';
import {getRandomInt} from './Visualizer';

test('mergesort', () => {
  for(let i=0; i < 1000; i++){
    let arr1 = [];
    let arr2 = [];

    for(let j=0; j < getRandomInt(); j++){
      arr1[j] = getRandomInt();
    }
    arr2 = arr1;
    arr2.sort((a,b) => a - b);
    mergeSort(arr1,0,arr1.length-1);
    expect(arr1).toStrictEqual(arr2);

  }
});

test('quicksort', ()=> {
  for(let i=0; i < 1000; i++){
    let arr1 = [];
    let arr2 = [];

    for(let j=0; j < getRandomInt(); j++){
      arr1[j] = getRandomInt();
    }
    arr2 = arr1;
    arr2.sort((a,b) => a - b);
    quickSort(arr1,0,arr1.length-1);
    expect(arr1).toStrictEqual(arr2);

  }
});