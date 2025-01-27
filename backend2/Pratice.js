1) find duplicate elememt in array 
    // a) brute force approach: O(n^2) time complexity
    const arr=[1,2,3,4,4];
    console.log(duplicateCheck(arr))
    function duplicateCheck(arr){
      for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
          if(arr[i]=== arr[j]){
            return true;
          }
        }
      }
      return false
    }
    // b) using hash set: O(n) time complexity

            const arr=[1,2,3,4,4];
            function duplicateCheck(arr){
            const set = new Set();
            for(let num of arr){
                if(set.has(num)){
                return true
                }
                set.add(num)
            }
            return false
            }
            console.log(duplicateCheck(arr))


    // c) using sorting: O(n log n) time complexity

        const arr=[1,2,3,4,5,4];
        console.log(duplicateCheck(arr))
        
        function duplicateCheck(arr){
        var sortedArr=arr.sort()
        for(var i=0;i<arr.length;i++){
            if(sortedArr[i]===sortedArr[i+1]){
            return true;
            }
        }
        return false
        }


2)check anagram
        a)- Time Complexity: O(n log n) and     - Space Complexity: O(n)

        const str1="silent"
        const str2="listen";

        function anagramCheck(str1,str2){
          if(str1.length !== str2.length){
            return false;
          }
          const sortedstr1=str1.split('').sort().join('');
          const sortedstr2=str2.split('').sort().join('')

          return sortedstr1===sortedstr2
        }

        console.log(anagramCheck(str1,str2))


        b) Time Complexity: O(n) and     - Space Complexity: O(n)

        var str1="listen"
        var str2="silent"

        function anagramCheck(str1,str2){
          if(str1.length !=str2.length){
            return false
          }
          const count={}
          for(var char of str1){
            count[char]=(count[char] || 0) +1
          }
          for(var char of str2){
            count[char]=(count[char] || 0) -1
            if(count[char] < 0){
              return false
            }
          }
          return true
        }
        console.log(anagramCheck(str1,str2))

        c)using set 
        =============

        var str1="listen"
        var str2="silent"
        
        function anagramCheck(str1,str2){
          const  set=new Set(str1)
          for(let char of str2){
            if(!set.has(char)){
              return false
            }
            set.delete(char)
          }
          return set.size ===0
        }
        console.log(anagramCheck(str1,str2)) 

      d) for time and space complexity is o(n log n) and o(n) respectively
      var str1="listen"
      var str2="silent"

      function anagramCheck(str1,str2){
        return [...str1].sort().join('') === [...str2].sort().join(''); // here 
      }
      console.log(anagramCheck(str1,str2)) 


3)Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
    a) brute force approach
    =======================
    var arr=[1,3,4,7,8,2]
    var target=9
    
    function twoSum(arr,target){
      for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length;j++){
          if(i !==j){
            if(arr[i] + arr[j] == target){
              console.log(i,j,"rajesh")
            }
          }
        }
      }
    }
    twoSum(arr,target)

    b)