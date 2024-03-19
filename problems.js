// Write a fuction which takes an array and target has an argument and return the two indexes of the elements which the sum is target
function targetSum(array,target){
    let ans = [];
    for(let i=0;i<array.length-1;i++){
        for(let j=i+1;j<array.length;j++){
            if(array[i]+array[j] === target){
                ans.push([i,j])
            }
        }
    }
    return ans;
}
let arr = [0,1,2,3,4,5,6];
console.log(targetSum(arr,6));

