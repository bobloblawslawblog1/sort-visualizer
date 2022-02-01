function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


function partition(arr,low,high,animations){
    
    let pivot = arr[high];
    let i = low;
    for(let j=low; j < high; j++){
        if(arr[j]<pivot){ 
            swap(arr,i,j);
            i++;
            animations.push([...arr]);
        }
    }
    swap(arr, i, high);
    animations.push([...arr]);
    return (i);
}

function quickSort(arr,low,high,animations){
    if(low < high){
        let pi = partition(arr, low, high,animations);
        
        quickSort(arr,low, pi-1,animations);
        quickSort(arr,pi +1, high,animations);
    }
    return animations;
}

export default quickSort;