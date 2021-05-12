function titleCase(str) {
    var newTitle = str.split(" ");
    var updatedTitle = [];
    var list=[]
    for (var st in newTitle) {
        updatedTitle[st] = newTitle[st].toLowerCase()}
    for (let i=0;i<updatedTitle.length;i++){
            list.push(updatedTitle[i].replace(updatedTitle[i][0], updatedTitle[i][0].toUpperCase()));}
    return list.join(' ');
    }
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"))