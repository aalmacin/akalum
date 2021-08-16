// const express = require('express');
const throng = require('throng');
const os = require('os');

// function startExpressApp() {
//   const app = express();

//   const port = 4325;

//   const server = app.listen(port, () => {
//     console.log(`App running on ${port}`);
//   });
// }
throng({
  // The master function is called only once.
  // We might utilize that for something that we want only to happen once per run,
  // though likely we'll want to have most of our app running on worker threads.
  master: () => {
    console.log('--- Master ---');
  },

  // The worker function is called once per worker thread.
  // The number of workers is defined by you with the count option.
  // throng defaults to setting the number of workers based on the number of available CPUs,
  // using Node's inbuilt API to get information about the logical cores of the computer.
  worker: async () => {},

  // Number of workers
  count: os.cpus().length,

  // Min time to keep cluster alive (ms)
  lifetime: Infinity,

  // Grace period between signal and hard shutdown (ms)
  grace: 5000,

  // Signals that trigger a shutdown (proxied to workers)
  signals: ['SIGTERM', 'SIGINT'],
});
