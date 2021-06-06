import React, { useState } from 'react';
import SortingBar from './SortingBar';
import Header from './Header/Header';
import '../index.css';
import './Visualizer.css';
import bubbleSort from '../SortingAlgorithms/bubbleSort';
import insertionSort from '../SortingAlgorithms/insertionSort';
import mergeSort from '../SortingAlgorithms/mergeSort';
import quickSort from '../SortingAlgorithms/quickSort';
import selectionSort from '../SortingAlgorithms/selectionSort';
import generateRandomizedArray from './randomizeArray';

const Home = () => {
  const arraySize = 100;
  const [isVisualizing, setIsVisualizing] = useState(false);
  const [randomizedArray, setRandomizedArray] = useState(
    generateRandomizedArray({ arraySize: arraySize })
  );
  const [colorsArray, setColorsArray] = useState(
    new Array(randomizedArray.length).fill(0)
  );
  const [visualizationSpeed, setVisualizationSpeed] = useState(30);
  const [maxItem, setMaxItem] = useState(Math.max(...randomizedArray));
  const [currentAlgorithm, setCurrentAlgorithm] = useState('Bubble Sort');
  const algorithms = [
    'Bubble Sort',
    'Insertion Sort',
    'Selection Sort',
    'QuickSort',
    'Merge Sort',
  ];

  const onRandomize = () => {
    if (isVisualizing) return;
    const nextRandomizedArray = generateRandomizedArray({
      arraySize: randomizedArray.length,
    });
    setRandomizedArray(nextRandomizedArray);
    setMaxItem(Math.max(...nextRandomizedArray));
  };
  const onInputSizeChanged = (val) => {
    if (isVisualizing) return;
    const nextRandomizedArray = generateRandomizedArray({ arraySize: val });
    setRandomizedArray(nextRandomizedArray);
    setMaxItem(Math.max(...nextRandomizedArray));
    setColorsArray(new Array(nextRandomizedArray.length).fill(0));
  };
  const onSpeedChange = (val) => {
    if (isVisualizing) return;
    setVisualizationSpeed(50 - val + 1);
  };
  const onVisualize = async () => {
    if (isVisualizing) return;

    setIsVisualizing(true);
    switch (currentAlgorithm) {
      case 'Selection Sort':
        await selectionSort({
          array: randomizedArray,
          setArray: setRandomizedArray,
          visualizationSpeed: visualizationSpeed,
          setColorsArray: setColorsArray,
        });
        break;

      case 'Bubble Sort':
        await bubbleSort({
          array: randomizedArray,
          setArray: setRandomizedArray,
          visualizationSpeed: visualizationSpeed,
          setColorsArray: setColorsArray,
        });
        break;

      case 'Insertion Sort':
        await insertionSort({
          array: randomizedArray,
          setArray: setRandomizedArray,
          visualizationSpeed: visualizationSpeed,
          setColorsArray: setColorsArray,
        });
        break;

      case 'QuickSort':
        await quickSort({
          array: randomizedArray,
          leftIndex: 0,
          rightIndex: randomizedArray.length - 1,
          setArray: setRandomizedArray,
          visualizationSpeed: visualizationSpeed,
          setColorsArray: setColorsArray,
        });
        break;
      case 'Merge Sort':
        await mergeSort({
          array: randomizedArray,
          leftIndex: 0,
          rightIndex: randomizedArray.length - 1,
          setArray: setRandomizedArray,
          visualizationSpeed: visualizationSpeed,
          setColorsArray: setColorsArray,
        });
        break;
      default:
        break;
    }

    setIsVisualizing(false);
  };
  const details = (currentAlgorithm)=>{
    let define = "";
    let WorstTC = "";
    let averageTC = "";
    let goodTC = ""
    switch (currentAlgorithm) {
      case 'Selection Sort':
        define ="Selection sort is an in-place comparison sorting algorithm. It has an O(n2) time complexity,"+
                "which makes it inefficient on large lists, and generally performs worse than the similar insertion sort."+
                " Selection sort is noted for its simplicity and has performance advantages over more complicated algorithms "+
                "in certain situations, particularly where auxiliary memory is limited.The algorithm divides the input list "+
                "into two parts: a sorted sublist of items which is built up from left to right at the front (left) of the list"+
                " and a sublist of the remaining unsorted items that occupy the rest of the list. Initially, the sorted sublist is "+
                "empty and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest,"+
                "depending on sorting order) element in the unsorted sublist, exchanging (swapping) it with the leftmost unsorted element"+
                "(putting it in sorted order), and moving the sublist boundaries one element to the right";
        WorstTC = "O(n^2)";
        averageTC = "O(n^2)";
        goodTC = "Ω(n^2)";
        
        break;

      case 'Bubble Sort':
        define ="Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list,"+
                " compares adjacent elements and swaps them if they are in the wrong order. The pass through the list is repeated until the list "+
                "is sorted. The algorithm, which is a comparison sort, is named for the way smaller or larger elements 'bubble' to the top of the list.";
        WorstTC = "O(n^2)";
        averageTC = "O(n^2)";
        goodTC = "Ω(n)";
        break;

      case 'Insertion Sort':
        define = "Insertion sort is a simple sorting algorithm that builds the final sorted array (or list) one item at a time ."+
                  "Sorting is typically done in-place, by iterating up the array, growing the sorted list behind it. At each array-position,"+
                  "it checks the value there against the largest value in the sorted list (which happens to be next to it, in the previous "+
                  "array-position checked). If larger, it leaves the element in place and moves to the next. If smaller, it finds the correct"+
                  " position within the sorted list, shifts all the larger values up to make a space, and inserts into that correct position.";
        WorstTC = "O(n^2)";
        averageTC = "O(n^2)";
        goodTC = "Ω(n)";
        break;

      case 'QuickSort':
        define = "Quicksort is an in-place sorting algorithm. Developed by British computer scientist Tony Hoare in 1959  and published in 1961,"+
                  " it is still a commonly used algorithm for sorting. When implemented well, it can be somewhat faster than merge sort and about "+
                  "two or three times faster than heapsort.Quicksort is a divide-and-conquer algorithm. It works by selecting a "+
                  "'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than "+
                  "or greater than the pivot. For this reason, it is sometimes called partition-exchange sort.[4] The sub-arrays are then sorted "+
                  "recursively. This can be done in-place, requiring small additional amounts of memory to perform the sorting.";
        WorstTC = "O(n^2)";
        averageTC = "Ω(n log(n))";
        goodTC = "Ω(n log(n))";
        break;
      case 'Merge Sort':
        define ="Merge sort (also commonly spelled as mergesort) is an efficient, general-purpose, and comparison-based sorting algorithm."+
                " Most implementations produce a stable sort, which means that the order of equal elements is the same in the input and output."+
                " Merge sort is a divide and conquer algorithm that was invented by John von Neumann in 1945.Conceptually, a merge sort works as follows:"+
                "Firstly ,Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted)."+
                "Secondly , Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list"
        WorstTC = "θ(n log(n))";
        averageTC = "θ(n log(n))";
        goodTC = "Ω(n log(n))";
        break;
      default:
        break;
    }
    return(
      <div className="detail">
          {define}<br/><br/>
          <table>
            <caption>Time Complexity</caption>
            <tbody>
              <tr>
                <td>Worst </td>
                <td> {WorstTC}</td>
              </tr>
              <tr>
                <td>Average </td>
                <td> {averageTC}</td>
              </tr>
              <tr>
                <td>Best :</td>
                <td>{goodTC}</td>
              </tr>
            </tbody>
          </table>      
      </div>
    );
  }
  return (
    <div>
      <div style={{flexDirection: 'column', height: '100vh' }}>
        <Header
          algorithms={algorithms}
          onAlgorithmChange={setCurrentAlgorithm}
          currentAlgorithm={currentAlgorithm}
          onRandomize={onRandomize}
          onInputSizeChanged={onInputSizeChanged}
          onSpeedChange={onSpeedChange}
          onStart={onVisualize}
          isVisualizing={isVisualizing}
        />
        <div className ="home">
          {randomizedArray.map((item, index) => {
            const height = (item / maxItem) * 100;
            const width = (1 / randomizedArray.length) * 100;
            return (
              <div
                key={index}
                style={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'end',
                  width: `${width}%`,
                }}
              >
                <SortingBar
                  colorCode={colorsArray[index]}
                  style={{
                    height: `calc(${height}% -  10px)`,
                    width: '100%',
                    margin: 'auto 5% 10% 10%',
                  }}
                ></SortingBar>
              </div>
            );
          })}
        </div>
      </div>
        <div className="define">
          <h2 className="text">{currentAlgorithm}</h2>
          {details(currentAlgorithm)}
        </div>
      
    </div>
  );
};

export default Home;
