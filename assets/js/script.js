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
            '<td>' + setArray[index].timer + ' secondes' + '</td>' +
            '<td>' + '<button class="btn btn-danger mr-3" type="button" onclick="deleteSet(' + '\'' + setArray[index].title + '\'' + ', ' + 'this.parentNode.parentNode' + ')">Supprimer</button>' +
            '<button class="btn btn-info ml-3" type="button" onclick="deleteSet(' + '\'' + setArray[index].title + '\'' + ', ' + 'this.parentNode.parentNode' + ')">Modifier</button></td>';
        document.getElementById('arrayIncrement').appendChild(add);
    }
}
function newSet(title, sets, reps, timer) {
    let setName = new Set(title , sets, reps, timer);
    setArray.push(setName);
    console.log(setArray);
    showSets();
}
function edit() {
    
}
function deleteSet(title, parent) {
    for (let index = 0; index < setArray.length; index++) {
        if (setArray[index].title == title) {
            setArray.splice(index, 1);
            parent.remove(); 
        }
    }
    console.log(setArray);
}