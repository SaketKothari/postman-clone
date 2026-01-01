# Postman Clone

A lightweight, browser-based API testing tool inspired by Postman. Test your APIs with a clean interface and get instant feedback on response status, timing, and data.

<img src="https://user-images.githubusercontent.com/81709725/131958479-851518ec-f4a0-46ed-9475-beb933bccefc.png" alt="Postman Clone Screenshot" />

## ✨ Features

- **Multiple HTTP Methods** - Support for GET, POST, PUT, PATCH, and DELETE requests
- **Query Parameters** - Add and manage URL query parameters dynamically
- **Custom Headers** - Set custom request headers for authentication and configuration
- **JSON Request Body** - Send JSON payloads with syntax highlighting and validation
- **Response Viewer** - View formatted responses with detailed information
- **Performance Metrics** - Track response time, status codes, and response size
- **Code Editor** - Integrated CodeMirror editor with JSON syntax support

## 🛠️ Tech Stack

- **[Axios](https://axios-http.com/)** - Promise-based HTTP client for making API requests
- **[Bootstrap 5](https://getbootstrap.com/)** - Modern, responsive UI components and styling
- **[CodeMirror](https://codemirror.net/)** - Advanced code editor with JSON support
- **[Vite](https://vitejs.dev/)** - Fast build tool with hot module replacement
- **[pretty-bytes](https://github.com/sindresorhus/pretty-bytes)** - Convert bytes to human-readable strings

## 🔧 How It Works

The application is built using a modern, modular JavaScript architecture:

1. **User Interface** - Bootstrap 5 provides responsive components and styling for the request builder interface, including tabs, input groups, and buttons.

2. **Request Building** - Users can configure HTTP requests through an intuitive interface:

  - Select HTTP method from a dropdown (GET, POST, PUT, PATCH, DELETE)
  - Enter the target URL
  - Add query parameters as key-value pairs
  - Set custom headers for authentication or content negotiation
  - Write JSON request bodies using the CodeMirror editor with syntax highlighting

3. **Request Execution** - When the user clicks "Send":

  - The form data is collected and validated
  - Query parameters are appended to the URL
  - Axios constructs and sends the HTTP request with the specified method, headers, and body
  - The application tracks the request start time

4. **Response Handling** - After receiving the response:

  - Response data is formatted and displayed with syntax highlighting
  - HTTP status code is shown with appropriate styling (success/error)
  - Response time is calculated and displayed in milliseconds
  - Response size is calculated and formatted using pretty-bytes
  - Headers from the response are displayed in a readable format

5. **Code Editor Integration** - CodeMirror provides:

  - JSON syntax highlighting and validation
  - Auto-completion for JSON structures
  - Linting to catch syntax errors before sending
  - Search and command capabilities

6. **Development Workflow** - Vite handles:
  - Fast hot module replacement (HMR) for instant updates during development
  - Optimized bundling of all dependencies for production
  - Modern ES module support

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/SaketKothari/postman-clone.git
cd postman-clone
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📖 Usage

1. **Select HTTP Method** - Choose from GET, POST, PUT, PATCH, or DELETE
2. **Enter URL** - Type or paste the API endpoint URL
3. **Add Query Parameters** (optional) - Click "Add" under Query Params tab to add key-value pairs
4. **Add Headers** (optional) - Switch to Headers tab to add custom headers
5. **Add JSON Body** (optional) - For POST/PUT/PATCH requests, use the JSON tab to add request body
6. **Send Request** - Click the "Send" button to make the request
7. **View Response** - Check the response data, status code, timing, and size below

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/SaketKothari/postman-clone/issues).

## 📝 License

This project is [ISC](LICENSE) licensed.

## 👨‍💻 Author

**Saket Kothari**

- GitHub: [@SaketKothari](https://github.com/SaketKothari)

---

⭐ Star this repository if you find it helpful!

