let level = ""
const href = () => {
    window.location.href = "Html/index.html";
}
const onsubmit = () => {
    document.getElementById("submit").addEventListener("submit", function (e) {
        e.preventDefault()
        let user_name = document.getElementById("fname")
        localStorage.setItem("userName", user_name.value)
        if (document.getElementById('High').checked)
            level = "High ";
        else
            level = "low";
        level = JSON.stringify(level)
        localStorage.setItem("level", level)
        if (localStorage.getItem("userName") != "")
            href()
        else
            document.getElementById("result").innerHTML = "you must enter a name ";
    }
    )
}

const onchange_level = (e) => {
    document.getElementById("result").innerHTML = "you choosed the " + e.value;
}
function Main() {
    onsubmit()
}
Main()