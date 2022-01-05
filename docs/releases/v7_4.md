# Release Notes

## July 2021 (version 7.4)

Welcome to **July 2021 release** :octicons-heart-16: of **DietPi**.

### New software titles {: #new-software-74 }

- [**Synapse**](../../software/social/#synapse)

    Synapse is a reference homeserver implementation written in Python/Twisted by the core team over at Matrix.org. It enables decentralized communication, storing all user personal info, chat history, create the room for own use and many other options.

    Matrix Synapse is a great alternative for applications like Slack, Discord, Rocket.chat and others.

    Now available to install using [`dietpi-software`](../../dietpi_tools/#dietpi-software) or directly using the software ID `125`.

- [**PostgreSQL**](../../software/databases/#postgresql)

    A persistent advanced object-relational database server has been added. Now available to install using [`dietpi-software`](../../dietpi_tools/#dietpi-software) or directly using the software ID `194`.

- [**youtube-dl**](../../software/bittorrent/#youtube-dl)

    The famous command-line program to download videos from YouTube and other video platforms has been added.

    Now available to install using [`dietpi-software`](../../dietpi_tools/#dietpi-software) or directly using the software ID `195`.

### DietPi Tools (new / notable updates) {: #dietpi-tools-74 }

- [DietPi-Update](../../dietpi_tools/#dietpi-update) :octicons-arrow-right-16: A new live patching system has been implemented. This allows us to ship little fixes and updates, that are safe to apply with a one-line command, until the next DietPi version is released. Live patches are checked for together with DietPi updates and a notification is shown in the login banner as well, when new live patches have been found. When available, each patch can be individually applied or dismissed and the login banner won't bother you again about patches that you have seen in the dietpi-update menu already, regardless whether you applied them or not.
- [DietPi-Globals | `G_AGUP`](../../dietpi_tools/#useful-dietpi-shell-functions) :octicons-arrow-right-16: Our `apt-get update` wrapper will now throw an error, when some index files couldn't be downloaded, e.g. due to DNS failure. Currently `apt-get update` prints a warning but does not return an error code. It is better to have an error handler prompt here, where we have an associated command output, than later when package installs or upgrades fail because of outdated information or missing list files.
- **DietPi-Set_swapfile** :octicons-arrow-right-16: Resolved an issue where remounting the `/tmp` tmpfs filesystem failed, if another filesystem type was mounted at `/tmp`. This could be especially the case during DietPi-PREP image creation. Many thanks to @timocapa for reporting this issue: <https://github.com/MichaIng/DietPi/issues/4573#issuecomment-884993352>

### Debian OS & Armbian OS updates {: #change-74-bullseye }

- **Armbian-based Stretch systems** :octicons-arrow-right-16: [Armbian](https://www.armbian.com/) dropped support for Debian 9 (Stretch) from their APT repository. As a result, Armbian-based Stretch systems will have their APT sources adjusted to pull kernel, device tree, bootloader and firmware packages from the Armbian Buster suite. These are compatible with all Debian versions and have no dependencies which could cause conflicts.

- Upcoming **Debian 11 (Bullseye)** release :octicons-arrow-right-16: DietPi installation and DietPi Tools have been thoroughly tested to be fully compatible with the upcoming release - Debian 11 Bullseye. Read more about this release [here](https://www.debian.org/releases/bullseye/releasenotes).

### Improvements {: #changes-74 }

- [DietPi-Software | **Home Assistant**](../../software/home_automation/#home-assistant) :octicons-arrow-right-16: On ARMv6/7, piwheels.org is now used within pyenv, which ships pre-compiled wheels for many Python modules and by this speeds up the installation, first service start and install of new integrations.
- [DietPi-Software | **myMPD**](../../software/media/#mympd) :octicons-arrow-right-16: Updated config steps to work with the new myMPD v8.0.0. Many thanks to @jcorporation for informing us about this major update and how to adjust our config steps: <https://github.com/MichaIng/DietPi/issues/4562>
- [DietPi-Software | **Komga**](../../software/media/#komga) :octicons-arrow-right-16: Obsolete entries have been removed from the default config and file hashing will be disabled on new installs. Many thanks to @quyentruong for contributing this change: <https://github.com/MichaIng/DietPi/pull/4570>

### Bug Fixes {: #fixes-74 }

- [DietPi-Software](../../software/) | **X.Org X Server** :octicons-arrow-right-16: Resolved an issue where the X server failed on PINE A64 as the wrong `DDX` driver packages were installed. Many thanks to @exadeci for reporting this issue: <https://github.com/MichaIng/DietPi/issues/4541>
- [DietPi-Software | **PaperMC**](../../software/gaming/#papermc) :octicons-arrow-right-16: Resolved an issue where the install of Geyser and Floodgate plugins failed as the download link changed.
- [DietPi-Software | **Home Assistant**](../../software/home_automation/#home-assistant) :octicons-arrow-right-16: Resolved an issue where install on ARMv6/7 failed if g++ was not installed.
- [DietPi-Software | **Pi-hole**](../../software/dns_servers/#pi-hole) :octicons-arrow-right-16: Resolved an issue where local/LAN access via IPv6 was blocked, when the option to block public access to the admin panel was selected. This does not work when global unicast IPv6 addresses (GUA) are used within the LAN, hence unique local addresses (ULA) needs to be enabled and used to access the Pi-hole admin panel. Many thanks to @dunxd for reporting this issue: <https://github.com/MichaIng/DietPi/issues/4575>

As always, many smaller code performance and stability improvements, visual and spelling fixes have been done, too much to list all of them here. Check out all code changes of this release on GitHub: <https://github.com/MichaIng/DietPi/pull/4584>
