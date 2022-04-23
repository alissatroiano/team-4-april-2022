
# TESTING

## JS TEST 1: On Click/Select CSS Effect
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
