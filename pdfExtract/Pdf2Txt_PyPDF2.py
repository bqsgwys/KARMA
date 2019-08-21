from os import path, walk
from PyPDF2 import PdfFileReader

def check_path(prompt):
    abs_path = input(prompt)
    while path.exists(abs_path) != True:
        print("The specified path does not exist.")
        abs_path = input(prompt)
    return abs_path

folder = check_path("Provide absolute path for the folder: ")
fileList = []

for root, dirs, files in walk(folder):
    for filename in files:
        if filename.endswith('.pdf'):
            t = path.join(folder, filename)
            fileList.append(t)

for ifpath in fileList:
    pdf = PdfFileReader(open(ifpath, 'rb'))
    text = ''
    for index in range(pdf.getNumPages()):
        page = pdf.getPage(index)
        text += page.extractText()
    
    head, tail = path.split(ifpath)
    tail = tail.replace('.pdf', '.txt')
    ofpath = head + '\\' + tail
    print(ifpath + '\n-> ' + ofpath)
        
    ofile = open(ofpath, 'w', encoding = 'utf-8')
    ofile.write(text)
    ofile.close()
