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
    factor = 2.835
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: [75 * factor, 50 * factor]
    })

    doc.roundedRect(1, 1, 73, 48, 2.5, 2.5)

    //add inf
    doc.setFontSize(7);

    doc.text(ldes, 2, 5);
    doc.text(indes, 24, 5);

    doc.text(lmod, 2, 8);
    doc.text(inmod, 24, 8);

    JsBarcode("#code39-model", inmod, {
        format: 'CODE39',
        displayValue: false,
        height: 22,
        margin: 0,
        width: 1
    })
    doc.addImage(document.querySelector('#code39-model').src, 'JPEG', 24, 10, 48, 5)

    doc.text("Importador", 2, 19);
    logoHeight = 6; logoWidth = logoHeight * 150 / 45
    doc.addImage(logo, 'PNG', 2, 20, logoWidth, logoHeight)
    doc.text("PV Comunicaciones S.A de C.V", 24, 19);
    doc.text("Colegio 6300 Int 103, Cima Comercial ", 24, 22);
    doc.text("C.P 31216, Chihuahua, Chih. Mexico", 24, 25);
    doc.text("RFC: PCO961119-M49", 24, 28);

    doc.text(lped, 2, 31.5);
    doc.text(inped, 24, 31.5);

    doc.text(infec, 55, 31.5);

    JsBarcode("#code39-lot-number", inped, {
        format: 'CODE39',
        displayValue: false,
        height: 22,
        margin: 0,
        width: 1
    })
    doc.addImage(document.querySelector('#code39-lot-number').src, 'JPEG', 24, 33, 48, 5)
    
    doc.text(lpde, 2, 42);
    doc.text(inpde, 24, 42);

    doc.text(lori, 2, 45);
    doc.text(inori, 24, 45);

    doc.text(lmar, 44, 45);
    doc.text(inmar, 52, 45);

    doc.output('dataurlnewwindow',{filename: indes.value});
}
