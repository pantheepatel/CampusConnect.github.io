import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'; 

// import { BrowserRouter as Router, Route, Routes, Link, RouterProvider, createBrowserRouter } from "react-router-dom";
// import EventList from './components/event/EventList';
// import ClubList from './components/club/ClubList';
// import Button from './components/common/Button';
// import Header from './components/common/Header';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Header />,
//     children: [
//       {
//         path: "/event/",
//         element: <EventList />,
//       },
//       {
//         path:"/club/",
//         element: <ClubList/>
//       }
//     ],
//   },
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
