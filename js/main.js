'use strict';

const { createApp } = Vue;

createApp({
  data() {
    return {
      apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail',
      emails: [],
    }
  },
  created() {
    // Create empty emailPromises array
    const emailPromises = [];
    // Call the API 10 times and push the results into the emailPromises array
    for (let i = 0; i < 10; i++) {
      emailPromises.push(axios.get(this.apiUrl));
    };
    // Use Promise.all to return the 10 promises as a single promise after all the API calls have been made. Use map() to create a separate array of the generated emails and assign it to the "emails" array. 
    Promise.all(emailPromises).then((responses) => {
      this.emails = responses.map(response => response.data.response);
    });
  }
}).mount('#app');