function mincost(arr) {
    // If there's only one rope, no cost is needed
    if (arr.length <= 1) return 0;

    // Import the heap library for min-heap operations
    const { MinHeap } = require('collections/min-heap');
    
    // Initialize the min-heap with the given rope lengths
    let minHeap = new MinHeap(arr);

    let totalCost = 0;

    // While more than one rope is left
    while (minHeap.length > 1) {
        // Extract the two smallest ropes
        let rope1 = minHeap.pop();
        let rope2 = minHeap.pop();

        // Calculate the cost to connect these two ropes
        let cost = rope1 + rope2;
        totalCost += cost;

        // Insert the new combined rope back into the heap
        minHeap.add(cost);
    }

    // Return the total cost
    return totalCost;
}

module.exports = mincost;
