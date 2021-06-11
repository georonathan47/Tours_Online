import React, { useState, useEffect } from "react";
import { BsChevronDoubleUp } from "react-icons/bs";
import "./Scroll.css";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	toTop: {
		zIndex: 2,
		position: "fixed",
		bottom: "2.5vh",
		backgroundColor: "#d4af37",
		color: "#001bcc",
		fontWeight: "900",
		"&:hover, &.Mui-focusVIsible": {
			transition: "1.5s",
			color: "#d4af37",
			backgroundColor: "#001bcc",
		},
		right: "5%",
	},
}));

const Scroll = ({ showBelow }) => {
	const classes = useStyles();

	const [show, setShow] = useState(showBelow ? false : true);

	const handleScroll = () => {
		if (window.pageYOffset > showBelow) {
			if (!show) setShow(true);
		} else {
			if (show) setShow(false);
		}
	};

	useEffect(() => {
		if (showBelow) {
			window.addEventListener(`scroll`, handleScroll);
			return () => window.removeEventListener(`scroll`, handleScroll);
		}
	}); 

	const handleShow = () => {
		window[`scrollTo`]({ top: 0, behaviour: `smooth` });
	};

	return (
		<div>
			{show && (
				<IconButton onClick={handleShow} className={classes.toTop}>
					<BsChevronDoubleUp size="2rem" />
				</IconButton>
			)}
		</div>
	);
};

export default Scroll;
