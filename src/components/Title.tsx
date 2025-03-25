import { ReactNode, FC } from "react";

type ITitleProps = {
	type: "page-title" | "section-title";
	children: ReactNode;
};

const Title: FC<ITitleProps> = ({ type, children }) => {

	switch (type) {

		case "page-title":
			return <p className="page-title">{children}</p>;
		case "section-title":
			return <p className=" section-title">{children}</p>

		default:
			return <p>{children}</p>;
	};
};

export default Title;