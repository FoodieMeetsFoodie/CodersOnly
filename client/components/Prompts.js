import React, { useState } from 'react';

const prompts = [
  {
    prompt: `Write a function called commonElements that takes in any number of arrays in the 
    argument. The arrays may contain both numbers and strings. It should return a new array
    with all the common elements (both numbers and/or strings) from the given input. 
    If there are no common numbers/strings, return "Nothing in Common!"
    Assume there are no duplicates within the array.`,
  },
  {
    prompt: `Write a function that returns an array containing the numbers 1 to NUM.

    Put "fizz" in place of numbers divisble by 3 but not by 5,
    "buzz" in place of numbers divisble by 5 but not by 3,
    and "fizzbuzz" in place of numbers divisble by both 3 and 5.
    
    fizzbuzz(16);
    -> [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz',
    11, 'fizz', 13, 14, 'fizzbuzz', 16]
    `,
  },
  {
    prompt: `Given an arbitrarily nested array of numbers and a positive integer "depth",
  return a new array consisting of the numbers with depth less than or equal to
  the provided depth, in order of appearance.
  
  The original array is considered to be at depth 1, and inner arrays are at
  greater depth.
  
  For example:
  
  retrieveDepth([2, [4, [7], 1], 5], 1) -> [2, 5] because only the 2 and 5 are at
  "depth 1", and everything else is too deep. The 4 and 1 are at "depth 2", and
  the 7 is at "depth 3".
  
  retrieveDepth([2, [4, [7], 1], 5], 2) -> [2, 4, 1, 5] becuase the 2 and 5 are at
  "depth 1", the 4 and 1 are at "depth 2", and the 7 is too deep because it's at
  "depth 3".
  
  retrieveDepth([2, [4, [7], 1], 5], 3) -> [2, 4, 7, 1, 5] because every number
  is within "depth 3". No number is deeper.`,
  },
  {
    prompt: `Reverse and return an array in-place. Do not create a new array in memory.
  Instead, modify the array as given. Do not use the array reverse method built in
  to the array prototype while solving the problem.`,
  },
];

const Prompts = (props) => {
  const [currentNum, setCurrentNum] = useState(0);

  const clickPrompt = (e) => {
    if (currentNum < 3) {
      setCurrentNum(currentNum + 1);
    } else {
      setCurrentNum(0);
    }
    console.log(currentNum);
  };
  const currentPrompt = prompts[currentNum].prompt;

  return (
    <div id="DMprompt">
      
      <h2>Prompt:</h2>
      <p>{currentPrompt}</p>
      <button
        className="prompt-btn"
        onClick={(e) => {
          clickPrompt();
        }}
      >
        New Prompt
      </button>
    </div>
  );
};

export default Prompts;
