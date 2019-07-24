import React from "react"
import Header from "../components/header"
import layoutStyles from "../styles/components/layout.module.less";

export default ({ children }) => (
	<div>
		<Header />
		<div className={layoutStyles.container}>
			{children}
		</div>
	</div>
)
