# OOP TypeScript Mastery

<div style="display: flex; gap: 20px;">
  <img src="https://www.svgrepo.com/show/354478/typescript-icon.svg" width="70" height="70" />
  <img src="https://www.svgrepo.com/show/439241/object-oriented-programming.svg" width="70" height="70" />
</div>

A structured, task-based repository designed to help developers master Object-Oriented Programming (OOP) in TypeScript.  
The project combines hands-on exercises, tests, notes, and architectural patterns used in real production systems.

---

## Getting Started

Install dependencies:

```bash
npm install
````

---

## Running Tests

Run all tests:

```bash
npm test
```

Watch mode:

```bash
npm run test:watch
```

Run tests for a specific task:

```bash
npm test task-01
```

---

## Type Checking

```bash
npm run typecheck
```

---

## Building

```bash
npm run build
```

---

## Formatting & Linting (Biome)

Format all files:

```bash
npm run format
```

Check formatting:

```bash
npm run format:check
```

Lint all files:

```bash
npm run lint
```

Run all Biome checks:

```bash
npm run check
```

CI-safe check:

```bash
npm run check:ci
```

---

## Repository Structure

Each `task-XX-*` directory contains:

* `src/index.ts` — Starter code with scaffolding and TODO markers
* `tests/index.test.ts` — Vitest test suite for the task
* `notes.md` — Personal notes for documenting insights
* `README.md` — Task description and learning goals
* `solutions/` — Folder where contributors submit their solutions

  * Naming convention for contributors:

    ```
    solutions/<github-username>-task-XX.ts
    ```

Example:

```
task-01-fundamentals-classes/
 ├── src/index.ts
 ├── tests/index.test.ts
 ├── notes.md
 ├── README.md
 └── solutions/
      └── zingerengineer-task-01.ts
```

---

## Tasks Overview

### Core OOP Concepts

1. Fundamentals & Classes
2. Access Modifiers
3. Inheritance & Subtyping
4. Polymorphism
5. Abstraction & Interfaces
6. Generics

### Design Principles

7. Composition vs Inheritance
8. SOLID Principles
9. Dependency Injection

### Design Patterns

10. Creational Patterns
11. Structural Patterns
12. Behavioral Patterns
13. Mixins

### Advanced TypeScript

14. Decorators & Metaprogramming
15. Immutability & Value Objects
16. Concurrency & Async Patterns
17. Event-Driven & Reactive Programming

### Enterprise Architecture

18. Domain-Driven Design
19. Hexagonal Architecture
20. Testing OOP Code

### Optimization & Refactoring

21. Refactoring & Code Smells
22. Performance & Memory Patterns
23. Serialization & Persistence
24. TypeScript Subtleties
25. Advanced Patterns

---

## Learning Path

**Beginner (Tasks 1–6)**
Foundations of classes, inheritance, and basic OOP principles.

**Intermediate (Tasks 7–13)**
Design principles and classic design patterns.

**Advanced (Tasks 14–20)**
Enterprise-grade approaches, architecture, and testing.

**Expert (Tasks 21–25)**
Refactoring, optimization, advanced patterns, performance.

---

## Development Workflow

1. Open the target `task-XX-*` directory.
2. Read the task’s `README.md`.
3. Examine the provided scaffolding in `src/index.ts`.
4. Implement your solution.
5. Run tests using `npm test task-XX`.
6. Document your findings in `notes.md`.
7. Submit your solution in the `solutions/` folder:

   ```
   solutions/<github-username>-task-XX.ts
   ```
8. Verify everything with:

   * `npm run typecheck`
   * `npm run lint`
   * `npm run format`

---

## Technologies

* TypeScript
* Vitest
* Biome
* Node.js

---

## Author

[ZingerEngineer](https://github.com/ZingerEngineer)

Contributions are welcome following the solution-naming rule described above.
