//function to export pdf DOC
function pdfexport(){
    //variables
    //labels
    var ltitle = document.getElementById('tlt').innerText,
        lsdesc = document.getElementById('lsdesc').innerText,
        lwtlt = document.getElementById('lwtlt').innerText,
        lhbd = document.getElementById('lhbd').innerText,
        ldexc = document.getElementById('ldex').innerText,
    //input
    var dname = document.getElementById('dname').value,
        indpt = document.getElementById('indpt').value,
        inproty = document.getElementById('inpty').value,
        inprod = document.getElementById('inprod').value,

    //jspdf part
    var doc = new jsPDF();
    //add inf
    doc.setFontSize(22);
    doc.text(ltitle, 20, 10);
    doc.setFontSize(16);
    doc.text(lsdesc + '  ' + dname, 10, 20);
    doc.text(lwtlt + ' ' + indpt, 10, 30);
    doc.text(lhbd + ' ' + inproty, 10, 40);
    doc.text(ldexc + ' ' + inprod, 10, 50);

  }