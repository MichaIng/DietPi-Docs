# DietPi Updates

## July 2020 (version 6.31)
Welcome to the July 2020 release of DietPi. There are a number of updates in this version that we hope you will like, some of the key highlights include:

- Support for Raspberry Pi OS (64-bit) has been added
- Odroid C4 | Support for this new Hardkernel SBC has been added

### Improvements
- RPi | Support for Raspberry Pi OS (64-bit) has been added, including any other Debian pre-image on RPi. Many thanks to @FusionPlmH for doing this request: https://github.com/MichaIng/DietPi/issues/3570
- Odroid C4 | Support for this new Hardkernel SBC has been added to allow image creation based on Meveric's Odroid repository, including Kodi support.
- Network | "ping" can now be used by all users without any file capabilities, sudo or setuid. For this we allow all users to create native ICMP sockets which are available since Linux 3.X but disabled by default on Debian. Other distributions and systemd (upstream) have this enabled by default and for security and usability reasons we follow them: https://fedoraproject.org/wiki/Changes/ ... GroupRange
- DietPi-Login | A new setting has been added which allows to skip the interactive GPLv2 license agreement on first login. Add/set "AUTO_SETUP_ACCEPT_LICENSE=1" in (/boot/)dietpi.txt in which case we assume you read and agreed the license text at least once. Many thanks to @mrbluecoat for reporting the urgent use-case of Chromium kiosk mode autostart without keyboard attached: https://github.com/MichaIng/DietPi/issues/3326
- DietPi-Cleaner | Enhanced performance of the files cleaner if /mnt is skipped, especially in combination with large drives or network mounts. Many thanks to @maartenlangeveld for revealing the underlying issue: https://github.com/MichaIng/DietPi/issues/3609
- DietPi-Drive_Manager | SSHFS entries in fstab are now detected and preserved. Many thanks to @notwork for doing this suggestion: viewtopic.php?f=9&t=7781
- DietPi-Config | Added Ethernet link speed selection to Network>Ethernet menu. The function and dietpi.txt entry exists for a long time but it was only exposed as first run setup option.
- DietPi-Software | WireGuard: Added generic support for all SBCs where the WireGuard kernel module is shipped together with the kernel package. This applies to most current Armbian-based images at the time of writing and will be the more regular case since Linux 5.6 has WireGuard natively integrated.
- DietPi-Software | Firefox Sync Server has been added to our software list, which allows to sync your Firefox bookmarks, history, tabs and passwords via your self-hosted server. Many thanks and all credits to @CedArctic for implementing this software title: https://github.com/MichaIng/DietPi/pull/3471
- DietPi-Software | Folding@Home: Updated to latest v7.6.X, which includes an explicit option for prioritising COVID 19 projects: https://foldingathome.org/2020/04/17/ne ... -projects/. This update is applied to all systems with DietPi v6.31, existing config and data are preserved.
- DietPi-Software | Sonarr/Radarr/Lidarr: The /media directory as second common mount point can now also be used as download/media directory without manually adding it to the systemd units ReadWritePaths list. Many thanks to @ricardoandren for doing this suggestion: https://github.com/MichaIng/DietPi/issues/3561
- DietPi-Software | Samba Server: Changed default server-side file permissions from 0775 to 0664, hence files on the server are by default created without execute permissions now, which suits usual standards. Many thanks to @maartenlangeveld for doing this suggestion: https://github.com/MichaIng/DietPi/issues/3581
- DietPi-Software | QuiteRSS: Re-added the years ago accidentally removed install code block. If you ever wondered why there was no QuiteRSS after selecting it for install, now there will be. If it is marked as installed already, run either "dietpi-software install 22" or simply "apt install quiterss" to (really) get it.
- DietPi-Software | SqueezeLite: Updated to v1.9.7 and the service runs now as own user "squeezelite". Many thanks to @volpone for doing the update request: https://github.com/MichaIng/DietPi/issues/2386

