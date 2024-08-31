function mincost(arr) {
    if (arr.length <= 1) return 0;

    let totalCost = 0;
    let heap = [...arr];  // Copy the array to avoid modifying the original
    
    // Function to heapify the array
    function heapify(arr, n, i) {
        let largest = i;  // Initialize largest as root
        let left = 2 * i + 1; // left = 2*i + 1
        let right = 2 * i + 2; // right = 2*i + 2

        // Check if left child is larger than root
        if (left < n && arr[left] < arr[largest]) {
            largest = left;
        }

        // Check if right child is larger than largest
        if (right < n && arr[right] < arr[largest]) {
            largest = right;
        }

        // Swap and continue heapifying if root is not largest
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            heapify(arr, n, largest);
        }
    }

    // Build heap (rearrange array)
    let n = heap.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(heap, n, i);
    }

    // Extract elements from heap one by one
    while (heap.length > 1) {
        // Extract the two smallest elements (root of heap)
        let min1 = heap.shift();
        let min2 = heap.shift();

        // Combine them and add cost
        let cost = min1 + min2;
        totalCost += cost;

        // Insert the combined rope back into heap
        let index = 0;
        while (index < heap.length && heap[index] < cost) {
            index++;
        }
        heap.splice(index, 0, cost);
    }

    return totalCost;
}

module.exports = mincost;
