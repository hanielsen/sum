var sp1=document.getElementById("i1");
var sp2=document.getElementById("p1");
var sp3=document.getElementById("p2");

function su1(n)
{
    let s=0;
    let i=0;
    let sp1v=sp1.value;
    let t0 = Date.now();
    for (i=0;i<=sp1v; i++) s+=i;
    let t1 = Date.now();
    return [s,t0,t1];    
}

function vis()
{
    let sp1v=sp1.value;
    let [s, t0, t1] = su1(sp1v);

    sp2.innerHTML = "Sum = " + s;
    sp3.innerHTML = "Tidsforbrug: " + (t1-t0) + " ms";
}
