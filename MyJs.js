
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

        if (name != "" || descrip != "") {
            arr.push([name, descrip]);
            localStorage.setItem('details', JSON.stringify(arr))
        }

    }


    str = "";
    arr.forEach(function (element, index) {




        str += `
            <tr>
                <th scope="row">${index + 1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
            </tr>
    
            `



    });
    document.getElementById('mybody').innerHTML = str;



}

newclick.addEventListener("click", function () {

    tables();
    location.reload()
    alert("Data Insert Successfully !!");
});
tables();











