<div style="display: flex; flex-direction: row; gap: 5px;">
   <img src="https://github.com/user-attachments/assets/8af3d828-6b2b-455a-a965-fbc9cb357823" alt="Bookwave Logo" style="width: 30px;" />

   <h1>Bookwave - A Book Library App</h1>
</div>

Welcome to **Bookwave**, a modern web application that allows users to search for books, explore detailed information, and read books online. This project was built as part of my ALX Frontend (FE) Web Development Capstone.

<h2>Table of Contents</h2>

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Live Demo](#live-demo)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Challenges](#challenges)
- [Learnings](#key-learnings)
- [License](#license)

<h2 id="overview">Overview</h2>

<p>Bookwave is a responsive and intuitive web application designed to help book enthusiasts discover new books easily. Users can search for any book by title, browse detailed book information such as author, cover image, and more, and even read available books online.</p>

<p>The project initially leveraged the <b>Open Library API</b> to fetch real-time book data. However, a few days after deployment, the Open Library API experienced downtime, and the application was unable to fetch data. To ensure continued functionality, I switched to using the <b>Google Books API</b>, which allowed the app to stay operational.</p>

<h2 id="features">Features</h2>

- **Search Functionality**: Easily search for books by title, author, or keyword.
- **Detailed Book Information**: View in-depth details for each book, including author names, cover images, and publish dates.
- **Read Online**: Direct integration with the available APIs to allow users to read books online.
- **Responsive Design**: The app is fully responsive, ensuring a great experience across mobile, tablet, and desktop devices.

<h2 id="tech-stack">Tech Stack</h2>

- **Frontend**:
  <div style="display: flex; flex-direction: row; gap: 5px;">
     <img src="https://github.com/user-attachments/assets/306800ef-c7f3-402a-9d59-3df2ac5a4d83" alt="React.js Logo" style="width: 25px;" />
     <img src="https://github.com/user-attachments/assets/f15a2862-9ce7-4e0a-a338-af70ce782b86" alt="Tailwind CSS Logo" style="width: 25px;" />
  </div>
- **Build Tool**:
  <div style="display: flex; flex-direction: row; gap: 5px;">
      <img src="https://github.com/user-attachments/assets/656384b8-08e8-4664-96f5-0f4778aa8c80" alt="Vite Logo" style="width: 25px;" />
  </div>
- **APIs**:
  - <a href="https://openlibrary.org/developers/api" target="_blank">Open Library API</a> (Initially)
  - <a href="https://developers.google.com/books/docs/v1/getting_started" target="_blank">Google Books API</a> (Current)
- **Deployment**: Vercel

<h2 id="live-demo">Live Demo</h2>

Check out the live version of the app here: <a href="https://thebookwave.vercel.app" target="_blank">BookWave</a>

<h2 id="installation">Installation</h2>

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/StewartIsaac/BookWave.git
   cd bookwave
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

<h2 id="usage">Usage</h2>

- **Search for Books**: Use the search bar on the homepage to look for books by entering a title, author, or keyword.
- **View Book Details**: Click on any book card to see detailed information about the selected book.
- **Read Online**: If a book is available for online reading, click the "Read Now" button to open the book.

<h2 id="api">API</h2>

This project initially used the Open Library API but switched to the Google Books API due to downtime with the former. The key endpoints utilized are:

- **Search API**: Allows searching for books by title, author, or ISBN.
- **Volume API (Google Books)**: Provides detailed information about a specific book.
- **Read API**: Enables online reading of available books.
  For more details, visit the <a href="https://developers.google.com/books/docs/v1/getting_started" target="_blank">Google Books API documentation</a>.

<h2 id="challenges">Challenges</h2>

- **API Downtime**: Shortly after deployment, the Open Library API server went down, and I had to switch to the Google Books API to maintain the app's functionality.
- **Routing Issues**: Debugging routing issues for the book detail page required attention to URL path formatting and ensuring the correct book IDs were passed.
- **Responsive Design:** Ensuring the app looked good on all device sizes was a challenge, which I resolved using Tailwind CSS's responsive design utilities.

<h2 id="key-learnings">Key Learnings</h2>

- **API Integration**: Working with multiple APIs provided valuable experience in handling external APIs, data fetching, and error management.
- **React Best Practices**: I enhanced my understanding of component-based architecture, React Router, and state management.
- **Handling API Failures**: The project taught me how to implement robust error handling to ensure a smooth user experience, even when an API is down.

<h2 id="license">License</h2>

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.
