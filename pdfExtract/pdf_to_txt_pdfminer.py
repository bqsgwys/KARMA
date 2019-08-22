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
"""
接受输入的文件夹/文件路径，如果路径不存在输出相应报错信息，直到输入的路径存在
:param: prompt -> abs_path: check approriate path and store it in abs_path
:return: string: abs_path
"""
def check_path(prompt):
    abs_path = input(prompt)
    while path.exists(abs_path) != True:
        print ("\nThe specified path does not exist.\n")
        abs_path = input(prompt)
    return abs_path   

"""
解析pdf文本，保存在txt文件中
:param: name, name of every pdf file in the provided folder
:return: none
"""

def parse(name):
    #以二进制只读模式打开
    fp = open(path,'rb')
    #用文件对象来创建一个PDF文档分析器
    parser = PDFParser(fp)
    #创建一个PDF文档
    doc = PDFDocument()
    #连接分析器与文档对象
    parser.set_document(doc)
    doc.set_parser(parser)
    
    #提供初始化密码，如果没有就创建一个空的字符串
    doc.initialize()

    #检测文档是否提供txt转换，不提供就忽略
    if not doc.is_extractable:
        raise PDFTextExtractionNotAllowed
    else:
        #创建PDF资源管理器，来共享管理资源
        rsrcmgr = PDFResourceManager()
        #创建一个PDF设备对象
        laparams = LAParams()
        device = PDFPageAggregator(rsrcmgr,laparams=laparams)
        #创建一个PDF解释器对象
        interpreter = PDFPageInterpreter(rsrcmgr,device)
    
    #循环遍历列表，每次处理一页内容
    for page in doc.get_pages():#doc.get_pages()获取page列表
        interpreter.process_page(page)
        #接受该页面的LTPage对象
        layout = device.get_result()
        #这里layout是一个LTPage对象，里面存放着这个page的各种信息
        #只需获得LTTextBoxHorizontal即可获得所需的文字信息
        for x in layout:
            if(isinstance(x,LTTextBoxHorizontal)):
                #需要写出编码格式
                with open(name,'a',encoding='utf-8') as out:
                    results = x.get_text()
                    out.write(results)

    print (strftime("%H:%M:%S"), name)
   



print ("\n")

folder = check_path("Provide absolute path for the folder: ")
list=[]

for root,dirs,files in walk(folder):
    for filename in files:
        if filename.endswith('.pdf'):
            t=path.join(folder,filename)
            list.append(t)

for item in list:
    path=item
    head,tail=path.split(path)
    var="\\"
    tail=tail.replace(".pdf",".txt")
    name=head+var+tail
    content = ""
    parse(name)
