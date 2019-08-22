import re
import json

from PyPDF2 import PdfFileReader

from fbasic import check_path, find_all_pdf

"""
从List[str]中寻找目标字串（由正则表达式提供）
:param: info -> List[str]: target list of strings for iteration
:param: pattern -> str: regular expression of target string
:return: int: index of the target string, -1 if not found
"""
def find_index(info, pattern = '^\[cs\...\]$|^\[stat\...\]$'):
    for s in info:
        result = re.findall(pattern, s)
        if result != []:
            return info.index(result[0])
    return -1

"""
将dict转换为json格式，并存储至info.json
:param: infoList -> List[Dict[str: str]]: output data
"""
def save(infoList):
    ofile = open('info.json', 'w')
    txt = json.dumps(infoList, sort_keys = True, indent = 2, separators = (',', ': '))
    ofile.write(txt)
    ofile.close()



if __name__ == '__main__':
    
    # get pdf file iteration list
    directory = check_path("Provide absolute path for the folder: ")
    fileList = find_all_pdf(directory)
    infoList = []
    count = 0

    for fpath in fileList:
        print(fpath)
        # extract strings from pdf
        tlist = PdfFileReader(open(fpath, 'rb')).getPage(0).extractText().split()
        # get the index of useful info
        index = find_index(tlist) - 1

        # extract paper info from extracted strings
        info = []
        if index != -1:
            if index == -5:
                info = tlist[-5:]
            else:
                info = tlist[index:index+5]
        if len(info) == 5:
            infoList.append({'success_flag': True, 'id': info[0][6:-2], 'category': info[1][1:-1], 'date': info[-2] + ' ' + info[-3] + ', ' + info[-1][:4]})
        else:
            infoList.append({'success_flag': False, 'id': fpath[-14:-4]})
        print(infoList[-1])

        # save once every one hundred files
        # in case of unexpected interruption/error/failure
        count += 1
        if count == 100:
            save(infoList)
            count = 0

    save(infoList)