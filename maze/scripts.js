//makes player character draggable by holding left click with JqueryUI - Draggable
$("#player").draggable({
    containment: "parent",
    cancel:false
});

//return a random number btw 0 and 5,4,3,2,1
//var randNum = Math.floor((Math.random() * (5-i)));

/**
 * This method is called first. It pops up the instructions before the game starts.
 */
const startGame = () => {
    window.alert("Hi, welcome to my maze game. Drag the Mystery Machine character (left mouse button) to move it around and avoid any contact with the barriers.\
 Your goal is to get to the Scooby Snack. This game is intended to be play on a fully-sized computer screen. Press ok to continue for these pop up boxes.")
}

/**
 * This method is called in the overlap method. It shows the game lost message whenever the player collides with the obstacles set up and then reloads the page
 * to start a new game.
 */
const lostScreen = () => {
    window.alert("Sorry, you lost. Better luck next time.");
    window.location.reload(false); //reloads the page
}

/**
 * This method is called in the overlap method. It shows the game won message whenever the player collides with the scooby snack set up and then reloads the page
 * to start a new game.
 */
const winScreen = () => {
    window.alert("Winner winner chicken dinner!!!");
    window.location.reload(false); //reloads the page
}

/**
 * This method generates the maze by appending individual images on top of the background we have. Since the obstacles are all rectangles,
 * I refer to them interchangeably as bars. Using four for loops, we generate five bars on the left, right, top, and bottom to create a rectangular maze.
 * The if statements within each loop is used to generate the gap so the player can pass through. The gap is usually made by appending two shorter bars
 * instead of the regular ones.
 */
