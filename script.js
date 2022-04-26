// jsPDF configuration

paperWidth =  3 * 2.54 * 10 // 3 inches
paperHeight = 2 * 2.54 * 10 // 2 inches
marginRadio = 2.5

function pdfexport(){

    var ldes = document.getElementById('lbdes').innerText,
        lmod = document.getElementById('lbmod').innerText,
        lmar = document.getElementById('lbmar').innerText,
        lped = document.getElementById('lbped').innerText,
        lpde = document.getElementById('lbpde').innerText,
        lori = document.getElementById('lbori').innerText;

    var indes = document.getElementById('indes').value,
        inmod = document.getElementById('inmod').value,
        inmar = document.getElementById('inmar').value;
        inped = document.getElementById('inped').value,
        infec = document.getElementById('infec').value,
        inpde = document.getElementById('inpde').value,
        inori = document.getElementById('inori').value;

    factor = 2.83465
    const doc = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: [paperWidth * factor, paperHeight * factor]
    })

    doc.roundedRect(1, 1, paperWidth - 2, paperHeight - 2, marginRadio, marginRadio)

    add3of9Font(doc)
    doc.setFontSize(7);

    doc.text(ldes, 2, 5);
    doc.text(indes, 24, 5);

    doc.text(lmod, 2, 8);
    doc.text(inmod, 24, 8);

    doc.setFont('3of9')
    doc.setFontSize(16)
    doc.text('*' + inmod + '*', 24, 14)
    doc.setFont('helvetica')
    doc.setFontSize(7)

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

    doc.setFont('3of9')
    doc.setFontSize(16)
    doc.text('*' + inped + '*', 24, 38)
    doc.setFont('helvetica')
    doc.setFontSize(7)
    
    doc.text(lpde, 2, 42);
    doc.text(inpde, 24, 42);

    doc.text(lori, 2, 45);
    doc.text(inori, 24, 45);

    doc.text(lmar, 44, 45);
    doc.text(inmar, 52, 45);

    doc.output('dataurlnewwindow')
    // doc.save(`${inmod} - ${inped}`)
}
