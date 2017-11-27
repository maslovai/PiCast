# PiCast
Raspberry Pi turns on led lights to indicate the daily weather forecast by geolocation

## Usage
Create a `.env` file in the root directory of your project. Add environment-specific variables on new lines in the form of NAME=VALUE. You will need an API key for Weather Underground and an account with MLAB:

```API_KEY=key
MLAB=mongodb://myGithubUsername:myMlabAccount.mlab.com:port/database```

 To run using the button listener on raspberry pi:
  `npm start` from root directory

 ## PiCast Keys

 ![Forecast key](graphics-README/PI_FORECAST.png?raw=true "PiCast Forecast Key")

 ![Temperature key](graphics-README/PI_TEMP.png?raw=true "PiCast Temperature Key")


* Weather Request
* Weather Data Parsing
* Send GPIO Signal / Button listener

