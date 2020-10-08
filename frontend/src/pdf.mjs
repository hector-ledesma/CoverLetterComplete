import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

async function createPDF() {
    const pdfDoc = await PDFDocument.create()
    const timesRomanFont = await pdfDoc.embedFont.embedFont(StandardFonts.TimesRoman)

    const page = pdfDoc.addPage()
    const { width, height } = page.getSize()
    const fontSize = 30
    page.drawText('Testing pdf stuff', {
        x: 50,
        y: height - 4 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0, 0.53, 0.71),
    })

    const pdfBytes = await pdfDoc.save()

    // download(pdfBytes, "TestPDF.pdf", "application/pdf")
}

export {createPDF}