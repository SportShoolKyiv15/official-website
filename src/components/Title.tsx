import { ReactNode, FC } from "react";

type Props = {
	type: "page-title" | "section-title" | "modal-title";
	children: ReactNode;
};

const Title: FC<Props> = ({ type, children }) => {

	switch (type) {

		case "page-title":
			return <p className="page-title">{children}</p>;
		case "section-title":
			return <p className="section-title">{children}</p>;
		case "modal-title":
			return <p className="modal-title">{children}</p>;
		default:
			return <p>{children}</p>;
	};
};

export default Title;