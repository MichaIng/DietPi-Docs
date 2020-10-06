# DietPi-Docs Ideas


## 1. Files general

### 1.1 Filenames .md
Some of the filenames use '-', others use '_'.  
E.g. dietpi-software-bittorrent.md vs. user-guide_install.md.  
I would prefer the latter one: <docu type>_<chapter contents>.md.

### 1.2 File structure
Q: Shall we structure every chapter to subdirs (with own assets sub-subdirs)?   
This could lead to a more general structure if the docu is extending.   

Could this lead to problems when chapters or images are used several times?



## 2. Installation chapter
### 2.1 Docu structure
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


### 2.2 Description of *dietpi-software* usage
1. Move [4. Install software with the DietPi-Software tool](https://dietpi.com/docs/user-guide_install/#4-install-software-with-the-dietpi-software-tool) to [DietPi Optimised software Index](https://dietpi.com/docs/user-optimised-software/) ?  
  *dietpi-software* should not be a tool which is run only once during the installation.


## 3 Supported Single Board Computers (SBCs)
See there: https://dietpi.com/docs/hardware-supported_sbc/.

### 3.1 Structure of chapters
Harmonize/rearrange order in all sub-chapters:
- Heading
- Hardware description
- Picture of hardware
- Link table to images



### 3.2 Supported Single Board Computers (SBCs)
1. Move *NanoPi Series (FriendlyARM)* below *ASUS Tinker Board*


### 3.3 Description of DietPi PREP?
1. Q: Shall we describe this issue in a comprehensive form?  
   Possibly this will lead to too much questions?

Actually it is only referenced at the end of the [*Supported SBC* section](https://dietpi.com/docs/hardware-supported_sbc/#make-your-own-distribution).


### 3.4 Name of .md file
1. Q: Rename *hardware-supported_sbc.md* to *user-guide_supported_sbc.md*



## 4. Desktops
Desktop basics (https://dietpi.com/docs/dietpi-software-desktop/):
1. Add a section how to setup the ***Autostart options*** via ***dietpi-config*** to start with LightDM
  - Have it similar to the collapsable description *How do I run DietPi-Software and install Optimised software ?*


LXQt (https://dietpi.com/docs/dietpi-software-desktop/#lxqt-optimized-lightweight-desktop):
1. Add screenshot of desktop


## 5. DietPi Tools
See there: https://dietpi.com/docs/user-guide_tools/
1. Add a screenshot for *Software Additional*


## 6. Description of Webserver stacks
See there: https://dietpi.com/docs/dietpi-software-webserver-stack/  
1. Add a section how to select the webservers stacks via ***dietpi-software***
2. Section [Webservers](https://dietpi.com/docs/dietpi-software-webserver-stack/#webservers): Exchange the three bullets with the description "behind the links" ([*Webserver Preference System*](https://dietpi.com/phpbb/viewtopic.php?p=1549#p1549))



## 7. Links *Return to the Optimised Software list*
See there: https://dietpi.com/docs/dietpi-software-webserver-stack/  
At the bottom there is a link to jump back.  
Q: Is this linking done in all necessary pages? If no, where should it be inserted?
