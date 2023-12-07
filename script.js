document.getElementById("btn").addEventListener("click", teszt);

function teszt(){
    let pont=0;

    const a = document.getElementById("masodikz").checked;

    if (a==1){pont=pont+1;}

    const b = document.getElementById("varos").value;

    if (b=="Szöul" || b=="Seoul" || b=="szöul" || b=="seoul"){pont=pont+1;}

    const c = document.getElementById("lakos").value;

    if (c=="51"){pont=pont+3;}
    else if (c=="50" || c=="52"){pont=pont+2;}
    else if (c=="49" || c=="48" || c=="53" || c=="54"){pont=pont+1;}

    const d = document.getElementById("palota").selectedIndex;

    if (d==3){pont=pont+1;}

    const e = document.getElementById("igaz").checked;

    if (e==1){pont=pont+1;}

    const select = document.getElementById("repter");
    const f = [];

    for (const option of select.options){
        if (option.selected){
            f.push(option.value);
        }
    }
    
    if (f.includes("gimpo") && f.includes("incheon")){pont=pont+2;}
    else if (f.includes("gimpo") || f.includes("incheon")){pont=pont+1;}

    const g = document.getElementById("hegy").value;

    if (g=="8"){pont=pont+2;}
    else if (g=="7" || g=="8"){pont=pont+1;}

    const valaszt = document.getElementById("hegyek");
    const h = [];

    for (const opcio of valaszt.options){
        if (opcio.selected){
            h.push(opcio.value);
        }
    }

    if (h.includes("bugaksan") && h.includes("inwangsan") && h.includes("naksan") && h.includes("namsan")){pont=pont+4;}
    else if (h.includes("bugaksan") && h.includes("inwangsan") && h.includes("naksan")){pont=pont+3;}
    else if (h.includes("bugaksan") && h.includes("inwangsan") && h.includes("namsan")){pont=pont+3;}
    else if (h.includes("bugaksan") && h.includes("naksan") && h.includes("namsan")){pont=pont+3;}
    else if (h.includes("naksan") && h.includes("inwangsan") && h.includes("namsan")){pont=pont+3;}
    else if (h.includes("bugaksan") && h.includes("inwangsan")){pont=pont+2;}
    else if (h.includes("bugaksan") && h.includes("naksan")){pont=pont+2;}
    else if (h.includes("bugaksan") && h.includes("namsan")){pont=pont+2;}
    else if (h.includes("inwangsan") && h.includes("naksan")){pont=pont+2;}
    else if (h.includes("inwangsan") && h.includes("namsan")){pont=pont+2;}
    else if (h.includes("namsan") && h.includes("naksan")){pont=pont+2;}
    else if (h.includes("bugaksan") || h.includes("inwangsan") || h.includes("naksan") || h.includes("namsan")){pont=pont+1;}

    alert(`Összesen ${pont} pontot értél el a 15-ből!`);
}