#!/usr/bin/env node

'use strict;'

//console.log("process argbv", process.argv);

const argArr = process.argv;

[,,...numsArr] = argArr;
//numsArr = argArr.splice(0, 2);

//console.log("numsArr", numsArr);
const trueNums = numsArr.map(Number);
//console.log("true nums", trueNums);

const total = trueNums.reduce(function(sum, value) {
    return sum + value;
  }, 0);

console.log("total:", total);
