//    let Rhombus = [];//מעוין
// let Circle = [];//עיגול
// let Square = [];//ריבוע
// item={   id:"",
//          shape:"",
//          color:"",
//          numOfShapes:"",
//          background:""}
let allShapes = [];
let allId = []
let item = {}
let num_of_set=0
let attributes_items=["numOfShapes","shape","color","background"]
    let b;
    let c;


const Background = (index) => {
    if (index % 3 == 2)
        return "empty";
    else
        if (index % 3 == 1)
            return "lines";
        else
            return "full";
}


const Color=(index)=>{
    if (index <= 3)
    return "red"
else if (index > 6)
    return  "green"
else
    return "blue"
}

function shape(arr, arrName) {
    for (let index = 1; index <= 9; index++) {
        let j = 1;
        b = Background(index);
        c = Color(index)
            for (let index = 0; index < 3; index++) {
                item.shape = arrName;      
                item.id = allId.length + 1;    
                item.numOfShapes = j;         
                allId.push(item.id);
                item.color=c;        
                item.background = b;
                arr.push({...item});
                j += 1;    
            }

    }
}
// let a=[1,2,3,4]
// a.splice(index, 0, element);
// console.log(a);
const main=()=>{
    shape(allShapes, "Circle")
    shape(allShapes,"Square")
    shape(allShapes,"Rhombus")
     console.log(allShapes);
// let my_json = JSON.stringify(Circle);
// let object = JSON.parse(my_json);
  
}

main()

