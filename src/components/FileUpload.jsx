import { useState } from 'react';

export default function FileUpload({ onFileProcessed }) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFileInput = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      handleFile(files[0]);
    }
  };

  const handleFile = (file) => {
    onFileProcessed('Processing your file...', 'info');
    
    const reader = new FileReader();
    reader.onload = function(event) {
      try {
        // Dynamic import of xlsx to avoid SSR issues
        import('xlsx').then((XLSX) => {
          const data = new Uint8Array(event.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const firstSheetName = workbook.SheetNames[0];
          const worksheet = workbook.Sheets[firstSheetName];
          const json = XLSX.utils.sheet_to_json(worksheet);
          
          if (json.length === 0) {
            onFileProcessed('Error: The uploaded file is empty or could not be read.', 'error');
            return;
          }

          onFileProcessed(json, 'success');
        });
      } catch (err) {
        console.error("Error processing file:", err);
        onFileProcessed('Error: Failed to process the file. Please ensure it is a valid .xlsx or .csv file.', 'error');
      }
    };
    
    reader.onerror = function() {
      onFileProcessed('Error: Could not read the file.', 'error');
    };
    
    reader.readAsArrayBuffer(file);
  };

  return (
    <div
      id="drop_zone"
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
        isDragging
          ? 'border-blue-500 bg-blue-50 dark:bg-slate-700'
          : 'border-slate-300 dark:border-slate-600'
      }`}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={() => document.getElementById('file_input').click()}
    >
      <input
        type="file"
        id="file_input"
        className="hidden"
        accept=".xlsx, .xls, .csv"
        onChange={handleFileInput}
      />
      <p className="text-slate-500 dark:text-slate-400">
        Drag & drop your file here or{' '}
        <span className="text-blue-500 font-semibold">click to select a file</span>.
      </p>
    </div>
  );
}