### Notable fixes
- System | Resolved potential issues due to missing /media directory on DietPi images, which is not used by default but is part of FHS and can hence be expected by Linux software, e.g. htpdate. Many thanks to @jokoren for reporting this issue: https://github.com/MichaIng/DietPi/issues/3558
- DietPi-Login | Resolved an issue where the script called itself from within the error handler subshell. Generally the error handler subshell must never call dietpi-login (and related autostart programs) and dietpi-login must never call itself from an interactive subshell. Many thanks to @nosyaardvark for reporting this issue: https://github.com/MichaIng/DietPi/issu ... -643583664
- DietPi-Drive_Manager | Resolved an issue where moving the RootFS to an external drive did not include DietPi userdata. Many thanks to @sdomotica and @Joulinar for reporting this issue: https://github.com/MichaIng/DietPi/issu ... -643261670
- DietPi-LED_control | Resolved an issue where LED triggers fail to become boot persistent. Many thanks to @FrostyMisa for reporting this issue: https://github.com/MichaIng/DietPi/issues/3636
- DietPi-Config | Resolved an issue on RPi3+ models where RPi3 non-plus overclocking profiles were shown. Many thanks to @lone for reporting this issue: viewtopic.php?f=9&t=7804
- DietPi-Config | Resolved an issue on RPi4 2/4/8 GiB RAM models where the current GPU memory split was not obtained correctly. Many thanks to @FrostyMisa for reporting this issue: https://github.com/MichaIng/DietPi/issu ... -652467249
- DietPi-Software | Logging choice: Resolved an issue where manually choosing logging options "None" and "Full" during firstrun installs did not uninstall DietPi-RAMlog as intended. Many thanks to @Pain-Patate for reporting this issue: https://github.com/MichaIng/DietPi/issues/3588
- DietPi-Software | GMediaRender+WireGuard: Resolved an issue where service start could have failed due to invalid network information. Many thanks to @fnsnyc for reporting this issue: https://github.com/MichaIng/DietPi/issues/3519
- DietPi-Software | rTorrent: Resolved an issue where startup fails because of invalid default config values. Many thanks to @PiTech and @vorrac for reporting and fixing this issue: viewtopic.php?f=15&t=7613, viewtopic.php?f=11&t=7607
- DietPi-Software | Sonarr/Radarr/Lidarr: Resolved an issue where those software services crashed once an hour due to faulty SQLite database log file clearing. Many thanks to @Taloth from Sonarr and all the others who reported, investigated and finally solved the mystery: viewtopic.php?f=11&t=7598
- DietPi-Software | WireGuard: Resolved an issue where WireGuard in client mode failed to start due to missing resolvconf. It is now installed together with WireGuard when choosing client setup. Many thanks to @yahoo456 for reporting this issue: viewtopic.php?f=11&t=7783
- DietPi-Software | WireGuard: Worked around an issue where on some Odroids install failed due to missing symlinks to the Linux headers. Many thanks to @repomanz for reporting this issue: https://github.com/MichaIng/DietPi/issues/3577
- DietPi-Software | Ubooquity: Updated the installer to pull the latest version from Vae Mendis Software directly and enhanced permissions to better integrate with other software. Many thanks to @Mr.Roboto for doing this suggestion: viewtopic.php?f=12&t=7786
- DietPi-Software | Node.js: Resolved an issue where Node failed to start due to missing new libatmoic1 dependency. Many thanks to @larsno for reporting this issue: https://github.com/MichaIng/DietPi/issues/3614
- DietPi-Software | TigerVNC: Worked around an external bug where the VNC server crashed after client logout or failed to start at all. Many thanks to @Joulinar for investigating this issue and providing the workaround: viewtopic.php?p=25285#p25285
- DietPi-Software | XRDP: The above TigerVNC bug affected as well XRDP connections which have been resolved in the same turn: https://github.com/MichaIng/DietPi/issu ... -650559035

As always, many smaller code performance and stability improvements, visual and spelling fixes have been done, too much to list all of them here. Check out all code changes of this release on GitHub: https://github.com/MichaIng/DietPi/pull/3640

