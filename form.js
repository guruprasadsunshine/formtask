let h1 = document.createElement("h1")
h1.setAttribute("class","bg-dark text-white container p-2 text-center mt-5 ")
h1.innerText="FORM "
document.body.append(h1)

let con = document.createElement("div")
con.setAttribute("class","container p-2 bg-danger my-5")
document.body.append(con)

let minicontdiv = document.createElement("div")
minicontdiv.setAttribute("class","  text-center bg-warning m-5")
con.append(minicontdiv)

let label = document.createElement("label")
label.setAttribute("for","firstname")
label.setAttribute("class","m-2")
label.innerText="FirstName"
minicontdiv.append(label)

let input1 = document.createElement("input")
input1.setAttribute("class","  form-control")
input1.setAttribute("id","FirstName")
input1.setAttribute("placeholder","Firstname")
minicontdiv.append(input1)

let label1 = document.createElement("label")
label1.setAttribute("for","Lastname")
label1.setAttribute("class","m-2")
label1.innerText="LastName"
minicontdiv.append(label1)

let input2 = document.createElement("input")
input2.setAttribute("class","  form-control")
input2.setAttribute("id","LastName")
input2.setAttribute("placeholder","Lastname")
minicontdiv.append(input2)


let addressdiv = document.createElement("div")
addressdiv.setAttribute("class","my- text-center")
minicontdiv.append(addressdiv)

let labeladdress = document.createElement("label")
labeladdress.setAttribute("for","Address")
labeladdress.innerText="Address"
addressdiv.append(labeladdress)

let addressinput = document.createElement("input")
addressinput.setAttribute("class","form-control")
addressinput.setAttribute("id","Address")
addressinput.setAttribute("type","text")
addressinput.setAttribute("placeholder","Address")
addressdiv.append(addressinput)



let divforpincode= document.createElement("div")
divforpincode.setAttribute("class","m-2 text-center")
minicontdiv.append(divforpincode)

let labelpincode = document.createElement("label")
labelpincode.setAttribute("for","Pincode")
labelpincode.innerText= "Pincode"
divforpincode.append(labelpincode)

let pincodeinput = document.createElement("input")
pincodeinput.setAttribute("class","form-control")
pincodeinput.setAttribute("id","Pincode")
pincodeinput.setAttribute("type","number")
pincodeinput.setAttribute("placeholder","Pincode")
divforpincode.append(pincodeinput)

let genderformdiv =document.createElement("div")
genderformdiv.setAttribute("class","d-flex m-2 align-content-center justify-content-around")
minicontdiv.append(genderformdiv)

let formdiv =document.createElement("div")
formdiv.setAttribute("class","d-flex text-center")
genderformdiv.append(formdiv)

let labelformale= document.createElement("label")
labelformale.setAttribute("for","Male")
labelformale.innerText="Male"
formdiv.append(labelformale)


let inputformale = document.createElement("input")
inputformale.setAttribute("class","  form-control")
inputformale.setAttribute("id","male")
inputformale.setAttribute("type","radio")
formdiv.append(inputformale)


let labelforfemale= document.createElement("label")
labelforfemale.setAttribute("for","Female")
labelforfemale.innerText="Female"
formdiv.append(labelforfemale)


let inputforfemale = document.createElement("input")
inputforfemale.setAttribute("class"," form-control")
inputforfemale.setAttribute("id","Female")
inputforfemale.setAttribute("type","radio")
formdiv.append(inputforfemale)


let divforoption = document.createElement("div")
divforoption.setAttribute("class"," d-flex ")
minicontdiv.append(divforoption)

let inputfornoodles = document.createElement("input")
inputfornoodles.setAttribute("type","checkbox")
inputfornoodles.setAttribute("class"," my-2 form-control")
inputfornoodles.setAttribute("value","Noodles")
inputfornoodles.setAttribute("id","box1")
inputfornoodles.setAttribute("Name","selectone")
divforoption.append(inputfornoodles)

let labelfornoodle = document.createElement("label")
labelfornoodle.setAttribute("for","box1")
labelfornoodle.innerHTML="Noodles"
divforoption.append(labelfornoodle)


let inputforlemon = document.createElement("input")
inputforlemon.setAttribute("type","checkbox")
inputforlemon.setAttribute("class"," my-2 form-control")
inputforlemon.setAttribute("value","Lemon rice")
inputforlemon.setAttribute("id","box2")
inputforlemon.setAttribute("Name","selectone")
divforoption.append(inputforlemon)

let labelforlemon = document.createElement("label")
labelforlemon.setAttribute("for","box2")
labelforlemon.innerHTML="Lemon"
divforoption.append(labelforlemon)


