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
    doc.setFontSize(10);

    doc.text(ldes, 10, 14);
    doc.text(indes, 35, 14);

    doc.text(lmod, 10, 20);
    doc.text(inmod, 35, 20);

    JsBarcode("#code39", inmod, {
        format: 'CODE39',
        displayValue: false
    });
    const img = document.querySelector('img#code39');
    doc.setFontSize(10);
    doc.addImage(img.src, 'JPEG', 33, 22, 65, 7);

    doc.text("Importador", 10, 34);
    doc.text("PV Comunicaciones S.A de C.V", 35, 34);
    doc.text("Colegio 6300 Int 103, Cima Comercial ", 35, 38);
    doc.text("C.P 31216, Chihuahua, Chih. Mexico", 35, 42);
    doc.text("RFC: PCO961119-M49", 35, 46);

    doc.text(lped + ' ' + inped, 10, 64);

    doc.text(lfec + ' ' + infec, 10, 74);

    //code39 ped

    doc.text(lpde + ' ' + inpde, 10, 84);

    doc.text(lori + ' ' + inori, 10, 94);

    doc.text(lmar + ' ' + inmar, 10, 54);

    doc.output('dataurlnewwindow',{filename: indes.value});
}
