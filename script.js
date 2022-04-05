//function to export pdf DOC
function pdfexport(){
    //variables
    //labels
    var ltitle = document.getElementById('tlt').innerText,
        ldes = document.getElementById('lbdes').innerText,
        lmod = document.getElementById('lbmod').innerText,
        lmar = document.getElementById('lbmar').innerText,
        lped = document.getElementById('lbped').innerText,
        lfec = document.getElementById('lbfec').innerText,
        lpde = document.getElementById('lbpde').innerText,
        lori = document.getElementById('lbori').innerText;
    //input
    var indes = document.getElementById('indes').value,
        inmod = document.getElementById('inmod').value,
        inmar = document.getElementById('inmar').value;
        inped = document.getElementById('inped').value,
        infec = document.getElementById('infec').value,
        inpde = document.getElementById('inpde').value,
        inori = document.getElementById('inori').value;

    //jspdf part
    var doc = new jsPDF();
    //add inf
    doc.setFontSize(22);
    doc.text(ltitle, 20, 10);
    doc.setFontSize(16);
    doc.text(ldes + '  ' + indes, 10, 20);
    doc.text(lmod + ' ' + inmod, 10, 30);
    doc.text(lmar + ' ' + inmar, 10, 40);
    doc.text(lped + ' ' + inped, 10, 50);
    doc.text(lfec + ' ' + infec, 10, 60);
    doc.text(lpde + ' ' + inpde, 10, 70);
    doc.text(lori + ' ' + inori, 10, 80);
    doc.output('dataurlnewwindow',{filename: indes.value});
}
