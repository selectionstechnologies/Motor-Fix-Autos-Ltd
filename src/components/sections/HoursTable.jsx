import { schedule } from '../../data/business';
import { formatDayHours, useHoursStatus } from '../../lib/hours';

export default function HoursTable({ compact = false }) {
  const status = useHoursStatus();
  const pad = compact ? 'px-4 py-3' : 'px-5 py-4 sm:px-6';
  return (
    <div className="card overflow-hidden">
      <table className="w-full text-left text-[15px]">
        <caption className="sr-only">Weekly opening hours</caption>
        <thead className="border-b border-line-light bg-paper">
          <tr>
            <th scope="col" className={`${pad} font-semibold text-text`}>Day</th>
            <th scope="col" className={`${pad} text-right font-semibold text-text`}>Hours</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((d) => {
            const isToday = d.day === status?.today;
            return (
              <tr
                key={d.day}
                aria-current={isToday ? 'date' : undefined}
                className={`border-b border-line-light last:border-0 ${isToday ? 'bg-brand-soft' : ''}`}
              >
                <th scope="row" className={`${pad} font-medium text-text`}>
                  <span className="flex flex-wrap items-center gap-2">
                    {d.day}
                    {isToday && <span className="rounded-sm bg-ink px-1.5 py-0.5 text-xs font-semibold text-white">Today</span>}
                  </span>
                </th>
                <td className={`${pad} text-right ${d.closed ? 'text-text-mute' : 'text-text'}`}>{formatDayHours(d)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
