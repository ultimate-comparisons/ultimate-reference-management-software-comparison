# Ultimate Reference Management Software Comparison

[![Build Status](https://travis-ci.org/ultimate-comparisons/ultimate-reference-management-software-comparison.svg?branch=master)](https://travis-ci.org/ultimate-comparisons/ultimate-reference-management-software-comparison)

This is an ultimate comparison of reference management software.

## Test it
1. Install [node.js](https://nodejs.org/en/)
  - Windows: `choco install nodejs` via [chocolatey](https://chocolatey.org/)
2. Windows: Install required tooling:
  - In an adminstrative shell: `npm install --global --production windows-build-tools` [source](https://github.com/nodejs/node-gyp#option-1)
3. Install [Java JDK8](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
  - Windows: `choco install jdk8`
5. Install [pandoc](http://pandoc.org/installing.html) (Version 1.17.2) [pandoc-citeproc](https://hackage.haskell.org/package/pandoc-citeproc)
   - Linux:
     1. `wget https://github.com/jgm/pandoc/releases/download/1.17.2/pandoc-1.17.2-1-amd64.deb`
     2. `sudo dpkg -i pandoc-1.17.2-1-amd64.deb`
   - Windows: `choco install pandoc`
6. Update npm (sudo): `npm install -g npm`
7. Test dependencies:

        java -version
        npm -version

8. `npm install`
9. `npm start` (starts the web page)
10. [Setup automatic deployment of `www` directory using Travis CI](docs/Travis_Build_Deploy.md)

## Ultimate-Reference-Management-Software-Comparison Element Specification

The code below shows all available options for an element.
The value for `Version` must be added to the `table.json` file and also the number of `Document types` if it does not exist already.

    # Name of the software - http://www.example.com
    Short description ...
    
    ## Version
    - "version number or date of review in the format YYYY-MM-DD"

    ## Open Source
    - yes
    - no
    
    ## Web client
    - yes
    - yes (L)
    - no
    
    ## Import from files
    - yes
    - no
    
    ## Import filter
    - BibTeX
    - RIS
    - others
    
    ## Import from web pages
    - yes
    - no
    
    ## Export
    - BibTeX
    - RIS
    - others
    
    ## Database search
    - Google Scholar
    - arXiv
    - IEEE Xplore
    - DBLP
    - Springer
    - Crossref
    - own database
    - others
    - none
    
    ## Full-text search
    - yes
    - yes (L)
    - no
    
    ## Manual entry of Reference / Title
    - yes
    - no
    
    ## Document types
    - "number"
    
    ## Define new document types
    - yes
    - no
    
    ## Define new entry fields
    - yes
    - no
    
    ## Add metadata from other sources
    - ISBN
    - DOI
    - others
    
    ## Link references
    - yes
    - no
    
    ## Integration of documents
    - yes
    - yes (L)
    - no
    
    ## Duplicate check
    - yes
    - yes (L)
    - no
    
    ## Processing and evaluation of full texts
    - yes
    - yes (L)
    - no
    
    ## Data display
    - BibTeX
    - short
    - full
    - list
    - table
    - timeline
    - citation
	- arbitrary
    
    ## Sorting options
    - yes
    - no
    
    ## Search history
    - yes
    - no
    
    ## Sharing records
    - yes
    - yes (L)
    - no
    
    ## Cooperative use
    - yes
    - yes (L)
    - no
    
    ## Different citation styles
    - yes
    - no
    
    ## Self-definition or adaptation of citation styles
    - yes
    - no
    
    ## Word processing support
    - TeX-Editor
    - MS Word
    - LibreOffice
    - OpenOffice
    - Google Docs
    - none
    
    ## Creation of literature lists
    - static
    - dynamic
    - dynamic (L)
    
    ## Organization of knowledge
    - notes
    - tags
    - groups
    - special fields
    - free text fields
    - mind map

## License

The code is licensed under [MIT], the content (located at `comparison-elements`) under [CC-BY-SA-4.0].

  [MIT]: https://opensource.org/licenses/MIT
  [CC-BY-SA-4.0]: http://creativecommons.org/licenses/by-sa/4.0/
