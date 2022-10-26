import React, { useState, useEffect } from 'react';
import '../stylesheets/daily.css';
import Navbar from './NavBar';

const prompts = [
  {
    problem: `<p className='prompts'>Given a string that represents a Binary Number, write a function named binToDec that converts this string into a decimal number. DO NOT use the native parseInt() method.<br>
    For example:<br>
    binToDec('0')   -> 0<br>
    binToDec('11')  -> 3<br>
    binToDec('100') -> 4<br>
    binToDec('101') -> 5<br>
    binToDec('0101') -> 5<br>`,
    args1: ['100', 4],
    args2: ['101', 5],
    args3: ['0101', 5],
  },
  {
    problem: `<p className='prompts'>Write a function named pow that calculates x^y, where x is given as the base and y is given as the power.
    <br>
    Example:<br>
    pow(2,4) => 2^4 = 16<br>
    Rational: 2 * 2 * 2 * 2 = 16<br>
    
    Extension: Use recursion<br>
    Extension: Use recursion to solve the problem in O(n) time complexity -> Linear time complexity
    
  </p>`,
    args1: [{ arg1: 2, arg2: 4 }, 16],
    args2: [{ arg1: 4, arg2: 4 }, 256],
    args3: [{ arg1: 8, arg2: 4 }, 4096],
  },
  {
    problem: `<p className='prompts'>Write a function named twoSum that when given an array of numbers and a target number,
    return true if two of the numbers in the array add up to the target.
    Otherwise, return false.
    <br>
    You may assume that each input would have exactly one solution, and you may not use the same element twice.
    The straightforward way to solve this problem would take O(n²)time. Is it possible to do this in O(n) time?<br> 
    <br>
    Example:<br>
    <br>
    const nums = [2, 5, 11, 15]<br>
    twoSum(num, 7) -> true<br>
    Rational:  nums[0] + nums[1] = 2 + 5 = 7,<br>
    <br>
    twoSum(nums, 9) -> false<br>
    Rational: No elements inside the array sum up to the target number<br>
  </p>`,
    args1: [{ arg1: [2, 5, 11, 15], arg2: 7 }, true],
    args2: [{ arg1: [-1, -1, -2, -4, -5], arg2: 8 }, false],
    args3: [{ arg1: [2, 5, 11, 15], arg2: 9 }, false],
  },
  {
    problem: `Write a function named balancedParens that takes a string of text and returns true if
    the parentheses are balanced and false otherwise.<br>
    Example:<br>
    balancedParens('(');  // false<br>
    balancedParens('()'); // true<br>
    balancedParens(')(');  // false<br>
    balancedParens('(())');  // true<br>
    <br>
    Step 2:<br>
    make your solution work for all types of brackets<br>
    <br>
    Example:<br>
    balancedParens('[](){}'); // true<br>
    balancedParens('[({})]');   // true<br>
    balancedParens('[(]{)}'); // false<br>
    <br>
    Step 3:<br>
    ignore non-bracket characters<br>
    balancedParens(' const wow = { yo: thisIsAwesome() }'); // true<br>
    balancedParens(' const newton = () => { telescopes.areSicc(); '); // false<br>
  `,
    args1: ['[](){}', true],
    args2: ['[({})]', true],
    args3: ['[(]{)}', false],
  },
];

const number = Math.floor(Math.random() * 4);

const DailyProblem = (props) => {
  const [getCode, setCode] = useState('');
  const [run, setRun] = useState(false);
  const [prompt, setPrompt] = useState('');

  //WARNING eval() is NOT safe, it was only used for these testing/development/demo purposes

  if (run) {
    if (getCode.indexOf('function') === -1) {
      alert(
        "Please write a valid function! Arrow functions won't work either! Hint: function name () {}"
      );
      setRun(false);
    } else {
      const newFunc = eval(`(${getCode})`);
      let result1;
      let result2;
      let result3;
      if (prompts[number].args1[0].arg1) {
        result1 = newFunc(
          prompts[number].args1[0].arg1,
          prompts[number].args1[0].arg2
        );
        result2 = newFunc(
          prompts[number].args2[0].arg1,
          prompts[number].args2[0].arg2
        );
        result3 = newFunc(
          prompts[number].args3[0].arg1,
          prompts[number].args3[0].arg2
        );
      } else {
        result1 = newFunc(prompts[number].args1[0]);
        result2 = newFunc(prompts[number].args2[0]);
        result3 = newFunc(prompts[number].args3[0]);
      }
      if (
        result1 !== prompts[number].args1[1] ||
        result2 !== prompts[number].args2[1] ||
        result3 !== prompts[number].args3[1]
      ) {
        document.getElementById(
          'result'
        ).innerHTML = `Try again, that doesn't look quite right.
        <ol>
      <li><ul><li>Arguments: ${JSON.stringify(
        prompts[number].args1[0]
      )}</li> <li>Answer: ${
          prompts[number].args1[1]
        }</li> <li>Your Result: ${result1}</li></ul>
      <li><ul><li>Arguments: ${JSON.stringify(
        prompts[number].args2[0]
      )}</li> <li>Answer: ${
          prompts[number].args2[1]
        }</li> <li>Your Result: ${result2}</li></ul>
      <li><ul><li>Arguments: ${JSON.stringify(
        prompts[number].args3[0]
      )}</li> <li>Answer: ${
          prompts[number].args3[1]
        }</li> <li>Your Result: ${result3}</li></ul></ol>`;
      } else {
        document.getElementById('result').innerHTML = `Wow that's right!
        <ol>
      <li><ul><li>Arguments: ${JSON.stringify(
        prompts[number].args1[0]
      )}</li> <li>Answer: ${
          prompts[number].args1[1]
        }</li> <li>Your Result: ${result1}</li></ul>
      <li><ul><li>Arguments: ${JSON.stringify(
        prompts[number].args2[0]
      )}</li> <li>Answer:${
          prompts[number].args2[1]
        }</li> <li>Your Result: ${result2}</li></ul>
      <li><ul><li>Arguments: ${JSON.stringify(
        prompts[number].args3[0]
      )}</li> <li>Answer: ${
          prompts[number].args3[1]
        }</li> <li>Your Result: ${result3}</li></ul></ol>`;
      }
      setRun(false);
    }
  }
  useEffect(() => {
    if (!prompt) {
      document.getElementById('prompt').innerHTML = prompts[number].problem;
      setPrompt(prompts[number].problem);
    }
  });

  return (
    <div id="daily-container">
      <Navbar />
      <div id="daily">
        <div id="problem">
          <p id="prompt"></p>
          <textarea
            id="prompt-text"
            onChange={(e) => setCode(e.target.value)}
          ></textarea>
          <button id="run-code" onClick={() => setRun(true)}>
            Run Code
          </button>
        </div>
        <div id="result-box">
          <p id="result"></p>
        </div>
      </div>
    </div>
  );
};

export default DailyProblem;
