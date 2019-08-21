import os
import sys
import importlib
importlib.reload(sys)

from os import chdir, getcwd, listdir, path

from time import strftime

from pdfminer.pdfparser import PDFParser, PDFDocument
from pdfminer.pdfinterp import PDFResourceManager, PDFPageInterpreter
from pdfminer.converter import PDFPageAggregator
from pdfminer.layout import LAParams, LTTextBox, LTTextLine, LTTextBoxHorizontal
from pdfminer.pdfinterp import PDFTextExtractionNotAllowed

def check_path(prompt):
    abs_path = input(prompt)
    while path.exists(abs_path) != True:
        print ("\nThe specified path does not exist.\n")
        abs_path = input(prompt)
    return abs_path   


def parse(name):
    fp = open(path,'rb')
    parser = PDFParser(fp)
    doc = PDFDocument()
    parser.set_document(doc)
    doc.set_parser(parser)

    doc.initialize()

    if not doc.is_extractable:
        raise PDFTextExtractionNotAllowed
    else:
        rsrcmgr = PDFResourceManager()
        laparams = LAParams()
        device = PDFPageAggregator(rsrcmgr,laparams=laparams)
        interpreter = PDFPageInterpreter(rsrcmgr,device)

    for page in doc.get_pages():
        interpreter.process_page(page)
        layout = device.get_result()
        for x in layout:
            if(isinstance(x,LTTextBoxHorizontal)):
                with open(name,'a',encoding='utf-8') as out:
                    results = x.get_text()
                    out.write(results)

    print (strftime("%H:%M:%S"), name)
   



print ("\n")

folder = check_path("Provide absolute path for the folder: ")
list=[]
directory=folder

for root,dirs,files in os.walk(directory):
    for filename in files:
        if filename.endswith('.pdf'):
            t=os.path.join(directory,filename)
            list.append(t)

for item in list:
    path=item
    head,tail=os.path.split(path)
    var="\\"
    tail=tail.replace(".pdf",".txt")
    name=head+var+tail
    content = ""
    parse(name)