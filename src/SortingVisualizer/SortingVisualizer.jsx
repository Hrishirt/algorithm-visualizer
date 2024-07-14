import React from 'react';
import './SortingVisualizer.css';
import * as SortingAlgorithms from '../SortingAlgorithms/SortingAlgorithms.js';
export default class SortingVisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
        const array = [];
        for (let i = 0; i < 310; i++) {
            array.push(randomIntFromInterval(5, 730));
        }
        this.setState({ array });
    }



    mergeSort() {
        const javaScriptSortedArray = this.state.array.slice().sort((a, b) => a-b);
        const sortedArray = SortingAlgorithms.mergeSort(this.state.array);

        console.log(arraysAreEqual(javaScriptSortedArray, sortedArray));
    }
        
    quickSort() {}

    heapSort() {}

    bubbleSort() {}



    render() {
        const { array } = this.state;

        return (
            <div className="main-container">
                <div className='array-container'>
                    {array.map((value, idx) => (
                        <div className='array-bar' key={idx} style={{ height: `${value / 7.3}vh` }}>
                        </div>
                    ))}
                </div>
                <div className="button-container">
                    <button className='new-array-button' onClick={() => this.resetArray()}>New Array</button>
                    <button className='merge-sort' onClick={() => this.mergeSort()}>Merge Sort</button>
                    <button className='quick-sort' onClick={() => this.quickSort()}>Quick Sort</button>
                    <button className='heap-sort' onClick={() => this.heapSort()}>Heap Sort</button>
                    <button className='bubble-sort' onClick={() => this.bubbleSort()}>Bubble Sort</button>
                </div>
            </div>
        );
    }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
    if(arrayOne.length != arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] != arrayTwo[i]) return false;
    }
    return true
}