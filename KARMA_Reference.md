# KARMA Reference - the Technical Documentations

Entry of VMW-THU-Hackathon @ Aug 2019

Topic #1: Trend analysis of AI techniques

Language：`Javascript`, `Python`, `HTML` & `CSS`

As a technical reference documentation, basic information of this project is not included in this file. For general info including our team, the problem statement, over-all designs, project progress, results and discussion, etc., **see KARMA Readme ([`README.md`](README.md)).**

## Environment Configuration

1. Make sure you have your `Python 3 >= 3.7` successfully installed, and `pip` up to date.
1. Download and config [swig](http://www.swig.org/download.html). Mind that windows user should download swigwin package, which includes a prebuilt executable, instead of swig.
1. Install `PyPDF2` and `pdfminer` module via `pip install pypdf2 pdfminer`
1. Make sure you have your `Node.js >= 10.16.3 LTS` successfully installed, and `yarn` up to date,
1. `yarn install`the Node.js Dependencies.
1. Make sure your web broswer supports `ECMA2017`(`Firefox >= 67; Chrome >=75; Opera>=62; Safari>= 12`). Edge and IE MAY NOT display normally.

## Directory Tree

```tree
KARMA                                               //
├─ .gitignore                                      //
├─ KARMA_Reference.md                              // KARMA technical documentation
├─ LICENSE                                         //
├─ README.md                                       //
├─ README_ch.md                                    //
├─ allInOne.js                                     //
├─ analysis                                        // keywords extraction and matching
│  ├─ cache                                        //
│  │  ├─ articles.json                             //
│  │  ├─ info.json                                 //
│  │  ├─ keywords.json                             //
│  │  └─ unused.json                               //
│  ├─ config.js                                    //
│  ├─ index.js                                     //
│  ├─ infoExtraction.js                            //
│  └─ keywordExtraction                            //
│     ├─ datacleaner.js                            //
│     ├─ dict.json                                 //
│     ├─ filestats.js                              //
│     ├─ index.js                                  //
│     └─ readfile.js                               //
├─ data                                            //
├─ package.json                                    //
├─ pdfExtract                                      // extraction of paper info and plain texts from pdf files
│  ├─ GetPaperInfo.py                              // extraction of paper info, output file is named info.json
│  ├─ Pdf2Txt_PyPDF2.py                            // extraction of plain text, more accurate than pdfminder but does not contain whitespaces
│  ├─ fbasic.py                                    // helper methods, such as checking file path availability and getting iteration list of all pdf files
│  └─ pdf_to_txt_pdfminer.py                       // extraction of plain text, contains thorough info but a little bit less accurate
├─ rawinfo                                         //
│  ├─ info0.json                                   // paper basic info 1906.00554 - 1906.06027
│  ├─ info1.json                                   // paper basic info 1906.06032 - 1907.11917
│  └─ info2.json                                   // paper basic info 1907.11922 - 1908.02269
├─ result.json                                     //
├─ txt_all_pypdf                                   //
├─ visualization                                   // data and trend visualization
│  ├─ .DS_Store                                    //
│  ├─ css                                          //
│  ├─ data                                         //
│  ├─ font                                         //
│  ├─ img                                          //
│  ├─ index.html                                   //
│  └─ js                                           //
└─ yarn.lock                                       //

```

## Methods and Interfaces
