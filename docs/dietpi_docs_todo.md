# Documentation Ideas & Tasks

## 1 Files general

### 1.1 Content order

**Proposal:** The content of the HOME area is reordered by exchanging Supported SBCs with Optimised software list and Advanced configuration with Community tutorials.  
This gives the following benefits:

- "Advanced configuration" is nearer to the system usage description
- All links to DietPi.com forum ("Community tutorials" and "Troubleshooting" are consecutive)

Then the main order will be:

1. Overview
2. Installation
3. Getting started
4. Supported SBCs
5. Advanced configuration
6. Community tutorials
7. Troubleshooting
8. ...

#### Decision?

### 1.2 Headings of optimized software

Shall the installation number added to every heading of the installation description?  
See <https://dietpi.com/docs/software/remote_desktop/#29-tigervnc-server-desktop-for-remote-connection>: Number \[29\] is added as a prefix of the heading.

Or shall it be added as a postfix?

#### Decision?

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

#### Decision?

## 3 Desktops

### 3.1 LXQt

LXQt (<https://dietpi.com/docs/dietpi-software-desktop/#lxqt-optimized-lightweight-desktop>):

1. Add screenshot of desktop

- [x] **Stephan:** Add image.

## 4 DietPi Tools

See there: <https://dietpi.com/docs/user-guide_tools/>

## 4.1 Add a screenshot for *Software Additional*

- [x] **Stephan:** Add a screenshot for *Software Additional* within the corresponding tab section

## 5 Description of Webserver stacks

See there: <https://dietpi.com/docs/dietpi-software-webserver-stack/>

1. Add a section how to select the webservers stacks via ***dietpi-software***. Two options: Select via *Software Optimized* or via *Webserver Preference* (Preference is used in the case of the first webserver background installation).
2. Section [Webservers](https://dietpi.com/docs/dietpi-software-webserver-stack/#webservers): Exchange the three bullets with the description "behind the links" ([*Webserver Preference System*](https://dietpi.com/phpbb/viewtopic.php?p=1549#p1549)):
   - Remove the links, but keep the three bullets
   - Port the description *Webserver Preference System* to this section
3. How to port the stack description to the Webserver stacks section? Idea:
   - Divide the description into sections about webservers, about data bases and about PHP.

- [ ] **Todo Stephan:** Implement points 1. and 2. above
- [ ] **Afterwards:** Discuss how to implement point 3. above and decide further steps

## 6 Gitea software

### 6.1 Prerequisites

Describe/check user rights of dietpi user and letsencrypt.

### 6.2 Add section "hardening Gitea for external access (behind a router)"

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

## 7 Backup/Restore

Describe Backup/Restore:

- via `dietpi-backup`
- via different/other backup solutions
  E.g. see <https://www.linuxlinks.com/backup/>

## 8 Optimized software

### 8.1 Harmonization with <https://dietpi.com/dietpi-software.html>

In <https://dietpi.com/dietpi-software.html> are icons of software titles as tiles displayed.  
This should be consistent to our [optimized software list](https://dietpi.com/docs/dietpi_optimised_software/).

Proposal: Vor every software title one tile. Add tiles to dietpi-software.html.

#### Decision?

### 8.2 Add section "how do I run..."

In every chapter of "Optimized software" the section "How do I run DietPi-Software and install Optimised software ?" shall be added.

The section with `dietpi-launcher`shall be deleted at all chapters. The result would be:

```
??? info "How do I run **DietPi-Software** and install **Optimised software** ?"
    To install any of the **DietPi Optimised Software** listed below run from the command line:

    ```
    dietpi-software
    ```

    Choose **Software optimised** and select one or more items. Finally click on `Install`. DietPi will do all the necessary steps to install and start these software items.

    ![DietPi software](../assets/images/dietpi-software.jpg)

    To see all the DietPi configurations options, review [DietPi Tools](../../dietpi_tools) section.
```

#### Decision?

### 8.3 Tabs for the DietPi tool programs?

In https://dietpi.com/docs/dietpi_tools/#configuration the various tools (e.g. dietpi-config, dietpi-drive-manager, dietpi-autostart,...) could be moved to tabs and some more explanations from the DietPi forum pages could be added.  
Can be seen at Stephan's branch ["dev-StS-todo"](https://github.com/StephanStS/DietPi-Docs/tree/dev-StS-todo).

#### Decision?

## 9 Chapter "Advanced configuration"

### 9.1 Add descriptions

<https://dietpi.com/docs/dietpi_tools/#dietpi-software>

- [ ] Someone to describe the tab "Search".
- [x] **Stephan:** Someone to describe the tab "Log System".

#### Decision?

## 10 Software lists

### 10.1 Compare software lists

The software list between the softwares listed in

- `dietpi-software`
- <https://dietpi.com/docs/software/desktop/>: All softwares listed below *Optimized Software*
- <https://dietpi.com/phpbb/viewtopic.php?f=8&t=5&sid=8866107ee3f50cf03080607e875fdfd1>: All softwares listed there

need to be checked for consistency.

Softwares which are actually not within `dietpi-software`:

- t.b.d.

Softwares which are actually not within <https://dietpi.com/docs/software/desktop/>:

- t.b.d.

Decision is needed, which of these softwares shall be described in the documentation resp. shall be added to the installation via `dietpi-software`.  
**Proposal:** First, generate the lists above and decide afterwards how to go on.

#### Decision?

### 10.2 Checks in *Optimized Software*

Check for this:

- If the sub-page (e.g. <https://dietpi.com/docs/software/desktop/>) is finished
  - the warning *Documentation in progress…* should be deleted
  - the links on the top should be bold and link to the headings within the sub-page
- In every sub-page the section *How do I run DietPi-Software and install Optimised software ?* should be present.
