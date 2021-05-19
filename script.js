const ps = new PerfectScrollbar(".main-box");
for(let i=1;i<=100;i++)
{
    let str="";
    let n=i;
    while(n>0)
    {   
        let rem=n%26;
        if(rem==0)
        {
            str="Z"+str;
            n=Math.floor(n/26)-2;
        }
        else{
            str=String.fromCharCode((rem-1)+65)+str;
            n=Math.floor(n/26);
        }
    }
    $(".row-box").append(`<div class="rows-name">${str}</div>`);
    $(".column-box").append(` <div class="columns-name">${i}</div>`)
}
for(let i=1;i<=100;i++)
{ 
    let row=$(`<div class="input-row"></div>`)
    for(let j=1;j<=100;j++)
    row.append(`<div class="input-cell" id="row-${i}-coloum-${j}" contenteditable="false"></div>`);
    $(".main-box").append(row);
}

$(".main-box").scroll(function(e){
    
    $(".column-box").scrollTop(this.scrollTop);
    $(".row-box").scrollLeft(this.scrollLeft);

})
$(".input-cell").dblclick(function(e){
    $(this).attr("contenteditable","true");
    $(this).focus();
})
$(".input-cell").blur(function(e){
    $(this).attr("contenteditable","false")
})
$(".input-cell").click(function(e){
    $(".input-cell.select").removeClass("select");
    $(this).addClass("select")
})