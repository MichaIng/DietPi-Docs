# Home Automation

## Overview

- [**Home Assistant - Open-source home automation platform running on Python 3**](#home-assistant)
- [**EmonPi - Lightweight Energy usage stats with EmonPi PCB**](#emonpi)
- [**Domoticz - Multi platform Home Automation System**](#domoticz)
- [**TasmoAdmin - Administrative website for Tasmota devices**](#tasmoadmin)

??? info "How do I run **DietPi-Software** and install **optimised software**?"
    To install any of the **DietPi optimised software** listed below run from the command line:

    ```sh
    dietpi-software
    ```

    Choose **Software Optimised** and select one or more items. Finally click on `Install`. DietPi will do all the necessary steps to install and start these software items.

    ![DietPi-Software menu screenshot](../assets/images/dietpi-software.jpg){: width="643" height="365" loading="lazy"}

    To see all the DietPi configurations options, review [DietPi Tools](../../dietpi_tools/) section.

[Return to the **Optimised Software list**](../../software/)

## Home Assistant

Home Assistant is an open-source home automation platform running on Python 3. Track and control all devices at home and automate control. Perfect to run on a Raspberry Pi.

![Home Assistant pictogram](../assets/images/dietpi-software-homeautomation-homeassistant.png){: width="500" height="184" loading="lazy"}

=== "Initial install and access"

    The install process on slower SBC models can take a very long time, up to 2 hours, hence take a coffee, find some other activity and check back once in a while. It will show Installing Python-3.8.0... a very long time.  
    If you want to see processing details, run `htop` on a dedicated terminal or SSH session to watch Python build process live.

    After `dietpi-software` has finished and the service starts the first time, please go through the following steps manually:

    - Run `htop` and wait until the CPU usage of the `homeassistant` processes goes down to nearly zero.
    - Run `systemctl restart home-assistant`
    - Run `htop` and wait until the CPU usage of the `homeassistant` processes goes down to nearly zero.
    - Open the HA web UI (see below). It will again install some Python modules on first access, which can again take a little while. Always check `htop` if you are unsure, which reveals any Python/pip module install process, if currently done.

=== "Access to the web interface"

    The web interface is accessible via port **8123**:

    URL = `http://<your.IP>:8123`

=== "Configuration files"

    The configuration files are stored system-wide within:  
    `/mnt/dietpi_userdata/homeassistant`

    Please see the online documentation: <https://home-assistant.io/docs/>

=== "Customize Python environment"

    Home Assistant is installed within a dedicated Python environment, powered by: <https://github.com/pyenv/pyenv>.  
    This places a standalone Python instance which runs completely independent from any other installed Python instance or modules. If you need to install additional Python modules into this pyenv environment, update Python itself or similar, you need to open a shell as user `homeassistant` and activate the pyenv environment:

    ```sh
    sudo -u homeassistant bash
    . /home/homeassistant/pyenv-activate.sh
    pip3 install <module> # Or whichever install/update you need to do
    ```

=== "Update Home Assistant to current version"

    To quickly update Home Assistant to the current version, run:

    ```sh
    /home/homeassistant/homeassistant-update.sh
    ```

=== "Known additional dependencies for device integration"

    IKEA TRÅDFRI: `apt install autoconf`

***

Official documentation: <https://home-assistant.io/docs>

## EmonPi

Turn your Raspberry Pi into a energy usage monitor with web interface.

![EmonPi wen interface screenshot](../assets/images/dietpi-software-homeautomation-emonpi.png){: width="400" height="237" loading="lazy"}

### Installation

The DietPi optimized installation for EmonPi is aimed at users who want the following:

- Ultra lightweight alternative installation to the official EmonPi image, with all the optimisations and features of DietPi. Allowing additional uses for your RPi device (e.g.: ownCloud server): [htop image of RPi Zero @700 MHz](https://dietpi.com/downloads/misc/EmonPi_Guide/EmonPi_DietPi_zero_700mhz.jpg), running our EmonPi installation.
- Real time and historical energy usage statistics uploaded to the [emoncms.org](https://emoncms.org/) cloud, viewable from a web browser and the [Android App](https://openenergymonitor.org/forum-archive/node/11260.html), from anywhere in the world.
- Use an existing RPi, or, do not wish to purchase the full EmonPi package (e.g.: case).
- Comfortable attaching the EmonPi to your Raspberry Pi GPIO. No soldering or wiring is required.

### Missing support

The DietPi installation does not support:

- RF transmission. RF receiver (sensor nodes) is supported (e.g.: EmonTX/EmonTH)
- EmonPi LCD screen.
- Local EmonCMS webserver on RPi. All EmonPi data is sent to [emoncms.org](https://emoncms.org/) cloud.

### Requirements

The following hardware is required:

- 1x EmonPi PCB - [Order one here](https://shop.openenergymonitor.com/emonpi-shield-kit-no-enclosure/): Select 1 Clip-on CT Current Sensor (all together £33.42), or sensors based on your needs. [Image of what you will receive](https://cdn2.bigcommerce.com/server4400/98a75/product_images/optionset_rule_images/28_zoom_1429716170.jpg).  
  This installation also supports the optional temperature sensor, but its not required.
- 1x Raspberry Pi (any model)
- 1x Good quality Raspberry Pi PSU. The EmonPi does not need its own power supply. It will draw power directly through the GPIOs on the RPi.
- Alternatively you can power the RPi through the EmonPi shield via GPIO. For this, add the EmonPi PSU to the chart and skip buying a dedicated PSU for the RPi itself.

=== "During Installation"

    You will be asked to create a [emoncms.org](https://emoncms.org/) account and input your unique API Key. DietPi will automatically apply your API Key during installation.
    If you did not complete this, or wish to change the API Key on your system, please follow the steps located here, otherwise continue below.

=== "Attach EmonPi to RPi"

    - Attach GPIO extender/riser to RPi:  
      ![Raspberry Pi EmonPi attachment photo 1](../assets/images/dietpi-software-homeautomation-emonpi-emonPi-g2.jpg){: width="400" height="322" loading="lazy"}  
      ![Raspberry Pi EmonPi attachment photo 2](../assets/images/dietpi-software-homeautomation-emonpi-emonPi-g3.jpg){: width="400" height="277" loading="lazy"}
    - Attach EmonPi to RPi:  
      ![Raspberry Pi EmonPi attachment photo 3](../assets/images/dietpi-software-homeautomation-emonpi-emonPi-g5.jpg){: width="400" height="478" loading="lazy"}
    - Verify pins are visible:  
      ![Raspberry Pi EmonPi attachment photo 4](../assets/images/dietpi-software-homeautomation-emonpi-emonPi-g4.jpg){: width="400" height="300" loading="lazy"}

=== "Connect power sensor"

    Connect the sensor to measure the power consumption to the EmonPi:

    - Plug the 3.5mm power consumption sensor into the EmonPi:  
      ![Raspberry Pi EmonPi attachment photo 5](../assets/images/dietpi-software-homeautomation-emonpi-emonPi-g6.jpg){: width="400" height="714" loading="lazy"}
    - Clip the power consumption sensor onto a positive (red) cable (cables are live, use caution):  
      ![Raspberry Pi EmonPi attachment photo 6](../assets/images/dietpi-software-homeautomation-emonpi-emonPi-g7.jpg){: width="400" height="234" loading="lazy"}

=== "Setup Inputs and feeds for power sensor"

    #### Assign a name to your power sensor input

    Inputs are the real time value of the data received from the EmonPi. We will assign a name to the power value so we can use it later.

    - Login to your `https://emoncms.org` account
    - Click `Setup` at the top right of screen, then click `Inputs`
    - Node 5 and Key 1 is your power value reading. Click the pencil on right hand side and change the name to *Power WATT*. Click the tick to save.

    #### Setup feed

    Feeds allow your EmonPi data (inputs) to be saved to a database. You will need feeds setup if you want to view historical (and pretty) stats.

    - Login to your `https://emoncms.org` account
    - Click `Setup` at the top right of screen, then click `Inputs`
    - Select the spanner on the far right of *Power WATT*
    - Check the screen matches the following image  
      ![EmonPi setup screenshot 1](../assets/images/dietpi-software-homeautomation-emonpi-emoncms-emonpi_addfeed.png){: width="1079" height="89" loading="lazy"}  
      then click `add`
    - To verify the feed is active, click `Setup` at the top right of screen, then click `Inputs`. You should see `log` under *Process list* of *Power WATT*:  
      ![EmonPi setup screenshot 2](../assets/images/dietpi-software-homeautomation-emonpi-emoncms-emonpi_inputs.png){: width="731" height="79" loading="lazy"}  

=== "Setup 'My Electric' App"

    *My electric* is an application that will allow you to view historical usage of your electricity. Also renders a pretty graph and can calculate costs.

    - Login to your `https://emoncms.org` account
    - Click `Apps` at the top of screen, then click `My Electric`
    - Under the *Logout* button at the top right, click the spanner
    - Under *Power feed (Watts)*: select `Power WATT`
    - Under *Bar graph feed*: select `Power WATT`
    - Under *Wh or kWh feed?*: select `Watt hours elapsed`
    - Enter your unit costs for your electric (optional).

    Then click `Save`.  
    Press ++f5++ to refresh the page and view your energy consumption.

## Domoticz

Domoticz is a Home Automation System that lets you monitor and configure various devices like lights, switches, various sensors/meters like for temperature, rain, wind, UV radiation, electric fields, gas, water and much more. Notifications/Alerts can be sent to any mobile device.

![Domoticz web interface screenshot](../assets/images/dietpi-software-homeautomation-domoticz.jpg){: width="600" height="226" loading="lazy"}

=== "Access to the web interface"

    The web interface is accessible via port **8124** resp. **8424**:

    - HTTP: `http://<your.IP>:8124`
    - HTTPS: `https://<your.IP>:8424`

=== "View logs"

    ```sh
    journalctl -u domoticz
    ```

=== "Service handling"

    Use the following commands to control the Domoticz system service:

    ```sh
    systemctl status domoticz
    ```

    ```sh
    systemctl stop domoticz
    ```

    ```sh
    systemctl start domoticz
    ```

    ```sh
    systemctl restart domoticz
    ```

=== "Install directory"

    `/opt/domoticz`

=== "Data directory"

    `/mnt/dietpi_userdata/domoticz`

***

Source code: <https://github.com/domoticz/domoticz>

## TasmoAdmin

TasmoAdmin is an administrative website for devices flashed with Tasmota to be used for smart home systems.

Also installs:

- Webserver (based on your preference)
- PHP

![TasmoAdmin logo](../assets/images/dietpi-software-homeautomation-tasmoadmin.png){: width="302" height="184" loading="lazy"}

=== "Access to the web interface"

    `http://<your.IP>/tasmoadmin`

***

Source code: <https://github.com/reloxx13/TasmoAdmin>  
Credits: Implemented by [`svh1985`](https://github.com/svh1985)

[Return to the **Optimised Software list**](../../software/)
