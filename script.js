function calculate() {
    let name = document.getElementById("name").value;
    let m1 = Number(document.getElementById("m1").value);
    let m2 = Number(document.getElementById("m2").value);

    let total = m1 + m2;
    let result = total / 2 >= 40 ? "PASS" : "FAIL";

    document.getElementById("result").innerHTML =
        "Name: " + name +
        "<br>Total: " + total +
        "<br>Result: " + result;
}