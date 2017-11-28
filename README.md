# PiCast
Raspberry Pi turns on led lights to indicate the daily weather forecast by geolocation

## Usage
Create a `.env` file in the root directory of your project. Add environment-specific variables on new lines in the form of NAME=VALUE. You will need an API key for Weather Underground and an account with MLAB:

`API_KEY=key`

`MLAB=mongodb://myGithubUsername:myMlabAccount.mlab.com:port/database`

In its' own terminal - run the following command to set-up the automatic hourly request and storage of weather data based on your location `node weather-index.js`. 

Make sure to run this step prior to running `npm start` in its own terminal (next step), failing to do so will result in not receiving any new and current weather data.

After completing prior step - to run using the button listener on raspberry pi:
  `npm start` from root directory

 ## PiCast Keys

 ![Forecast key](graphics-README/PI_FORECAST.png?raw=true)

 ![Temperature key](graphics-README/PI_TEMP.png?raw=true)

 ![Raspberry Pi](graphics-README/GGPercyMacmillanIII.jpg?raw=true)

