<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<p id="demo"></p>
<p id="demo1"></p>
<p id="demo2"></p>
<p id="demo3"></p>
<p id="demo4"></p>
<script>
var user = {
		name : "John",
		surname : "Mike",
};

document.getElementById("demo").innerHTML = user.name;
document.getElementById("demo1").innerHTML = user.surname;
user.name = "Peter";
document.getElementById("demo2").innerHTML = user.name;
delete user.name;
document.getElementById("demo3").innerHTML = user;
var fruit = {
		apple: 20,
		pear: 20,
		peach: 10
		};
		var sum = fruit.apple + fruit.pear + fruit.peach;
		document.getElementById("demo4").innerHTML = sum;
</script>
</body>
</html>
