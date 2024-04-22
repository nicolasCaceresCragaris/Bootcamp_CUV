
function isUniform(arr){

    var flag;
    flag=arr[0];
    for(let i=0;i<arr.length;i++){
        if(i!=0){
            if(flag!=arr[i]){
                return false;
            }
        }
    }

    return true;
}

let conjunto=["b", "b", "b"]

console.log(isUniform(conjunto));