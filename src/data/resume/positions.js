const positions = [
  {
    company: 'MLH Software Engineering Intern @ G-Research Open Source',
    daterange: 'Jan 2023 - April 2023',
    points: [
      'Developed a binary tool to populate the Lookout Database and simulate Kubernetes job submission for performance benchmarking.',
      'Added multiple unit tests to improve test coverage of the Golang codebase and configured their CodeCov app for effective test coverage reports.',
      'Explored ways to improve the job submission gRpc API when rejecting Kubernetes jobs, making it more robust and reliable.',
    ],
    technologies: [
      'Go, ',
      'Docker, ',
      'Kubernetes, ',
      'Unix/Linux, ',
    ],
  },
  {
    company: 'Outreachy Intern @ Confidential Computing Consortium',
    link: 'https://www.outreachy.org/alums/2022-05/',
    daterange: 'June 2022 - Septemper 2022',
    points: [
      'I built a testsuite for WebAssembly System Interface (WASI).',
      'Running WebAssembly outside the browser requires different capabilites like accessing the File System, I/O, Network access.',
      'All WASM engines have their own interpretation of the WASI standard.',
      'I was responsible for providing a testsuite that can be run against different WASM engines implementation of WASI.',
      'I ran my testcases mainly against Wasmer and Wasmtime and I caught multiple inconsistent behaviors and I opened multiple issues which led to either fix their WASI implementation or imporve the WASI standard.',
    ],
    technologies: [
      'Rust, ',
      'Docker, ',
      'Unix/Linux, ',
      'WebAssembly, ',
      'WASI, ',
      'Git/Github',
    ],
  },
];

export default positions;
