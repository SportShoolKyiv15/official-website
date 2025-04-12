import { ReactNode, FC } from "react";

type Props = {
	type: "page-title" | "section-title" | "modal-title" | "section-subtitle";
	children: ReactNode;
};

const Title: FC<Props> = ({ type, children }) => {

	switch (type) {

		case "page-title":
			return <h1 className="page-title">{children}</h1>;
		case "section-title":
			return <h2 className="section-title">{children}</h2>;
		case "section-subtitle":
			return <h3 className="section-subtitle">{children}</h3>;
		case "modal-title":
			return <h3 className="modal-title">{children}</h3>;
		default:
			return <p>{children}</p>;
	};
};

export default Title;