import { forwardRef, Ref } from "react";

type Props = {
	extra: string;
	handleTouchStart: (e: React.TouchEvent<HTMLTableElement>) => void;
	handleTouchEnd: (e: React.TouchEvent<HTMLTableElement>) => void;
	comands: {
		name: string,
		games: number,
		points: number,
		win: number,
		draw: number,
		defeat: number,
		score: string,
	}[];
}

const FootballChampionshipTable = forwardRef<HTMLTableElement, Props>(function FootballServicesTable({ extra, handleTouchStart, handleTouchEnd, comands }, ref: Ref<HTMLTableElement>) {

	return (
		<table onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} ref={ref} className="border-collapse w-[327px] md:w-[640px] lg:w-[1256px] text-sm md:text-base overflow-hidden">
			<thead>
				<tr className="flex md:table-row text-center w-[327px] md:w-[640px] lg:w-[1256px] h-[50px] text-black-text bg-table-title overflow-hidde">
					<th className="hidden md:table-cell w-[31px] lg:w-[39px] border-r border-arrow bg-table-title">#</th>
					<th className="flex justify-center items-center md:table-cell min-w-[224px] md:min-w-[267px] lg:w-[702px] align-middle border-r border-arrow bg-table-title z-9"><span className="">Команди</span></th>
					<th className={`flex justify-center items-center md:table-cell min-w-[51px] md:min-w-[51px] lg:w-[267px]  border-r border-arrow bg-table-title ${extra}`}>Ігор</th>
					<th className={`flex justify-center items-center md:table-cell min-w-[52px] md:min-w-[60px] lg:w-[248px] bg-table-title ${extra}`}>Очки</th>
					<th className={`flex justify-center items-center md:table-cell min-w-[51px] md:min-w-[45px] lg:w-[267px]  border-r border-arrow bg-table-title ${extra}`}>Ніч</th>
					<th className={`flex justify-center items-center md:table-cell min-w-[52px] md:min-w-[51px] lg:w-[248px] bg-table-title ${extra}`}>Пор</th>
					<th className={`flex justify-center items-center md:table-cell min-w-[103px] md:min-w-[51px] lg:w-[248px] bg-table-title ${extra}`}>Пер</th>
					<th className={`flex justify-center items-center md:table-cell min-w-[103px] md:min-w-[84px] lg:w-[248px] bg-table-title ${extra}`}>Рахунок</th>
				</tr>
			</thead>
			<tbody>

				{comands.length &&
					comands.map((item, idx) => (
						<tr key={idx} className="flex md:table-row text-center w-[327px] md:w-[640px] overflow-hidde">
							<td className="hidden md:table-cell w[31px] border-x border-b border-arrow">{idx + 1}</td>
							<td className="flex justify-start items-center md:table-cell min-w-[224px] md:min-w-[267px] px-[5px] md:px-[14px] py-2 leading-[150%] text-left border-x border-b border-arrow bg-block-dark z-9">{item.name}</td>
							<td className={`flex justify-center items-center md:table-cell min-w-[51px] md:min-w-[51px] border-r border-b border-arrow ${extra}`}>{item.games}</td>
							<td className={`flex justify-center items-center md:table-cell min-w-[52px] md:min-w-[60px] border-r border-b border-arrow ${extra}`}>{item.points}</td>
							<td className={`flex justify-center items-center md:table-cell min-w-[51px] md:min-w-[45px] border-r border-b border-arrow ${extra}`}>{item.draw}</td>
							<td className={`flex justify-center items-center md:table-cell min-w-[52px] md:min-w-[51px] border-r border-b border-arrow ${extra}`}>{item.defeat}</td>
							<td className={`flex justify-center items-center md:table-cell min-w-[103px] md:min-w-[51px] border-r border-b border-arrow ${extra}`}>{item.win}</td>
							<td className={`flex justify-center items-center md:table-cell min-w-[103px] md:min-w-[84px] border-r border-b border-arrow ${extra}`}>{item.score}</td>
						</tr>
					))
				}
			</tbody>
		</table>
	);
});

export default FootballChampionshipTable;