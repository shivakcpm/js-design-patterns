class Command{
    constructor(specialMath){
        this.commandsExecuted = [];
        this.specialMath = specialMath;
    }

    execute = function(command){
        this.commandsExecuted.push(command);
        return this.specialMath[command]();
    }

}