export default function CourseCard({ courseName, result, isSelected, onToggleSelect }) {
  const isError = typeof result.average === 'string' && isNaN(result.average);

  return (
    <div className="mb-4 p-4 border border-slate-200 dark:border-slate-700 rounded-lg print:border-slate-400">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-bold text-lg text-slate-800 dark:text-slate-200 print:text-slate-900">
          {courseName}
        </h3>
        <input
          type="checkbox"
          checked={isSelected}
          onChange={() => onToggleSelect(courseName)}
          className="mt-1 w-5 h-5 cursor-pointer print:hidden"
          aria-label={`Select ${courseName} for printing`}
        />
      </div>

      <div className="flex justify-between items-center text-sm">
        <span className="text-slate-600 dark:text-slate-400 print:text-slate-700">
          Average Grade:
        </span>
        <span
          className={`font-semibold ${
            isError
              ? 'text-amber-600 dark:text-amber-500 print:text-amber-700'
              : 'text-green-600 dark:text-green-400 print:text-green-700'
          }`}
        >
          {isError ? result.average : `${result.average}% (from ${result.count} grades)`}
        </span>
      </div>

      <div className="flex justify-between items-center text-sm mt-1">
        <span className="text-slate-600 dark:text-slate-400 print:text-slate-700">
          Total Score:
        </span>
        <span
          className={`font-bold ${
            result.total === 'N/A'
              ? 'text-amber-600 dark:text-amber-500 print:text-amber-700'
              : 'text-indigo-600 dark:text-indigo-400 print:text-indigo-700'
          }`}
        >
          {result.total}
        </span>
      </div>
    </div>
  );
}
