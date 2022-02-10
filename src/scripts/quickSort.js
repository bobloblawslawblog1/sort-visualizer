function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr,low,high,animations,colors){
    let temp = colors[0];
    let pivot = arr[high];
    temp[high] = 2;
    let i = low;
    for(let j=low; j < high; j++){
        temp[j] = 1;
        if(arr[j]<pivot){
            swap(arr,i,j);
            swap(temp,i,j);
            temp[i] = 0;
            animations.push([...arr]);
            colors.push([...temp]);
            i++;
        }
    }
    for(let k=i;k<high; k++){
        temp[i]=0;
    }

    swap(arr, i, high);
    swap(temp,i, high);
    temp[high] = 0;
    temp[i] = 0;
    animations.push([...arr]);
    colors.push([...temp]);
    return (i);
}

function quickSort(arr,low,high,animations,colors){
    if(low < high){
        let pi = partition(arr, low, high,animations,colors);
        
        quickSort(arr,low, pi-1,animations,colors);
        quickSort(arr,pi +1, high,animations,colors);
    }
    return animations;
}

export default quickSort;