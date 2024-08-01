# Address Selection

Address Selection is a web application that provides address suggestions using the Loqate API as you type. It is built with React for the frontend and MongoDB for database storage.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Database](#database)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Address Autocomplete**: Utilizes the Loqate API to suggest addresses dynamically as the user types.
- **Save Addresses**: Stores selected addresses in MongoDB for future reference.
- **Responsive UI**: Built with React to ensure a responsive and intuitive user interface.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Devgarg1302/LoqateApi.git
    cd address-selection
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in the root directory.
    - Add your MongoDB connection string and Loqate API key to the `.env` file.
    ```sh
    MONGODB_URI=your_mongodb_connection_string
    LOQATE_API_KEY=your_loqate_api_key
    ```

## Usage

1. Start the development server:
    ```sh
    npm start
    ```

2. Open your browser and go to `http://localhost:3000` to view the application.

## API

### Address Autocomplete

- **Endpoint**: `https://api.addressy.com/Capture/Interactive/Find/v1.10/json3.ws`
- **Method**: POST
- **Description**: Provides address suggestions based on user input using the Loqate API.

## Database

### MongoDB

- **Database**: Stores selected addresses for future retrieval and usage within the application.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
