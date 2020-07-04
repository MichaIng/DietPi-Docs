# How to install DietPi

## Download and prepare the disk image
Open [dietpi.com](https://dietpi.com#download) and select “Download”. Various supported devices will be displayed. Download the disk image.
For simplicity, the guide will follow the Raspberry Pi installation. 

_Specific steps to different platforms are detailed below._

![DietPi-RaspberryPi-image](img/DietPi-RaspberryPi-image.jpg)

### Unzip the disk image 

Unzip the dowloaded file. It is a _7z_ archive format so you will need to install either [7zip for Windows](https://www.7-zip.org/) or unarchiver for Mac. Once you have installed a compatible program, unzip the file to a local folder. It should be roughly 600 Mb.

### Download Etcher

There are more programs to write the image on the SD Card. We recommend installing and using [Etcher](https://etcher.io/).

### Run Etcher and flash the image 

Once you have installed Etcher, load the program. Also, make sure you have your SD card inserted into your computer.
Locate and select the DietPi image.

![DietPi-Etcher-install-01](img/DietPi-Etcher-install-01.jpg)

Next, ensure that the SD card selected is the correct one. It will wipe the drive clean, so if you choose the wrong one, you may risk losing data.

![DietPi-Etcher-install-02](img/DietPi-Etcher-install-02.jpg)

Once you have confirmed all the details are correct, proceed to flash the SD card. This process may take a while.

![DietPi-Etcher-install-03](img/DietPi-Etcher-install-03.jpg)

??? info "Click here if you want to pre-configure WiFi network " 
	To setup Wifi, open the SD card folder, and update next two files using a text editor of your choice:

	1.  Open the file named `dietpi.txt`. Find `AUTO_SETUP_NET_WIFI_ENABLED` and set to value 1.
	2.  Open the file `dietpi-wifi.txt` and set `aWIFI_SSID[0]` to the name of your WiFi network. 
    3.  In the same file `dietpi-wifi.txt`, set `aWIFI_KEY[0]` to the password of your WiFi network.
    4.  Save and close the files
