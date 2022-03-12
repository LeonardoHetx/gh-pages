@import url('https://fonts.googleapis.com/css2?family=Cabin&display=swap');

*::selection{
  background: none;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

html {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

:root{
  --primary-color: #E3E3E3;
  --secondary-color: #4E4E4D;
  --shadow-color: #bdbdbd;
  --hover-color: #777777;
}

.dark-theme{
  --primary-color: #4E4E4D;
  --secondary-color: #E3E3E3;
  --shadow-color: #383838;
  --hover-color: #9b9b9b;
}

body{
  background-color: var(--primary-color);
  text-align: center;
  transition: 0.5s;
  margin: 0;
  padding: 0;
}

@keyframes appearSymbols{
  from {opacity: 0;}
    to{opacity: 1;}
}

h1{
  font-family: 'Courier New', Courier, monospace;
  display: inline-block;
  color: var(--secondary-color);
  padding: 1px 15px 1px 15px;
  transition: 0.5s;
  
}

h1:hover{
  letter-spacing: 10px;
}

#toggle{
  position: absolute;
  top: 5%;
  left: 80%;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  background: #4E4E4D;
  transition: 0.5s;
  cursor: pointer;
  box-shadow: inset 0 8px 60px var(--secondary-color),
              inset 0 8px 8px var(--secondary-color),
              inset 0 -4px 4px var(--secondary-color);
}

#toggle #dark-mode{
  position: absolute;
  top: 0;
  left: 0;
  width: 15px;
  height: 15px;
  margin: 6%;
  transform: scale(1);
  border-radius: 50%;
  background: linear-gradient(to bottom, #4E4E4D, #272727);
  box-shadow: inset 0 12px 60px var(--primary-color),
              inset 0 8px 8px var(--primary-color),
              inset 0 -4px 4px var(--secondary-color);
  transition: 0.5s;
}

#toggle.active #dark-mode{
  Left: 20px;
}

#turn{
  position: absolute;
  bottom: 63%;
  font-family: "Cabin", Geneva, Tahoma, sans-serif;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  width: 115px;
  height: 35px;
  line-height: 35px;
  font-size: 25px;
  border-radius: 0px 0px 20px 0px;
  margin-bottom: 6px;
  transition: .5s;
}

#turn:hover{
  font-size: 29px;
}

.square{
  width: 100px;
  height: 100px;
  background-color: var(--secondary-color);
  display: inline-block;
  margin: 1px;
  box-shadow: 15px 15px 15px 4px var(--shadow-color);
  transition: 0.5s;
  cursor: pointer;
}

.square:hover{
  transition: .5s;
  background-color: var(--hover-color);
}

.s1, .s4, .s7{
  animation-name: appearSymbols;
  animation-duration: 1s;
}

.s2, .s5, .s8{
  animation-name: appearSymbols;
  animation-duration: 1.5s;
}

.s3, .s6, .s9{
  animation-name: appearSymbols;
  animation-duration: 2s;
}

#restart{
  width: 72px;
  height: 22px;
  box-sizing: border-box;
  background: var(--secondary-color);
  color: var(--primary-color);
  margin: 30px;
  font-family: 'Courier New', Courier, monospace;
  border: none;
  cursor: pointer;
  transition: .5s;
}

#restart:hover{

  border: 1px solid var(--secondary-color);
  background-color: var(--primary-color);
  color: var(--secondary-color);
  transition: .4s;
}

#restart:active{
  transition: .05s;

}

.o{
  position: relative;
}

.o:after{
  position: absolute;
  content: "O";
  color: var(--primary-color);
  font-size: 50px;
  font-family: "Cabin", Geneva, Tahoma, sans-serif;
  line-height: 100px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 1.2s ease-in-out;
  animation-name: appearSymbols;
  animation-duration: 0.5s;
}

.x{
  position: relative;
}

.x:after{
  position: absolute;
  content: "X";
  color: var(--primary-color);
  font-size: 50px;
  font-family: "Cabin", Geneva, Tahoma, sans-serif;
  line-height: 100px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: all 1.2s ease-in-out;
  animation-name: appearSymbols;
  animation-duration: 0.5s;
}

#result{
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  color: var(--secondary-color);

}

