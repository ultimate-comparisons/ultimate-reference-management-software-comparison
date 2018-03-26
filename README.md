# Ultimate Reference Management Software Comparison

[![Build Status](https://travis-ci.org/ultimate-comparisons/ultimate-reference-management-software-comparison.svg?branch=master)](https://travis-ci.org/ultimate-comparisons/ultimate-reference-management-software-comparison)

This is an ultimate comparison of reference management software.

## Start the comparison

1. Install dependencies `npm install`
2. Start webserver `npm start`
3. Alternatively start development mode `npm run dev`


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

The code is licensed under [MIT], the content (located at `data`) under [CC-BY-SA-4.0].

  [MIT]: https://opensource.org/licenses/MIT
  [CC-BY-SA-4.0]: http://creativecommons.org/licenses/by-sa/4.0/
