function gradeSorter(grades){
    if (grades >= 90){
        console.log("A")
    }
    else if (grades >= 80){
        console.log("B")
    }
    else if (grades >= 70){
        console.log("C")
    }
     else if (grades >= 60){
        console.log("D")
    }
    else if (grades >= 50){
        console.log("F")
    }
     else {
        console.log("Invalid grade")
    }
}
grades = prompt("Enter your grade")
gradeSorter(grades)