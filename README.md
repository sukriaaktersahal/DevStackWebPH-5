# DevStackWebPH-5 

A modern React + TypeScript web app where developers can explore popular development technologies and build their own custom technology stack — with real-time add, remove, and toast notifications.


## Live Site

[**Live Demo**](https://dev-stack-web-ph-5.vercel.app)


## Preview

![DevStackWebPH-5 Preview](./public/preview.png)



## Technologies Used

| Technology | Purpose |
|-----------|---------|
| **React 18** | UI library — component-based architecture |
| **TypeScript** | Type-safe JavaScript (interfaces, types) |
| **Vite** | Fast build tool and dev server |
| **Tailwind CSS v4** | Utility-first CSS framework |
| **React Icons** | Icon library (FiMenu, FiGithub, etc.) |
| **React Toastify** | Toast notification system |
| **JSON** | Local technology data source |


## Features

**Browse 12+ Technologies** — Explore a curated list of development technologies (React, Vue, Node.js, PostgreSQL, Docker, and more) with detailed cards showing icon, badge, description, category, difficulty, rating.

**Build Your Personal Stack** — Add any technology to "Your Stack" sidebar with one click. Duplicate prevention shows a warning toast. Selected items appear with icon, name, and category.

**Dynamic Add/Remove with Toast Notifications** — Add, remove single, or clear all technologies with real-time React Toastify notifications. Loading state, empty state, and responsive layout across mobile, tablet, and desktop.



##  Getting Started

```at bash
# 1. Clone the repository
git clone https://github.com/sukriaaktersahal/DevStackWebPH-5.git

# 2. Navigate to the project
cd DevStackWebPH-5

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```


## Questions & Answers 

i. What is JSX, and why is it used in React?

  JSX (JavaScript XML) is a syntax extension that lets us write HTML-like markup inside JavaScript. React uses JSX because it makes UI code readable, expressive, and familiar to developers who already know HTML. Behind the scenes, JSX compiles to React.createElement() calls. For example, <h1>Hello</h1> becomes React.createElement("h1", null, "Hello").

ii. What is the difference between props and state?

  Props are read-only data passed from a parent component to a child component. They cannot be modified by the child — they flow one way (parent → child).
  State is data managed inside a component that can change over time using useState. When state changes, React re-renders the component.
  In this project: technologies and stack are state in App.tsx, and tech, stack, handleAddToStack are props passed to TechCard.

iii. What does the useState hook do, and where did you use it in this project?

  useState lets a functional component store and update local data. It returns an array: the current value and a setter function.
  In this project, I used useState for three things inside App.tsx:
    technologies — array of technologies loaded from JSON
    stack — user's selected technologies
    loading — boolean to show loading spinner during fetch
  Also used in Navbar.tsx for isOpen (mobile menu open/close state).

iv. What does the useEffect hook do, and why did you need it to load the JSON data?

  useEffect runs side effects (data fetching, subscriptions, DOM manipulation) after render. The dependency array controls when it runs.
  I used useEffect with an empty dependency array [] so it runs only once when the App component mounts. Inside, it fetches /data.json, converts the response to JavaScript, and updates the technologies state. Without useEffect, the fetch would run on every render and cause infinite loops.

v. Why does every item in a .map() list need a unique key prop?

  The key prop helps React identify which items changed, added, or removed when re-rendering a list. Without unique keys, React uses array index as a fallback — which causes bugs when items are reordered or removed, because React may accidentally reuse the wrong DOM elements.
  In this project, I used key={tech.id} in TechList.tsx and key={item.id} in Sidebar.tsx. Since each id is unique, React can efficiently update only what changed.

vi. What is conditional rendering? Show one place you used it (example: the empty stack message).

  Conditional rendering means showing different UI based on a condition — usually with ternary (? :), &&, or if.

  In this project, I used it in Sidebar.tsx:
  {stack.length === 0 ? (
    <div>Your stack is empty.</div>
  ) : (
    <div>{/* selected items */}</div>
  )}

  Also used in App.tsx for the loading spinner:
  {loading ? <Spinner /> : <MainLayout ... />}

  And in TechCard.tsx for the button text:
  {isAdded ? "✓ Added to Stack" : "Add to Stack"}

vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

  Parent → Child: Pass data as props. Example:
  <TechCard tech={tech} stack={stack} handleAddToStack={handleAddToStack} />

  Child → Parent: The parent passes a callback function as a prop. The child calls that function when something happens. Example in TechCard.tsx:
  <button onClick={() => handleAddToStack(tech)}>Add to Stack</button>

  The handleAddToStack function lives in App.tsx, but the child triggers it. This is React's standard one-way data flow.