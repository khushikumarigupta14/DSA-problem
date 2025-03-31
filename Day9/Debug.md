# 🛠 What is Debugging in JavaScript?
Debugging is the process of finding and fixing errors in code. JavaScript provides several ways to debug, including:

 console.log() (Basic debugging)

debugger; statement (Pauses execution)

Chrome DevTools Debugger (Graphical interface)

 Node.js Debugger (CLI-based debugging)
 VS Code Debugger (Best for Node.js & frontend)

# 📌 What is the debugger Statement?
The debugger; statement pauses JavaScript execution at that point.

Works in both browser (Chrome DevTools) and Node.js (VS Code Debugger).

It helps inspect variables, call stack, and execution flow.
🖥 Debugging JavaScript in Chrome DevTools
Chrome DevTools provides a GUI-based debugging environment.

Step 1: Open DevTools
Open Google Chrome.

Right-click anywhere on the page and select Inspect.

Go to the Sources tab.

Step 2: Load Your JavaScript File
Open the .js file from the File Explorer inside Sources.

If you’re debugging inline scripts, find them inside (no domain).

Step 3: Add a Breakpoint
Click on the line number where you want to pause execution.

This creates a red dot (breakpoint).

Step 4: Run and Debug
Refresh the page to trigger the script.

Execution stops at the breakpoint.

Use Step Over (F10), Step Into (F11), or Step Out (Shift + F11).

Step 5: Inspect Variables
Open the Scope panel to see local/global variables.

Use the Watch panel to track specific variables.