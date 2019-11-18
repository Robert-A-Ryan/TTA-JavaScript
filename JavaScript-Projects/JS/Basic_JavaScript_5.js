document.write(-3E310);

console.log(4+3+6/12);

document.write("5"+122);

console.log(4>9);

document.write(10+5==15);

document.write(10==15);

function forme() {
    document.getElementById("div0").innerHTML=0/0;
}

function tf1() {
    document.getElementById("nt").innerHTML=Number.isNaN("24");
}

function tf2() {
    document.getElementById("tt").innerHTML=Number.isNaN(NaN);
}



function I() {
    document.getElementById("tiab").innerHTML=(3E450);
}

function nI() {
    document.getElementById("negtiab").innerHTML=(-4E520);
}

function lt() {
    document.getElementById("less").innerHTML=(4<9);
}

function mt() {
    document.getElementById("more").innerHTML=(4>9);
}

function true1() {
    document.getElementById("t").innerHTML=("Robert"==="Robert");
}

function false1() {
    document.getElementById("f1").innerHTML=("Robert"===12);
}

function false2() {
    document.getElementById("f2").innerHTML=(740==="740");
}

function false3() {
    document.getElementById("f3").innerHTML=(960===1060);
}

function a1() {
    document.getElementById("and1").innerHTML=(10>5 && 5<9);
}
function a2() {
    document.getElementById("and2").innerHTML=(10>5 && 10>11);
}
function o1() {
    document.getElementById("or1").innerHTML=(10>5 || 10>11);
}
function o2() {
    document.getElementById("or2").innerHTML=(10<5 || 10>11);
}

function not2() {
    document.getElementById("n2").innerHTML=!(10>5 || 10>11);
}
function not1() {
    document.getElementById("n1").innerHTML=!(10<5 || 10>11);
}

