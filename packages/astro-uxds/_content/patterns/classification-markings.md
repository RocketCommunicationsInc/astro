---
tags: resources
path: /patterns/classification-markings
date: Last Modified
layout: interior.template.njk
title: Classification Markings
---

# Classification Markings

Classification markings are required for applications and other mediums created for government clients interacting with classified information. Although there are documents that list the officially required list of classification markings, the multiple, long documents can be difficult to navigate for information specific to digital applications. In these documents there is a catch-all rule that indicates that any electronic medium should require the same markings as a physical document as is reasonable. However, how one determines what is reasonable versus necessary is not well-defined and has been implemented in completely different ways across different applications. This page gathers the information from multiple sources to provide an overview of the classification marking information relevant to the UI design of classified government software.

::: note
Note: These guidelines are focused on the use of and rules for classification markings in electronic application designs for government clients. Information about markings for emails, PowerPoints, or other mediums like printed documents can be found in the linked resources at the end of the page.
:::

## Officially Required

As was mentioned above, the rules for classification markings are primarily focused on physical documents, but also apply to information in an electronic environment. To be more specific, electronic information should be marked with a banner line of overall classification, portion markings, and a classification authority block. When the information cannot be marked with all of these elements, a warning must be present to explain that the information cannot be used for derivative classification purposes and to provide a contact for any questions.

### Overall Classification - Banner Lines

The first element of required classification markings is the overall classification which is to be shown as a banner at the top and bottom of the classified document that shows the classification level centered in the middle of the banners in all capital letters. The banners should show the highest level of classification within that page or view of the document. If there is a title page, then the banners on that page should show the highest level of classification within the whole document. The classification level itself must be spelled out completely (example: UNCLASSIFIED instead of just U), but later caveats or control markings in the classification text can be abbreviated in their traditional formats or spelled out completely (example: FOUO or For Official Use Only). The structure of the caveats that go into this text can be seen in the following text and figures. Note that the words in the structure example below are just placeholders and that the actual caveat text could be longer or shorter than what is displayed.

##### Example with Banner Lines from DoDDM 5200.01, Volume 2

*See the red text in all capital letters at the top and bottom of the document.*

![Example of Originally Classified Document](/img/patterns/classification-markings-originally-classified-doc.png)

##### Marking Structure for Overall Classification from DoDDM 5200.01, Volume 2

CLASSIFICATION//SCI//SAP//AEA//FGI//DISSEM//OTHER DISSEM

![Marking Structure](/img/patterns/classification-markings-marking-structure.png)

### Portion Marking

The second required marking for classified documents is portion marking. A portion is anything in a document that has a separate classification from other elements of the document. Below is a more technical definition from DoDM 5200.01, Volume 2 since this concept is often misunderstood:

> Every portion (e.g., subject, title, paragraphs, sections, tabs, attachments, classified signature blocks, bullets, tables and pictures) in every classified document shall be marked to show the highest level of classification that it contains. When deciding whether a subportion is to be treated as a portion and separately marked, the criterion shall be whether the marking is necessary to avoid over-classification of any of the information or to eliminate doubt about the information’s classification level. If there are different levels of classification among a portion and any of its subportions, then all subportions shall be treated as individual portions and marked separately.

Properly portion marking is very important in order to reduce classification problems and leaks. It is equally important to show which portions are Unclassified to enable better communication between teams and teammates with different levels of security clearance. This is true for blog entries, bulletin board postings, comments, chat rooms, and other similar items as well. These types of items require an overall classification marking for the whole container as well as individual portion markings for each entry.

#### Standard Requirements

