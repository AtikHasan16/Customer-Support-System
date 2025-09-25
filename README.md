**What is JSX, and why is it used?**
_Ans:_ JSX is a mix of JavaScript and HTML. It's a way for us to write what looks like HTML directly inside our JavaScript code. The main reason we use it is to make building React apps easier to read and understand. Instead of using complex JavaScript commands to create a button or a paragraph, we just write the HTML tags we're familiar with. React then takes that code and turns it into a web page.

**What is the difference between State and Props?**
_Ans:_ State is a data that a component can manage and change on its own. It's private to the component and can be updated by user actions, API calls, or other events.
Props are how we give data to a component from its parent. They are read-only, which means a component can never change its own props. It's a way for a parent to customize its child components.

**What is the useState hook, and how does it work?**
_Ans:_ The useState hook is a React function that lets us add state to functional components. State is data that a component can hold and manage. When this data changes, React knows to re-render the component to update the user interface.
The useState hook returns an array with two items:

1. The current state value: This is the variable that holds our data.
2. A function to update that value: This is the setter function. we must call this function to change the state. We should never directly change the state variable.

**How can you share state between components in React?**
_Ans:_ We can share state between components in React using some methods. The most common is Lifting State Up, which is the most common approach for components that are related to each other, such as siblings or a parent and its children. We move the state from a child component to its closest common parent, then pass that state and a function to update it down to the child components as props. This allows all related components to be in sync.

**How is event handling done in React?**
_Ans:_ In React, we handle events in a very similar way to how we do it in plain HTML, but with a few key, helpful differences. We define a function in our component, and then we pass that function directly to a DOM element as a prop.
React's event handlers are defined using camelCase naming, so instead of the standard onclick we use onClick.

# Customer Support Zone

This project is a React-based **Customer Support Zone** designed to display customer tickets, track progress, and mark them as resolved. It follows a Figma design and includes additional features like status management, responsiveness, and toast notifications using **React-Toastify**.

---
