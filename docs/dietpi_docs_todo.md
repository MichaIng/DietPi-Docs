# Documentation Ideas & Tasks

## 1 Files general

## 2 Supported Single Board Computers (SBCs)

### 2.1 Description of DietPi PREP?

1. Q: Shall we describe this issue in a comprehensive form?  
   Possibly this will lead to too much questions?

Actually it is only referenced at the end of the [*Supported SBC* section](https://dietpi.com/docs/hardware-supported_sbc/#make-your-own-distribution).

- [ ] **ToDo Stephan:** Make a proposal with some more screenshots.  Add a fat disclaimer/hint that advanced linux knowledge has to be present. No guarantee that this will work for every SBC.
  Basically use *master* branch, use *dev* for hardening/testing Micha's PREP-script.

### 2.2 Headings of Optimized software list

Compare <https://dietpi.com/docs/dietpi_optimised_software/>, table of contents on the right side with <https://dietpi.com/docs/software/desktop/>, structure on the left side.

Proposal:

- Harmonize naming
- List in alphabetical order

- [x] **ToDo Stephan:** Sort in alphabetical order
- [x] **Open:** Harmonization
- [x] **ToDo Stephan:** Use ampersand signs consequently for software categories

### 2.3 Software overview on dietpi.com

There: <https://dietpi.com/dietpi-software.html>

Idea: Add a link to the "new" documentation software pages from the tiles.  
Rename the basic text for this linking to "Once installed" -> "Further information".

Start with one tile and then review for further decision.

- [ ] **Petru:** Make a first proposal (align with Download area with the tiles there)

## 3 Description of Webserver stacks

See there: <https://dietpi.com/docs/dietpi-software-webserver-stack/>

1. Add a section how to select the webservers stacks via ***dietpi-software***. Two options: Select via *Software Optimized* or via *Webserver Preference* (Preference is used in the case of the first webserver background installation).
2. Section [Webservers](https://dietpi.com/docs/dietpi-software-webserver-stack/#webservers): Exchange the three bullets with the description "behind the links" ([*Webserver Preference System*](https://dietpi.com/phpbb/viewtopic.php?p=1549#p1549)):
   - Remove the links, but keep the three bullets
   - Port the description *Webserver Preference System* to this section
3. How to port the stack description to the Webserver stacks section? Idea:
   - Divide the description into sections about webservers, about data bases and about PHP.

- [ ] **Todo Petru:** Implement points 1. and 2. above
- [ ] **Afterwards:** Discuss how to implement point 3. above and decide further steps

## 4 Gitea software

### 4.1 Prerequisites

Describe/check user rights of dietpi user and letsencrypt.

### 4.2 Add section "hardening Gitea for external access (behind a router)"

- Describe fail2ban usage unter "external access".  
  See: <https://docs.gitea.io/en-us/fail2ban-setup/>
- Describe combination Gitea and letsencrypt. Then use https for access.

Alternative:

- Add a general *hardening with https:* description in the webserver section (where in detail?).  
  See also there: <https://github.com/MichaIng/DietPi/wiki/Security-recommendation>.
- Reference this hardening section from the software titles and add there specialities of the software title hardening

How to go on?

- First do a description about gitea hardening
- Then describe a bit more general security solutions
- Then possibly restructure the whole issue

## 5 Backup/Restore

Describe Backup/Restore:

- via `dietpi-backup`
- via different/other backup solutions
  E.g. see <https://www.linuxlinks.com/backup/>

Additional idea:

- Add `timeshift` as an additional software title
- Use also `timeshift` and have a directory converter for the backup/restore file structure

- [ ] **ToDo Stephan**

## 6 Optimized software

### 6.1 Harmonization with <https://dietpi.com/dietpi-software.html>

In <https://dietpi.com/dietpi-software.html> are icons of software titles as tiles displayed.  
This should be consistent to our [optimized software list](https://dietpi.com/docs/dietpi_optimised_software/).

Proposal: Vor every software title one tile. Add tiles to dietpi-software.html.

- [ ] **Petru:** Make a first proposal (align with Download area with the tiles there)
- [ ] **ToDo:** Check back rights to use software logos for tiles

## 7 Chapter "Advanced configuration"

### 7.1 Add descriptions

<https://dietpi.com/docs/dietpi_tools/#dietpi-software>

- [x] Someone to describe the tab "Search".
- [x] **Stephan:** Someone to describe the tab "Log System".

- [ ] **Todo Micha:** Describe Search

## 8 Software lists

### 8.1 Compare software lists

The software list between the softwares listed in

- `dietpi-software`
- <https://dietpi.com/docs/software/desktop/>: All softwares listed below *Optimized Software*
- <https://dietpi.com/phpbb/viewtopic.php?t=5>: All softwares listed there
- <https://github.com/MichaIng/DietPi/wiki/DietPi-Software-list>

need to be checked for consistency.

Softwares which are actually not within `dietpi-software`:

- t.b.d.

Softwares which are actually not within <https://dietpi.com/docs/software/desktop/>:

- t.b.d.

Decision is needed, which of these softwares shall be described in the documentation resp. shall be added to the installation via `dietpi-software`.

**Proposal:** First, generate the lists above and decide afterwards how to go on.

- [ ] **ToDo Stephan:** Check and in case of missing issues list them above for further discussion
- [ ] **ToDo Petru:** Test to create website content based on JSON file (or similar)

### 8.2 Checks in *Optimized Software*

Check for this:

- If the sub-page (e.g. <https://dietpi.com/docs/software/desktop/>) is finished
  - the warning *Documentation in progress…* should be deleted
  - the links on the top should be bold and link to the headings within the sub-page
- In every sub-page the section *How do I run DietPi-Software and install Optimised software?* should be present.

### 8.3 Shorten software title headers

To shorten/simplify links to the individual software title docs.

- [ ] **ToDo Stephan (and others)**

## 9 Chapter for "hardening the system" or "maintaining the system"?

Add items about

- Let's Encrypt: <https://github.com/MichaIng/DietPi/wiki/Let's-Encrypt---Certbot>
- TLS-SSL: <https://github.com/MichaIng/DietPi/wiki/TLS-SSL>
- Security recommendations: <https://github.com/MichaIng/DietPi/wiki/Security-recommendation>
- Fail2Ban: <https://dietpi.com/phpbb/viewtopic.php?p=452#p452>

- Backup/Restoring / Synching
- Updating
- Logfile viewing
- Disk space monitoring
- ...