const generateMaze = () => {
    //obstacleNum has to be same number as counter of loop in detectOverlap() to ensure the HTML element id corresponds
    var obstacleNum = 2;
    
    /* loop for left bars of maze (from leftmost to innermost)*/
    for(var i = 0; i < 5; i++){
        //case for creating a gap in this bar (made up by two smaller bars), hardcode the height
        if(i == 0){                                                 
            var height = 500 - (2 * 100);                           //Height goes from 500 to 100
            var top = 57 + (i * 50);                                //Top goes from 57, 107... to 257
            var left = 82 + (i * 75);                               //Left goes from 82, 157... to 382
            $("#doc").append('<img src = "https://t7.rbxcdn.com/35e6b88e90a14cd1e1c6fef3d05b62d5"' + 
            'alt = "Image unavailable" id = "obstacle' + obstacleNum + '" class = "obstacle' + obstacleNum + '" height = ' + height + 
            'px style = "top: ' + top + 'px; left: ' + left + 'px; width: 15px; position: absolute">');
            
            //append second bar on the bottom after the bar on the top
            obstacleNum++;
            height -= 150;
            top += 350;
            $("#doc").append('<img src = "https://t7.rbxcdn.com/35e6b88e90a14cd1e1c6fef3d05b62d5"' + 
            'alt = "Image unavailable" id = "obstacle' + obstacleNum + '" class = "obstacle' + obstacleNum + '" height = ' + height + 
            'px style = "top: ' + top + 'px; left: ' + left + 'px; width: 15px; position: absolute">');
            obstacleNum++;
        }
        //this case also create a gap, but this one doesn't need two bars as one short one is enough
        else if(i == 4){
            var height = 50;                                        
            var top = 57 + (i * 50);                                
            var left = 82 + (i * 75);                               
            $("#doc").append('<img src = "https://t7.rbxcdn.com/35e6b88e90a14cd1e1c6fef3d05b62d5"' + 
            'alt = "Image unavailable" id = "obstacle' + obstacleNum + '" class = "obstacle' + obstacleNum + '" height = ' + height + 
            'px style = "top: ' + top + 'px; left: ' + left + 'px; width: 15px; position: absolute">');
            obstacleNum++;
        }
        //regular case, can use loop counter i for height
        else{
            var height = 500 - (i * 100);
            var top = 57 + (i * 50);
            var left = 82 + (i * 75);
            $("#doc").append('<img src = "https://t7.rbxcdn.com/35e6b88e90a14cd1e1c6fef3d05b62d5"' + 
            'alt = "Image unavailable" id = "obstacle' + obstacleNum + '" class = "obstacle' + obstacleNum + '" height = ' + height + 
            'px style = "top: ' + top + 'px; left: ' + left + 'px; width: 15px; position: absolute">');
            obstacleNum++;
        }
    }

    /* loop for right bars of maze  (from rightmost to innermost)*/
    for(var i = 0; i < 5; i++){
        if(i == 1){
            var height = 500 - (3 * 100);
            var top = 57 + (i * 50);
            var left = 923 - (i * 75);
            $("#doc").append('<img src = "https://t7.rbxcdn.com/35e6b88e90a14cd1e1c6fef3d05b62d5"' + 
            'alt = "Image unavailable" id = "obstacle' + obstacleNum + '" class = "obstacle' + obstacleNum + '" height = ' + height + 
            'px style = "top: ' + top + 'px; left: ' + left + 'px; width: 15px; position: absolute">')
            obstacleNum++;

            height -= 50;
            top += 250;
            $("#doc").append('<img src = "https://t7.rbxcdn.com/35e6b88e90a14cd1e1c6fef3d05b62d5"' + 
            'alt = "Image unavailable" id = "obstacle' + obstacleNum + '" class = "obstacle' + obstacleNum + '" height = ' + height + 
            'px style = "top: ' + top + 'px; left: ' + left + 'px; width: 15px; position: absolute">');
            obstacleNum++;
        }
        else{
            var height = 500 - (i * 100);
            var top = 57 + (i * 50);
            var left = 923 - (i * 75);
            $("#doc").append('<img src = "https://t7.rbxcdn.com/35e6b88e90a14cd1e1c6fef3d05b62d5"' + 
            'alt = "Image unavailable" id = "obstacle' + obstacleNum + '" class = "obstacle' + obstacleNum + '" height = ' + height + 
            'px style = "top: ' + top + 'px; left: ' + left + 'px; width: 15px; position: absolute">')
            obstacleNum++;
        }
    }

    /* loop for bottom bars of maze (from innermost to bottommost)
    bars overlaps horizontals of other bars but not vertical
    */ 
    for(var i = 0; i < 5; i++){
        if(i == 2){
            var width = 250;
            var top = 350 + (i * 50);
            var left = 382 - (i * 75); //left equals to 232, so this bar's left boundary will be at 232
            $("#doc").append('<img src = "https://t7.rbxcdn.com/35e6b88e90a14cd1e1c6fef3d05b62d5"' + 
            'alt = "Image unavailable" id = "obstacle' + obstacleNum + '" class = "obstacle' + obstacleNum + '" height = 8px ' +
            'style = "top: ' + top + 'px; left: ' + left + 'px; width: ' + width + 'px; position: absolute">')
            obstacleNum++;

            width = 247; //adjusted to look nice
            left += 308; //add the width + 58 (gap width)
            $("#doc").append('<img src = "https://t7.rbxcdn.com/35e6b88e90a14cd1e1c6fef3d05b62d5"' + 
            'alt = "Image unavailable" id = "obstacle' + obstacleNum + '" class = "obstacle' + obstacleNum + '" height = 8px ' +
            'style = "top: ' + top + 'px; left: ' + left + 'px; width: ' + width + 'px; position: absolute">')
            obstacleNum++;
        }
        else{
            var width = 256 + (i * 150);
            var top = 350 + (i * 50);
            var left = 382 - (i * 75);
            $("#doc").append('<img src = "https://t7.rbxcdn.com/35e6b88e90a14cd1e1c6fef3d05b62d5"' + 
            'alt = "Image unavailable" id = "obstacle' + obstacleNum + '" class = "obstacle' + obstacleNum + '" height = 8px ' +
            'style = "top: ' + top + 'px; left: ' + left + 'px; width: ' + width + 'px; position: absolute">')
            obstacleNum++;
        }
    }

    /* loop for top bars of maze (from topmost to innermost) */
    for(var i = 0; i < 5; i++){
        if(i == 3){
            var width = 175; //Experimented
            var top = 57 + (i * 50);
            var left = 82 + (i * 75); //ends at 232
            $("#doc").append('<img src = "https://t7.rbxcdn.com/35e6b88e90a14cd1e1c6fef3d05b62d5"' + 
            'alt = "Image unavailable" id = "obstacle' + obstacleNum + '" class = "obstacle' + obstacleNum + '" height = 8px ' +
            'style = "top: ' + top + 'px; left: ' + left + 'px; width: ' + width + 'px; position: absolute">')
            obstacleNum++;

            width = 174; //adjusted to look nice
            left += 232; //add the width + 58 (gap width)
            $("#doc").append('<img src = "https://t7.rbxcdn.com/35e6b88e90a14cd1e1c6fef3d05b62d5"' + 
            'alt = "Image unavailable" id = "obstacle' + obstacleNum + '" class = "obstacle' + obstacleNum + '" height = 8px ' +
            'style = "top: ' + top + 'px; left: ' + left + 'px; width: ' + width + 'px; position: absolute">')
            obstacleNum++;
        }
        else{
            var width = 850 - (i * 150);
            var top = 57 + (i * 50);
            var left = 82 + (i * 75);
            $("#doc").append('<img src = "https://t7.rbxcdn.com/35e6b88e90a14cd1e1c6fef3d05b62d5"' + 
            'alt = "Image unavailable" id = "obstacle' + obstacleNum + '" class = "obstacle' + obstacleNum + '" height = 8px ' +
            'style = "top: ' + top + 'px; left: ' + left + 'px; width: ' + width + 'px; position: absolute">')
            obstacleNum++;
        }
    }
}

