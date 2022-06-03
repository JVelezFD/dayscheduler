var hourID;
var currentHour;
const taskHolder = JSON.parse(localStorage.getItem("taskHolder")) || [];
console.log(taskHolder);





//Show the current date
const currentTime = moment();
$("#currentDay").text(currentTime.format("MMM Do, YYYY"));

//1st load task from local storage to display on workday scheduler and highlight current time on scheduler
loadTask();

function loadTask() {
    currentHour = moment().format("H");
    console.log(typeof (parseInt(currentHour)));

    for (let index = 0; index < taskHolder.length; index++) {
        hourID = taskHolder[index].timeBlock;
        console.log(hourID);
        const textArea = $("#" + hourID).find(".task");

        textArea.val(taskHolder[index].userTask)
    }
}

//2nd Collecting data to save to local storage (time and task text data)
$(".saveBtn").click((e) => {

    console.log("btn clicked");
    const button = $(e.target)
    const buttonText = button.text();
    const parentElement = $(e.target).parent();

    const timeKey = parentElement.attr("id");
    const task = parentElement.find(".task");

    const userData = {
        userTask: task.val(),
        timeBlock: timeKey
    };

    taskHolder.push(userData);

    localStorage.setItem("taskHolder", JSON.stringify(taskHolder));
    console.log(userData, "saved data")
    return;
}
);

//adding background color that aligns with current time 
//need to setup current hour and hourID so the function can work

// converting time block from string to number
//var hourSwitch = parseInt(hourID.split('-')[0]);
// setup up hours for color coding past prest future
var hour9a = 9;
var hour10a = 10;
var hour11a = 11;
var hour12a = 12;
var hour1p = 13;
var hour2p = 14;
var hour3p = 15;
var hour4p = 16;
var hour5p = 17;

var timeblockHour = moment().format('H');
console.log(timeblockHour);

var tbHour = parseInt(timeblockHour);
console.log(tbHour);
//var cHour = parseInt(currentHour);
//console.log(hourSwitch, cHourSwitch)





//9am Hour
if (tbHour < hour9a) {
     $("#9task").addClass("future");
} else if (tbHour > hour9a) {
     $("#9task").addClass("past");
} else if (tbHour = hour9a) {
     $("#9task").addClass("present");
}

//10am Hour

if (tbHour < hour10a) {
    $("#10task").addClass("future");
} else if (tbHour > hour10a) {
    $("#10task").addClass("past");
} else if (tbHour = hour10a) {
    $("#10task").addClass("present");
}
//11am Hour

if (tbHour < hour11a) {
    $("#11task").addClass("future");
} else if (tbHour > hour11a) {
    $("#11task").addClass("past");
} else if (tbHour = hour11a) {
    $("#11task").addClass("present");
}
//12pm Hour

if (tbHour < hour12a) {
    $("#12task").addClass("future");
} else if (tbHour > hour12a) {
    $("#12task").addClass("past");
} else if (tbHour = hour12a) {
    $("#12task").addClass("present");
}

//1pm Hour

if (tbHour < hour1p) {
    $("#13task").addClass("future");
} else if (tbHour > hour1p) {
    $("#13task").addClass("past");
} else if (tbHour = hour1p) {
    $("#13task").addClass("present");
}

//2pm Hour

if (tbHour < hour2p) {
    $("#14task").addClass("future");
} else if (tbHour > hour2p) {
    $("#14task").addClass("past");
} else if (tbHour = hour2p) {
    $("#14task").addClass("present");
}

//3pm Hour

if (tbHour < hour3p) {
    $("#15task").addClass("future");
} else if (tbHour > hour3p) {
    $("#15task").addClass("past");
} else if (tbHour = hour3p) {
    $("#15task").addClass("present");
}

//4pm Hour

if (tbHour < hour4p) {
    $("#16task").addClass("future");
} else if (tbHour > hour4p) {
    $("#16task").addClass("past");
} else if (tbHour = hour4p) {
    $("#16task").addClass("present");
}

//5pm Hour

if (tbHour < hour5p) {
    $("#17task").addClass("future");
} else if (tbHour > hour5p) {
    $("#17task").addClass("past");
} else if (tbHour = hour5p) {
    $("#17task").addClass("present");
}




