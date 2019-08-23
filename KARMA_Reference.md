# KARMA Reference - the Technical Documentations

Entry of VMW-THU-Hackathon @ Aug 2019

Topic #1: Trend analysis of AI techniques

Language：`Javascript`, `Python`, `HTML` & `CSS`

As a technical reference documentation, basic information of this project is not included in this file. For general info including our team, the problem statement, over-all designs, project progress, results and discussion, etc., **see KARMA Readme ([`README.md`](README.md)).**

## Environment Configuration 

0. Make sure you have your `Python 3 >= 3.7` successfully installed, and `pip` up to date.

1. Download and config `swig` (http://www.swig.org/download.html). Mind that windows user should download swigwin package, which includes a prebuilt executable, instead of swig.

2. Install `PyPDF2` and `pdfminer` module via `pip`:
    ```
    pip install pypdf2
    pip install pdfminer
    ```

## Usage

### pdf file content extraction

- Run `./pdfExtract/GetPaperInfo.py` to extract paper basic info from target directory. Output files will be saved as `./rawdata/info/info.json`

- Run `./pdfExtract/pdf2Txt_PyPDF2.py` to extract main body of papers in target directory. Output files will be saved in the same directory as pdf files. 

### creating keywords dictionary 

- Target keywords already exist in `./analysis/keywordExtraction/dict.json`. Could be replaced by user-desired keywords.

### keywords matching

### visualization

- Run `./visualization/index.html`.

- Click '+' button in the bottom-right corner to add a new info card to the canvas.

- Type in target keywords and click search button to visualize the results.

## Directory Tree

### Condensed dict tree
```
-- KARMA
\ -- README.md      : readme (en)
| -- KARMA Reference.md         : KARMA technical documentation
| -- result.json    :
| -- pdfExtract     : extraction of paper info and plain texts from pdf files
    | -- GetPaperInfo.py        : extraction of paper info
    | -- pdf2Txt_PyPDF2.py      : extraction of plain text
| -- rawdata        : paper data is exported and stored here
    \ -- info       : paper basic info is exported and stored here
    \ -- text       : paper plain texts are expected to be stored here
| -- analysis       : keyword extraction and matching
    \ -- cache      :
        \ -- articles.json      :
        | -- info.json          :
        | -- keywords.json      :
        \ -- unused.json        :
    | -- keywordExtraction      : keyword extraction
        \ -- dict.json          : target keywords dictionary
        \ -- index.js           :
    \ -- index.js   :
\ -- visualization  : trend visualization
    \ -- index.html :
```

### Full dict tree
```
-- KARMA
\ -- .gitignore
| -- LICENSE        : license
| -- README.md      : readme (en)
| -- README_ch.md   : readme (ch)
| -- KARMA Reference.md         : KARMA technical documentation
| -- package.json   :
| -- yarn.lock      :
| -- result.json    :
| -- allInOne.js    :
| -- pdfExtract     : extraction of paper info and plain texts from pdf files
    \ -- fbasic.py              : helper methods, such as checking file path availability and getting iteration list of all pdf files
    | -- GetPaperInfo.py        : extraction of paper info
    | -- pdf2Txt_PyPDF2.py      : extraction of plain text, more accurate than pdfminder but does not contain whitespaces
    \ -- pdf_to_txt_pdfminer.py : extraction of plain text, contains thorough info but a little bit less accurate
| -- rawdata        : paper data is exported and stored here
    \ -- info       : paper basic info is exported and stored here
        \ -- info0.json         : paper basic info 1906.00554 - 1906.06027
        | -- info1.json         : paper basic info 1906.06032 - 1907.11917 
        \ -- info2.json         : paper basic info 1907.11922 - 1908.02269
    \ -- text       : paper plain texts are expected to be stored here
| -- analysis       : keyword extraction and matching
    \ -- cache      :
        \ -- articles.json      :
        | -- info.json          :
        | -- keywords.json      :
        \ -- unused.json        :
    | -- keywordExtraction      : keyword extraction
        \ -- dict.json          : target keywords dictionary
        | -- readfile.js        :
        | -- filestats.js       :
        | -- datacleaner.js     :
        \ -- index.js           :
    | -- infoExtraction.js      :
    | -- config.js  :
    \ -- index.js   :
\ -- visualization  : trend visualization
    \ -- index.html :
    | -- css
    | -- font
    | -- img
    | -- js
    \ -- scss
```

## Methods and Interfaces