/**
 * In detectOverlapping, setInterval function will call overLap function every 25 milliseconds
*/
const detectOverlapping = () => {
    setInterval(overLap, 25);
}

/**
 * This method checks if character is overlapping the maze or the goal of Scooby Snacks. First it checks whether the player edges is beyond the left, right, 
 * top, and bottom boundary bars. Then uses for loop to check if player edges "touches" the bars inside the maze. Call lostScreen method if colliding with bars.
 * Check for loop to see more logic behind overlapping. Lastly, checks if character is overlapping with Scooby Snacks and call winScreen if so. 
*/
const overLap = () => {
    var elem = $("#player");

    var playerLeft = elem.offset().left;            //player's left edge
    var playerTop = elem.offset().top;              //player's top edge
    var playerRight = playerLeft + player.width;    //player's right edge = playerLeft + player's width
    var playerBottom = playerTop + player.height;             //player's bottom edge = bottom edge
 
    var elem1 = $("#obstacle1a");                                   //leftmost bar
    var obstacleWidth1 = elem1.offset().left + obstacle1a.width;    //leftmost bar's right edge = left position + bar's width  
    //intersect leftmost bar/boundary
    if(playerLeft < obstacleWidth1){
        //console.log("overlap1");
        lostScreen();
    }

    var obstacleWidth1b = $("#obstacle1b").offset().left;           //rightmost bar's left edge
    //intersect rightmost bar/boundary
    if(playerRight > obstacleWidth1b){
        //console.log("overlap2");
        lostScreen();
    }


    var obstacleHeight1c = $("#obstacle1c").offset().top + obstacle1c.height;   //topmost bar's bottom edge = top position + bar's height
    //intersect topmost bar
    if(playerTop < obstacleHeight1c){
        //console.log("overlapper2");
        lostScreen();
    }

    var obstacleHeight1d = $("#obstacle1d").offset().top;           //bottommost bar's top edge
    //intersect bottom bar
    if(playerBottom > obstacleHeight1d){
        //console.log("overlap2");
        lostScreen();
    }

    //loop to check if player's edges touch or collide the inner obstacles/bars
    for(var counter = 2; counter < 26; counter++){
        this["elem" + counter] = $("#obstacle" + counter);                                  //using the corresponding obstacleNum in generateMaze to select the right obstacle
        this["obstacleWidth" + (counter * 2 - 2)] = this["elem" + counter].offset().left;   //Ex: obstacleWidth2 = obstacle's left edge
        this["obstacleHeight" + (counter * 2 - 2)] = this["elem" + counter].offset().top;   //Ex: obstacleHeight2 = obstacle's top edge
        this["obstacleWidth" + (counter  * 2 - 1)] = this["obstacleWidth" + (counter * 2 - 2)] + this["obstacle" + counter].width;      //Ex: obstacleWidth3 = obstacle's right edge = (left edge + width)    
        this["obstacleHeight" + (counter * 2 - 1)]= this["obstacleHeight" + (counter * 2 - 2)] + this["obstacle" + counter].height;     //Ex: obstacleHeight3 = obstacle's bottom edge = (top edge + height) 
        //if left edge of player is less than right edge of obstacle (colliding with obstacle on right side) AND right edge of mystery machine is greater than left edge of obstacle (colliding with obstacle on left side)
        if(playerLeft < this["obstacleWidth" + (counter * 2 - 1)] && playerRight > this["obstacleWidth" + (counter * 2 - 2)]){  
            //if top edge of player is less than bottom edge AND bottom edge of player is greater than top edge (within y-bounds of obstacle)
            //This means that the player is colliding with an obstacle because their x position is within the obstacle's width and y position is within the obstacle's height
            if(playerTop < this["obstacleHeight" + (counter * 2 - 1)] && playerBottom > this["obstacleHeight" + (counter * 2 - 2)]){
                //console.log("overlapping2");
                lostScreen();
            }
        }
    }
    
    //check if player has won by overlapping with scooby snack
    var goalLeft = $("#goal").offset().left;
    var goalRight = $("#goal").offset().left + goal.width;
    var goalTop = $("#goal").offset().top;
    var goalBottom = $("#goal").offset().top + goal.height;
    //intersect leftmost bar/boundary
    if(playerLeft < goalRight && playerRight > goalLeft){
        if(playerTop < goalBottom && playerBottom > goalTop){
            winScreen();
        }
    }
}

startGame()
generateMaze();
detectOverlapping();