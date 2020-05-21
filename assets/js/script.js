class Set {
    constructor(title, set, rep, timer) {
        this.title = title;
        this.set = set;
        this.rep = rep;
        this.timer = timer;
    }
}
var setArray = [];
var setNumber = 0;
function showSets() {
    document.getElementById('arrayIncrement').innerHTML = '';
    for (let index = 0; index < setArray.length; index++) {
        var add = document.createElement('tr');
        add.innerHTML =
            '<th scope="row">' + setArray[index].title + '</th>' +
            '<td>' + setArray[index].set + '</td>' +
            '<td>' + setArray[index].rep + '</td>' +
            '<td>' + setArray[index].timer + ' secondes' + '</td>';
        document.getElementById('arrayIncrement').appendChild(add);
    }
}
function newSet(title, sets, reps, timer) {
    let setName = new Set(title , sets, reps, timer);
    setArray.push(setName);
    console.log(setArray);
    showSets();
}

