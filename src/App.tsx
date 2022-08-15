import React from 'react';
import './App.css';
import data from "./components/content/main.json";
import { Card } from './components/sections/cards/Card';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
  <div>
  {data.eventCategories.map((event, index) => {
          if (index < 3) {
            return (
              <Card
                image={event.image}
                title={event.title}
                description={event.description}
                date={event.date}
                location={event.location}
                type={event.type}
              ></Card>
            );
          }
        })}
  </div>
  );
}

export default App;
