
// // document.write("<h1> Hello All We are working on Live Server</h1>")


// // --------------Variable in Javascript:-----------------------

// // Number Variables 

// var number1 = 10;
// var number2 = 20;

// // console.log("Total of two numbers is", number1 + number2);

// // String Variable

// var str1 = "This is Double quote String";
// var str2 = 'this is single quotes string';

// // console.log(str1, str2);


// // Object Type Variables:

// var Name = {

//     'Name': 'Saurabh',
//     'Class': '1st',
//     'Study': 'MCA'
// }


// // console.log(Name);


// // Boolean Data type:

// var Yes = true;
// var No = false;
// if (Yes != No) {
//     // console.log("Yes")
// }


// // Array:

// var Arr = [1, 2, 3, "String", 4]
// // console.log(Arr)




// // Function

// function abc(a, b) {

//     return a + b;
// }

// op = abc(10, 20)
// // console.log("Total of two Number : ", op)


// var itt = [1, 2, 3, 4, 5, 6, 8];


// /* for loop for Itteration

// for (var c = 0; c < itt.length; c++) {
//      console.log(itt[c])
//  }
//  */


// /* foreach loop Itteration

// itt.forEach(function (element) {
//     console.log(element);
// })

// */

// // let numy = 1;

// // While loop Itteration

// // while (numy <= 10) {

// //     console.log(numy);
// //     numy++;
// // }



// // Creating Date Object

// // let date = new Date()

// // console.log(date.getTime())



// // let yo = document.getElementById('clickbtn');
// // // console.log(yo);

// // let yoyo = document.getElementsByClassName('text');

// // // yoyo[0].classList.add('no');


// // function yes() {
// //     console.log('hey');
// // }


// // let ele = document.createElement('button');
// // ele.classList.add('button');
// // ele.type = 'button';
// // ele.id = 'name';
// // ele.innerText = "this is Saurabh";
// // ele.classList.add('yes', 'ooo')
// // yoyo[0].appendChild(ele);


// // let newElement = document.createElement('p')
// // newElement.innerText = "This is New Element";
// // yoyo[0].replaceChild(newElement, ele)


// // qs = document.querySelector('.text')
// // console.log(qs)



// // Events

// // let count = 0;
// // let pre = document.querySelector('.main').innerText;
// // clickbtn.addEventListener('click', function () {
// //     count++
// //     console.log(count, pre)
// //     if (count % 2 != 0) {
// //         document.querySelector('.main').innerHTML = " I Think Button has been Clicked ";
// //         document.getElementById('clickbtn').innerText = "Back to Previous";
// //         console.log('upper');
// //     }
// //     else {
// //         document.querySelector('.main').innerHTML = pre;
// //         document.getElementById('clickbtn').innerText = "Click Me";
// //         console.log('lower');
// //     }


// // })




// // function myFunction() {

// //     let msgModal = document.querySelector('.modal');
// //     let aaa = document.querySelector('.exampleModalLabel');

// //     let header = document.getElementById('exampleModalLabel').innerText = 'Error'
// //     let inp = document.getElementById('yes').innerText = "Yehh We did It";
// //     let msgModal1 = document.querySelector('.modal-body');
// //     let msg = document.createElement('h6');
// //     msg.innerText = inp;
// //     msgModal1.appendChild(msg);
// //     $('#exampleModal').modal('show');

// // }



// // Simple Function 

// // function xyz(a, b) {

// //     return a + b;
// // }


// // Arrow Function 

// // xyz = (a, b) => { return a + b; }




// // myfunc = () => {
// //     document.getElementById('new').innerText = "Yehh 3 Second Complated !!"
// //     console.log("3 Socond Complated!!!")
// // }



// // // setTimeout(myfunc, 3000);
// // ooo = setInterval(myfunc, 3000)


// // let json = { 'Name': 'Saurabh', 'Address': 'Mumbai' }


// // dodo = [];

// // dodo.push(['Saurabh', 'Upadhyay'], ['Shivansh', 'Upadhyay'], ['Pranaya', 'Upadhyay']);
// // dodo.forEach(function (e, index) {

// //     console.log(index)
// //     console.log(e[0])
// //     console.log(e[1])
// // })
// // console.log(typeof json)

// // let string = JSON.stringify(json)

// // console.log(typeof string)

// // let againjson = JSON.parse(string)
// // console.log(typeof againjson)





function mytime() {
    let date1 = new Date();

    let sec = date1.getSeconds();
    let min = date1.getMinutes();
    let hour = date1.getHours();
    if (sec <= 9) {
        sec = "0" + sec;
    }
    if (min <= 9) {

        min = "0" + min;
    }
    if (hour <= 9) {

        hour = "0" + hour;
    }


    document.getElementById('time').innerText = hour + " : " + min + " : " + sec;

    let sitedate = date1.toDateString()
    document.getElementById('date').innerText = sitedate;
    // console.log("time");
}

let ab = setInterval(mytime, 1000);







newclick = document.getElementById('myclick')



function tables() {
    let name = document.getElementById("name").value;
    let descrip = document.getElementById("description").value;





    if (localStorage.getItem('details') == null) {
        arr = [];
        if (name != "" || descrip != "") {
            arr.push([name, descrip]);
            localStorage.setItem('details', JSON.stringify(arr))
        }

    }
    else {

        newlocal = localStorage.getItem('details');
        arr = JSON.parse(newlocal);
        // console.log(typeof arr)
        if (name != "" || descrip != "") {
            arr.push([name, descrip]);
            localStorage.setItem('details', JSON.stringify(arr))
        }

    }


    str = "";
    arr.forEach(function (element, index) {
        // console.log("aaya")



        str += `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
            </tr>
    
            `

        // console.log(str);

    });
    document.getElementById('mybody').innerHTML = str;



}

newclick.addEventListener("click", function () {

    tables();
    location.reload()
    alert("Data Insert Successfully !!");
});
tables();











