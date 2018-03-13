# Simple Diary - Siary!
Siary is just simple diary for everyone. It is still processing, so i don't know exactly what function this diary will have. But there's some necessary things.  

Login and Signin.  
1.User can write post any time any day.  
2.If user want, can make people read(or hide) user's own post.  
3.User can set profile(that have photo) and change.  
4.In post, user can use photos. If i can, also videos.  
5.I want to make this like SNS page(not a board).  
~~6.When user make account, server send Email. After confirm email, user can login.~~(Done)  
That's it.  

And this is test project for my Vue.js, Express practice.  

-------------------------------
## 6. Email function.  

Make this function with Nodemailer module.  

When user signin, server get users own email address and send account confirming mail. If user do not confirm, can't login and account will deleted next day automatically.  

1. First user sign in and server get email address.  
![signin](https://postfiles.pstatic.net/MjAxODAzMDNfMTAz/MDAxNTIwMDg3MDUzNjE0.iYeSddxtoGA9HXCBHPODoUJUNnfraPyewOi4-bvWTtwg.SWOlTKGH0VgOcz-b5N-4g42hlhiCJB07Ue6Wpfc7Tucg.PNG.ninanung/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2018-03-03_23.21.07.png?type=w773)  
2. Server send email to user's address.  
![email](https://postfiles.pstatic.net/MjAxODAzMDNfMTU5/MDAxNTIwMDg3MDUzNTIz.cip0L-kQ6jF0YonaIlsUQvyIv_HTjXYGMLVVYAMgJx4g.1FjZgZB-zixBAwkZDahKvHlR_SFbWuboDGqQBN41hVwg.PNG.ninanung/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2018-03-03_23.21.23.png?type=w773)  
3. I use my gmail address to send.  
![gotit](https://postfiles.pstatic.net/MjAxODAzMDNfMTYg/MDAxNTIwMDg3MDUzNTQw.5ExqTjxkkHMoCNM9K5XEy60x-SRa0DDrT0TvpT3heL4g.wF-xuaO2JYWY27qlJPSpwGs-ta04JU-z3Guuu_PzbXgg.PNG.ninanung/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2018-03-03_23.21.56.png?type=w773)  
4. Click the button and account is confirmed.  
![confirm](https://postfiles.pstatic.net/MjAxODAzMDNfOTAg/MDAxNTIwMDg3MDUzNjg0.Df1-IsYFPNDGonEjsGN9gBPElcCXPbAivB4c4apKBp0g.6iYwfHY1Rc4u4NyNwr2jG38NdDYIpc0-SplSJ2HYYt8g.PNG.ninanung/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2018-03-03_23.22.25.png?type=w773)  
5. Now user can login.  
![login](https://postfiles.pstatic.net/MjAxODAzMDNfMTU5/MDAxNTIwMDg3MDUzNTU4.DxrqBEItOYPARmnQxA21e3TwPEdLjUb_vGh4R7ZbzJ8g.B-RhF1pXNg4dtJ4KdhZXyYu29H7QQfQHf3fPi4cI6fog.PNG.ninanung/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2018-03-03_23.22.58.png?type=w773)  

---------------------------
## What i have to remember!  

1. Vue.js's store is not kinda session storage. Someone can think 'Hey, of course it is not!'. Yes, sorry, i didn't know that! In web browser, refresh make stroe clear. If you want to make store some login data or other thing, you should use localstorage or sessionstorage. I recomend session.  

2. SessionStorage can't store object. So, store stringified object and parse as JSON when use. This is code.  
```javascript
export default {
    name: 'home',
    mounted: function() {
        var user = {
            id: "ninanung",
            password: "1004nmnm"
        };
        window.sessionStorage.user = JSON.stringify(user);
    },
    methods: {
        seeSession: function() {
            var user = JSON.parse(window.sessionStorage.user);
            console.log(user.id);
            console.log(user.password);
        }
    }
}
```

-------------------
## What i Use  

### Platform  
- Node.js
- MongoDB
- Vue.js

### Module
> Frontend
>> - "axios": "^0.17.1",
>> - "vue": "^2.5.2",
>> - "vue-router": "^3.0.1",
>> - "vuex": "^3.0.1"

> Backend
>> - "bcrypt": "^1.0.3",
>> - "body-parser": "^1.18.2",
>> - "connect-history-api-fallback": "^1.5.0",
>> - "express": "^4.16.2",
>> - "mongoose": "^5.0.2",
>> - "multer": "^1.3.0",
>> - "nodemailer": "^4.4.2",
>> - "nodemailer-smtp-transport": "^2.7.4"