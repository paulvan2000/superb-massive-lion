# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Paul VanMetre

Time spent: 12 hours spent in total

Link to project: (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

- [☑] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [☑] "Start" button toggles between "Start" and "Stop" when clicked.
- [☑] Game buttons each light up and play a sound when clicked.
- [☑] Computer plays back sequence of clues including sound and visual cue for each button
- [☑] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [☑] User wins the game after guessing a complete pattern
- [☑] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [☑] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [☑] Buttons use a pitch (frequency) other than the ones in the tutorial
- [☑] More than 4 functional game buttons
- [☑] Playback speeds up on each turn
- [☑] Computer picks a different pattern each time the game is played
- [☑] Player only loses after 3 mistakes (instead of on the first mistake)
- [☑] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [☑] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [☑] List anything else that you can get done to improve the app!
- [☑] Added settings menu to change or disable features to the users liking
- [☑] Implemented the Goodle Design Light (GDL) API into the project for more reactive elements.
- [☑] Used stylesheets and html implementation to ensure that the program flow smoothly on most window sizes

## Video Walkthrough (GIF)

If you recorded multiple GIFs for all the implemented features, you can add them here:

- [☑] https://s7.gifyu.com/images/SITE2022_Paul_VanMetre.gif

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
  "https://w3schools.com/
   https://coolors.co
   https://getmdl.io/
   https://www.tutorialspoint.com/materialdesignlite/index.htm
   https://materialui.co/flatuicolors
   obligatory https://stackoverflow.com/
   "

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
  "After using the MDL API, I am curious about the common practices of API use in more professional environments. How acceptable is
   it to use open-source API in commercial projects? It feels like cheating slightly, because it saves me from having to program
   countless animations and CSS styling (not that I didn’t sit there for hours messing around with CSS to make it look perfect).
   Is it commonplace to use other’s API when developing a product? Specially if it is something you plan on selling, or even worse
   , being hired to make it for someone else. I can say that it is a huge time saver, and the overall project looks polished,
   even though I didn’t program every individual element from scratch, so I am curious what the industry standard is on this topic. "

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
  "The most challenging aspect of creating the light and sound memory game was attempting to incorporate elegant and
   intuitive UI elements. After finishing the core program from Task 1, the UI was functional, but left a lot to be desired.
   I wanted it to feel polished, with intuitive elements. Simply put, I wanted it to look aesthetic. From past projects I have
   learned to take inspiration from Google’s Material UI Standards and intended on implementing this into the project. First,
   I planned out how I wanted it to look with a sheet of paper and a pencil. Then, I started creating the <div> containers to
   hold everything. I decided to use the Material Design Light API to implement interactive buttons, icons, and the dropdown
   menu for the settings. The sketched design differed from what I ended up with: originally, I had all the option menu panels
   in the same <div> as the other game buttons, but I realized that it was clogging up the UI, so I moved into a separate settings
   list that could be toggled by pressing the menu icon at the top left. I’ve never used the MDL API before, so it took some getting
   used to. Anytime I encountered a problem, I’d google it and there was not a single instance I wasn’t able to find the solution on
   either stackoverflow or some other code forum."

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
  "To be fair, I spent more time on this project then I was expecting too. The recommended time was 5 hours and I easily
   spent nearly 12. I can say I accomplished all the features I set out to. Although, if I were to dream a little, I’d day id
   love to see the project with maybe an online leaderboard where players could share their victories, statistics, etc.
   I also would’ve liked to incorporate an endless mode where users could test their skills and try to get memorize
   the longest puzzle possible. To be fair, my project can currently have a max pattern size of 50, and I don’t think
   the average user could come close to completing that. I know I couldn’t, at least, and I sat there for hours play testing."

## Interview Recording URL Link
https://www.loom.com/share/69ce5139a78c4c48aecbec785d0df950

## License

    Copyright [Paul VanMetre]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
