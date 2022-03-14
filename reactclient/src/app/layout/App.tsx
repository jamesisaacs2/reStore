//import React from "react";
//import "./App.css";
//import { textChangeRangeIsUnchanged } from "typescript";
//import { Typography } from "@mui/material";
//import { useEffect, useState } from "react";
//import { Product } from "../models/product";
//import Catalog from "../../features/catalog/Catalog";

import Header from "./Header";
import {
	Container,
	createTheme,
	CssBaseline,
	ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const paletteType = darkMode ? "dark" : "light";
	const theme = createTheme({
		palette: {
			mode: paletteType,
			background: {
				default: paletteType === "light" ? "#eaeaea" : "#121212",
			},
		},
	});

	function handleThemeChange() {
		setDarkMode(!darkMode);
	}

	return (
		<>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Header
					darkMode={darkMode}
					handleThemeChange={handleThemeChange}
				/>
				<Container>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="catalog/*" element={<Catalog />} />
						<Route path="catalog/:id" element={<ProductDetails />} />
						<Route path="about" element={<AboutPage />} />
						<Route path="contact" element={<ContactPage />} />
					</Routes>
				</Container>
			</ThemeProvider>
		</>
	);
}

export default App;