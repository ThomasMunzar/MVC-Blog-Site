# MVC-Blog-Site

## Description
 The goal of this project was to create a blog site where a user can sign up, create blog posts, comment on other blog posts and see other peoples blog posts.
 Though this seems like a simple ask, it was extremely difficult for me. I  was just able to understand routing for API's but now having to route to a handlebar file messed up what i though i had know. So this is not my best work, and it is not complete. But I did learn in the process. I was able to finally get the Posts (the ones i seeded AND the ones i wrote in the form on my dashboard) to show up on the page. Im stoked. Its ugly, its barly functional. But that one path does work. It took me hours and hours. I will be able to create something better one day. just not today.
## Learning Points
I learned alot working through this project. Mainly about writing routes and get requests. I am finally comfortable working with getting API data but just an 30 minutes ago I was able to get that api data to show up on my handlebar html rendering. Which at first was not working A. because i did not have user side javascript to render anything on the click of the button i have on that page and 2. my path to my JS file in my handlebar file was wrong:

at first it was 

```js
 <script src="../public/js/dashboard.js"></script>
```

which makes sense to me. but after a few hours of trying to fix anything but that path i learned that the browser like to have an "absolut path" most that a relative path. I still do not understant that too well but after changing it to 

```js
<script src="/js/dashboard.js"></script>
```
i was able to render my API data onto the page.


If I had more time I am sure that i could finish this. This was a hard ask especially since we were assigned this during a project week and this is essentially asking us to do the project by ourselves. Proud that i made it this far on it. 

## Installation

 "dependencies": 
    "bcrypt": "^5.1.0",
    "connect-session-sequelize": "^7.1.7",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "express-handlebars": "^7.1.1",
    "express-session": "^1.17.3",
    "handlebars": "^4.7.8",
    "mysql2": "^3.6.0",
    "sequelize": "^6.32.1"


## Credits

I would like to thank my fellow classmates, my tutors, teaching staff and my family for all the support through out this program.

## Questions

If you have any further questions please contact me.

- Name: Thomas Munzar
- Email: tmunzar92@gmail.com
- Github: [ThomasMunzar](https://github.com/ThomasMunzar/)

## License

View LICENSE in Repository