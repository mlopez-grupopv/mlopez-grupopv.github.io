//function to export pdf DOC
function pdfexport(){
    //variables
    //labels
    var ltitle = document.getElementById('tlt').innerText,
        lname = document.getElementById('lbname').innerText,
        lage = document.getElementById('lbage').innerText,
        ldob = document.getElementById('lbdob').innerText,
        lover = document.getElementById('lbover').innerText;
    //input
    var inname = document.getElementById('inname').value,
        inage = document.getElementById('inage').value,
        indob = document.getElementById('indob').value,
        ininfo = document.getElementById('inover').value;

    //jspdf part
    var doc = new jsPDF();
    //add inf
    doc.setFontSize(22);
    doc.text(ltitle, 20, 10);
    doc.setFontSize(16);
    doc.text(lname + '  ' + inname, 10, 20);
    doc.text(lage + ' ' + inage, 10, 30);
    doc.text(ldob + ' ' + indob, 10, 40);
    doc.text(lover + ' ' + ininfo, 10, 50);
    doc.output('dataurlnewwindow',{filename: inname.value});
}