function intersect(a, b) {
    var setA = new Set(a);
    var setB = new Set(b);
    var intersection = new Set([...setA].filter(x => setB.has(x)));
    return Array.from(intersection);
  }
  
  function squareroot(number) {
      var lo = 0, hi = number;
      while(lo <= hi) {
           var mid = Math.floor((lo + hi) / 2);
           if(mid * mid > number) hi = mid - 1;
           else lo = mid + 1;
      }
      return hi;
  }
  
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  const fruits = ['apple', 'apple', 'orange', 'kiwi', 'apple', 'orange', 'peach'];
  
  const counterFruits = fruits.reduce((counter, friut) => {
      
    counter[friut] = (counter[friut] || 0) + 1;
    
    return counter;
    
  });
  
  console.log(counterFruits);
  
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  Palindrome
  
  function checkPalindrom (str) {
    return str == str.split('').reverse().join('');
  }
  
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  function squareDigits(num){
    //may the code be with you
    
    return parseInt(Array.from(num.toString(), n => n * n).join(''));
  }
  
  //++++++++++++++++++++++++++++++++++++++++++++++++++++
  s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
  "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
  
  
  function meeting(s) {
      // your code
    return s.split(';').map(e => ('(' + e.toUpperCase().split(':')[1] + ', ' + e.toUpperCase().split(':')[0] + ')')).sort().join('');
  }
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++
  function nbDig(n, d) {
      // your code
    let numbers = [];
      for(let i = 0; i <= n; i++){
          numbers.push(i*i);
      }
      return numbers.toString().split(d).length - 1
      
  }
  
  //_____________________________________________
  //++++++++++++++++++++++++++++++++++++++++++++++++
  
  //Let's assume that a song consists of some number of words (that don't contain WUB). To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.
  
  //For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".
  
  function songDecoder(song){
    // ...
    return song.split("WUB").filter(e => e).join(' ');
  }
  
  
  //++++++++++++++++++++++++++++++++++++++++++++++++
  //most frequenly
  
   function mostFrequentlyWord(word){
     const wordArray = word.split(' ');
     let mostFreq = 0;
     let values = {};
      let result = {};
     
     wordArray.forEach(e => {
        if(!values[e]){
          values[e] = 1;
        }else{
          values[e]++;
        }
       
        if(values[e] > mostFreq){
          mostFreq = values[e];
          result = [e];
        }else if(values[e] == mostFreq){
          result.push(e);
        }
       
     });
     
     
      return result;
   }
     
  //++++++++++++++++++++++++++++++++++++++++++++++++
  //merge lists
  
  var mergeTwoLists = function(l1, l2) {
      if (!l1) return l2;
      if (!l2) return l1;
      if (l1.val < l2.val) {
          l1.next = mergeTwoLists(l1.next, l2);
          return l1;
      }
      l2.next = mergeTwoLists(l2.next, l1);
      return l2;
  };
  
  
  const mergeTwoLists2 = function(l1, l2) {
      if (l1 === null) {
          return l2;
      }
  
      if (l2 === null) {
          return l1;
      }
  
      if (l1.val < l2.val) {
          l1.next = mergeTwoLists(l1.next, l2)
          return l1;
  
      } else {
          l2.next = mergeTwoLists(l1, l2.next)
          return l2;
      }
  }
  
  //////////////////////////////////////
  
  function solution(A) {
    const set = new Set(A);
    let i = 1;
  
    while (set.has(i)) {
      i++;
    }
  
    return i;
  }
  
  /////////////////////////////////////
  function disemvowel(str) {
  return  str.split('').filter(e => (e.toLowerCase() !== 'a' && e.toLowerCase() !== 'e'  && e.toLowerCase() !== 'i'  && e.toLowerCase() !== 'o'  && e.toLowerCase() !== 'u' )).join('');
  }
  
  function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }
  
  ///////
  var isSquare = function(n){
    return n < 0 ? false: Math.sqrt(n) % 1 === 0; // fix me
  }
  /////////////////////////////////////////////////////////
  ///fibonacci
  function fibonacci(num) {
    if (num <= 1) return 1;
  
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
  
  function fibonacci(num, memo) {
    memo = memo || {};
  
    if (memo[num]) return memo[num];
    if (num <= 1) return 1;
  
    return memo[num] = fibonacci(num - 1, memo) + fibonacci(num - 2, memo);
  }
  /////////////////////////////////////////////////////////////////
  function stray(numbers){
    numbers.sort();
    return numbers[0] === numbers[1] ? number[numbers.length - 1] : numbers [0];
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function findLongest(array){
    // code here
    let index = 0;
    let longest = 0;
    array.forEach((e,i) => {
      if(e.toString().length > longest){
        longest = e.toString().length;
        index = i;
      } 
     
    });
    
    return array[index];
  }
  
  function findLongest(array){
    return array.reduce((res, curr) => (String(res).length < String(curr).length) ? curr : res);
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  
  function findPrefixes(names, query){
    
  }