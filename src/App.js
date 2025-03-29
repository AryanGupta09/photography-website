

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Introduction from "../src/components/Introduction"
import PhotoGallery from "../src/components/PhotoGallery"
import '../src/styles.css';

function App() {
return (
	<Router>
	<div>
		<Navbar />
		<Routes>
		<Route path="/" element={<Introduction />} />
		<Route path="/gallery" element={<PhotoGallery />} />

		</Routes>
	</div>
	</Router>
);
}

export default App;
