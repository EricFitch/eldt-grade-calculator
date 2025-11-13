# ELDT Grade Calculator

A React-based web application for calculating and displaying course averages from Entry-Level Driver Training (ELDT) grade data.

## Features

- 📊 **Excel File Processing**: Upload `.xlsx`, `.xls`, or `.csv` files containing grade data
- 🎯 **Automatic Grade Calculation**: Calculates averages for ELDT courses (Class B, P Endorsement, S Endorsement)
- 🖨️ **Selective Printing**: Choose which courses to include in printed reports
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🌓 **Dark Mode Support**: Automatic dark mode based on system preferences
- 🎨 **Modern UI**: Built with Tailwind CSS for a clean, professional interface

## Course Support

The application automatically calculates averages for the following courses:
- ELDT - Class B
- ELDT - P Endorsement
- ELDT - S Endorsement

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/EricFitch/eldt-grade-calculator.git
cd eldt-grade-calculator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`.

## Usage

1. **Upload a File**: Drag and drop your Excel file or click to select a file
2. **View Results**: The app automatically calculates course averages
3. **Select Courses**: Use checkboxes to select which courses to print
4. **Print**: Click "Print Selected" to generate a printable report

### File Format Requirements

Your Excel file should contain columns named:
- **Assignment Name**: Contains the course name (e.g., "ELDT - Class B")
- **Grade**: Contains the grade value (as percentage or decimal)

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm run preview` - Previews the production build locally

## Technology Stack

- **React 18** - UI framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Styling
- **xlsx** - Excel file processing
- **Vitest** - Testing framework

## Project Structure

```
eldt-grade-calculator/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── CourseCard.jsx
│   │   ├── FileUpload.jsx
│   │   └── ResultsDisplay.jsx
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   └── index.jsx        # Application entry point
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
└── vite.config.js       # Vite configuration
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

For issues, questions, or suggestions, please open an issue on GitHub.

A React-based application for calculating and printing ELDT (Entry-Level Driver Training) course grades from Excel/CSV files.

## Features

- 📁 **Drag & Drop File Upload** - Easy file uploading for .xlsx and .csv files
- 📊 **Grade Calculations** - Automatic calculation of course averages for:
  - ELDT - Class B
  - ELDT - P Endorsement
  - ELDT - S Endorsement
- 🖨️ **Selective Printing** - Choose which courses to print (all, one, or multiple)
- 🌓 **Dark Mode Support** - Automatic light/dark theme switching
- 📱 **Responsive Design** - Works on desktop and mobile devices

## Usage

1. **Upload File**: Drag and drop your Excel/CSV file onto the upload area, or click to browse
2. **View Results**: The app automatically calculates and displays grades for all three ELDT courses
3. **Select Courses**: Check/uncheck the boxes next to each course to select what to print
4. **Print**: Click "Print Selected" to print only the courses you've chosen

### File Format Requirements

Your Excel/CSV file should contain:
- A column named **"Assignment Name"** - containing course names
- A column named **"Grade"** - containing scores (can be percentages like "95%" or decimals like 0.95)

## Tech Stack

- **React** - UI framework
- **Tailwind CSS** - Styling
- **xlsx** - Excel/CSV file parsing
- **Vite** - Build tool and dev server

This project was bootstrapped with [Vite](https://vitejs.dev/).

## Available Scripts

In the project directory, you can run:

### `npm start`

We've already run this for you in the `Codespaces: server` terminal window below. If you need to stop the server for any reason you can just run `npm start` again to bring it back online.

Runs the app in the development mode.\
Open [http://localhost:3000/](http://localhost:3000/) in the built-in Simple Browser (`Cmd/Ctrl + Shift + P > Simple Browser: Show`) to view your running application.

The page will reload automatically when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Vite documentation](https://vitejs.dev/guide/).

To learn Vitest, a Vite-native testing framework, go to [Vitest documentation](https://vitest.dev/guide/)

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://sambitsahoo.com/blog/vite-code-splitting-that-works.html](https://sambitsahoo.com/blog/vite-code-splitting-that-works.html)

### Analyzing the Bundle Size

This section has moved here: [https://github.com/btd/rollup-plugin-visualizer#rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer#rollup-plugin-visualizer)

### Making a Progressive Web App

This section has moved here: [https://dev.to/hamdankhan364/simplifying-progressive-web-app-pwa-development-with-vite-a-beginners-guide-38cf](https://dev.to/hamdankhan364/simplifying-progressive-web-app-pwa-development-with-vite-a-beginners-guide-38cf)

### Advanced Configuration

This section has moved here: [https://vitejs.dev/guide/build.html#advanced-base-options](https://vitejs.dev/guide/build.html#advanced-base-options)

### Deployment

This section has moved here: [https://vitejs.dev/guide/build.html](https://vitejs.dev/guide/build.html)

### Troubleshooting

This section has moved here: [https://vitejs.dev/guide/troubleshooting.html](https://vitejs.dev/guide/troubleshooting.html)
