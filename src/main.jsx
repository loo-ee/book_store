import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './styles/index.css'

const books = [
  {
    id: 1,
    title: `Python Crash Course, 2nd Edition: A Hands-On, Project-Based Introduction to Programming 2nd Edition`,
    price: 14.8,
    source: 'python-crash-course.jpg',
    availability: 'Limited',
    author: 'Eric Matthes',
    ratings: '7, 630',
    genre: 'python',
  },
  {
    id: 2,
    title: 'HTML and CSS: Design and Build Websites 1st Edition',
    price: 13.9,
    source: 'html-css.jpg',
    availability: 'In Stock',
    author: 'Jon Duckett',
    ratings: '4, 162',
    genre: 'html, css',
  },
  {
    id: 3,
    // eslint-disable-next-line
    title: `JavaScript: The Definitive Guide: Master the World's Most-Used Programming Language 7th Edition`,
    price: 20.12,
    source: 'javascript.jpg',
    availability: 'In Stock',
    author: 'David Flanagan',
    ratings: '1, 094',
    genre: 'javascript',
  },
  {
    id: -1,
    title: 'Let the app decide for me',
    price: '???',
    source: 'red-random.png',
    availability: '???',
    author: '???',
    ratings: '???',
    genre: '???',
  },
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App books={books} />
  </React.StrictMode>
)
