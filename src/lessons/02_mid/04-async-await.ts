/**
 * mid/04 - Promises & async/await
 * ----------------------------------
 * Covers: typing Promises, async functions, error handling,
 * Promise.all, and the Awaited return type.
 */

// A function that returns a typed Promise
function delay(ms: number): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve(`waited ${ms}ms`), ms));
}

// async functions always return a Promise; `await` unwraps it
async function run(): Promise<void> {
  try {
    const first = await delay(10);

    // Run in parallel and wait for all - result is a typed tuple
    const many = await Promise.all([delay(5), delay(15)]);

    console.log("mid/04:", first, many);
  } catch (err) {
    // In strict mode, caught errors are `unknown` - narrow before use
    if (err instanceof Error) {
      console.error(err.message);
    }
  }
}

run();

export {};
