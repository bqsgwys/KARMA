# KARMA Reference - the Technical Documentations

Entry of VMW-THU-Hackathon @ Aug 2019

Topic #1: Trend analysis of AI techniques

Language：`Javascript`, `Python`, `HTML` & `CSS`

As a technical reference documentation, basic information of this project is not included in this file. For general info including our team, the problem statement, over-all designs, project progress, results and discussion, etc., see KARMA Readme (`README.md`). 

## Environment Configuration 

0. Make sure you have your `Python 3 >= 3.7` successfully installed, and `pip` up to date.

1. Download and config `swig` (http://www.swig.org/download.html). Mind that windows user should download swigwin package, which includes a prebuilt executable, instead of swig.

2. Install `PyPDF2` and `pdfminer` module via `pip`:
    ```
    pip install pypdf2
    pip install pdfminer
    ```

## Directory Tree
```
-- KARMA
\ -- .gitignore
| -- LICENSE        : license
| -- README.md      : readme (en)
| -- README_ch.md   : readme (ch)
| -- KARMA Reference.md         : KARMA technical documentation
| -- package.json   :
| -- yarn.lock      :
| -- pdfExtract     : extraction of paper info and plain texts from pdf files
    \ -- fbasic.py              : helper methods, such as checking file path availability and getting iteration list of all pdf files
    | -- GetPaperInfo.py        : extraction of paper info, output file is named info.json
    | -- pdf2Txt_PyPDF2.py      : extraction of plain text, more accurate than pdfminder but does not contain whitespaces
    \ -- pdf_to_txt_pdfminer.py : extraction of plain text, contains thorough info but a little bit less accurate
| -- primaryAnalysis            :
    \ -- readfile.js            :
    | -- filestats.js           :
    | -- datacleaner.js         :
    | -- dict.js                :
    \ -- index.js               :
| -- secondaryAnalysis          :
    \ -- findUnknown.js         :
    | -- time.js                :
    \ -- conclusion.js          :
| -- rawdata        :
\ -- data_json      :
    \ -- articles.json          :
    | -- count.json             :
    | -- info_all.json          :
    \ -- ret_all.json           :
```

## Methods and Interfaces