#Controller.js
This is a module found in the lib/light-display folder. The purpose of this module is to control the other two modules in that folder, "temperature" & "forecast". This simple module is what brings all our work together under one roof.

The basic way this module works is by running "npm start" in the command line.

Once that is done it is set up to watch for a button to be pressed.

When someone presses the button it uses the "find-newest" module to get the latest weather report from the database.

Once it has the information it uses "print-forecast" to display all the weather information in the terminal.

At the same time it will use "forecast" to light up various lights dependent on the weather out side. And it will use "temperature" to light up a string of lights (like an old thermostat) based on how hot or cold it is outside.


###Modules it uses:
* forecast.js
   This module gets data from the MLAB database and returns information on which lights to turn on or off based on the weather for the current city.
* temperature.js
   This module gets data from the MLAB database and returns information on which lights to turn on or off based on the temperature for the current city.
* find-newest.js
  Grabs the most recent weather report from the MLAB database.
* print-forecast.js
  Helps to make the object returned from the database more readable.
