# Expense Tracker

A modern and user-friendly expense tracking application built with React, TypeScript, and Vite. This project helps users manage personal finances by adding, editing, filtering, and deleting expenses with a clean and responsive interface.

## Features

- Add new expenses with description, amount, and category
- Edit or delete existing expenses
- Filter expenses by category
- Persist data locally in the browser using local storage
- Responsive UI with a polished Chakra UI design
- Dark mode support for a better viewing experience

## Tech Stack

- React 19
- TypeScript
- Vite
- Chakra UI
- React Hook Form
- Zod
- Framer Motion

## Project Overview

Expense Tracker is designed to make everyday budgeting simple and efficient. Whether you are tracking daily purchases, recurring bills, or personal spending habits, the app provides a straightforward way to stay organized.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js 18 or newer
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <https://github.com/Battashi-Dev/expensive-tracker.git>
   cd expensive-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit:
   ```text
   http://localhost:5173
   ```

## Available Scripts

- `npm run dev` — Start the Vite development server
- `npm run build` — Create a production build
- `npm run preview` — Preview the production build locally
- `npm run lint` — Run ESLint checks

## Project Structure

```text
src/
  Components/
    ExpensiveForm.tsx
    ExpensiveList.tsx
    ExpensiveFilter.tsx
    NavBar.tsx
    Theme.tsx
    Validation.ts
    Hooks/
      useExpense.ts
  App.tsx
  main.tsx
```

## Usage

- Enter an expense description, amount, and category in the form.
- Submit the form to add a new expense.
- Use the filter options to view expenses from a specific category.
- Edit or remove entries as needed.

## Notes

Expenses are saved in the browser's local storage, so they remain available on refresh and between sessions on the same device.

## License

This project is open-source and available for personal and educational use.