### Known issues
- DietPi-Config | Enabling WiFi + Ethernet adapters, both on different subnets, breaks WiFi connection in some cases: https://github.com/MichaIng/DietPi/issues/2103
RPi | On TigerVNC virtual desktop, LXAppearance hangs on dbus-launch: https://github.com/MichaIng/DietPi/issues/1791
- Odroid C2 | Some WiFi adapters do no work as hotspot: https://github.com/MichaIng/DietPi/issues/1955
- DietPi-Software | Node-RED: Pre-installed modules cannot be updated via web UI: https://github.com/MichaIng/DietPi/issues/2073
- DietPi-Software | Raspimjpeg: With Lighttpd, streaming mjpeg does not work: https://github.com/MichaIng/DietPi/issues/1747
- DietPi-Software | MATE desktop: When logging in as root, desktop items and right-click context menu is missing: https://github.com/MichaIng/DietPi/issues/3160
- DietPi-Software | Sonarr/Mono: With current Mono version 6, import to a file system without UNIX permissions support (exFAT, FAT32/vfat, CIFS mounts and NTFS without "permissions" option) fails, regardless of user/umask mount options: https://github.com/MichaIng/DietPi/issues/3179
- DietPi-Software | Transmission: On Raspbian/Debian Stretch, RAM usage raises unlimited over time: https://github.com/MichaIng/DietPi/issues/2413

For all additional issues that may appear after release, please see the following link for active tickets: https://github.com/MichaIng/DietPi/issues

### Thank you
Last but certainly not least, a big Thank You to the following people who contributed this month to DietPi:

**Investigation and providing solutions:**

- @Joulinar

**Contributions to our issue tracking, reporting issues and providing insights:**

- @larsno 
- @repomanz
- @Taloth


## May 2020 (version 6.30)

### Improvements
- DietPi-Software | qBittorrent: Changed default download file permissions so that Sonarr/Radarr/Lidarr/.. are able to manipulate the downloads after import. Many thanks to @compdealer for doing this suggestion: #3524

### Notable fixes
- DietPi-Config | Resolved an issue where on RPi3/4/Zero W onboard WiFi could not be enabled. Many thanks to @elitearmedforce for reporting this issue: #3510
- DietPi-Drive_Manager | Resolved an issue on Raspberry Pi where, after running DietPi-Drive_Manager, the root file system was mount read-only. Many thanks to @Adsouza98 for reporting this issue: #3511
- DietPi-Banner | Resolved an issue where non-root users were unable to download a new MOTD (message of the day). Many thanks to @PeterLacknase and @fnsnyc for reporting this issue: #3505, #3520
- DietPi-Boot | Resolved an issue where non-root users were unable to read or update DietPi-internal network info, which lead to e.g. error messages on login. Many thanks to @PeterLacknase for reporting this issue: #3505
- DietPi-Update | Resolved an issue where on DietPi pre-v6.16 system some DietPi scripts were accidentally removed during update. Many thanks to @Vec7or and @littis for reporting this issue: #3509, #3513

## May 2020 (version 6.29)

### API Changes
- Hardware info | The hardware info file /DietPi/dietpi/.hw_model should be now accessed at /boot/dietpi/.hw_model (see DietPi-RAMdisk removal below) and contains info now as NAME=VALUE like lines, which can be sourced from shell scripts.
- Flag/Info files | /DietPi/dietpi/.update_available, /DietPi/dietpi/.timesync_exit_status, /DietPi/dietpi/.network and /tmp/.dietpi_motd have all been moved into a new runtime directory: /run/dietpi/
- DietPi-Globals | The global variables G_HW_ARCH_DESCRIPTION and G_HW_MODEL_DESCRIPTION have been renamed to G_HW_ARCH_NAME and G_HW_MODEL_NAME. The new variables G_HW_UUID (DietPi-internal device UUID) and G_ROOTFS_DEV (RootFS device path) are available. On RPi additionally G_HW_REVISION, G_HW_PCB_REVISION, G_HW_MEMORY_SIZE and G_HW_MANUFACTURER are available, the revision code and its decoded information: https://www.raspberrypi.org/documentati ... /README.md
- DietPi-Globals | G_RUN_CMD and G_ERROR_HANDLER have been removed and replaced with G_EXEC. Basically G_EXEC can be used the same way G_RUN_CMD was before and it is wider configurable to make manual G_ERROR_HANDLER usage obsolete where custom solution menu entries or command output parsing is required, e.g. to check for errors that do not produce exit codes. Visual change for regular DietPi users is that every error handled command can be retried, a subshell can be opened to investigate or fix the originating issue and, for experienced users, the command can be altered, e.g. if a download link has changed or an expected file has been moved manually to a new path. Further details can be found in the script: /boot/dietpi/func/dietpi-globals
- DietPi-Globals | G_FILE_EXISTS has been removed, as it was used only a single time in our code and usually it needs to be checked and handled explicitly, whether it is a file, directory, symlink with or without existing target.
- DietPi-Globals | The new global funktions G_CHECK_CON and G_CHECK_DNS have been added to test general network connectivity and DNS resolver based on dietpi.txt settings.

