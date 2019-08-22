from os import path, walk

def check_path(prompt):
    """
    输入并检查目标路径的合法性
    :param: prompt -> str: prompt shown in shell
    :return: str: absolute path of selected directory
    """
    abs_path = input(prompt)
    while path.exists(abs_path) != True:
        print("The specified path does not exist.")
        abs_path = input(prompt)
    return abs_path

def find_all_pdf(directory):
    """
    找到目标路径下的所有pdf文件
    :param: directory -> str: target directory
    :return: List[str]: a list contains every file which ends with '.pdf'
    """
    fileList = []
    for root, dirs, files in walk(directory):
        for filename in files:
            if filename.endswith('.pdf'):
                t = path.join(directory, filename)
                fileList.append(t)
    return fileList

def file_name_pdf2txt(pdf_file_name):
    """
    将*.pdf文件名转化为*.txt文件名
    :param: pdf_file_name -> str: pdf file name
    :return: str: txt file name
    """
    head, tail = path.split(pdf_file_name)
    tail = tail.replace('.pdf', '.txt')
    txt_file_name = head + '\\' + tail
    return txt_file_name