body {
  font-family: 'Karla', sans-serif;
  margin: 0;
  padding: 20px;
  background: linear-gradient(-45deg, #ff9a9e, #fad0c4, #a1c4fd, #c2e9fb);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  color: #222;
}

@keyframes gradientBG {
  0% {background-position:0% 50%;}
  50% {background-position:100% 50%;}
  100% {background-position:0% 50%;}
}

header {
  text-align: center;
  margin-bottom: 40px;
}
header h1 {
  font-family: 'Roboto Slab', serif;
  font-size: 3em;
  color: #d32f2f;
  text-shadow: 2px 2px 8px rgba(0,0,0,0.3);
  animation: glow 2s infinite alternate;
}
@keyframes glow {
  from {text-shadow: 2px 2px 8px rgba(0,0,0,0.3);}
  to {text-shadow: 2px 2px 20px rgba(255,255,255,0.8);}
}
header p {
  font-size: 1.2em;
  color: #333;
}

/* Cards */
.section {
  background-color: var(--card-color, #fff);
  border-radius: 20px;
  padding: 25px;
  margin: 20px 0;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  cursor: pointer;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.7s ease, box-shadow 0.3s ease;
}
.section.show {
  opacity: 1;
  transform: translateY(0);
}
.section:hover {
  transform: translateY(-5px) scale(1.02);
  box-shadow: 0 12px 30px rgba(0,0,0,0.3);
}
.section h2 {
  font-family: 'Roboto Slab', serif;
  font-size: 2em;
  margin-bottom: 10px;
  color: #d32f2f;
}
.section p {
  font-size: 1.1em;
  line-height: 1.6;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.6s ease, padding 0.6s ease;
  padding: 0;
}
.section.open p {
  max-height: 1000px;
  padding-top: 10px;
}

/* Widget */
#access-widget {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  cursor: grab;
  transition: all 0.3s ease;
}
#widget-btn {
  background: radial-gradient(circle at center, #fff 0%, #d32f2f 70%);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 65px;
  height: 65px;
  font-size: 30px;
  box-shadow: 0 5px 25px rgba(0,0,0,0.3);
  transition: transform 0.3s, box-shadow 0.3s;
}
#widget-btn:hover {
  transform: scale(1.2);
  box-shadow: 0 10px 35px rgba(0,0,0,0.5);
}
#widget-menu {
  display: none;
  flex-direction: column;
  margin-top: 12px;
  background-color: #fff;
  border: 2px solid #d32f2f;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
  animation: fadeIn 0.3s ease;
}
@keyframes fadeIn {
  from {opacity:0; transform: translateY(-10px);}
  to {opacity:1; transform: translateY(0);}
}
#widget-menu button {
  margin: 6px 0;
  padding: 10px 18px;
  background-color: #d32f2f;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
}
#widget-menu button:hover {
  background-color: #b71c1c;
  transform: scale(1.05);
}

/* Contraste e texto grande */
.contrast { background-color: #000; color: #fff; }
.contrast .section { background-color: #222; color: #fff; border-color: #fff; }
.large-text { font-size: 1.6em; }
