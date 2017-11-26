#Controller.js
This is a module found in the lib/light-display folder. The purpose of this module is to control the other two modules in that folder, temperature & forecast.

This  simple module is what brings all our work together under one roof.

###Modules it uses:
*####forecast.js
  This module gets data from the MLAB database and returns information on which lights to turn on or off based on the weather for the current city.
*####temperature.js
  This module gets data from the MLAB database and returns information on which lights to turn on or off based on the temperature for the current city.
