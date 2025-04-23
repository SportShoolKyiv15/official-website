import { forwardRef, Ref } from "react";

type Props = {
	extra: string;
	handleTouchStart: (e: React.TouchEvent<HTMLTableElement>) => void;
	handleTouchEnd: (e: React.TouchEvent<HTMLTableElement>) => void;
}

const FootballServicesTable = forwardRef<HTMLTableElement, Props>(function FootballServicesTable({ extra, handleTouchStart, handleTouchEnd }, ref: Ref<HTMLTableElement>) {

	return (
		<table onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} ref={ref} className="border-collapse w-[336px] sm:w-[345px] md:w-[680px] lg:w-[1256px] text-sm md:text-base overflow-hidden">
			<thead>
				<tr className="flex md:table-row text-center w-[336px] sm:w-[343px] md:w-[680px] lg:w-[1256px] h-[50px] text-black-text bg-table-title overflow-hidde">
					<th className="hidden md:table-cell w-[29px] lg:w-[39px] border-r border-arrow bg-table-title">#</th>
					<th className="flex justify-center items-center md:table-cell min-w-[224px] sm:min-w-[233px] md:w-[318px] lg:w-[702px] align-middle border-r border-arrow bg-table-title z-9"><span className="">Назва послуги</span></th>
					<th className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[166px] lg:w-[267px]  border-r border-arrow bg-table-title ${extra}`}>Тривалість <span className="hidden md:inline">послуги</span></th>
					<th className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[167px] lg:w-[248px] bg-table-title ${extra}`}>Вартість <span className="hidden md:inline">послуги</span></th>
				</tr>
			</thead>
			<tbody>
				<tr className="flex md:table-row text-center w-[334px] sm:w-[343px] md:w-[680px] overflow-hidde">
					<td className="hidden md:table-cell w[29px] border-x border-arrow">1</td>
					<td className="flex justify-center items-center md:table-cell min-w-[224px] sm:min-w-[233px] md:w-[318px] px-[5px] md:px-[14px] py-2 leading-[150%] text-left border-x border-arrow bg-main-dark z-9">Надання спортивних споруд для проведення спортивно-видовищних заходів, занять з фізичної культури та спорту на майданчику 98*65</td>
					<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[166px] border-r border-arrow ${extra}`}>1 година 30 хв.</td>
					<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[167px] border-r border-arrow ${extra}`}>2500 грн.</td>
				</tr>
				<tr className="flex md:table-row text-center w-[333px] sm:w-[343px] md:w-[680px] overflow-hidde">
					<td className="hidden md:table-cell border border-arrow">2</td>
					<td className="flex justify-center items-center md:table-cell min-w-[224px] sm:min-w-[233px] md:w-[318px] px-[5px] md:px-[14px] py-2 leading-[150%] text-left border-x border-t border-arrow bg-main-dark z-9">Надання спортивних споруд для проведення спортивно-видовищних заходів, занять з фізичної культури та спорту на майданчику 60*40</td>
					<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[166px] border-r border-t border-arrow ${extra}`}>1 година 30 хв.</td>
					<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[167px] border-r border-t border-arrow ${extra}`}>1200 грн.</td>
				</tr>
				<tr className="flex md:table-row text-center w-[333px] sm:w-[343px] md:w-[680px] overflow-hidde">
					<td className="hidden md:table-cell border border-arrow">3</td>
					<td className="flex justify-center items-center md:table-cell min-w-[224px] sm:min-w-[233px] md:w-[318px] px-[5px] md:px-[14px] py-2 leading-[150%] text-left border-x border-t border-arrow bg-main-dark z-9">Реалізація абонементів на відвідування сауни</td>
					<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[166px] border-r border-t border-arrow ${extra}`}>2 години</td>
					<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[167px] border-r border-t border-arrow ${extra}`}>500 грн.</td>
				</tr>
				<tr className="flex md:table-row text-center w-[333px] sm:w-[343px] md:w-[680px] overflow-hidde">
					<td className="hidden md:table-cell border border-arrow">4</td>
					<td className="flex justify-center items-center md:table-cell min-w-[224px] sm:min-w-[233px] md:w-[318px] px-[5px] md:px-[14px] py-2 leading-[150%] text-left border-x border-t border-arrow bg-main-dark z-9">Проведення групових та індивідуальних занять з фізичної культури і спорту</td>
					<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[166px] border-r border-t border-arrow ${extra}`}>1 година 30 хв.</td>
					<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[167px] border-r border-t border-arrow ${extra}`}>250 грн.</td>
				</tr>
				<tr className="flex md:table-row text-center w-[333px] sm:w-[343px] md:w-[680px] overflow-hidde">
					<td className="hidden md:table-cell border border-arrow">5</td>
					<td className="flex justify-center items-center md:table-cell min-w-[224px] sm:min-w-[233px] md:w-[318px] px-[5px] md:px-[14px] py-2 leading-[150%] text-left  border-x border-y border-arrow bg-main-dark z-9">Надання спортивних споруд учасникам спортивних заходів приміщень пристосованих для тимчасового проживання</td>
					<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[166px] border-r border-y border-arrow ${extra}`}>1 місяць</td>
					<td className={`flex justify-center items-center md:table-cell min-w-[112px] md:w-[167px] border-r border-y border-arrow ${extra}`}>1200 грн.</td>
				</tr>
			</tbody>
		</table>
	);
});

export default FootballServicesTable;