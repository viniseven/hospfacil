import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Details } from './pages/Details/details.jsx';
import { FoundSearch } from './pages/FoundSearch/foundSearch.jsx';
import { Home } from './pages/Home/home.jsx';
import { MyTrips } from './pages/MyTrips/myTrips.jsx';
import { Profile } from './pages/Profile/profile.jsx';
import { TravelConfirmation } from './pages/TravelConfirmation/travelConfirmation.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
