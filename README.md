# README.md answers

### Q: What did you predict for Warmup.js, and what did it print? Explain the first line and the error from Part B.

I predicted that the first console would be an error and the next would be an Error because the let variable is in its Temporal Dead Zone, but I didn't knew the name of the exact type of Error which was ReferenceError.

The first console.log printed `undefined` because the `var` variable was registered in its creation phase but the second console.log resulted in an error because the `let` variable wasn't registered in the creation phase.

All my other predictions matched the outputs except the last console.log(0 '0', 0 = '0'); which I assumed to be an error

### Q: Why did Loop finished print before Async read finished? Who did the reading while your loop was running?

### Q: How does tracker remember spent after createBudgetTracker has returned?

### Q: What does the ^ in front of the lodash version in package.json mean, and why is package-lock.json created?
