from PyPDF2 import PdfFileReader

from fbasic import check_path, find_all_pdf, file_name_pdf2txt



if __name__ == '__main__':

    # get pdf file iteration list
    directory = check_path("Provide absolute path for the folder: ")
    fileList = find_all_pdf(directory)

    for ifpath in fileList:
        # convert pdf into plain text
        pdf = PdfFileReader(open(ifpath, 'rb'))
        text = ''
        for index in range(pdf.getNumPages()):
            page = pdf.getPage(index)
            text += page.extractText()

        # get output file name
        ofpath = file_name_pdf2txt(ifpath)
        print(ifpath + '\n-> ' + ofpath)

        # write data to file
        ofile = open(ofpath, 'w', encoding = 'utf-8')
        ofile.write(text)
        ofile.close()
