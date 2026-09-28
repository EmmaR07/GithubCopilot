# Task Manager

A polished, lightweight task management web app built with HTML, CSS, and JavaScript. It helps users organize daily responsibilities by allowing them to add tasks, complete them, remove them individually, and clear completed items in one click.

## Overview

This project is a simple front-end application designed to demonstrate clean UI structure, interactivity, and task state management without the need for a backend. It is ideal for beginners learning DOM manipulation, event listeners, and responsive styling.

## Features

- Add new tasks from a simple input form
- Mark tasks complete with checkboxes
- Visually strike through completed tasks
- Delete individual tasks
- Remove all completed tasks with a dedicated action button
- Responsive, minimal interface built with modern front-end basics

## Project Structure

- `mainPage.html` — app layout and task form structure
- `styles.css` — visual styling for the interface
- `script.js` — task creation, rendering, and state updates

## Installation

1. Clone or download the repository.
2. Navigate to the project directory:

```bash
cd /Users/emco2731/GithubCopilot
```

3. Start a local web server:

```bash
python3 -m http.server 8000
```

4. Open the app in your browser:

```text
http://localhost:8000/mainPage.html
```

## Usage

1. Enter a task in the input field.
2. Click the Add Task button or press Enter.
3. Use the checkbox to mark a task as complete.
4. Click Delete to remove a single task.
5. Click Delete Completed to remove all finished tasks.

## Example Workflow

```text
Add: "Review project proposal"
Complete the task
Delete completed items when ready
```

## Future Enhancements

- Save tasks in localStorage
- Add task editing functionality
- Add filters for all / active / completed tasks
- Improve accessibility and keyboard support

## License

This project is open for personal and educational use.
