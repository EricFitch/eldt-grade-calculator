import { useState } from 'react';
import CourseCard from './CourseCard';

export default function ResultsDisplay({ results }) {
  const [selectedCourses, setSelectedCourses] = useState(
    Object.keys(results || {}).reduce((acc, course) => {
      acc[course] = true;
      return acc;
    }, {})
  );

  const toggleCourseSelection = (courseName) => {
    setSelectedCourses(prev => ({
      ...prev,
      [courseName]: !prev[courseName]
    }));
  };

  const selectAll = () => {
    const allSelected = {};
    Object.keys(results).forEach(course => {
      allSelected[course] = true;
    });
    setSelectedCourses(allSelected);
  };

  const selectNone = () => {
    const noneSelected = {};
    Object.keys(results).forEach(course => {
      noneSelected[course] = false;
    });
    setSelectedCourses(noneSelected);
  };

  const handlePrint = () => {
    // Hide unselected courses before printing
    const style = document.createElement('style');
    style.id = 'print-filter-style';
    const hiddenCourses = Object.keys(selectedCourses)
      .filter(course => !selectedCourses[course])
      .map(course => `[data-course="${course}"]`)
      .join(', ');
    
    if (hiddenCourses) {
      style.textContent = `@media print { ${hiddenCourses} { display: none !important; } }`;
      document.head.appendChild(style);
    }

    window.print();

    // Remove the style after printing
    setTimeout(() => {
      const styleEl = document.getElementById('print-filter-style');
      if (styleEl) {
        styleEl.remove();
      }
    }, 1000);
  };

  if (!results || Object.keys(results).length === 0) {
    return null;
  }

  const selectedCount = Object.values(selectedCourses).filter(Boolean).length;

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-4 print:hidden">
        <div className="text-sm text-slate-600 dark:text-slate-400">
          <span className="font-semibold">{selectedCount}</span> of{' '}
          <span className="font-semibold">{Object.keys(results).length}</span> selected
        </div>
        <div className="flex gap-2">
          <button
            onClick={selectAll}
            className="px-3 py-1 text-sm bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded hover:bg-slate-300 dark:hover:bg-slate-600 transition"
          >
            Select All
          </button>
          <button
            onClick={selectNone}
            className="px-3 py-1 text-sm bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded hover:bg-slate-300 dark:hover:bg-slate-600 transition"
          >
            Select None
          </button>
          <button
            onClick={handlePrint}
            disabled={selectedCount === 0}
            className="px-4 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-slate-400 disabled:cursor-not-allowed transition font-semibold"
          >
            Print Selected ({selectedCount})
          </button>
        </div>
      </div>

      <div className="text-left">
        {Object.keys(results).map(courseName => (
          <div key={courseName} data-course={courseName}>
            <CourseCard
              courseName={courseName}
              result={results[courseName]}
              isSelected={selectedCourses[courseName]}
              onToggleSelect={toggleCourseSelection}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
