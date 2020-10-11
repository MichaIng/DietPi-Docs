# Documentation Ideas & Tasks

## 1. Development general

### 1.1 Branching
1. Q: Shall we use (personal) branches to push changes directly into the master branch, or shall we use forking mechanisms?
2. If using branches, which naming conventions shall we use for branch names (e.g. "dev-<short name>-<ChangeArea>". Example: "dev-StS-AddBoardImages" or "dev-MiI-DescribeWebserverStacks")

Have branches on MichaIng/DietPi-Docs:
- master branch: stable
- dev branch: work on this branch and will be merged into master branch at planned release dates

Everyone works on his own fork for development. There "private" branches with "private" naming can be chosen.

Committing changes from the private fork branch to the dev branch on Micha's repo shall be done via a pull request.

Merging should be done via 4-eyes method when merging to the master branch.

- [x] Rules are now enabled. 

## 2. Files general

### 2.1 Filenames .md

  - Some of the filenames use '-', others use '_'.  
    e.g. dietpi-software-bittorrent.md vs. user-guide_install.md.  
    I would prefer the latter one: `<docu type>_<chapter contents>.md`.

    **Style Guide**: 
    ```
    <docu type>_<chapter contents>.md, all lower case 
    Example: user-guide_install.md.
    ```
    
ToDo: Change file names initially.
Remark: Google search should be considered.

- [x] Petru to enable the new naming rules

### 2.2 File structure
Q: Shall we structure every chapter to subdirs (with own assets sub-subdirs)?   
This could lead to a more general structure if the docu is extending.   

Could this lead to problems when chapters or images are used several times?

Open point, has to be cleared.

- [x] Petru to enable new file structure

## 3. Installation chapter
### 3.1 Docu structure

Today:

  - Installation (*covers SBC installation* and *First boot on DietPi*)
  - Advanced installation
    - Install DietPi on native PC
    - Install DietPi as an Oracle VirtualBox machine

Proposal:

  - **Installation** (*covers overview over several options: SBC, PC, virtual machine*)
  - **Installation on SBC** ([contents](https://dietpi.com/docs/user-guide_install/))
  - **Installation on native PC** ([contents](https://dietpi.com/docs/user-guide_install_uefi/))
  - **Installation on VirtualBox machine** ([contents](https://dietpi.com/docs/user-guide_install_VirtualBox/))
  - (later: - **Installation on VmWare virtual machine**)
  - **First boot on DietPi** (move this from the [*Installation on SBC*](https://dietpi.com/docs/user-guide_install/#3-first-boot-on-dietpi) section to here)


Idea: 
  - Use tabs in the content area (like there: https://dietpi.com/docs/dietpi-software-desktop/#lxde-ultra-lightweight-desktop) to distinguish between SBC, native PC, VirtualBox,etc. Below the tab area the *First boot on DietPi* section is located.

- [ ] **ToDo Stephan:** Implement the changed *Installation* structure.

### 3.2 Description of *dietpi-software* usage

  1. Move [4. Install software with the DietPi-Software tool](https://dietpi.com/docs/user-guide_install/#4-install-software-with-the-dietpi-software-tool) to [DietPi Optimised software Index](https://dietpi.com/docs/user-optimised-software/) ?  
  *dietpi-software* should not be a tool which is run only once during the installation.

Shall be moved to *Getting started*.

*Getting started* shall contain often used procedures. Seldom used procedures shall be in *Advanced configuration & DietPi tools*.

  - go ahead here

## 4 Supported Single Board Computers (SBCs)

See there: https://dietpi.com/docs/hardware-supported_sbc/.

### 4.1 Structure of chapters
Harmonize/rearrange order in all sub-chapters:

  - Heading
  - Hardware description
  - Picture of hardware
  - Link table to images



### 4.2 Supported Single Board Computers (SBCs)
1. Move *NanoPi Series (FriendlyARM)* below *ASUS Tinker Board*


### 4.3 Description of DietPi PREP?
1. Q: Shall we describe this issue in a comprehensive form?  
   Possibly this will lead to too much questions?

Actually it is only referenced at the end of the [*Supported SBC* section](https://dietpi.com/docs/hardware-supported_sbc/#make-your-own-distribution).


### 4.4 Name of .md file
1. Q: Rename *hardware-supported_sbc.md* to *user-guide_supported_sbc.md*


### 4.5 Images
Add images for
- Firefly
- Sparky SBC (Allo)

The images are available on Dietpi.com\Download.


## 5. Desktops
Desktop basics (https://dietpi.com/docs/dietpi-software-desktop/):
1. Add a section how to setup the ***Autostart options*** via ***dietpi-config*** to start with LightDM
  - Have it similar to the collapsable description *How do I run DietPi-Software and install Optimised software ?*


LXQt (https://dietpi.com/docs/dietpi-software-desktop/#lxqt-optimized-lightweight-desktop):
1. Add screenshot of desktop


## 6. DietPi Tools
See there: https://dietpi.com/docs/user-guide_tools/
1. Add a screenshot for *Software Additional*


## 7. Description of Webserver stacks
See there: https://dietpi.com/docs/dietpi-software-webserver-stack/  
1. Add a section how to select the webservers stacks via ***dietpi-software***
2. Section [Webservers](https://dietpi.com/docs/dietpi-software-webserver-stack/#webservers): Exchange the three bullets with the description "behind the links" ([*Webserver Preference System*](https://dietpi.com/phpbb/viewtopic.php?p=1549#p1549))



## 8. Links *Return to the Optimised Software list*
See there: https://dietpi.com/docs/dietpi-software-webserver-stack/  
At the bottom there is a link to jump back.  
Q: Is this linking done in all necessary pages? If no, where should it be inserted?


## 9. Gitea software
### 9.1 Prerequisites
Describe/check user rights of dietpi user and letsencrypt.

### 9.2 Add section "hardening Gitea for external access (behind a router)"
- Describe fail2ban usage unter "external access".  
  See: https://docs.gitea.io/en-us/fail2ban-setup/
- Describe combination Gitea and letsencrypt. Then use https for access.


