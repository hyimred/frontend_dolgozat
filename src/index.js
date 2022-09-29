import './style.css';

let pic_url = "";
let pic_width = 0;
let border_w = 0;
let border_c = "";

function f_pic_url() {
    pic_url = document.getElementById('pic_url').value;
    document.getElementById('output').src = pic_url;
}

function f_pic_width() {
    pic_width = parseInt(document.getElementById('pic_width').value);
    document.getElementById('output').style.width = pic_width+"px";
}

function f_border_w() {
    border_w = parseInt(document.getElementById('border_w').value);
    document.getElementById('output').style.borderWidth = border_w+"px";
    console.log(border_w+"px")
}

function f_border_c() {
    border_c = document.getElementById('border_c').value;
    document.getElementById('output').style.borderColor = border_c;
}

document.getElementById("pic_url").addEventListener('change',f_pic_url);
document.getElementById("pic_width").addEventListener('change',f_pic_width);
document.getElementById("border_w").addEventListener('change',f_border_w);
document.getElementById("border_c").addEventListener('change',f_border_c);