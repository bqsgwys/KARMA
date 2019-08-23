# KARMA Reference - the Technical Documentations

Entry of VMW-THU-Hackathon @ Aug 2019

Topic #1: Trend analysis of AI techniques

Language：`Javascript`, `Python`, `HTML` & `CSS`

As a technical reference documentation, basic information of this project is not included in this file. For general info including our team, the problem statement, over-all designs, project progress, results and discussion, etc., **see KARMA Readme ([`README.md`](README.md)).**

## Environment Configuration

1. **(optional_2)** Make sure you have your `Python 3 >= 3.7` successfully installed, and `pip` up to date.
2. **(optional_1)** Download and config [swig](http://www.swig.org/download.html). Mind that windows user should download swigwin package, which includes a prebuilt executable, instead of swig.
3. **(optional_2)** Install `PyPDF2` module via `pip install pypdf2`.
4. **(optional_1)** Install `pdfminer` module via `pip install pdfminer`.
5. Make sure you have your `Node.js >= 10.16.3 LTS` successfully installed, and `yarn` up to date,
6. `yarn install`the Node.js Dependencies.
7. Make sure your web broswer supports `ECMA2017`(`Firefox >= 67; Chrome >=75; Opera>=62; Safari>= 12`). Edge and IE MAY NOT display normally.

*Note 1: if you would like to use the same dataset as we do, requirments labeled "optional_1" and "optional_2" could be ignored.Our database could download from [HERE](https://cloud.tsinghua.edu.cn/f/ff6c72ba2d91454cba71/)*  
*Note 2: if you would like to use pypdf2 instead of pdfminer, requirments labeled "optional_1" could be ignored.*

## Usage

To use the same dataset as we do, download [raw_data]() and unzip it to root directory.
Then you may able to skip *pdf file content extraction* part and step 1 of *keywords matching*.

### pdf file content extraction

- Run `pdfExtract/GetPaperInfo.py` to extract paper basic info from target directory. Output files will be saved as `rawdata/info/info.json`.
- Run `pdfExtract/pdf2Txt_PyPDF2.py` to extract main body of papers in target directory. Output files will be saved in the same directory as pdf files.

### creating keywords dictionary

- Target keywords already exist in `analysis/keywordExtraction/dict.json`. Could be replaced by user-defined keywords.

### keywords matching

1. Configure the configuration file `analysis/config.js`.
  - `infoPrefix` should be the directory containing the info data.
  - `infoList` should be the filename of the info data files.
  - `dataList` should be the directories containing the text-files of papers.
2. Run `node index.js` to generate the `result.json` in root directory of the project. Network is required.

### visualization

- Copy `result.json` to `visualization/data/`.
- In directory `visualization/`, run `python3 -m http.server 3000` and the website can be visited in `http://localhost:3000`.
- Click '+' button in the bottom-right corner to add a new info card to the canvas.
- Type in target keywords and click search button to visualize the results.
- Use the move buttons to move the cards.

## Directory Tree

```tree
KARMA                               //
├─ .gitignore                       //
├─ KARMA_Reference.md               // KARMA technical documentation
├─ LICENSE                          //
├─ README.md                        //
├─ README_ch.md                     //
├─ analysis                         // keywords extraction and matching
│  ├─ cache                         //
│  │  ├─ articles.json              //
│  │  ├─ info.json                  //
│  │  ├─ keywords.json              //
│  │  └─ unused.json                //
│  ├─ config.js                     //
│  ├─ index.js                      //
│  ├─ infoExtraction.js             //
│  └─ keywordExtraction             //
│     ├─ datacleaner.js             //
│     ├─ dict.json                  // target keywords dictionary
│     ├─ filestats.js               //
│     ├─ index.js                   //
│     └─ readfile.js                //
├─ package.json                     //
├─ pdfExtract                       // extraction of paper info and plain texts from pdf files
│  ├─ GetPaperInfo.py               // extraction of paper info
│  ├─ Pdf2Txt_PyPDF2.py             // extraction of plain text, more accurate than pdfminder but does not contain whitespaces
│  ├─ fbasic.py                     // helper methods
│  └─ pdf_to_txt_pdfminer.py        // extraction of plain text, contains thorough info but is slower and less accurate
├─ rawinfo                          // paper data is expected to be exported and stored here
│  ├─ info                          // paper basic info is expected to be exported and stored here
│  │  ├─ info0.json                 // paper basic info 1906.00554 - 1906.06027
│  │  ├─ info1.json                 // paper basic info 1906.06032 - 1907.11917
│  │  └─ info2.json                 // paper basic info 1907.11922 - 1908.02269
│  └─ text                          // paper plain texts are expected to be exported and stored here 
├─ result.json                      //
├─ visualization                    // data visualization
│  ├─ .DS_Store                     //
│  ├─ css                           //
│  ├─ data                          //
│  ├─ font                          //
│  ├─ img                           //
│  ├─ index.html                    //
│  └─ js                            //
└─ yarn.lock                        //
```
