const binarySearch = (target, nums) => {
    let floorIndex = -1;
    let ceilingIndex = nums.length;
    while(floorIndex <= ceilingIndex) {
        const distance = ceilingIndex - floorIndex;
        const halfDistance = Math.floor(distance/2);
        const guessIndex  = floorIndex + halfDistance;
        const guessValue = nums[guessIndex];
        if(guessValue === target) {
            return true;
        }
        if(guessValue > target) {
            ceilingIndex = guessIndex;
        } else {
            floorIndex = guessIndex;
        }
    }
    return false;
}
