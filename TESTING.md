
# TESTING


## HTML Tests

### HTML Test 1: index.html
1. Visit [W3C Validator](https://validator.w3.org/)
2. Paste the contents of `index.html` into the tool to check input
3. Click "check"
4. Observe warnings & errors
5. Notice there is a stray `</p>` tag on like 36
6. Open IDE and visit `index.html`
7. Remove the stray element
8. Repeat steps 1-3
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
9. Repeat steps 1-3
10. Observe validator's outpit, "Document checking completed. No errors or warnings to show"
11. Mark test "passed"


## JavaScript Tests

## CSS Tests

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
