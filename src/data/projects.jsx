import imgCompiler from "../assets/project-1.jpeg";
import imgShell from "../assets/project-2.jpeg";
import imgPathfinding from "../assets/about.png";
import imgSudoku from "../assets/contact-image.jpeg";
const imgVector = "/model.png";
import imgSmartPtr from "../assets/brush.png";

const projects = {
  title: "Projects – Jayesh Sharma",
  url: "/pages/projects",
  description: "Major projects built by Jayesh Sharma including systems programming and web applications.",

  content: [
    {
      name: "STL Vector from Scratch (C++)",
      description: "Rebuilt std::vector from scratch: push_back with amortized O(1) via capacity doubling, capacity vs size tracking, bounds-checked operator[] throwing std::out_of_range. Verified with AddressSanitizer, zero leaks. Benchmarked 5M push_back ops: My_Vector 36.8 ms vs std::vector 42 ms vs fixed-growth 32947.4 ms.",
      tech: ["C++", "AddressSanitizer", "Benchmarking"],
      github: "https://github.com/574-jayeshSh/STL-Vector-from-Scratch",
      image: imgVector,
      stars: 0,
      forks: 0,
      language: "C++"
    },
    {
      name: "Smart Pointer Library (C++)",
      description: "Implemented UniquePtr, SharedPtr and WeakPtr with reference counting from scratch. Fixed a real use-after-free by sharing control blocks between shared and weak pointers. 18/18 test cases passing.",
      tech: ["C++", "Memory Management", "Unit Testing"],
      github: "https://github.com/574-jayeshSh/smart-pointer-library",
      image: imgSmartPtr,
      stars: 0,
      forks: 0,
      language: "C++"
    },
    {
      name: "Custom C++ Compiler with Multi-Phase Analysis",
      description: "Architected a multi-phase compiler from scratch supporting lexical analysis, recursive-descent parsing, semantic checking, and intermediate code generation for a custom language grammar. Engineered a symbol table manager with scope-aware variable tracking and type checking.",
      tech: ["C++", "Flex", "Bison"],
      github: "https://github.com/574-jayeshSh/compiler_cpp",
      image: imgCompiler,
      stars: 0,
      forks: 0,
      language: "C++"
    },
    {
      name: "Unix-Like Shell with Process Management",
      description: "Built a Unix shell from the ground up using low-level Linux system calls (fork, execvp, waitpid), implementing process creation, execution, and synchronization primitives. Implemented built-in commands with custom parsing and environment variable handling.",
      tech: ["C", "Linux System Calls", "Makefile"],
      github: "https://github.com/574-jayeshSh/mini_shell",
      image: imgShell,
      stars: 0,
      forks: 0,
      language: "C"
    },
    {
      name: "Interactive Algorithm Visualization Platform",
      description: "Developed a real-time graph algorithm visualizer rendering BFS, DFS, and Dijkstra's shortest-path traversal with step-by-step animation, speed control, and interactive grid manipulation. Architected reusable custom React hooks for grid state management.",
      tech: ["React", "TypeScript", "TailwindCSS"],
      github: "https://github.com/574-jayeshSh/pathfinding-visualizer",
      image: imgPathfinding,
      stars: 0,
      forks: 0,
      language: "TypeScript"
    },
    {
      name: "Sudoku Solver with Backtracking Visualization",
      description: "Created an interactive Sudoku solver visualizing the backtracking algorithm in real-time with configurable animation speed and step-by-step recursion path highlighting. Designed modular React component architecture supporting user puzzle input and constraint validation.",
      tech: ["React", "Recursive Algorithms", "TailwindCSS"],
      github: "https://github.com/574-jayeshSh/sudoku_solver",
      image: imgSudoku,
      stars: 0,
      forks: 0,
      language: "JavaScript"
    }
  ]
}

export default projects