let inputforfried = document.createElement("input")
inputforfried.setAttribute("type","checkbox")
inputforfried.setAttribute("class"," my-2 form-control")
inputforfried.setAttribute("value","fried rice")
inputforfried.setAttribute("id","box3")
inputforfried.setAttribute("Name","selectone")
divforoption.append(inputforfried)

let labelforfried = document.createElement("label")
labelforfried.setAttribute("for","box3")
labelforfried.innerHTML="Fried"
divforoption.append(labelforfried)


let inputforchicken = document.createElement("input")
inputforchicken.setAttribute("type","checkbox")
inputforchicken.setAttribute("class"," my-2 form-control")
inputforchicken.setAttribute("value","chicken")
inputforchicken.setAttribute("id","box4")
inputforchicken.setAttribute("Name","selectone")
divforoption.append(inputforchicken)

let labelforchicken = document.createElement("label")
labelforchicken.setAttribute("for","box4")
labelforchicken.innerHTML="Chicken"
divforoption.append(labelforchicken)


let inputforchichapathi = document.createElement("input")
inputforchichapathi.setAttribute("type","checkbox")
inputforchichapathi.setAttribute("class"," m-2 form-control")
inputforchichapathi.setAttribute("id","box5")
inputforchichapathi.setAttribute("Name","selectone")
inputforchichapathi.setAttribute("value","chapathi")
divforoption.append(inputforchichapathi)

let labelforchapathi = document.createElement("label")
labelforchapathi.setAttribute("for","box5")
labelforchapathi.innerHTML="Chicken"
divforoption.append(labelforchapathi)

let labelforcountry = document.createElement("label")
labelforcountry .setAttribute("for","box1")
labelforcountry .setAttribute("class","d-inline")
labelforcountry .innerText="Country"
minicontdiv.append(labelforcountry )


let inputforcountry = document.createElement("input")
inputforcountry.setAttribute("type","text")
inputforcountry.setAttribute("class"," my-2 country form-control")
inputforcountry.setAttribute("placeholder","Country")
inputforcountry.setAttribute("id","country")
minicontdiv.append(inputforcountry)



let labelforstate = document.createElement("label")
labelforstate.setAttribute("for","box1")
labelforstate.setAttribute("class","d-inline")
labelforstate.innerText="State"
minicontdiv.append(labelforstate)


let inputforstate = document.createElement("input")
inputforstate.setAttribute("type","text")
inputforstate.setAttribute("class"," my-2 state form-control")
inputforstate.setAttribute("placeholder","state")
inputforstate.setAttribute("id","state")
minicontdiv.append(inputforstate)

let submitdiv = document.createElement("div")
submitdiv.setAttribute("class","d-flex justify-content-center align-content-center my-2")
minicontdiv.append(submitdiv)

let buttonsubmit = document.createElement("button")
buttonsubmit.setAttribute("type","submit")
buttonsubmit.setAttribute("onclick","submit()")
buttonsubmit.setAttribute("class","btn bg-success my-2")
buttonsubmit.innerText="Submit"
minicontdiv.append(buttonsubmit)



//------------function---------------//

function submit(){
    var Firstname = document.getElementById("FirstName").value 
console.log(Firstname)

    var Lastname = document.getElementById("LastName").value 
   console.log(Lastname)
    
var address = document.getElementById("Address").value
console.log(address)

var Pincode = document.getElementById("Pincode").value
console.log(Pincode)

var male = document.getElementById("male").value
console.log(male)

var Female = document.getElementById("Female").value
console.log(Female)

var country = document.getElementById("country").value
console.log(country)

var state= document.getElementById("state").value
console.log(state)


let td1 = document.getElementById("td1")
td1.innerHTML= Firstname

let td2 = document.getElementById("td2")
td2.innerHTML = Lastname

let td3 = document.getElementById("td3")
td3.innerHTML = address

let td4 = document.getElementById("td4")
td4.innerHTML = Pincode


if(document.getElementById("male").checked){
let td5 = document.getElementById("td5")
td5.innerHTML= male
}
else if(document.getElementById("Female").checked){
    let td5  = document.getElementById("td5")
    td5.innerHTML = Female 
}

let td6 = document.getElementById("td6")
let checkbox = document.getElementsByName("selectone") 


let list = [];

for(let i=0;i<checkbox.length;i++){
if(checkbox[i].checked){
 
    console.log(checkbox[i].value)
    list.push(checkbox[i].value) 
}
}

td6.innerHTML=list
// console.log(list.length)

if(list.length<2){
    alert("Please select atleast 2")

    td6.innerHTML =""
}




let td7 =document.getElementById("td7")
td7.innerHTML = country 


let td8 = document.getElementById("td8")
td8.innerHTML = state



}
