import { useState } from 'react';
import './App.css';
import FileUpload from './components/FileUpload';
import ResultsDisplay from './components/ResultsDisplay';

function App() {
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('info');
  const [results, setResults] = useState(null);

  const handleFileProcessed = (data, type) => {
    if (type === 'success') {
      // Process the data to calculate course averages
      calculateCourseAverages(data);
    } else {
      setMessage(data);
      setMessageType(type);
      setResults(null);
    }
  };

  const calculateCourseAverages = (data) => {
    const coursesToAverage = [
      'ELDT - Class B',
      'ELDT - P Endorsement',
      'ELDT - S Endorsement'
    ];

    const firstRow = data[0];
    let assignmentKey = null;
    let gradeKey = null;

    // Find the exact keys for 'Assignment Name' and 'Grade'
    for (const key in firstRow) {
      const lowerKey = key.toLowerCase().trim();
      if (lowerKey === 'assignment name') {
        assignmentKey = key;
      }
      if (lowerKey === 'grade') {
        gradeKey = key;
      }
    }

    if (!assignmentKey) {
      setMessage("Error: A column named 'Assignment Name' was not found.");
      setMessageType('error');
      return;
    }
    if (!gradeKey) {
      setMessage("Error: A column named 'Grade' was not found.");
      setMessageType('error');
      return;
    }

    const calculatedResults = {};
    let dataFoundForAnyCourse = false;

    coursesToAverage.forEach(courseName => {
      const courseRows = data.filter(row =>
        row[assignmentKey] && row[assignmentKey].toString().trim() === courseName
      );

      if (courseRows.length > 0) {
        const scores = courseRows
          .map(row => {
            let score = row[gradeKey];
            if (typeof score === 'string') {
              score = parseFloat(score.replace('%', '').trim());
            } else if (typeof score === 'number' && score >= 0 && score <= 1) {
              score = score * 100;
            }
            return score;
          })
          .filter(score => !isNaN(score));

        if (scores.length > 0) {
          const sum = scores.reduce((total, score) => total + score, 0);
          const average = sum / scores.length;
          calculatedResults[courseName] = {
            average: average.toFixed(2),
            count: scores.length,
            total: sum.toFixed(2)
          };
          dataFoundForAnyCourse = true;
        } else {
          calculatedResults[courseName] = {
            average: 'No valid grades found',
            count: 0,
            total: 'N/A'
          };
        }
      } else {
        calculatedResults[courseName] = {
          average: 'Course not found',
          count: 0,
          total: 'N/A'
        };
      }
    });

    if (!dataFoundForAnyCourse) {
      setMessage("Could not find any scorable data for the specified courses.");
      setMessageType('error');
      setResults(null);
    } else {
      setMessage('');
      setResults(calculatedResults);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 flex items-center justify-center p-4 print:bg-white print:text-slate-900">
      <div className="w-full max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 md:p-8 print:shadow-none print:bg-white">
        <div className="text-center mb-6 print:mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white print:text-slate-900">
            ELDT Course Grade Calculator
          </h1>
          <p className="text-slate-500 dark:text-slate-400 mt-2 print:hidden">
            Drop your .xlsx or .csv file to calculate scores.
          </p>
        </div>

        <div className="print:hidden">
          <FileUpload onFileProcessed={handleFileProcessed} />
        </div>

        {message && (
          <div className="mt-6 text-center print:hidden">
            <p
              className={`text-lg ${
                messageType === 'error'
                  ? 'text-red-500 dark:text-red-400'
                  : messageType === 'info'
                  ? 'text-blue-500 dark:text-blue-400'
                  : 'text-green-500 dark:text-green-400'
              }`}
            >
              {message}
            </p>
          </div>
        )}

        {results && <ResultsDisplay results={results} />}
      </div>
    </div>
  );
}

export default App;