### Improvements
- NanoPi M4V2 | Initial hardware identifier (ID: 58) and support for this device has been added to DietPi. Many thanks to @purist doing this request: viewtopic.php?f=12&t=6451
- NanoPi NEO Plus2 | Initial hardware identifier (ID: 57) and support for this device has been added to DietPi. Many thanks to @StephanStS for doing this request and creating an image: #2979 (comment)
- PINE H64 | Initial hardware identifier (ID: 45) and support for this device has been added to DietPi. Many thanks to @unixino for doing this request: #3286
- ROCK Pi S | Initial hardware identifier (ID: 73) and support for this device has been added to DietPi. Many thanks to @lwqcz for doing this request: #3365
- Sparky SBC | Updated kernel drivers and SBC-specific service and config files
- General | Switched to C.UTF-8 as default locale and for DietPi scripts. It is shipped statically by APT package, international and more lightweight compared to en_GB.UTF-8.
- DietPi-RAMdisk | Removed from DietPi, which means that one can edit config files in /boot directory directly now. To keep performance for our scripts up, vmtouch is installed instead, which allows to lock files in native file system cache, configured to lock /boot/dietpi and /boot/dietpi.txt in cache by default. More info: #3288
- DietPi-LED_control | LED trigger choices are now applied via udev rules, existing settings are migrated on DietPi-Update. This allows to skip running this script at boot and simplify the preboot script, which both reduces boot time a bid. Additionally, applied LED triggers can now be reset to system defaults, which removes related udev rules. Since the script is now for interactive usage only, it has been moved to /boot/dietpi/dietpi-led_control and an alias has been added to call it from console via "dietpi-led_control" command.
- DietPi-Update | The DietPi auto update feature has been removed. Our updates require users attention, they often contain deeper changes, interactive elements and important information. We'll instead add an auto APT upgrade feature at a later release, similar to "unattended-upgrades" but with the possibility to also upgrade non-security patches, right into dietpi-update. Checking for available updates is done as before on a daily basis if not disabled via dietpi.txt.
- DietPi-Cron | Allows now to set the cron job output mail recipient. Cron mails are disabled by default since no MTA is preconfigured on DietPi. Additionally the execution times are now shown more clearly in 24h format.
- DietPi-Autostart | When selecting a non-root autologin user, some required tasks, like permissions, are now applied automatically, based on autostart option. This especially allows non-root users to launch Kodi without applying permissions manually. Many thanks to @sbrl for requesting this feature: #3351
- DietPi-Drive_Manager | GlusterFS fstab entries are now preserved. Many thanks to @Sudrien for implementing this addition: #3374
- DietPi-Software | Domoticz: open-source home automation platform is now available for install. Many thanks to @andyb for doing this request a long time ago: viewtopic.php?f=12&t=222
- DietPi-Software | phpBB: Updated to v3.3.0 which has PHP7.3 support, hence can be installed on all hardware models and distro versions.
- DietPi-Software | Sonarr/Radarr/Lidarr: Enhanced install and uninstall steps. On reinstalls, the install dir is left unchanged now, suggesting to use the internal updater instead, which is generally safer and now does not require a manual service restart (see bug fix below). In case of a broken instance, the install dir /opt/ needs to be removed manually now, to have reinstalls downloading and installing the newest binaries.
- DietPi-Software | Sonarr/Radarr/Lidarr: The service now runs with hardened permissions, by default blocking access to directories outside of /opt/ /mnt /var/log/ and /tmp. If writing to other directories is wanted, the service file needs to be edited, easiest with "dietpi-services" > "" > "Edit" and adding an additional "ReadWritePaths=/path/to/custom/dir".
- DietPi-Software | Chromium: Unlocked install on ARMv6 RPi models: RPi1/Zero/Zero W. Browsing performance will not be perfect, but for kiosk mode or light usage there are use cases. Many thanks to @kmplngj for requesting and testing: #3364
- DietPi-Software | myMPD: Updated installer according to next upstream release v6.2.0. Many thanks to @jcorporation for informing us about the new version: #3382
- DietPi-Software | MPD: Assured that UNIX domain socket and systemd unit for socket activation is present on Stretch systems. As well the obsolete cache dir symlinks in "/var/lib/mpd" will not be present anymore. Any custom scripts must use the absolute paths in "/mnt/dietpi_userdata/.mpd_cache" from now on.
- DietPi-Software | Pi-hole: Enabled support for Pi-hole v5. Many thanks to @maartenlangeveld for reporting the required change: #3391
- DietPi-Software | Shairport-Sync: Updated to new version 3.3.6, using self-compiled deb packages. Many thanks to @kmplngj for doing this request: #3216
- DietPi-Software | HAProxy: Updated to newest stable upstream version 2.1.3 and the sysvinit service has been replaced with the officially provided systemd service. It will be reinstalled on all systems via - DietPi-Update, your config files will not be touched on any reinstall.
- DietPi-Software | rTorrent: Further rework and update of the default config file. Many thanks to @bbsixzz for this contribution: #3332

