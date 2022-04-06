//function to export pdf DOC
function pdfexport(){
    //variables
    //labels
    var ldes = document.getElementById('lbdes').innerText,
        lmod = document.getElementById('lbmod').innerText,
        lmar = document.getElementById('lbmar').innerText,
        lped = document.getElementById('lbped').innerText,
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

    JsBarcode("#code39-model", inmod, {
        format: 'CODE39',
        displayValue: false,
        height: 28,
        margin: 0
    })
    doc.addImage(document.querySelector('#code39-model').src, 'JPEG', 35, 22)

    doc.text("Importador", 10, 34);
    doc.text("PV Comunicaciones S.A de C.V", 35, 34);
    doc.text("Colegio 6300 Int 103, Cima Comercial ", 35, 38);
    doc.text("C.P 31216, Chihuahua, Chih. Mexico", 35, 42);
    doc.text("RFC: PCO961119-M49", 35, 46);

    doc.text(lped, 10, 54);
    doc.text(inped, 35, 54);

    doc.text(infec, 75, 54);

    JsBarcode("#code39-lot-number", inmod, {
        format: 'CODE39',
        displayValue: false,
        height: 28,
        margin: 0
    })
    doc.addImage(document.querySelector('#code39-lot-number').src, 'JPEG', 35, 56)
    
    doc.text(lpde + ' ' + inpde, 10, 84);

    doc.text(lori + ' ' + inori, 10, 94);

    doc.text(lmar + ' ' + inmar, 10, 104);

    doc.output('dataurlnewwindow',{filename: indes.value});
}
