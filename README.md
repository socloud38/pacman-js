#Set Up project

##Installation NPM:
```
    npm install
```
##execute server:
```bash
    npm run server
```
##Open on browser:

[LocalHost:9000](http://localhost:9000)

#Structure of projet

I have use Webpack bundler for make this project on node.js.
Webpack is also good for optimize all the project and easy to set up with npm package.
I have split the project  in multiple js file for make the debug more easily, but finally webpack follow the import way and put all the js files in one.

###Structure of JS:

* Classes
    * Character for the basic features used by player and NPC.
    * PacMan who is played by player, this class extend Character class.
    * Ghost who is a monster he is the defeat condition, this class extend also Character.


* Components
    * env.js contain all the environment stats like screen for example.
    * food.js stats for place the food on the map.
    * ghost and pacman stats are here for export all variables who is needed in classes.
    * and the wall.js is here for export the walls stats (really?).
    

* Events
    * Defeat event is here for check if PacMan is triggered by a ghost, if it's true defeat screen appear.
    * Victory event will check if PacMan have eat all foods, if it's true a victory screen will appear.
    
###Structure Webpack

* I have use some plugins.
    * MiniCSSPlugin for make working webpack with css files.
    * HTMLTemplate for build my html with webpack.
    * CleanWebpackPlugin for remove all files at the start of building

* Webpack building in my build directory from assets directory.

```
//src files  
│── assets  
│   │── css  
│   │   │── style.css  
│   │── images  
│   │   │── favicone  
│   │   │   │── favicone.ico  
│   │── js  
│   │   │── classes  
│   │   │── components  
│   │   │── events  
│   │   │── app.js  
│   │── index.html  
//build files  
│── build  
│   │── app.js  
│   │── style.css  
│   └── index.html
```