### Notable fixes
- Raspberry Pi | Resolved an issue where RPi models could be incorrectly identified in case of warranty, overvoltage or OTP bits set in revision code. Many thanks to @LeeMenHin for reporting this issue: #2979 (comment)
- DietPi-Banner | Resolved an issue where clearing the screen fails due to missing G_TERM_CLEAR command. Many thanks to @Joulinar for reporting this issue: #3313
- DietPi-Config | Resolved an issue where, on RPi with vc4-fkms-v3d overlay/driver enabled, soundcard selection went wrong. Many thanks to @Cybolic for reporting this issue: #3356
- DietPi-Globals | CPU temperature readout on Intel Mini PCs has been fixed. Many thanks to @Iv711 and @kt1024 for reporting this issue: #3172, #3412
- DietPi-Drive_Manager | Resolved an issue where the chosen spindown timeout was not applied correctly on boot. Many thanks to @tesseract241 and @lukaszm89 for reporting this issue: #3309, #3420
- DietPi-Drive_Manager | Resolved an issue where NFS pre-v3 mounts could have failed on boot. They are now automounted on first mountpoint access, like NFSv3 and Samba shares do already. Many thanks to @Joulinar for reporting and debugging this issue: #1898 (comment)
- DietPi-Drive_Manager | Resolved an issue where Samba/SMB/CIFS mounts failed if the shares name contained white spaces. Many thanks to @SNG for reporting this issue: viewtopic.php?f=11&t=7518
- DietPi-Software | Resolved an issue where extraction of zip archives to current directory failed. Many thanks to @en0rism for reporting this issue: #3320
- DietPi-Software | Redis: Resolved an issue where service start fails on Stretch systems. Many thanks to @drieksje for reporting this issue: #3314
- DietPi-Software | Sonarr/Radarr/Lidarr: Resolved an issue where a manual service restart was required after the internal updater has been used.
- DietPi-Software | myMPD: Resolved MPD connection issues on Stetch systems. Many thanks to @jcorporation for informing us on upstream changes, helping with debug and fixing the issues: #3382
- DietPi-Software | O!MPD: Resolved an issue where YouTube support was not functional by default due to missing youtube-dl execute permissions. Many thanks to @ArturSierzant for reporting this issue: #3413
- DietPi-Software | GMediaRender: Resolved an issue where the wrong sound device could have been used. Many thanks to @kikigarel for reporting this issue: #3348
- DietPi-Software | Chromium: Resolved an issue where non-root users were not able to use the Chromium autostart option due to wrong permissions. Many thanks to @lasers and @promofu for reporting this issue: #3322
- DietPi-Software | RPi Cam Control: Resolved an issue where camera through the web UI failed because of missing permissions. Many thanks to @arkhub for reporting this issue: #3431
- DietPi-Software | OctoPrint: Resolved an issue where install failed. Many thanks to @zell-mbc and @Joulinar for reporting the issue and providing the solution: #3474
- DietPi-Software | Koel: Resolved an issue where download failed because of changed GitHub link. Many thanks to @C-Fu and @Joulinar for reporting and identifying the issue: #3482
- DietPi-Software | Mopidy: Resolved an issue where installs on Debian Buster and above were not complete since Mopidy v3 uses Python3. Many thanks to @lupa18 for reporting this issue: #3485
- DietPi-Software | Nextcloud Talk: Worked around an external bug where Nextcloud Talk app failed to install. Many thanks to @harmlessdrudge for reporting this issue: #3499

