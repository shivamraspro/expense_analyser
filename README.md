# README.md answers

### Q: What did you predict for Warmup.js, and what did it print? Explain the first line and the error from Part B.

I predicted that the first console would be an error and the next would be an Error because the let variable is in its Temporal Dead Zone, but I didn't know the name of the exact type of Error which was ReferenceError.

The first console.log printed `undefined` because the `var` variable was registered in its creation phase but the second console.log resulted in an error because the `let` variable wasn't registered in the creation phase.

All my other predictions matched the outputs except the last console.log(0 '0', 0 = '0'); which I assumed to be an error

### Q: Why did Loop finished print before Async read finished? Who did the reading while your loop was running?

The async `readFile` is handed to `libuv`'s thread pool and is no longer executed on the main thread. So the main thread continues executing the loop and the `readFile` is executed in parallel and its callback is queued to be executed after the main thread is free.

### Q: How does tracker remember spent after createBudgetTracker has returned?

The tracker is a reference to the returned `spend` function which is a closure and holds the reference of the function scope of `createBudgetTracker` which means it has access to the `spent` variable.

### Q: What does the ^ in front of the lodash version in package.json mean, and why is package-lock.json created?

The caret is used to indicate that any minor or patch version of the current version can be installed. So, for 4.18.1, any version greater than 4.18.1 but less than 5.0.0 is acceptable. Since multiple dependencies in a project can accept a range of versions, the `package-lock.json` file is created to record the exact version of each dependency and their sub dependencies required for a project.
