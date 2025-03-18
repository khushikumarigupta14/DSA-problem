# 📅 DSA Learning Series
🚀 **Goal:** Learn DSA step by step with theory, examples, and practice.

---

## 🟢 Day 1: Introduction to DSA & Complexity Analysis
### 📌 What to Learn:
- What is **DSA**? Why is it important?
- Understanding **Time Complexity** & **Big-O Notation** (`O(1)`, `O(N)`, `O(log N)`)
- Understanding **Space Complexity**

### 📝 Examples & Notes:
- Learn how to analyze the efficiency of an algorithm.
- Example: Comparing **Linear Search (`O(N)`) vs. Binary Search (`O(log N)`)**.

### 🔗 Practice Questions:
- Find **time complexity** of simple loops.
- Calculate **space complexity** of an array vs. linked list.

---

## 🟢 Day 2: Arrays & Basic Operations
### 📌 What to Learn:
- Introduction to **Arrays** (One-Dimensional & Multi-Dimensional)
- Common operations:
  - **Insertion**
  - **Deletion**
  - **Searching**
  - **Traversal**

### 📝 Examples & Notes:
- Implement **Linear Search** in an array.
- Implement **Array Insertion** at a specific position.

```cpp
// Linear Search Example in C++
int linearSearch(int arr[], int n, int key) {
    for (int i = 0; i < n; i++) {
        if (arr[i] == key) return i;  // Return index if found
    }
    return -1;  // Return -1 if not found
}
