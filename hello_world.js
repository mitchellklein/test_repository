var GPIO = require('onoff').GPIO; //include onoff to interact with qpio pins
var LED = new GPIO(4,'out');
var blinkInterval = setInterval(blinkLED, 250);

function blinkLED()
{
	if(LED.readSync() === 0)
	{
		LED.writeSync(1);
	}
	else
	{
		LED.writeSync(0);
	}
}

function endBlink()
{
	clearInterval(blinkInterval);
	LED.writeSync(0);
	LED.unexport();
}

setTimeout(endBlink, 5000);