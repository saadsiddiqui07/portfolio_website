import { ThemeProvider } from "styled-components"
import GlobalStyles from "./global";
import theme from "../themes/default"

const Theme = ({ children }) => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	)
}

export default Theme;

// THIS FILE WILL BE IMPORTED IN _app.js file as a wrapper