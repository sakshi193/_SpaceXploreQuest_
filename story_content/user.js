function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5z5Y576HDD3":
        Script1();
        break;
      case "5irFLdJvn9m":
        Script2();
        break;
      case "5jpjtk00CPc":
        Script3();
        break;
      case "6gUkJOI3avG":
        Script4();
        break;
  }
}

function Script1()
{
  var today = new Date();
var fulldate = today.toDateString();
var thetime = today.toLocaleTimeString();

var player = GetPlayer();

// your existing variables
player.SetVar("date", fulldate);
player.SetVar("time", thetime);

// NEW: store start timestamp (hidden, used for duration calculation)
player.SetVar("start_timestamp", today.getTime());

}

function Script2()
{
  const url = "https://script.google.com/macros/s/AKfycbwN18xJeeGTsjRYHS8TbBdACLlc-wpkVzV6YBmKgt8pXAs9aLEhc4ei2OpC-2NNQi8C/exec";
const player = GetPlayer();
const name = player.GetVar("name");
const email = player.GetVar("email");
const mobile = player.GetVar("mobile");
const score= player.GetVar("score");
const duration = player.GetVar("duration");
const date = player.GetVar("date");
const time = player.GetVar("time");
const status = player.GetVar("status");

fetch(url,{
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({
    name: name,
    email: email,
    mobile: mobile,
    score: score,
    duration: duration,
    date: date,
    time: time,
    status: status
  })
});   

}

function Script3()
{
  var player = GetPlayer();

// get stored start timestamp
var start = player.GetVar("start_timestamp");

// get current timestamp
var end = new Date().getTime();

// calculate difference
var durationMs = end - start;

// convert to hh:mm:ss
var seconds = Math.floor((durationMs / 1000) % 60);
var minutes = Math.floor((durationMs / (1000 * 60)) % 60);
var hours = Math.floor(durationMs / (1000 * 60 * 60));

var formattedDuration =
("0" + hours).slice(-2) + ":" +
("0" + minutes).slice(-2) + ":" +
("0" + seconds).slice(-2);

// store in Storyline variable
player.SetVar("duration", formattedDuration);

}

function Script4()
{
  const url = "https://script.google.com/macros/s/AKfycbwN18xJeeGTsjRYHS8TbBdACLlc-wpkVzV6YBmKgt8pXAs9aLEhc4ei2OpC-2NNQi8C/exec";
const player = GetPlayer();
const name = player.GetVar("name");
const email = player.GetVar("email");
const mobile = player.GetVar("mobile");
const score= player.GetVar("score");
const duration = player.GetVar("duration");
const date = player.GetVar("date");
const time = player.GetVar("time");
const status = player.GetVar("status");

fetch(url,{
  method: 'POST',
  mode: 'no-cors',
  cache: 'no-cache',
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({
    name: name,
    email: email,
    mobile: mobile,
    score: score,
    duration: duration,
    date: date,
    time: time,
    status: status
  })
});   

}

