# Weather App using OpenWeather Api


## Prerequisites

Before you begin, make sure you have the following prerequisites installed on your machine:

- [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.


## Setup

Clone this repository to your local machine:

   ```bash
    git clone "https://github.com/mshahid153/WeatherApp.git"
   ```

## Installation

1 . Install dependencies:

```bash
    npm install
```

2 . Start the Application:

```bash
    npm start
```

The server will be running on [http://localhost:3000](http://localhost:3000).

## Features

1. **Weather Search Functionality:**
   - Users can enter a location in a search bar and press the Enter key to fetch weather data from the OpenWeatherMap API. The weather data includes temperature, weather description, feels-like temperature, humidity, and wind speed.

2. **Dark Mode Toggle:**
   - The application provides a dark mode option, allowing users to switch between light and dark themes.

3. **Error Handling:**
   - The application handles various types of errors, such as invalid location input, network issues, and unexpected errors, providing appropriate error messages to the user.

4. **API Integration:**
   - The OpenWeatherMap API is used to fetch weather data based on the user's input location.

5. **Responsive UI:**
   - The UI adjusts based on the state of the application, displaying error messages, weather data, and theme changes dynamically.
