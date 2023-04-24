import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       <div>
  //         <h1>Hello World</h1>
  //         <Link to="about">About Us</Link>
  //       </div>
  //     ),
  //   },
  //   {
  //     path: "about",
  //     element: <div>About</div>,
  //   },
  // ]);

  // createRoot(document.getElementById("root")).render(
  //   <RouterProvider router={router} />
  // );

  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
