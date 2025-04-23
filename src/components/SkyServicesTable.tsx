import { forwardRef, Ref } from "react";

type Props = {
	extra: string;
	handleTouchStart: (e: React.TouchEvent<HTMLTableElement>) => void;
	handleTouchEnd: (e: React.TouchEvent<HTMLTableElement>) => void;
}

const SkyServicesTable = forwardRef<HTMLTableElement, Props>(function SkyServicesTable({ extra, handleTouchStart, handleTouchEnd }, ref: Ref<HTMLTableElement>) {

	return (
		<table onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} ref={ref} className="border-collapse w-[336px] sm:w-[345px] md:w-[680px] lg:w-[1256px] text-sm md:text-base overflow-hidden">
			<thead>
				<tr className="flex md:table-row text-center w-[336px] sm:w-[345px] md:w-[680px] lg:w-[1256px] h-[50px] text-black-text bg-table-title overflow-hidde">
					<th className="hidden md:table-cell w-[29px] border-r border-arrow bg-table-title">#</th>
					<th className="flex justify-center items-center md:table-cell min-w-[224px] sm:min-w-[233px] md:w-[318px] lg:w-[702px] align-middle border-r border-arrow bg-table-title z-9"><span className="">Назва послуги</span></th>
					<th className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[166px] lg:w-[267px]  border-r border-arrow bg-table-title ${extra}`}>Тривалість <span className="hidden md:inline">послуги</span></th>
					<th className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[167px] lg:w-[248px] bg-table-title ${extra}`}>Вартість <span className="hidden md:inline">послуги</span></th>
				</tr>
			</thead>
			<tbody>
				<tr className="flex md:table-row text-center w-[334px] sm:w-[343px] md:w-[680px] overflow-hidde">
					<td className="hidden md:table-cell w[29px] border-x border-arrow">1</td>
					<td className="flex justify-center items-center md:table-cell min-w-[224px] sm:min-w-[233px] md:w-[318px] px-[5px] md:px-[14px] py-2 leading-[150%] text-left border-x border-arrow bg-main-dark z-9">Надання спортивних споруд для проведення спортивно-видовищних заходів, занять з фізичної культури та спорту в спортивному залі</td>
					<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[166px]  text-sm border-r border-arrow ${extra}`}>1 година 30 хв.</td>
					<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[167px] border-r border-arrow ${extra}`}>400 грн.</td>
				</tr>
				<tr className="flex md:table-row text-center w-[333px] sm:w-[343px] md:w-[680px] overflow-hidde">
					<td className="hidden md:table-cell border border-arrow">2</td>
					<td className="flex justify-center items-center md:table-cell min-w-[224px] sm:min-w-[233px] md:w-[318px] px-[5px] md:px-[14px] py-2 leading-[150%] text-left border-x border-t border-arrow bg-main-dark z-9">Прокат спортивного спорядження, обладнання та  інвентарю-велосипеди спортивні</td>
					<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[166px] border-r border-t border-arrow ${extra}`}>1 година</td>
					<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[167px] border-r border-t border-arrow ${extra}`}>70 грн.</td>
				</tr>
				<tr className="flex md:table-row text-center w-[333px] sm:w-[343px] md:w-[680px] overflow-hidde">
					<td className="hidden md:table-cell border border-arrow">3</td>
					<td className="flex justify-center items-center md:table-cell min-w-[224px] sm:min-w-[233px] md:w-[318px] px-[5px] md:px-[14px] py-2 leading-[150%] text-left border-x border-y border-arrow bg-main-dark z-9">Прокат спортивного спорядження, обладнання та  інвентарю-лижі бігові</td>
					<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[166px] border-r border-y border-arrow ${extra}`}>1 година</td>
					<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[167px] border-r border-y border-arrow ${extra}`}>80 грн.</td>
				</tr>
			</tbody>
		</table>
	);
});

export default SkyServicesTable;