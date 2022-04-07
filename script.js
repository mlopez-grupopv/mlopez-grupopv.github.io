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
    logoHeight = 6; logoWidth = logoHeight * 150 / 45
    doc.addImage(logo, 'PNG', 9.5, 35, logoWidth, logoHeight)
    doc.text("PV Comunicaciones S.A de C.V", 35, 34);
    doc.text("Colegio 6300 Int 103, Cima Comercial ", 35, 38);
    doc.text("C.P 31216, Chihuahua, Chih. Mexico", 35, 42);
    doc.text("RFC: PCO961119-M49", 35, 46);

    doc.text(lped, 10, 54);
    doc.text(inped, 35, 54);

    doc.text(infec, 75, 54);

    JsBarcode("#code39-lot-number", inped, {
        format: 'CODE39',
        displayValue: false,
        height: 28,
        margin: 0
    })
    doc.addImage(document.querySelector('#code39-lot-number').src, 'JPEG', 35, 60)
    
    doc.text(lpde, 10, 74);
    doc.text(inpde, 42, 74);

    doc.text(lori, 10, 80);
    doc.text(inori, 35, 80);

    doc.text(lmar, 60, 80);
    doc.text(inmar, 75, 80);
    doc.output('dataurlnewwindow',{filename: indes.value});
}