    //lay id bang 1
    let getid = document.getElementById('getID');
    let getid2;
    let getid3;
    //set atribute
    getid.onmouseover = function(){
        getid2 = document.getElementById('getID2');
        getid2.setAttribute('class','hideShow')
        getid3 = document.getElementById('getID3');
        getid3.setAttribute('class','hideShow')
    }    
    getid.onmouseout = function(){
        getid2.setAttribute('class','o-hide')
        getid3.setAttribute('class','o-hide')
    }

    //lay id bang 2
    let getIDTab2 = document.getElementById('table2');
    let getIDtable2a;
    let getIDtable2b;
    //set atribute
    getIDTab2.onmouseover = function(){
        getIDtable2a = document.getElementById('table2a');
        getIDtable2a.setAttribute('class','hideShow')
        getIDtable2b = document.getElementById('table2b');
        getIDtable2b.setAttribute('class','hideShow')
    }
    getIDTab2.onmouseout = function(){
        getIDtable2a.setAttribute('class','o-hide')
        getIDtable2b.setAttribute('class','o-hide')
    }
    //lay id bang 3
    let getIDTab3 = document.getElementById('table3');
    let getIDtable3a;
    let getIDtable3b;
    //set atribute
    getIDTab3.onmouseover = function(){
        getIDtable3a = document.getElementById('table3a');
        getIDtable3a.setAttribute('class','hideShow')
        getIDtable3b = document.getElementById('table3b');
        getIDtable3b.setAttribute('class','hideShow')
    }
    getIDTab3.onmouseout = function(){
        getIDtable3a.setAttribute('class','o-hide')
        getIDtable3b.setAttribute('class','o-hide')
    }