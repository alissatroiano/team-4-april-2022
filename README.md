# **Electrillo**

![Live Project Representation Image](https://github.com/alissatroiano/team-4-april-2022/blob/main/docs/readme_img/responsivePage.png?raw=true)

[Link to Live Project](https://alissatroiano.github.io/team-4-april-2022/)

## Table of Contents
- [Electrillo](#electrillo)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
- [UX](#ux)
  - [Project Goals](#project-goals)
- [User Stories](#user-stories)
  - [Scope](#scope)
- [Testing](#testing)
- [Credits](#credits)

## Introduction

With climate change becoming a increasing urgent problem in our lives, [vehicle numbers globally now at an estimated 1.446 billion](https://hedgescompany.com/blog/2021/06/how-many-cars-are-there-in-the-world/) and [80% of lung diseases being caused by car pollution](https://study.com/academy/lesson/car-pollution-facts-lesson-for-kids.html#:~:text=Car%20engines%20release%20poisonous%20gases,a%20result%20of%20car%20pollution.) there is a no better time to start looking for more eco-friedly vehicles for the planets health and our own. Electic Vehicles (EVs) and Hybrid Vehicles are improving rapidly and if more people moved to the alternatives then maufactures would be motivated to put more money and emphasis into development of these vehicles. With [One-fifth of Europe's greenhouse gases coming from the transportation sector alone](https://www.virta.global/blog/electric-cars-pollution-facts), this is a massive market which could play a major part in our planets future.


To help educate and encourage the everyday motorist to consider moving to an alternativly fueled vehicle, we have created a website that easily provides the user with more eco-friendly alternatives to the type of vehicle they are looking for. The website also provides more information about the problems and threats caused by ICEs and what the benefits of making a change could be, for the enviroment and the motorist.

This project has been build as part of Code Institutes Earth Day Hackathon Event April 2022 by TEAM_4.

## UX

![wireframes](“docs/wireframes/wireframes.pdf”)

### **Project Goals**

### **Business Goals**

### **User Demographic**

### **Value for the User**

- Learn more about the issues caused by using traditional fuel types and the benefits of alternatives
- Easily find vehicles that use alternative power sources that I am interested in and would suit the users needs
- Calculate possible savings by moving to an alternative fuel

## **User Stories**

| ID | As a... | I Want To Be Able To... | So That I Can...|
| --- | --- | --- | --- |
| 01 | User | Easily navigate the website | Explore all the pages and features |
| 02 | User | Find more information about the website | Understand what the website is designed for and what it can do for me |
| 03 | User | Learn more about the problems caused by using traditionially fueled vehicles | Understand the problems and see the benefit if changing vehicle power sources |
| 04 | User | Calculate how much I could save on fuel moving to an alternative vehicle | See the financial benefit of changing to an electric vehicle |
| 05 | User | Choose what type or style of vehicle that I am looking for | Be shown approptiate vehicle options that are more eco-friendly |
| 06 | User | View information about individual vehicles | Decide if the vehicle I am reading about is perfect for me |

## **SCOPE**

### **Production Feature Planning Table**

| ID | Feature                                                                                          | Importance | Viability |
|----|--------------------------------------------------------------------------------------------------|------------|-----------|
|  |      |         |        |


## **STRUCTURE**

## Topology

## Database Schema
The Database has been created with [MongoDB](https://www.mongodb.com/) and exported as Json file: <br>
![database](https://github.com/alissatroiano/team-4-april-2022/blob/main/docs/readme_img/firstDBschema.png?raw=true)

## **SKELETON**

### **Wireframes**
[Link to the Wireframes](https://github.com/alissatroiano/team-4-april-2022/blob/main/docs/wireframes/wireframes.md)

### **Design Alterations**
While working on the project we had to execute the following alterations:

|Page/Section |Alteration |Reason |
|Home Page|Removed the team section from the Home Page|It is a priority to display the mission of the website and define a stronger identity|
|Home Page|Removed the Car Search feature|In order to deliver are more clean website we moved the feature to a different page|
|Evaluation Page|Moved the Calculator up|The Calculator is the core feature of the page so it needs to be displayed first|
|Evaluation Page|Pop-up the result of the Evaluation|In order to give the user a better experience, easier to read and visualize|
|Evaluation Page|Car Search highlighted with a scroll down arrows|In order to give the user a clear suggestion on how to navigate the website|

**Colour Scheme and Typography**
![Color Scheme](https://github.com/alissatroiano/team-4-april-2022/blob/main/docs/readme_img/color-scheme.png?raw=true)

## **FEATURES**
### **Multi Page Elements**

**Navbar**
- Logo: To display the website identity and act as home button
- Mission: Links to the mission behind the project
- Evaluator: Links to the core features of the website
- Team: Links to a presentation of the team with contacts options

**Footer**
In addition to the Navbar features the footer displays:
- Social links to informative websites and the project repository

### **Home Page**
- Mission statement
- Direct link to the Evaluator page

### **Evaluator Page**
- An EV/Fuel Calculator that will display, in a pop-up window, the advantages on choosing an electric car.
- A mini-questionnaire to suggest to the user some options within their budget and preferred car size.

### **Team Page**
- Cards of each team member, implemented with links to their LinkedIn and Github pages.

### **Features for Future Releases**
- A wider list of cars to suggest in the mini-questionnaire
- Implement more currencies and different units of measurements for the EV/Fuel Calculator

## **TESTING**

### HTML Test 1: index.html
1. Visit [W3C Validator](https://validator.w3.org/)
2. Paste the contents of `index.html` into the tool to check input
3. Click "check"
4. Observe warnings & errors
5. Notice there is a stray `</p>` tag on like 36
6. Open IDE and visit `index.html`
7. Remove the stray element
8. Repeat steps 1-3 until there are no errors
9. Mark test "passed"

### HTML Test 2: Questions.html
1. Visit [W3C Validator](https://validator.w3.org/)
2. Paste the contents of `questions.html` into the tool to check input 
3. Click "check"
4. Observe the following warning: "Potentially bad value sha512-....for attribute integrity on element link: Invalid base64-value ("
5. Open IDE and visit `questions.html`
6. Observe that there is an error in the font awesome CDN link
7. Conclude that error most likely occurred while merging or formatting the code
8. Replace with correct CDN link
9.  Repeat steps 1-3 until there are no errors
10. Observe validator's outpit, "Document checking completed. No errors or warnings to show"
11. Mark test "passed"

### HTML Test 3: Team.html
1. Visit [W3C Validator](https://validator.w3.org/)
2. Paste the contents of `team.html` into the tool to check input 
3. Click "check"
4. Observe the following **error**: "Attribute target not allowed on element i at this point"
5. Visit `team.html` in local IDE
6. Move the target attribute to its' corresponding `<a></a>` element
7. Observe the following **error**: "Duplicate ID"
8. Visit `team.html` and observe that all team cards are using the same ID
9. Create new ID names for all div elements effected by this error
10. Visit `style.css` and style all new ID's accordingly
11.  Repeat steps 1-3 until there are no errors
12. Mark test "passed"

### HTML Test 4: 404.html
1. Visit [W3C Validator](https://validator.w3.org/)
2. Paste the contents of `404.html` into the tool to check input 
3. Click "check"
4. Observe the following **warning**: "Section lacks heading. Consider using h2-h6 elements to add identifying headings to all sections, or else use a div element instead for any cases where no heading is needed."
5. Visit `404.html` in IDE
6. Replace `div` with `h2`
7. Repeat steps 1-3 until there are no errors
8. Mark test "passed"


### CSS Jigsaw Validator Test
1. Visit W3C Jigsaw validator in the browser
2. Copy all properties from `style.css`
3. Paste the contents of `style.css` in the validator tool
4. Click, "Check"
5. Observe an error coming from line 410
6. Notice the media query definition is outdated
7. Revise
8. Repeat steps 1-4
9. Observe all tests are now passing
10. Mark test, "passed"


### JS Test 1: On Click/Select CSS Effect
1. Visit the project in the browser
2. Click on the CTA button to visit the calculator tool
3. Click on answers for each question
4. Observe how a CSS border effect is applied to the selected card when clicked
5. Notice that clicking on one of the cards a second time removes CSS `select` effect from other elements
6. Open Google Chrome Dev Tools and visit the **JavaScript console** to check for errors
7. Notice there are no errors in the console
8. Visit [JSHInt](https://jshint.com/) and paste contents of `script.js` into the testing space
9. Return to IDE and make all changes
10. Repeat steps 1-5 and observe same problem
11. Identify that error is coming from the grid structure in the HTML
12. Visit `questions.html` and notice the first row of questions is missing a closing `</div>`
13. Note that the absence of the closing `</div>` has left the row open and caused the bug
14. Add the missing `</div>` to close the row
15. Test again and notice the problem no longer exists
16. Mark test as, "PASS"

### JS Test 2: Evaluator
1. Visit the project in the browser
2. Click on the CTA button to visit the calculator tool
3. Use the Evaluator tool to generate a savings quote
4. Observe the number
5. Repeat steps 1-3 to ensure the price quote changes
6. Repeat steps 1-3 a few more times to test all functionality 
7. Mark test as, "PASS"

### JS Test 3: JSON Fetch Error During Initial Deployment
1. Visit the **deployed** project in the browser
2. Click on the CTA button to visit the calculator tool
3. Scroll down to search for a vehicle
4. Click on a choice for each question
5. Click, "Search"
6. Observe that clicking the "Search" button returns nothing on the front-end
7. Open up the JS console
8. Observe a 404 error, stating that the JSON file can not be found by the server
9. Consult with team
10. Have team member refactor and troubleshoot
11. Observe that the error during production resulted from the use of a file path in the fetch statement
12. Replace the file path with a URL
13. Commit, push and deploy changes
14. Repeat steps 1-5
15. Observe that the search functionality has been repaired and search results are now printing on the front end.
16. Open the JavaScript console
17. Observe that there are no longer any errors
18. Mark test, "passed"

### JS Test 4: JSHint Test
1. Copy the contents of `script.js`
2. Visit [JSHint](https://jshint.com/)
3. Paste the contents of `script.js` into the JavaScript validator
4. Observe the **warnings**
5. Add semicolons wherever they are missing
6. Notice the remaining warnings suggest dot notation
7. Observe there are no errors with the JavaScript
8. Repeat steps 1 - 3
9. Mark test, "passed"

| **Bug ID** | **Description of Bug** | **Problem** | **Fix/Solution** |
|||||
|||||
|||||
|||||



### **Known Limitations**

## **DEPLOYMENT**

## **TECHNOLOGY USED**

<details>
<summary> Languages and Libraries</summary>

- [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5) - Programming Language
- [CSS 3](https://developer.mozilla.org/en-US/docs/Web/CSS) - Programming Language
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming Language
- [Python](https://www.python.org/) - Programming Language
- [Bootstrap v5](https://getbootstrap.com/) - Library Import
- [Google Fonts](https://fonts.google.com/) - Typography Import
- [Font Awesome v5.14](https://fontawesome.com/) - Icon provider

</details>

<details>
<summary> IDE and Version Control</summary>

- [Git Pod](https://gitpod.io/) - IDE (Integrated Development Environment)
- [Git](https://git-scm.com/) - Version Control Tool
- [Github](https://github.com/) - Cloud based hosting service to manager my Git Repositories
- [Code Institute GitPod Template](https://github.com/Code-Institute-Org/gitpod-full-template) - Provides GitPod extensions to help with code production
</details>

<details>
<summary> Design and Development</summary>

- [Google Chrome Development Tools](https://developer.chrome.com/docs/devtools/) - Design/Development Tools
- [Balsamiq](https://balsamiq.com/) - Wireframe designer software
- [Figma](https://www.figma.com/) - Wireframe designer software
- [MongoDB Compass](https://www.mongodb.com/products/compass) - GUI of MongoDB
- [Dbdiagram.io](https://dbdiagram.io/) - Data Schema drawing tool
</details>

<details>
<summary> Validation and Testing</summary>

- [CSS Beautifier](https://www.freeformatter.com/css-beautifier.html) - Beautifying CSS Code
- [JavaScript Validator](https://beautifytools.com/javascript-validator.php) - Validating JS code
- [Am I Responsive?](http://ami.responsivedesign.is/) - Webpage Breakpoint visualizer and image generator
- [Black](https://black.readthedocs.io/en/stable/)- Code Formatter
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
- [Browser Stack Responsive Design Tester](https://www.browserstack.com/responsive)
- [Media Genesis RESPONSIVE WEB DESIGN CHECKER](https://responsivedesignchecker.com/)
- [Chrome Dev Tools](https://developer.chrome.com/docs/devtools/)
- [Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [pylint](https://pylint.org/)
</details>

<details>
<summary> Documentation</summary>

- [TinyPNG](https://tinypng.com/) - Image Compression
- [CompressPNG](https://compresspng.com/) - Image Compression
- [Markdown Table Generator](https://www.tablesgenerator.com/markdown_tables) - Markdown Table Production
- [Table Converter](https://tableconvert.com/excel-to-markdown) - Excel to Markdown table converter 
- [Am I Responsive?](http://ami.responsivedesign.is/) - Responsive design validator (used only for documentation purposes)
</details>

## **CREDITS**

### **Code snippets**

### **Resources**
- [EvSpecifications](https://www.evspecifications.com/) 
    Source for the data of the cars 
- [kWh Calculator](https://www.inchcalculator.com/convert/kilowatt-hour-per-hundred-kilometers-to-mile-per-kilowatt-hour/)
    Calculator to verify the mi/kWh

### **Content**
- [Design Shack](http://127.0.0.1:5500/index.html#mission) - CSS `text-shadow` styles were copied from Design Shack's article, ["12 Fun CSS Text Shadows You Can Copy and Paste"](https://designshack.net/articles/css/12-fun-css-text-shadows-you-can-copy-and-paste/)
  
- The [404 Error Page](404.html) was copied from [FreeFrontEnd](https://freefrontend.com/html-css-404-page-templates/)

### **Media**
- [EvSpecifications](https://www.evspecifications.com/) 
    Source for the images of the cars in the database
  
- [Pixabay](https://pixabay.com/illustrations/faulty-break-down-car-4693238/)

- The illustration on the landing page was copied from [iStockPhoto](https://www.istockphoto.com/illustrations)

- The favicon image was copied from [FreeSVG](https://freesvg.org/lightning-symbol-vector-image)

### **Acknowledgements**
