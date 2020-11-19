# Documentation Ideas & Tasks

## 1 Supported Single Board Computers (SBCs)

### 1.1 Software overview on dietpi.com

There: <https://dietpi.com/dietpi-software.html>

Idea: Add a link to the "new" documentation software pages from the tiles.  
Rename the basic text for this linking to "Once installed" -> "Further information".

Start with one tile and then review for further decision.

- [x] **Petru:** Make a first proposal (align with Download area with the tiles there)
- [ ] **Petru:** Continue to work and discuss on this topic

### 1.2 Position of Let's Encrypt

*Let's Encrypt / CertBot* moved from ***Web Development*** chapter to ***System Security*** chapter.  
In the *System Security* chapter there is also *Fail2Ban* located.

Optionally, also move chapters ***SSH Server*** and ***VPN*** also to *System Security*?

**Decision?**

## 2 Description of Webserver stacks

See there: <https://dietpi.com/docs/dietpi-software-webserver-stack/>

1. Add a section how to select the webservers stacks via ***dietpi-software***. Two options: Select via *Software Optimized* or via *Webserver Preference* (Preference is used in the case of the first webserver background installation).
2. Section [Webservers](https://dietpi.com/docs/dietpi-software-webserver-stack/#webservers): Exchange the three bullets with the description "behind the links" ([*Webserver Preference System*](https://dietpi.com/phpbb/viewtopic.php?p=1549#p1549)):
   - Remove the links, but keep the three bullets
   - Port the description *Webserver Preference System* to this section
3. How to port the stack description to the Webserver stacks section? Idea:
   - Divide the description into sections about webservers, about data bases and about PHP.

- [ ] **Todo Petru:** Implement points 1. and 2. above
- [ ] **Afterwards:** Discuss how to implement point 3. above and decide further steps

## 3 Gitea software

### 3.1 Prerequisites

Describe/check user rights of dietpi user and letsencrypt.

### 3.2 Add section "hardening Gitea for external access (behind a router)"

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

ToDos:

- [x] **ToDo Stephan:** Describe gitea & Fail2Ban

## 4 Backup/Restore

Describe Backup/Restore:

- via `dietpi-backup`
- via different/other backup solutions
  E.g. see <https://www.linuxlinks.com/backup/>

Additional idea:

- Add `timeshift` as an additional software title
- Use also `timeshift` and have a directory converter for the backup/restore file structure

- [ ] **ToDo Stephan**

## 5 Optimized software

### 5.1 Harmonization with <https://dietpi.com/dietpi-software.html>

In <https://dietpi.com/dietpi-software.html> are icons of software titles as tiles displayed.  
This should be consistent to our [optimized software list](https://dietpi.com/docs/dietpi_optimised_software/).

Proposal: Vor every software title one tile. Add tiles to dietpi-software.html.

- [x] **Petru:** Make a first proposal (align with Download area with the tiles there)
- [ ] **ToDo:** Check back rights to use software logos for tiles

## 6 Software lists

### 6.1 Compare software lists

The software list between the softwares listed in

- `dietpi-software`
- <https://dietpi.com/docs/software/desktop/>: All softwares listed below *Optimized Software*
- <https://dietpi.com/phpbb/viewtopic.php?t=5>: All softwares listed there
- <https://github.com/MichaIng/DietPi/wiki/DietPi-Software-list>

need to be checked for consistency.

#### Result

Softwares which are actually not within `dietpi-software`:

- [PaperMC](https://dietpi.com/docs/software/gaming/#papermc)

Softwares which are actually not within <https://dietpi.com/docs/dietpi_optimised_software/>:

- [BruteFIR](https://dietpi.com/phpbb/viewtopic.php?p=57#p57)
- [Spotify Connect Web](https://dietpi.com/phpbb/viewtopic.php?p=7013#p7013)
- [Raspotify](https://dietpi.com/phpbb/viewtopic.php?p=9368#p9368)
- [TasmoAdmin](https://dietpi.com/phpbb/viewtopic.php?p=20584#p20584)
- [Domoticz](https://dietpi.com/phpbb/viewtopic.php?p=23065#p23065)
- Redis (only in `dietpi-software`)
- FuguHub: Lightweight WebDAV cloud (eg: dropbox) with a CMS (only in `dietpi-software`)

Decision is needed, which of these softwares shall be described in the documentation resp. shall be added to the installation via `dietpi-software`.

**Proposal:** First, generate the lists above and decide afterwards how to go on.

- [x] **ToDo Stephan:** Check and in case of missing issues list them above for further discussion
- [ ] **ToDo Petru:** Test to create website content based on JSON file (or similar)

### 6.2 Checks in *Optimized Software*

Check for this:

- If the sub-page (e.g. <https://dietpi.com/docs/software/desktop/>) is finished
  - the warning *Documentation in progress…* should be deleted
  - the links on the top should be bold and link to the headings within the sub-page
- In every sub-page the section *How do I run DietPi-Software and install Optimised software?* should be present.

### 6.3 Shorten software title headers

To shorten/simplify links to the individual software title docs.

- [ ] **ToDo Stephan (and others)**

## 7 Chapter for "hardening the system" or "maintaining the system"?

Add items about

- Let's Encrypt: <https://github.com/MichaIng/DietPi/wiki/Let's-Encrypt---Certbot>
- TLS-SSL: <https://github.com/MichaIng/DietPi/wiki/TLS-SSL>
- Security recommendations: <https://github.com/MichaIng/DietPi/wiki/Security-recommendation>
- Fail2Ban: <https://dietpi.com/phpbb/viewtopic.php?p=452#p452>
- Backup/Restoring / Synching
- Updating
- Logfile viewing
- Disk space monitoring
