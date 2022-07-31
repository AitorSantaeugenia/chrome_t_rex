# Chrome T-Rex
- My implementation of the no internet game. Done with canvas & vanilla js.
- You can acces the real one typing <b><u>chrome://dino</u></b> in chrome as an URL
- Since <b><u>keypress</u></b> in JavaScript is deprecated, we are using <b><u>ArrowDown</u></b> for crouching and <b><u>ArrowUp</u></b> to run normal again, so we are changing the behaviour of the real game a little bit cos of this.
- Right now, Pteras appear when the score is 1500 and gets faster at 2500.
- The speed of the game (obstacles and map) gets faster at 600 and 2500.
- When the score % 1000 === 0 it's midnight time, when score % 2000 === 0 && % 1000 !== 0 it's day time. So we change from daylight to midnight every 1000 points.

<div align="center">

# In play game
![In play game](https://user-images.githubusercontent.com/14861253/173209419-75f23b60-ba4e-40c2-8e24-62e070a06613.gif)

# Midnight time
![Midnight time](https://user-images.githubusercontent.com/14861253/182008097-1cb9a02f-1789-43be-a338-cf1da8076916.gif)

# Pteras incoming
![Pteras coming randomly](https://user-images.githubusercontent.com/14861253/182008228-1cda9887-4d75-4d49-9ecf-33aaa983ea34.gif)

</div>

<div align="center">

```
Any suggesitons, hit me here on github |or| aitorsantaeugenia@gmail.com
```

<div align="left">

## TODO
- Change hit dino image when colission (we need to work @ when framerequestanimation stops with this)

</div>


```
BY-NC-SA
```

</div>