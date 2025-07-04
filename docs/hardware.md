---
description: DietPi Supported Hardware: Raspberry Pi 4/3/2/1/Zero, Odroid, PINE64, NanoPi, Native PC & Virtual Machines (VirtualBox, VMware, Hyper-V)
---

# Supported hardware

## Raspberry Pi

The Raspberry Pi has sold more than 31 million units since it launched in 2012. Any Raspberry Pi can serve as a secondary computer for email and web surfing. The real fun starts when you use your Pi for projects, which can range from robots to retro arcade machines to home media servers, security cameras and so on.

You can install DietPi by following the step by step [Starting guide](install.md).

DietPi runs on the full range of Raspberry Pi boards and computers. This includes the newly launched [Raspberry Pi 400](https://www.raspberrypi.com/products/raspberry-pi-400/),

![Raspberry Pi 400 photo](assets/images/dietpi-raspberry-pi-400-back.jpg){: width="800" height="571" loading="lazy"}

or the most recent **Raspberry Pi 4 Model B** boards, launched in 2019, as well as in 2020.

![Raspberry Pi 4 Model B photo](assets/images/raspberry-pi-4-labelled.png){: width="500" height="292" loading="lazy"}

DietPi runs also on one of the first models **Raspberry Pi 1**, launched in 2012

![Raspberry Pi 1 Model B photo](assets/images/raspberry-pi-1b.jpg){: width="500" height="242" loading="lazy"}

and even on the compact form **Raspberry Pi Zero**, both **Zero W / WH** and **Zero 2 W**

![Raspberry Pi Zero 2 photo](assets/images/dietpi-raspberry-pi-zero-2.jpg){: width="500" height="333" loading="lazy"}

<div class="md-typeset__table">
    <table>
        <thead>
            <tr>
                <th><strong>Product</strong></th>
                <th><strong>Description</strong></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a class="table"><strong>Raspberry Pi 1/Zero (1) - ARMv6</strong><br>Single board computer (SBC)<br>Compute Module (CM)</a></td>
                <td>
                    This image is compatible with all Raspberry Pi models, but we recommend it only for the following:
                    <strong>
                        <ul>
                            <li>Raspberry Pi 1 Model A / A+ / B / B+<br>Compute Module 1</li>
                            <li>Raspberry Pi Zero / Zero W / Zero WH</li>
                        </ul>
                    </strong>
                    <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_RPi1-ARMv6-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table"><strong>Raspberry Pi 2 PCB v1.1 - ARMv7</strong><br>Single board computer (SBC)<br>Compute Module (CM)</a></td>
                <td>
                    This image is compatible with all Raspberry Pi models with ARMv7 CPU or above, but we recommend it only for the following:
                    <strong>
                        <ul>
                            <li>Raspberry Pi 2 Model B v1.1</li>
                        </ul>
                    </strong>
                    <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_RPi2-ARMv7-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table"><strong>Raspberry Pi 2/3/4/Zero 2 - ARMv8</strong><br>Single board computer (SBC)<br>Compute Module (CM)</a></td>
                <td>
                    This image is compatible with all Raspberry Pi models with ARMv8 CPU or above, but we recommend it only for the following:
                    <strong>
                        <ul>
                            <li>Raspberry Pi 2 Model B v1.2</li>
                            <li>Raspberry Pi 3 Model A+ / B / B+<br>Compute Module 3 / 3+</li>
                            <li>Raspberry Pi 4 Model B<br>Compute Module 4</li>
                            <li>Raspberry Pi 400</li>
                            <li>Raspberry Pi Zero 2 W</li>
                        </ul>
                    </strong>
                    <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_RPi234-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table"><strong>Raspberry Pi 5 - ARMv8</strong></a></td>
                <td>
                    This image is compatible with all Raspberry Pi 5 models:
                    <strong>
                        <ul>
                            <li>Raspberry Pi 5</li>
                            <li>Raspberry Pi Compute Module 5</li>
                            <li>Raspberry Pi 500</li>
                        </ul>
                    </strong>
                    <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_RPi5-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

## Odroid

ODROID single board computers are powerful, stable, and fast performing. They can function as a home theater set-top box, a general purpose computer for web browsing, gaming and socializing, a compact tool for college or office work, a prototyping device for hardware tinkering, a controller for home automation, a workstation for software development, and much more. For more details visit <a target="_blank" rel="noopener" href="https://www.hardkernel.com/">Hardkernel.com</a>

ODROID-N2 is one of the supported boards.

![Odroid N2 photo](assets/images/dietpi-odroid-n2-plus.jpg){: width="500" height="353" loading="lazy"}

It is a new generation single-board computer based on the Amlogic S922X SoC and the [fastest](https://dietpi.com/survey/#benchmark) we measured until time of writing. The main CPU of the N2 consists of a big.LITTLE quad-core Cortex-A73 + dual-core Cortex-A53 combination. Thanks to the modern 12nm silicon technology, the A73 cores run at up to 1.8 GHz (N2) respectively 2.4 GHz (N2+) without thermal throttling using the stock metal-housing heat sink allowing a robust and quiet computer.

<div class="md-typeset__table">
    <table>
        <thead>
            <tr>
                <th><strong>Product</strong></th>
                <th><strong>Description</strong></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a class="table" href=""><strong>Odroid C1</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_OdroidC1-ARMv7-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>Odroid C2</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_OdroidC2-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>Odroid C4</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_OdroidC4-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>Odroid HC4</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_OdroidHC4-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>Odroid N2 / N2+</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_OdroidN2-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>Odroid XU3 / XU4 / MC1 / HC1 / HC2</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_OdroidXU4-ARMv7-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

## PINE64

This is where PINE64 journey began. The PINE A64 is their first Single Board Computer powered by Allwinner's A64 Quad-Core ARM Cortex A53 64-Bit SOC. For more details visit <a target="_blank" rel="noopener" href="https://www.pine64.org/">PINE64.org</a>

The ROCKPro64 is the most powerful single board computer offered by PINE64.

![PINE64 ROCKPro64 photo](assets/images/dietpi-rockpro64.jpg){: width="500" height="375" loading="lazy"}

It features a Rockchip RK3399 hexa-core SOC and up-to 4 GiB of dual-channel LPDDR4 system memory. Moreover, the board comes packed with features, including: an USB 3.0 and USB type C with DP1.2 port, a full PCIe x4 as well as eMMC module socket. You also get a 40pin header with I2C, SPI, UART and GPIO.

The board is backwards compatible with many of the existing PINE64 peripherals, including the WiFi/Bluetooth module, camera module and LCD panel but an array of new peripherals specific for the board is also available. All this in the exact same model “A” dimension as the original PINE A64.

The ROCKPro64 4 GiB board is designated as LTS (Long-term support) which means that PINE64 is committed to provide support for at least 5 years – until year 2023 and beyond.

The PINE64 family also contains the newer members Quartz64 and SOQuartz compute module.

<div class="md-typeset__table">
    <table>
        <thead>
            <tr>
                <th><strong>Product</strong></th>
                <th><strong>Description</strong></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a class="table" href=""><strong>PINE A64</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_PINEA64-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>PINE H64</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_PINEH64-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>Pinebook</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_Pinebook-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>Pinebook Pro</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_PinebookPro-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>ROCK64</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_ROCK64-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>ROCKPro64</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_ROCKPro64-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>Quartz64 Model A </strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_Quartz64A-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>Quartz64 Model B</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_Quartz64B-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>SOQuartz Compute Module</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_SOQuartz-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

## Radxa

**Maker Friendly, IoT connectivity** enabled.

**Radxa ROCK and Radxa Zero** features maker friendly expansion options, including a 40-pin GPIO interface that allow for interfacing with a range inputs from buttons, switches, sensors, LEDs, and much more.
For more details visit the [**Radxa ROCK**](https://rockpi.org/) resp. the [**Radxa Wiki**](https://wiki.radxa.com/Home) website.

One of the supported boards is ROCK 4.

![Radxa ROCK 4 photo](assets/images/dietpi-rockpi-4b.jpg){: width="500" height="375" loading="lazy"}

**ROCK 4** is a Single Board Computer (SBC) in an ultra-small form factor that offers class-leading performance while leveraging outstanding mechanical compatibility. The ROCK 4 offers makers, IoT enthusiasts, hobbyists, PC DIY enthusiasts and others a reliable and extremely capable platform for building and tinkering their ideas into reality.
It also features a Gbit LAN for network, with dedicated bus and controller, it works without latency under heavy load network applications.

**Radxa Zero** is an ultra thin SBC in small form factor with powerful performance based on Amlogic S905Y2. Radxa Zero features a Quad Core 64 ARM processor, 32bit LPDDR4, up to 4K@60 HDMI, 802.11 ac WIFI, Bluetooth 5.0, USB 3.0, 40-pin GPIO header. Radxa Zero supports USB 2.0 and power via one USB-C port.

![Radxa Zero photo](assets/images/dietpi-radxa-zero.jpg){: width="500" loading="lazy"}

<div class="md-typeset__table">
    <table>
        <thead>
            <tr>
                <th><strong>Product</strong></th>
                <th><strong>Description</strong></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a class="table" href=""><strong>ROCK 4</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_ROCKPi4-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>ROCK 4 SE</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_ROCK4SE-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>ROCK 4C Plus</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_ROCK4CPlus-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>ROCK Pi S</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_ROCKPiS-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>Radxa Zero</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_RadxaZero-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>Radxa ZERO 3E / ZERO 3W</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_RadxaZERO3-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>ROCK 3A</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_ROCK3A-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>ROCK 5A</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_ROCK5A-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>ROCK 5B</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_ROCK5B-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

## Allo Sparky SBC

Sparky Single Board Computer (SBC) is a credit card-sized board that can be used as a standalone computer, in electronics projects, games, and also in many other applications. A true open hardware, community-supported embedded computer for developers and hobbyists. The Sparky SBC has all the functionality of a basic computer. For more details visit the [**Allo Sparky SBC**](https://www.allo.com/sparky/sparky-sbc.html) website.

![Allo Sparky SBC photo](assets/images/dietpi-sparky-sbc.jpg){: width="500" height="412" loading="lazy"}

<div class="md-typeset__table">
    <table>
        <thead>
            <tr>
                <th><strong>Product</strong></th>
                <th><strong>Description</strong></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a class="table" href=""><strong>Sparky SBC</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_SparkySBC-ARMv7-Bullseye.img.xz">DietPi image</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

## ASUS Tinker Board

Tinker Board is a Single Board Computer (SBC) in an ultra-small form factor that offers class-leading performance while leveraging outstanding mechanical compatibility. The Tinker Board offers makers, IoT enthusiasts, hobbyists, PC DIY enthusiasts and others a reliable and extremely capable platform for building and tinkering their ideas into reality. For more details visit the [**ASUS Tinker Board**](https://tinker-board.asus.com/index.html) website.

Tinker Board features standard maker connectivity options, including a 40-pin GPIO interface that allow for interfacing with a range inputs from buttons, switches, sensors, LEDs, and much more.

![ASUS Tinker Board photo](assets/images/dietpi-tinkerboard.jpg){: width="500" height="353" loading="lazy"}

Tinker Board is equipped with one DSI MIPI connection for displays and touchscreens. The secondary CSI MIPI connection is for connection to compatible cameras allowing for computer vision, and much more.

Careful consideration went into the design and development of the Tinker Board to ensure that it provides a superior user experience for first-time builders or for seasoned hobbyists. Builders appreciate the color-coded GPIO header, which makes it easy to recognize respective pin headers.

With the ASUS Tinker Board 2, a successor has been released, based on the 64-bit capable Rockchip RK3399 SoC.

<div class="md-typeset__table">
    <table>
        <thead>
            <tr>
                <th><strong>Product</strong></th>
                <th><strong>Description</strong></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a class="table" href=""><strong>ASUS Tinker Board</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_ASUSTB-ARMv7-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>ASUS Tinker Board 2</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_ASUSTB2-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

## NanoPi Series (FriendlyELEC)

**FriendlyELEC's next generation SBC** - One of the fastest ARM SBC (RK3399) on the market today, with 2 x 1.8 GHz A72 cores and 4 x 1.4 GHz A53 cores. One of the smallest RK3399 SBCs available, a great addition to your SBC lineup that provides next gen SBC performance.

For more details visit the [**FriendlyELEC**](https://www.friendlyelec.com/) website.

![FriendlyELEC NanoPi K2 photo](assets/images/dietpi-nanopi-k2.jpg){: width="500" height="350" loading="lazy"}

**NanoPi K2** supports DVFS and it can smooth play high-definition video streams, and it is very well suited for applications such as advertisement machines, TV boxes, home entertainment appliances or multimedia devices.

<div class="md-typeset__table">
    <table>
        <thead>
            <tr>
                <th><strong>Product</strong></th>
                <th><strong>Description</strong></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a class="table" href=""><strong>NanoPi NEO</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_NanoPiNEO-ARMv7-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>NanoPi NEO Plus2</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_NanoPiNEOPlus2-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>NanoPi NEO2</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_NanoPiNEO2-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>NanoPi NEO2 Black</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_NanoPiNEO2Black-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>NanoPi NEO3</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_NanoPiNEO3-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>NanoPi NEO4</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_NanoPiNEO4-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>NanoPi K1 Plus</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_NanoPiK1Plus-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>NanoPi K2</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_NanoPiK2-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>NanoPi M1 Plus</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_NanoPiM1Plus-ARMv7-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>NanoPi M1/T1</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_NanoPiM1-ARMv7-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>NanoPi M2/T2</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_NanoPiM2-ARMv7-Bullseye.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>NanoPi M3/T3</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_NanoPiM3-ARMv8-Bullseye.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>NanoPi Fire3</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_NanoPiFire3-ARMv8-Bullseye.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>NanoPi M4</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_NanoPiM4-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>NanoPi M4V2</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_NanoPiM4V2-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>NanoPC T4</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_NanoPCT4-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>NanoPi R1</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_NanoPiR1-ARMv7-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>NanoPi R2S</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_NanoPiR2S-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>NanoPi R4S</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_NanoPiR4S-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>NanoPi R5S</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_NanoPiR5S-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>NanoPi R5C</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_NanoPiR5C-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>NanoPi R6S</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_NanoPiR6S-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>NanoPi R6C</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_NanoPiR6C-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>NanoPC T6</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_NanoPCT6-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>NanoPi M6</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_NanoPiM6-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>ZeroPi</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_ZeroPi-ARMv7-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

## Orange Pi Series

Orange Pi is an open source product brand of Shenzhen Xunlong Software Co., Ltd, which focuses on providing cost-effective open source hardware, open source software and OEM/ODM services for individuals and enterprises worldwide.

For more details visit the [**Orange Pi**](http://www.orangepi.org/index.html) website.

![Orange Pi 5 photo](assets/images/dietpi-orange-pi-5.png){: width="500" height="334" loading="lazy"}

**Orange Pi 5** uses Rockchip RK3588S new generation 8-core 64-bit processor, quad-core A76+quad-core A55, with 8nm process design, up to 2.4GHz main frequency, integrated ARM Mali-G610 GPU, embedded high-performance 3D/2D image acceleration module, built-in NPU with 6Tops computing power, with 4GB/8GB/16GB/32GB (LPDDR4/4x), and up to 8K display processing capability.

<div class="md-typeset__table">
    <table>
        <thead>
            <tr>
                <th><strong>Product</strong></th>
                <th><strong>Description</strong></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a class="table" href=""><strong>Orange Pi 5/5B</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_OrangePi5-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>Orange Pi 5 Plus</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_OrangePi5Plus-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>Orange Pi 5 Pro</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_OrangePi5Pro-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>Orange Pi 5 Max</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_OrangePi5Max-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>Orange Pi 5 Ultra</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_OrangePi5Ultra-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>Orange Pi CM5</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_OrangePiCM5-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>Orange Pi Zero 2W</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_OrangePiZero2W-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>Orange Pi Zero 3</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_OrangePiZero3-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>Orange Pi 3B</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_OrangePi3B-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>Orange Pi 3 LTS</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_OrangePi3LTS-ARMv8-Bookworm.img.xz">DietPi image</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

## RISC-V based SBCs

The [RISC-V platform](https://en.wikipedia.org/wiki/RISC-V) is an open source ISA (instruction set architecture), where CPU or SoC device internals of the CPU core are transparent. This makes the technology interesting for combining it within the open source Linux orbit.

### StarFive

[StarFive](https://www.starfivetech.com/en/site/soc) is a RISC-V SoC and SBC manufacturer and offers the [VisionFive 2](https://www.starfivetech.com/uploads/VisionFive%202%20isionDocumentation.pdf), started as a [Kickstarter project](https://www.kickstarter.com/projects/starfive/visionfive-2). The board contains a quad-core RISC-V JH7110 SoC, 2/4/8 GiB of RAM and many other bells and whistles of the Raspberry Pi type world.

![StarFive VisionFive 2 photo](assets/images/riscv-starfive-visionfive2.jpg){: width="500" height="420" loading="lazy"}

<div class="md-typeset__table">
    <table>
        <thead>
            <tr>
                <th><strong>Product</strong></th>
                <th><strong>Description</strong></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a class="table" href=""><strong>StarFive VisionFive 2 (testing)</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_VisionFive2-RISC-V-Trixie.img.xz">DietPi image</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

### PINE64

[PINE64](https://wiki.pine64.org/wiki/Main_Page) is a RISC-V SoC and SBC manufacturer (see also [PINE64 hardware support](#pine64)) and offers the [STAR64](https://wiki.pine64.org/wiki/STAR64). The board contains a quad-core RISC-V JH7110 SoC, 2/4/8 GiB of RAM.

![PINE64 STAR64 photo](assets/images/PINE64-STAR64.jpg){: width="584" height="338" loading="lazy"}

<div class="md-typeset__table">
    <table>
        <thead>
            <tr>
                <th><strong>Product</strong></th>
                <th><strong>Description</strong></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a class="table" href=""><strong>PINE64 Star64 (testing)</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_Star64-RISC-V-Trixie.img.xz">DietPi image</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

## Native PC & Virtual Machines

### Native PC images

The Native PC images are great for those occasions where SBC performance just isn't enough. Run one of these on any x86_64 PC/server and still get the same great DietPi features and experience. This image is for motherboards with UEFI boot support and onboard eMMC (e.g.: Z83-II, Beelink AP32 and other Intel NUC/SBC devices with onboard eMMC).

### VMware

![VMware logo](assets/images/VMwareESXi_01.jpg){: width="200" height="45" loading="lazy"}

A VMware virtual machine, using e.g. [VMware Workstation or Fusion](https://www.vmware.com/products/desktop-hypervisor/workstation-and-fusion), is great for those occasions where SBC performance just isn't enough. Run one of these on any x86_64 PC/server (Windows, Linux, macOS) and still get the same great DietPi features and experience.

The [VMware ESXi hypervisor](https://www.vmware.com/products/cloud-infrastructure/esxi-and-esx), described as a "bare-metal hypervisor" aka [Type-1 hypervisor](https://en.wikipedia.org/wiki/Hypervisor), is part of e.g. the [VMware vSphere hypervisor platform](https://www.vmware.com/products/cloud-infrastructure/vsphere) ("appliance server"). It allows to run and manage multiple virtual machines on one x86_64 machine. That way it can be compared to the [Proxmox](#proxmox) appliance server.

### VirtualBox

![Oracle VirtualBox logo](assets/images/vbox.jpg){: width="100" height="103" loading="lazy"}

VirtualBox is a general-purpose full virtualiser for x86 hardware, targeted at server, desktop and embedded use.

The VirtualBox virtual machine is great for those occasions where SBC performance just isn't enough. Run one of these on any x86_64 PC/server and still get the same great DietPi features and experience.

### Proxmox

![Proxmox logo](assets/images/proxmox-logo.svg){: width="400" height="65" loading="lazy"}

[Proxmox](https://www.proxmox.com/) is a virtual machine and container platform, based on [QEMU](https://www.qemu.org/) and [KVM](https://www.linux-kvm.org/). It allows to run and manage multiple virtual machines and containers on a Linux OS via CLI and web interface, similar to how VMware's vSphere and ESXi works.

### Parallels

![Parallels Desktop](assets/images/Parallels3.png){: width="270" height="82" loading="lazy"}

The [Parallels Desktop virtual machine](https://www.parallels.com/products/desktop/) is great for those occasions where SBC performance just isn't enough. Run one of these e.g. on any x86_64 macOS system (e.g. Mac mini 2011/2012/2014/2018) and still get the same great DietPi features and experience.

### UTM

![UTM](assets/images/UTM4.png){: width="80" height="80" loading="lazy"}

The [UTM virtual machine](https://mac.getutm.app/) is great for those occasions where SBC performance just isn't enough. Run one of these on any macOS system (e.g. Mac mini 2011/2012/2014/2018 and M1 Apple Silicon) and still get the same great DietPi features and experience.

![UTM](assets/images/UTM3.png){: width="270" height="221" loading="lazy"}

!!! info "Emulation feature of UTM"
    The emulation feature is an option of the virtualization technique to run x86 code on a M1 Mac system and vice versa an M1 Mac code on a x86 Mac system.  
    This might be a good choice e.g. for testing purposes, but typically there will be a performance drawback using the emulation instead of running native x86 images on a x86 system resp. native `aarch64` images on an M1 system.

### Hyper-V

The Hyper-V virtual machine is great for those occasions where SBC performance just isn't enough. Run one of these on any x86_64 PC/server and still get the same great DietPi features and experience.

<div class="md-typeset__table">
    <table>
        <thead>
            <tr>
                <th><strong>Product</strong></th>
                <th><strong>Description</strong></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><a class="table" href=""><strong>Native PC for BIOS/CSM</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_NativePC-BIOS-x86_64-Bookworm.img.xz">DietPi image</a>
                   <br><strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_NativePC-BIOS-x86_64-Bookworm_Installer.iso">DietPi installer image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>Native PC for UEFI</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_NativePC-UEFI-x86_64-Bookworm_Installer.iso">DietPi installer image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>VMware Player / Fusion</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_VMX-x86_64-Bookworm.tar.xz">DietPi VMX appliance</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>VMware ESXi Hypervisor</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_ESXi-x86_64-Bookworm.ova.xz">DietPi OVA appliance</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>VirtualBox</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_VirtualBox-x86_64-Bookworm.ova.xz">DietPi OVA appliance</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>Proxmox</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_VM-x86_64-Bookworm_Installer.iso">DietPi installer ISO image</a>
                   <br><strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_Proxmox-x86_64-Bookworm.qcow2.xz">DietPi QCOW2 image</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>Parallels</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_VMX-x86_64-Bookworm.tar.xz">DietPi VMX appliance</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>UTM</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_UTM-x86_64-Bookworm.tar.xz">DietPi UTM appliance</a>
                </td>
            </tr>
            <tr>
                <td><a class="table" href=""><strong>Hyper-V</strong></a></td>
                <td>
                   <strong>Download</strong>: <a href="https://dietpi.com/downloads/images/DietPi_Hyper-V-x86_64-Bookworm.vhdx.xz">DietPi VHDX image</a>
                </td>
            </tr>
        </tbody>
    </table>
</div>

## Make your own distribution

Unable to find an available image for your device?  
Don't worry, DietPi contains a script which can be used to turn an installed Debian-based OS into DietPi.

!!! attention "Advanced Linux knowledge required"
    To generate your own SBC support, an advanced Linux knowledge is required.  
    There is no guarantee that this will work for every system. Use the DietPi image generation script at your own risk!

!!! info "Limited end user support"
    End user support will be limited to issues that are DietPi specific (which excludes Kernel, GPU, onboard Bluetooth, WiFi, Audio, etc. from our support). GPU features are disabled for other devices (e.g.: Kodi, Desktop), ideal for server usage.  
    Generally in case of troubles it may be necessary that you search the root cause of problems by your own due to non existent SBCs at the DietPi team.

!!! tip "Use an extra SD card to test the DietPi image generation"
    It may be a good idea not to use your "productive and working SD card" to execute the DietPi image generation script.  
    You should use an own SD card and may copy it before via the `dd` command to a SD card for your tests.

### Basic information

The image generation is based on a shell script [`dietpi-installer`](https://github.com/MichaIng/DietPi/blob/master/.build/images/dietpi-installer):

- **The script will** convert any 'bloated' Debian/Raspbian installation into a lightweight DietPi system.  
- **The script will NOT** support converting existing installed software (e.g. Nextcloud, Plex Media Server) over to the DietPi system.
- **All existing software (APT) and user data will be deleted.**

The script has to be executed on the running target system which you want to convert to a lightweight DietPi system, or when booting the original image as a container.

### Prerequisites

**Requirement 1:** Ensure a Debian/Raspbian OS is running on the system:

- For best results, we recommend a fresh/clean minimal Debian/Raspbian installation.
- Native PC users: Please install Debian stable before hand: <https://www.debian.org/distrib/netinst>
- Desktop images should work, however, the minimal the image, the quicker the installation, as less packages will need to be removed.  
  Remark: We do not support Ubuntu, or have any plans to do so.

**Requirement 2:** Packages which have to be installed in advance:

- Needed packages should already exist on most systems, however pure minimal images may require the following installations:

    ```sh
    apt update
    apt install -y curl ca-certificates systemd-sysv
    ```

### Script execution

!!! important "Needed: Run script within SSH command or local term"
    Do not run the script within any desktop environment, because the desktop is uninstalled during the script execution.  
    That will "pull the ground from under your feet".

!!! important "Needed: Root rights"
    Ensure you have elevated privileges (e.g.: login as `root`, or use `sudo`).

Execute the following shell command to download and execute the script:

```sh
bash -c "$(curl -sSfL 'https://raw.githubusercontent.com/MichaIng/DietPi/master/.build/images/dietpi-installer')"
```

In the following dialog you have to select the DietPi installer branch. Generally use `master` as long as you do not want to create a development image:

![DietPi-Installer branch selection](assets/images/dietpi-prep-selectbranch.png){: width="550" height="266" loading="lazy"}

In the following dialogues enter your name and afterwards the actual image base and the device (SBC or PC) the system is running on:

![DietPi-Installer pre-image entry](assets/images/dietpi-prep-preimage.png){: width="550" height="218" loading="lazy"}

![DietPi-Installer device selection](assets/images/dietpi-prep-deviceselection.png){: width="550" height="290" loading="lazy"}

Depending on whether you want to use the WiFi feature later on, you have to select the option to keep or purge the WiFi package. To keep the package could be the case if your hardware has an onboard WiFi or you add the WiFi e.g. via an USB WiFi adapter.

![DietPi-Installer WiFi selection](assets/images/dietpi-prep-wifiselection.png){: width="550" height="184" loading="lazy"}

The last selection is the target Debian version: the current stable **Bookworm** or next testing **Trixie**.  
After this, the script runs a couple of minutes, finally the following message occurs:

![DietPi-Installer finish output](assets/images/dietpi-prep-finish.png){: width="550" height="113" loading="lazy"}

After this you can restart your system (`reboot`), alternatively you can copy the SD card (via `dd`) to an image (`.img`) to duplicate your base installation.

A further step can be to generate a compressed DietPi image via the [`dietpi-imager`](https://github.com/MichaIng/DietPi/blob/master/.build/images/dietpi-imager) script:

```sh
bash -c "$(curl -sSfL 'https://raw.githubusercontent.com/MichaIng/DietPi/master/.build/images/dietpi-imager')"
```
