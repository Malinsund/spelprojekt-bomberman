# Cruel Nature

This is a School project where we did a remake of the classic game Bomber Man.
We have used JS.p5 and TypeScript OOP to make this game and it has been a 4 week projekt.

It´s a two player game, player one uses W, A, S, D to move around and C to drop the bombs, player 2 uses the arrowkeys to move around and P to drop the bombs.
Try to bomb your way through the gameboard to clear the way towards your opponent, your goal is to win the game by bombing you opponent within the time limit. there are removable obsticals which is the ones that will be destroyed if the bomb range collides with it, there's also static obsticals that will stop the explosion range, you can not go past this obstacles.
First player to lose all their lives looses the game, if the time runs out you both lose try to catch as many power-up's as possible to increase your chance to win! 

We have been able to produce 4 different power-up's;
* Longer bomb range - Makes the explosion range longer for the player that takes it, the range increases for every power-up the player collect and has no time limit.
* More bombs - Lets the player drop more bombs as the default is to only drop one bob at the time.
* Speed Boozt - Increases the speed for the player that collected the power-up for 10 sek.
* Slow down opponent - Slows down the speed for the other player in 10 sek.

Good luck and have fun!

## how to install and play

To install you need to type the command "npm install" followed by "npm run dev" to play the game.


### Thanks
We've had an awesome time doing this project and hopefully we will find the time to add more gameboards to the game.
It turned out better than we imagined it to be and we are proud of our result, a special thanks to our teacher David, who helped us through this project and also thanks to the school "Medieinstitutet" that makes learning fun!

Anna Alehed, Joel Erlandsson, Malin Sundberg, Maryamo Salad, Catalina Avadani







# Slutprojektet

Välkommen till den förinställda kodbasen för slutprojektet.
Se filen [Sketch](./src/sketch.ts) och [Game](./src/game.ts) filerna för hur ni bör börja skriva er kod!

Kom ihåg att använda git!

Projektet använder sig av [Typescript](https://www.typescriptlang.org/) och [p5.js](https://p5js.org/). Det är varmt rekommenderat att ni läser på om dessa två teknologier innan ni börjar skriva kod.

OBS: Undvik [DOM funktionerna i p5.js](https://p5js.org/reference/#group-DOM) eftersom de **inte** är canvasspecifika och kommer inte fungera som ni förväntar er.

## Utveckling

### Installation

Först behöver ni köra kommandot `npm install` för att installera nödvändiga moduler (p5, typescript, etc).

### Starta projektet

Kör kommandot `npm run dev` för att starta projektet och se det live i din webbläsare!

### Debugger

Det är starkt rekommenderat att ni använder debug-verktyget i VSCode för att hitta och lösa problem. Metoden vi primärt har använt tidigare är att skriva `console.log` men vi kan bli mer effektiva!

Debuggern låter er stanna programmet och stega rad för rad samtidigt som ni kan titta på vad variablerna innehåller. Det är speciellt användbart när ni arbetar med funktioner som anropas 60 gånger per sekund - console overload otherwise... 🤯

#### Starta Debuggern

För att starta debuggern tycker du på `F5` eller via play-knappen i "ActionBaren", se dock till att du har startat projektet innan (`npm run dev`). Ett nytt fönster kommer att öppnas som behöver användas för att få koden att stanna vid utsatta debugg-punkter.

### Potentiella problem

Versionen av p5.js är 1.5.0 medan senaste version av p5 typerna endast är uppdaterad till 1.4.3. Detta skulle kunna orsaka problem och det kan vara så att ni hittar något i p5's dokumentation som inte finns tillgängligt i detta projektet - dock osannolikt.

Typings för de globala variablerna relaterat till p5.sound fungerar tyvärr inte - exempel finns för hur ni kan kringgå detta. Se [loadSound funktionen](global.d.ts) för hur det kan göras.

Eftersom det här projektet är konfigurerat till att fungera utan `import/export` så det ibland vara så att typescript kompilatorn inte hittar en klass. För att lösa det kan du lägga till en referens kommentar som berättar för typescript vart klassen är deklarerad.

Lägg till följande `/// <reference path="to-file-with-class" />` längst upp i filen som genererade felet och skriv korrekt sökväg.

## TODO

Lägg till ytterligare information som är specifikt för ert projekt!

**LYCKA TILL!**