Portion markings shall appear at the beginning of each portion so that the relevant text is always immediately to the right of the mark. Portion markings should be all capital letters and abbreviated within parentheses like (U//FOUO), but can also be spelled out in full if desired. Note that control markings such as SCI, SAP, AEA, or dissemination are also required in portion markings if they are relevant to that portion. The DoDM 5200.01, Volume 2 has a few more rules for specific cases that are quoted below:

> (1) For numbered or lettered paragraphs or subparagraphs, the portion marking goes after the number or letter, and before the text.
> 
> (2) Portion markings for listings of references, enclosures, tabs, or attachments (e.g., as listed on memorandums or transmittal documents) shall be placed before the subject or title and shall indicate the classification of that subject or title, not the classification of the document.
> 
> (3) Charts, graphs, photographs, illustrations, figures, drawings, and similar portions within classified documents must be marked to show their classification. The classification shall be based on the information contained in or revealed by the item. The portion marking shall be placed immediately preceding the chart, graph, etc., or within the item and shall be large enough to ensure viewers easily recognize it. Captions or titles of these portions must also be marked, as for text, and will indicate the classification of the caption or title, not of the portion (e.g., chart or graph) itself. The portion marking may be placed within the chart, graph, etc., and/or spelled out instead of being abbreviated when that more clearly identifies the classified status of the item. When possible, the marking should be integral to the item, so it is carried along with the item upon extraction.
> 
> (4) A classified signature block shall be portion marked to reflect the highest classification level of the information contained within the signature block itself.

For those developing applications/websites, there are also rules about portion marking URLs and metadata. To learn more about these aspects, please review the requirements in the DoDM 5200.01, Volume 2 and the ISOO Implementing Directive as linked at the bottom of the page.

##### Example of Portion Marking from DoDM 5200.01, Volume 2

![Example of FOUO Marking in a Classified Document](/img/patterns/classification-markings-FOUO-marking-in-classified-doc.png)

##### Examples of Portion Marking from ISOO Marking Handbook

*UNCLASSIFIED - CLASSIFICATION MARKINGS FOR ILLUSTRATION PURPOSES ONLY*

![Example of Paragraph and Diagram Marking](/img/patterns/classification-markings-diagram.png)

![Example of Bullet Point Markings](/img/patterns/classification-markings-bullets.png)

##### Examples of Portion Marking Text from DoDM 5200.01, Volume 2

![Examples of Portion Markng Text](/img/patterns/classification-markings-portion-marking-text.png)

#### Exceptions

There are few exceptions to the portion mark rules, but the Information Security Oversight Office (ISOO) does acknowledge that different types of documents such as “dynamic documents,” a category that many applications or databases fall under, may have difficulty with these requirements. In general, the ruling seems to be that if a document is not portion marked fully, the document needs to have a waiver from the ISOO and an indication on the document that it cannot be used as a derivative source document with contact information for any questions. Quotes are included below about the mentioned portion marking exception cases to avoid oversimplifying any technical aspects.

##### Use a Separate Statement Elsewhere on the Page for Impracticable Marking Locations

> If an exceptional situation makes individual markings of each portion clearly impracticable, a statement may be substituted describing which portions are classified and their level of classification. This statement shall identify the information as specifically as parenthetical portion marking. When classification is a result of compilation, the statement required by section 12 of this enclosure meets this requirement. A waiver is not required in these situations. 

\- DoDM 5200.01, Volume 2

##### Obtain an ISOO-Approved Waiver and Display a Derivative Classification Warning

> A document not portion marked based on an ISOO-approved waiver must: 
>
>(1) Contain a warning which states that the document may NOT be used as a source for derivative classification.
>
>(2) Be portion marked when transmitted outside the originating organization, unless the ISOO waiver approval explicitly provides otherwise.

\- DoDM 5200.01, Volume 2

##### Show a Dynamic Document Warning at the Top of Each Page

**Note:** It is unclear from the documentation if an ISOO-approved waiver is necessary in conjunction with a dynamic document warning. This should be explored if the company wishes to pursue this option.

>If there is a mechanism for determining the actual classification markings for dynamic documents, the appropriate classification markings shall be applied to and displayed on the document…
>
>If such a mechanism does not exist, the highest classification level of information within the data source (e.g., database) shall be used and a warning shall be applied at the top of each page of the document. Such content shall NOT be used as a basis for derivative classification. An example of such a warning is shown in Figure 19. 
>
> ![Warning Statement for Dynamic Documents](/img/patterns/classification-markings-warning-statement-for-dynamic-documents.png)
>
> (a) The warning is to alert users that there may be elements of information that may be either unclassified or classified at a lower level than the highest possible classification of the information returned. 
>
> (b) Users should consult classification guide(s) and/or the data source owner (i.e., the organization with primary responsibility for the content of the database or other data source) or the specified point of contact for the classification of individual elements in order to avoid unnecessary or over-classification and/or other impediments to information sharing.
>
> (c) The data source owner shall ensure classification guidance and points of contact are available to assist users with these inquiries.

\- DoDM 5200.01, Volume 2

### Classification Authority Block

Whenever classified information is present, there needs to be a method to trace the source of the classification and any necessary clarifications about declassify dates or classification reasons. The classification authority block is typically in the bottom left of the page, but can be moved according to layout needs. Similarly, if necessary in the layout, the authority information for electronic material may appear as a single line of text instead of the typical three line approach seen in the examples below. When entering dates in the block, use the standard format of YYYYMMDD. Note that there is a slightly different structure for originally classified documents and documents with a classification derived from another document. If the page pulls information from multiple derivation sources, use “Multiple Sources” in the “Derived From:” line and include or annotate the list of sources on the derivative document. 

If your application is able to move forward with the use of authority blocks, review the relevant sections in the references at the end of this report since there are many other rules for specific use cases. If it is not possible to show this information, as is true in many dynamic documents, a dynamic document warning (the same as mentioned in the Portion Marking section) should be present at the top of each page to warn the user not to use the content as a source for derivative classification and to give contact information.


##### Structure for Original vs. Derivative Classification Blocks from the ISOO Marking Booklet

![Summary of Classification Authority Block](/img/patterns/classification-markings-authority-block.png)

##### Example of Original Classification in Context from DoDM 5200.01, Volume 2

![Example of Originally Classified Document](/img/patterns/classification-markings-originally-classified-doc.png)

##### Example of Derivative Classification in Context from DoDM 5200.01, Volume 2

*UNCLASSIFIED - CLASSIFICATION MARKINGS FOR ILLUSTRATION PURPOSES ONLY*

![Example of Derivatively Classified Document](/img/patterns/classification-markings-derivatively-classified.png)

##### Repeat of the Dynamic Document Warning for Quick Reference

![Warning Statement for Dynamic Documents](/img/patterns/classification-markings-warning-statement-for-dynamic-documents.png)

## Actual Implementation

Actual implementations of the classification marking requirements, however, are increasingly varied. Some applications that our users have encountered have top and bottom banners as well as some higher levels of portion marking, but other applications have no markings at all or only a top banner with the overall system classification level. Government users report a common trend in applications is to just use a top and bottom banner with the overall classification in text and a background color for the banner matching the relevant physical classification label color.

### Workstations

Applications that will be used on government workstations with access to classified networks and information often do not have a full set of classification markings because the workstations themselves have the markings. On the physical workstation machines, physical classification labels will be present showing the highest level of classified information the machine has access to. When the workstation is on, the user interface of the workstation is themed to match the color of the physical classification label. The wallpaper of the virtual desktop of the workstation has an overall classification banner at the top of the screen that also marks the high-water mark of the classification access of the machine and any additional caveats. There is not a banner at the bottom of the desktop wallpaper since it would often be covered by the computer menus from the bottom of the screen. In general, because the workstation already has an overall classification banner and many virtual environments are dynamic in nature, applications on these workstations do not tend to have as many classification markings as more traditional document formats.

### Physical Classification Labels

According to subject matter experts within our client companies, it is a common practice to use physical classification label colors as background colors for overall classification banners in applications. We were not able to find any documentation that lists this an a required aspect of overall classification, but we have included images of these labels for reference from Marking Classified National Security Information ISOO Booklet, Revision 4 (p. 44) and the At Ease Computing, Inc. Online Store - U.S. Government Security Labels (SF) as linked at the bottom of the page. A cybersecurity expert confirmed that there are no documented requirements that virtual environments use color as a signifier to the best of her knowledge. It is unclear if there are specific colors or hex codes required for each label or if it only requires a generic color category like “red.”

##### ISOO Marking Booklet - SF Label Images

*UNCLASSIFIED - CLASSIFICATION MARKINGS FOR ILLUSTRATION PURPOSES ONLY*

![Examples of Physical Labels in the ISOO Marking Booklet](/img/patterns/classification-markings-label-authorization.png)

##### At Ease Computing - SF Label Images

*UNCLASSIFIED - CLASSIFICATION MARKINGS FOR ILLUSTRATION PURPOSES ONLY*

| Classification Level - Part Number for Reference | SF Label                                                                                  |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| Unclassified - SF-710                            | ![Green Unclassified Label](/img/patterns/classification-markings-sf-710.png)             |
| Classified - SF-709                              | ![Light Purple Classified Label](/img/patterns/classification-markings-sf-709.png)        |
| Confidential - SF-708                            | ![Dark Blue Confidential Label](/img/patterns/classification-markings-sf-708.png)         |
| Secret - SF-707                                  | ![Red Secret Label](/img/patterns/classification-markings-sf-707.png)                     |
| Top Secret - SF-706                              | ![Orange Top Secret Label](/img/patterns/classification-markings-sf-706.png)              |
| Top Secret SCI - SF-712                          | ![Yellow Top Secret SCI Label](/img/patterns/classification-markings-sf-712.png)          |
| Top Secret Special Access Required - SF-SAR-P    | ![Dark Purple Top Secret SAR-P Label](/img/patterns/classification-markings-sf-sar-p.png) |

## Current Recommendations

Many people assume that markings are a simple matter of putting a banner at the top of the application with the highest level of classification of the data present in a system. However, that level of detail is not enough according to government requirements and the needs of our users. For example, operators may need to collaborate and communicate to complete their tasks, but different operators may have different clearance levels even if they are sitting next to each other. Although additional portion markings create visual clutter, in many cases a more in depth level of detail is needed by our users to succeed unless a coordinated government effort (such as the one currently in progress) makes a different ruling on the level of detail required for their jobs and the country’s security. It may seem simpler to wait for the verdict of the government effort, but there is not a known timeline for any new guidelines and the development and design for many relevant software projects is already underway. In order to save time and resources, ultimately, it will be much easier and more secure to figure in these marking elements earlier rather than later.

Looking at the differences between the official requirements and the actual implementations that our users are more familiar with, we make the following suggestions. Please note that any exceptions from the documented rules require requesting an exception from the relevant governing body. 

### Overall Classification

One thing that all of the documentation and most of the implementations can agree on is that an application should have a **top banner** with overall classification in it. If the application will be on an already marked workstation, we suggest a top banner that says **“CLASSIFIED UP TO \[LEVEL\]”** where the level is the classification level without any of the additional caveat information. The banner should follow the standard format with **centered** text in **all capital** letters and should be in **fixed** positions in the application so they cannot scroll out of view. To match what users are familiar with, we recommend coloring the banners to match the **colors of physical classification labels**. However, there is a risk that these additional colors will take away from the meanings for colors used elsewhere in the application for status purposes, so we suggest reducing the visual footprint of the banner to the smallest height that can still be easily read and understood quickly.

### Portion Marking

Current documentation requires portion marking throughout a document, but, in actual practice, portion marking is often left to section markings at best. Although some implementations only show the overall classification, this does not work ideally for users like operators who need to communicate at different levels of classification depending on the security level of other operators. Our recommendation is to **at least include section markings** using the traditional **(U//FOUO)** abbreviated format in parentheses or another enclosed format such as a tag to the right of the section name (unless the section name itself is classified) if the classification information is available, but to also seriously consider adding portion marking to individual fields with drastically different classification levels or to move higher classification items to a separate section if the new grouping doesn’t cause disconnects between the user’s mental models and the UI layout. For individual fields, unless the label itself is classified, we recommend a **Label (U//FOUO)** format to show that the data contained by the label is classified without reducing scannability of the label or removing too much visual focus from the data itself. If relevant, the information could also be portrayed in a separate column in a table for each item’s row (preferably in an immediately visible location). In this case, the parentheses should no longer be necessary as the column division should provide enough differentiation from the rest of the table text.

### Classification Authority Block

Since the information included on each page of an application can have classified items from many different sources and may dynamically change in many circumstances, we believe that a Classification Authority Block is **not relevant** to these UI designs. Therefore, according to regulations, a Dynamic Document Warning should be applied on every page, but the research has not found that to be true in implementation. We suggest to either **ask for an exception to the warning rule** to remove this block and warning altogether from the application’s UI or ask to be able to place the warning on a single landing, home page, or general acknowledgement pop ups to avoid having to use a large chunk of space on every page for the same warning.

## Remaining Questions

### Future Standards

According to some of our customers, there has been an at least 2 year coordination government effort to establish a set of standards, but we have no additional information regarding timeline or any potential guidelines or rules as of now. In the meantime, we suggest moving forward with our current recommendations while keeping an eye out for future standards.

## References

<details>
  <summary>Classification Markings</summary>

### Classification Markings

To get a good idea of the full range of requirements for Classification Markings quickly, we suggest [Marking Classified National Security Information ISOO Booklet](https://www.archives.gov/files/isoo/training/marking-booklet-revision.pdf), Revision 4 for a quick view and the [ISOO Marking Booklet DoDM 5200.01, Vol. 2](https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodm/520001_vol2.pdf) for a more detailed view.

- [At Ease Computing, Inc. Online Store - U.S. Government Security Labels (SF)](http://www.at-ease-inc.com/sflabel.php)

- [CDSE Job Aid: Marking Classified Information](https://www.cdse.edu/documents/cdse/Marking_Classified_Information.pdf)

- [DoD 5220.22-M, National Industrial Security Program Operating Manual, with change(s)](https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodm/522022M.pdf)
   
   (Marking Requirements on p. 4-2-1)

- [DoDM 5200.01, Vol. 2, DoD Information Security Program: Marking of Classified Information, February 24, 2012](https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodm/520001_vol2.pdf

   (Enclosure 3: Marking Principles on p. 17)
   
   (Marking in the Electronic Environment on p. 48)
   
   (Enclosure 4: Marking Standard on p. 63)

- [Information Security Oversight Office (ISOO) Website](https://www.archives.gov/isoo)

- [ISOO FAQs: Marking Questions](https://www.archives.gov/isoo/faqs#50x-and-75x-requirements)

- [ISOO Training Aids](https://www.archives.gov/isoo/training/training-aids)

- [Marking Classified National Security Information ISOO Booklet, Revision 4](https://www.archives.gov/files/isoo/training/marking-booklet-revision.pdf)
   (Physical label examples on p. 44)

- [National Archives and Records Administration: ISOO: 32 CFR Parts 2001 and 2003](https://www.archives.gov/files/isoo/policy-documents/isoo-implementing-directive.pdf)

   (Identification and Markings in section 2001.20 on p. 6 of the PDF)

   (Classification marking in the electronic environment in section 2001.23 on p. 8 of the PDF)

</details>


<details>
  <summary>Derivative Classification</summary>
  
### Derivative Classification

- [CDSE Derivative Classification Glossary](https://www.cdse.edu/documents/cdse/CDSE_DC_Glossary.pdf)

- [CDSE Job Aid: Derivative Classification Training](https://www.cdse.edu/documents/cdse/DerivativeClassification.pdf)

- [CDSE Student Guide: Derivative Classification](https://www.cdse.edu/documents/student-guides/derivative-classification.pdf)

</details>


<details>
  <summary>Other Security Topics</summary>
  
### Other Security Topics

- [DoDM 5200.01, Vol. 1, DoD Information Security Program: Overview, Classification, and Declassification, February 24, 2012](https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodm/520001m_vol1.pdf)

- [DoDM 5200.01, Vol. 3, DoD Information Security Program: Protection of Classified Information, February 24, 2012](https://www.esd.whs.mil/Portals/54/Documents/DD/issuances/dodm/520001_vol3.pdf)

- [The President Executive Order 13526](https://www.archives.gov/isoo/policy-documents/cnsi-eo.html)

</details>
