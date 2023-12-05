# Vue Email List

In this project I use an API to generate 10 email addresses which I then print into the DOM.

1. Save the API URL as a variable.
2. Create an empty "emails" array.
3. Create an empty "emailPromises" array.
4. Use a for cycle to call the API ten times and push the results into the "emailPromises" array.
5. Use Promise.all to return the 10 promises as a single promise after all the API calls have been made.
6. Use map() to assign the emails from "emailPromises" to the "emails" array
7. Use v-for to print the emails into the DOM.