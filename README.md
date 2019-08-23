# KARMA - Keyword Analysis of Research on ML & AI

Entry of VMW-THU-Hackathon @ Aug 2019

Topic #1: Trend analysis of AI techniques

Language：`Javascript`, `Python`, `HTML` & `CSS`

As a general report, detailed technical information is not included in this file.
For details including environment configurations, requirements, directory-tree of KARMA, methods and interfaces, etc., **see KARMA Reference ([`KARMA_Reference.md`](KARMA_Reference.md)).**
For Chinese version of project report, **see KARMA Readme CH ([`README_ch.md`](README_ch.md)).**

## Team

- Wu Yusong `@bqsgwys` A THU sophomore majored in Electronic Engineering
- Zhang Yichi `@YC-Vertex` A THU sophomore majored in Microelectronic Engineering
- Ma Chengxiang `@mcxthuee` A THU sophomore majored in Microelectronic Engineering

## Problem Statement

In recent years, Artificial Intelligence has reached a feverish pitch. We hope to visualize the rises and falls of AIML hot topics via Analyzing AIML-related papers. Thus illustrates the ever-changing trend of AI.

## Data Sources

The database of papers is given by the organizer of the hackathon.
All the papers, amounted to 4334, are from the public database of _arXiv_, distributed in the categories including cs:AI (Artificial Intelligence), cs:CV (Computer Vision), cs:CL (Computer Linguistics), cs:LG (Machine Learing in CST) and stat:ML (Machine Learing in Statistics).
All papers are presented in PDF format.
They contains basic infomation such as the title, the authors, the institution, the date of submission, etc., as well as the main body of the paper.

The keywords are from the glossary edited by _WildML_, _Wikipedia_ and _Google Developers_. Links are shown below.

- Deep Learning Glossary - WildML: http://www.wildml.com/deep-learning-glossary/
- Glossary of AI - Wikipedia: https://en.wikipedia.org/wiki/Glossary_of_artificial_intelligence
- Machine Learning Glossary - Google Developers: https://developers.google.com/machine-learning/glossary/

## Design & Methodology

> Less is more. &emsp; -- Ludwig Mies van der Rohe

**Methodology**: Direct, efficient and effective, rather than being grandiose.

**Design**: Our work was separated into four splits - pdf content extraction, creating keywords dictionary, keywords matching, data visualization.

- PDF content extraction:
  We use `PyPDF2` and `pdfminer` module to convert pdf files into plin text, making it convinent for subsequent character data processing.
  Chiefly extracted main bodies of the papers and their basic info, namely its arXiv index, arXiv category info, and time of composition.
  During this process, for those files whose opening was failed or basic info was not avaliable, we tagged them fail and had treatments for them.
- Treatment for damaged data:
  As we have already known that all the papers are from _arXiv_, we simply get the infomation from the puclic website and automatically replace the damaged data.
- Creating Keywords Dictionary:
  By using some tricks (including Regex matching and web crawling), we fetch our keywords dictionary from several authorized websites including _Wikipedia_ and _Goodle Developers_, and wrote them into a JSON file.
  We filtered out several common words (such as algorithm, node, etc.) both manually and automatically.
  Then we produce our final JSON file as the keywords dictionary.
- Keywords matching:
  In the light that the pdf extraction produced loads of nonsence characters in output text files, we developed a full data-cleaning solution to deal with it.
  By removing symbols and whitespaces not included in the context of the paper, only meaningful words can be remained in the cleaned data.
  Then, after a full text and regex matching with the keyword of the dictionary, we produce a database of the apperence of each keyword in each paper.
- Data visualization:
  We use website to present the visualized data for its several advantages including fewer dependencies, cross-platform compatibility and its good performance with JSON data.
  Also, Material Design is another factor that makes we to the decision.

## Algorithm & Model

```code
  // Here's nothing left,
  # for it's not nessesary
  <!--to use any kind of algorithm-->
  /* or any kind of model.*/
```

## Result

### AIML keywords trend analysis

The frequency of keywords extracted from target paper files showed high consistency: from May 2019 to Aug 2019, the vast majority of our keywords showed linear uprising tendency.

For the given dataset of papers, keywords matching results showed great representativeness: except from those failed files, the utilization rate of files is 100%, i.e. we have extracted at least one keyword from every given paper.

### Self-evaluation on project solution

- [x] **Quest Completion**:
      The project meets every single goals given in the instructions.
      Nevertheless, due to the high density and centrality of the published time of target papers, the results failed to give a long-term insight on the fluctuation of AIML keywords.
- [x] **User Friendliness**:
      Except pdf2txt part need some manual operations and manipulations, other functions require only a single click. So it is of great user fiendliness.
- [ ] **Running Efficiency**:
      It is relatively slow to extract all needed information from over 4000 pdf files, and we seldom did any optimization to this.
      When the project was reaching its finale, we figured out that doing keywords matching right after pdf extraction, instead of saving extracted texts to txt files and read them again, would probably save some time and boost the efficiency.
      However, facing the forthcoming deadline, we decided not to make big changes to our project.
- [x] **Exception Handling**:
      Some file failure detections and treatments are available, but sometimes it still requires human interventions.
- [x] **Cross-Platform Compatibility**:
      We used high-cross-platform-compatibility languages, for instance HTML&CSS, JavaScript, and Python.
      In addition, we have done a considerable amount of work in reducing user configuration complexity.
