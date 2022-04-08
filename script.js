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

    //add inf
    doc.setFontSize(7);

    doc.text(ldes, 6, 5);
    doc.text(indes, 32, 5);

    doc.text(lmod, 6, 8);
    doc.text(inmod, 32, 8);

    JsBarcode("#code39-model", inmod, {
        format: 'CODE39',
        displayValue: false,
        height: 22,
        margin: 0,
        width: 0.8,
    })
    doc.addImage(document.querySelector('#code39-model').src, 'JPEG', 32, 10)

    doc.text("Importador", 5, 19);
    logoHeight = 6; logoWidth = logoHeight * 150 / 45
    doc.addImage(logo, 'PNG', 5, 20, logoWidth, logoHeight)
    doc.text("PV Comunicaciones S.A de C.V", 32, 19);
    doc.text("Colegio 6300 Int 103, Cima Comercial ", 32, 22);
    doc.text("C.P 31216, Chihuahua, Chih. Mexico", 32, 25);
    doc.text("RFC: PCO961119-M49", 32, 28);

    doc.text(lped, 6, 31.5);
    doc.text(inped, 32, 31.5);

    doc.text(infec, 62, 31.5);

    JsBarcode("#code39-lot-number", inped, {
        format: 'CODE39',
        displayValue: false,
        height: 22,
        margin: 0,
        width: 0.8,
    })
    doc.addImage(document.querySelector('#code39-lot-number').src, 'JPEG', 32, 33)
    
    doc.text(lpde, 6, 42);
    doc.text(inpde, 32, 42);

    doc.text(lori, 6, 45);
    doc.text(inori, 32, 45);

    doc.text(lmar, 54, 45);
    doc.text(inmar, 62, 45);
    doc.output('dataurlnewwindow',{filename: indes.value});
}