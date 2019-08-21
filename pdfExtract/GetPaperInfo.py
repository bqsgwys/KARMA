import re
import json
from os import path, walk
from PyPDF2 import PdfFileReader

def check_path(prompt):
    abs_path = input(prompt)
    while path.exists(abs_path) != True:
        print("The specified path does not exist.")
        abs_path = input(prompt)
    return abs_path   

def find_index(info, pattern = '^\[cs\...\]$|^\[stat\...\]$'):
    for s in info:
        result = re.findall(pattern, s)
        if result != []:
            return info.index(result[0])
    return -1

def save(infoList):
    ofile = open('info.json', 'w')
    txt = json.dumps(infoList, sort_keys = True, indent = 2, separators = (',', ': '))
    ofile.write(txt)
    ofile.close()

folder = check_path("Provide absolute path for the folder: ")
fileList = []
infoList = []
count = 0

for root, dirs, files in walk(folder):
    for filename in files:
        if filename.endswith('.pdf'):
            t = path.join(folder, filename)
            fileList.append(t)

for fpath in fileList:
    print(fpath)
    tlist = PdfFileReader(open(fpath, 'rb')).getPage(0).extractText().split()
    index = find_index(tlist) - 1

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

    count += 1
    if count == 100:
        save(infoList)
        count = 0

save(infoList)