const getRandomNumber = (num) => Math.floor(Math.random() * num);
const COMPONENTS = {
    whatDay: ["horrible", "terrible", "bad", "okey", "good", "great", "excelent", "the best", "mediocre"],
    youShould: ["code", "go for a walk", "go to the gym", "go for a run", "do something you wanted a long time ago"],
    workDone: ["will get some", "wont get any", "will get all the"]
}

for(component in COMPONENTS) {
    const randomNum = getRandomNumber(COMPONENTS[component].length);
    const message = COMPONENTS[component][randomNum];
    switch(component) {
        case "whatDay":
            console.log(`Today is going to be a ${message} day!`);
            break;
        case "youShould":
            console.log(`You should ${message}!`);
            break;
        case "workDone":
            console.log(`You ${message} work done!`);
            break;
    }
}