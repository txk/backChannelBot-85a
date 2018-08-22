require('./connectorSetup.js')();

//Bot listening for inbound backchannel events - in this case it only listens for events named "buttonClicked"
bot.on("event", function (event) {
    var msg = new builder.Message().address(event.address);
    msg.textLocale("en-us");
    if (event.name === "buttonClicked") {
        msg.text("I see that you just pushed that button");
    }
    bot.send(msg);
})

//Basic root dialog which takes an inputted color and sends a changeBackground event. No NLP, regex, validation here - just grabs input and sends it back as an event. 
bot.dialog('/', [
    function (session) {
        var reply = createEvent("changeBackground", session.message.text, session.message.address);
        session.endDialog(reply);
    }
]);

__hack85a = 0;

//Creates a backchannel event
const createEvent = (eventName, value, address) => {
    console.log("backChannelBot-85a#createEvent");
    var msg = new builder.Message().address(address);
    msg.data.type = "event";
    msg.data.name = eventName;

    if (__hack85a == 0) {
      msg.data.value = "GREEN";
      __hack85a == 1;
    } else {
      msg.data.value = "WHITE";
      __hack85a == 0;
    }
    return msg;
}



