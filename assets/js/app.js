let likes, hobbies = [], firstName, secondName;


run = () => {
    likes = $("[name='interest']:checked");
    if (likes.length<4 ||likes.length>4) {
        alert(" Choose four hobbies")
    }else {
        for (let i = 0; i < likes.length; i++) {
            hobbies.push(likes[i].value);
        };
        firstName = $(".fname").val()
        secondName = $(".sname").val()
        console.log(hobbies);
    }

}
let userNew
button = () => {
    run()
    userNew=new Person (firstName,secondName,hobbies)
    console.log(userNew);

    kilonzi = new Person('Victor', 'Kilonzi', ['Music', 'Books', 'Art', 'Fashion'])

    kelvin = new Person('Kelvin', 'Gitahi', ['Dancing', 'Driving', 'Sports', 'Travelling'])

    pairs=[kilonzi,kelvin]
    // let result
    let pair
    // if (result == false) {
        pairs.forEach(element => {
                    let result =
                    element.hobbies.every(function (element) {
                        return userNew.hobbies.includes(element);
                    });
                    if (result == true) {
                        pair = element.firstName
                        console.log(pair);
                        document.getElementById('result').innerHTML='Your interests match with '+ pair + "'s +254712345678"
                    } else {
                        pair = "No Match!"
                        // console.log(pair);
                    }
                });
        // pairs.some(function(element) {
        //     result=
        //     element.hobbies.every(function (element) {
        //         return userNew.hobbies.includes(element)
        // })
        // console.log(pair);
    // } 
}
function Person(firstName, secondName, hobbies) {
    this.firstName = firstName
    this.secondName = secondName
    this.hobbies = hobbies
}

about = () => {
    alert("Thank you! Your message has been recieved")
}
