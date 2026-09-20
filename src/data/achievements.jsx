const achievements = {
  title: "Achievements & Competitive Programming",
  url: "/pages/achievements",
  description: "Internship experience, hackathons, competitive programming achievements, and systems builds.",

  content: [
    {
      section: "Experience",
      items: [
        "Full Stack Developer Intern @ Yug3DAI Private Limited (Jun 2026 – Present, Remote, Gurugram)",
        "Building a 3D-printing quotation platform: CAD file upload, instant pricing estimates, automated quote logic",
        "Shipped production-ready full-stack app: secure auth, scalable backend APIs, real-time quotation, cloud storage for large 3D models",
        "Stack: Next.js, TypeScript, Express.js, PostgreSQL, MongoDB, Prisma ORM, Cloudinary"
      ]
    },
    {
      section: "Systems Programming",
      items: [
        "Built an STL vector from scratch in C++ — benchmarked 5M push_back ops: My_Vector 36.8 ms vs std::vector 42 ms vs fixed-growth 32947.4 ms (~435x gap from growth strategy alone)",
        "Implemented UniquePtr / SharedPtr / WeakPtr with reference counting — 18/18 test cases passing, fixed a real use-after-free via shared control blocks",
        "Built a custom C++ compiler with multi-phase analysis (lexical, parsing, semantic, code gen)",
        "Implemented a Unix-like shell with process management using Linux system calls"
      ]
    },
    {
      section: "Hackathons & Team Builds",
      items: [
        "BharatLens — AI-powered heritage tourism platform (48-hour build): AI narrator, AR lens, gamified exploration; stack Next.js, Socket.io, Node.js, Turborepo",
        "GitPulse @ HackTheChain 4.0 (Team Loki) — open-source community infrastructure: RBAC membership, resource orchestration, WebSocket PulseBox chat + AI assistant",
        "Developed an interactive algorithm visualization platform (BFS, DFS, Dijkstra)",
        "Created a Sudoku solver with real-time backtracking visualization"
      ]
    },
    {
      section: "Competitive Programming",
      items: [
        "Regular DSA practice on LeetCode, mostly in C++ (leetcode.com/u/HnrKrFzKBJ), plus GeeksforGeeks and CodeStudio",
        "Strongest areas: arrays, hash tables, binary search, dynamic programming, DFS",
        "Emphasis on arrays, trees, graphs, dynamic programming, and greedy algorithms",
        "GitHub Portfolio: github.com/574-jayeshSh with all projects and documentation"
      ]
    },
    {
      section: "Education & Coursework",
      items: [
        "B.Tech Computer Engineering @ Government Engineering College Ajmer (Sep 2023 – Sep 2027)",
        "CGPA: 7.15 / 10.0",
        "Relevant Coursework: DSA, Operating Systems, DBMS, OOP, Computer Networks, System Design"
      ]
    }
  ]
}

export default achievements
