(()=>{"use strict";let e="",t=0,n=0,d="";document.getElementById("pic_url").addEventListener("change",(function(){e=document.getElementById("pic_url").value,document.getElementById("output").src=e})),document.getElementById("pic_width").addEventListener("change",(function(){t=parseInt(document.getElementById("pic_width").value),document.getElementById("output").style.width=t+"px"})),document.getElementById("border_w").addEventListener("change",(function(){n=parseInt(document.getElementById("border_w").value),document.getElementById("output").style.borderWidth=n+"px",console.log(n+"px")})),document.getElementById("border_c").addEventListener("change",(function(){d=document.getElementById("border_c").value,document.getElementById("output").style.borderColor=d}))})();