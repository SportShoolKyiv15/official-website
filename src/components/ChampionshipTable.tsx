import { forwardRef, Ref } from "react";

type Props = {
	extra: string;
	handleTouchStart: (e: React.TouchEvent<HTMLTableElement>) => void;
	handleTouchEnd: (e: React.TouchEvent<HTMLTableElement>) => void;
	participants: {
		name: string,
		sportDiscipline: string,
		distance: number,
		result: number,
	}[];
}

const FootballChampionshipTable = forwardRef<HTMLTableElement, Props>(function FootballServicesTable({ extra, handleTouchStart, handleTouchEnd, participants }, ref: Ref<HTMLTableElement>) {

	return (
		<table onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} ref={ref} className="border-collapse text-sm md:text-base">
			<thead>
				<tr className="flex md:table-row text-center h-[50px] text-black-text bg-table-title overflow-hidde">
					<th className="hidden md:table-cell w-[31px] lg:w-[41px] border-r border-arrow bg-table-title">#</th>
					<th className="flex justify-center md:text-left  items-center md:table-cell md:pl-[96px] lg:pl-[301px] min-w-[180px] sm:min-w-[181px] md:min-w-[325px] lg:w-[749px] align-middle border-r border-arrow bg-table-title z-9">П.І.Б</th>
					<th className={`flex justify-center items-center md:table-cell min-w-[140px] sm:min-w-[146px] md:min-w-[136px] lg:w-[228px] border-r border-arrow bg-table-title ${extra}`}>Дисципліна</th>
					<th className={`flex justify-center items-center md:table-cell min-w-[140px] sm:min-w-[146px] md:min-w-[88px] lg:w-[146px] border-r border-arrow bg-table-title ${extra}`}>Дистанція</th>
					<th className={`flex justify-center items-center md:table-cell min-w-[140px] sm:min-w-[146px] md:min-w-[60px] lg:w-[133px]  border-r border-arrow bg-table-title ${extra}`}>Місце</th>
				</tr>
			</thead>
			<tbody>
				{participants.length &&
					participants.map((item, idx) => (
						<tr key={idx} className="flex md:table-row text-center">
							<td className="hidden md:table-cell w[31px] border-x border-b border-arrow">{idx + 1}</td>
							<td className="flex justify-start items-center md:table-cell min-w-[180px] sm:min-w-[181px] md:min-w-[325px] px-2 md:px-[14px] py-2 leading-[150%] text-left border-x border-b border-arrow bg-block-dark z-9">{item.name}</td>
							<td className={`flex items-center md:table-cell min-w-[140px] sm:min-w-[146px] md:min-w-[136px] pl-[14px] md:pl-[6px] lg:pl-8 text-left border-r border-b border-arrow ${extra}`}>{item.sportDiscipline}</td>
							<td className={`flex justify-center items-center md:table-cell min-w-[140px] sm:min-w-[146px] md:min-w-[88px] border-r border-b border-arrow ${extra}`}>{item.distance}</td>
							<td className={`flex justify-center items-center md:table-cell min-w-[140px] sm:min-w-[146px] md:min-w-[60px] border-r border-b border-arrow ${extra}`}>{item.result}</td>
						</tr>
					))
				}
			</tbody>
		</table>
	);
});

export default FootballChampionshipTable;