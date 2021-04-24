# Development & Programming

## Overview

- [**Python 3 - High-level interpreted programming language**](#python-3)
- [**Docker -  Create, deploy, and run applications using containers**](#docker)
- [**Docker Compose - Define and run multi-container Docker applications**](#docker-compose)
- [**Portainer - Lightweight management UI, managing your Docker host or Swarm cluster**](#portainer)
- [**VSCodium - FLOSS version of Microsoft VSCode**](#vscodium)

??? info "How do I run **DietPi-Software** and install **optimised software**?"
    To install any of the **DietPi optimised software** listed below run from the command line:

    ```sh
    dietpi-software
    ```

    Choose **Software Optimised** and select one or more items. Finally click on `Install`. DietPi will do all the necessary steps to install and start these software items.

    ![DietPi-Software menu](../assets/images/dietpi-software.jpg){: width="643" height="365" loading="lazy"}

    To see all the DietPi configurations options, review [DietPi Tools](../../dietpi_tools/) section.

[Return to the **Optimised Software list**](../../software/)

## Python 3

Python is a text based interpreted programming language with object oriented programming options for general purpose applications.  

![Python logo](../assets/images/dietpi-software-programming-pythonlogo.png){: width="200" height="59" loading="lazy"}

Source: By [www.python.org](http://www.python.org/community/logos/), [GPL](https://commons.wikimedia.org/w/index.php?curid=34991637)

The install option explicitly installs only **Python 3**.  
The `pip`/`pip3` Python package manager and development headers are included.

To use the `pip` package manager, a typical usage will be `pip3 install -U <module>`.

***

Website: <https://www.python.org>  
Official documentation, from beginner to advanced: <https://www.python.org/doc/>  
Wikipedia: <https://wikipedia.org/wiki/Python_(programming_language)>

## Docker

In 2013, Docker introduced containers. These are a standardized unit of software that allows developers to isolate their application from the environment. Docker is de facto standard to build and share containerized apps - from single board computers (SBC), to desktop or cloud.

A Docker container image is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings.

<!-- ![Docker logo](../assets/images/dietpi-software-programming-docker1.svg){: width="200" height="???" loading="lazy"}  -->
![Docker functional block diagram](../assets/images/dietpi-software-programming-docker2.svg){: width="400" height="369" loading="lazy"}

Source: [User:`Maklaan` - Based on a Docker blog post](https://commons.wikimedia.org/w/index.php?curid=37965701)

=== "View logs"

    Docker logs can be accessed using next command:

    ```sh
    journalctl -u docker -u containerd
    ```

=== "Configuration files"

    The location of the Docker configuration files:

    - Docker: `/etc/docker/daemon.json`
    - containerd: `/etc/containerd/config.toml`

***

Official documentation: <https://docs.docker.com/get-started/overview>  
Configuration file: <https://docs.docker.com/engine/reference/commandline/dockerd/#daemon-configuration-file>  
Logging: <https://docs.docker.com/config/containers/logging/configure>  
Wikipedia: <https://wikipedia.org/wiki/Docker_(software)>

For a quick intro, see **DietPi Docker Setup on Raspberry Pi 3 B Plus**:

<iframe src="https://www.youtube-nocookie.com/embed/y_VfLOGm5nA?rel=0" frameborder="0" allow="fullscreen" width="560" height="315" loading="lazy"></iframe>

## Docker Compose

Docker Compose is a [Docker](#docker) tool used to define and run multi-container applications. With Compose, you use a `YAML` file to create and configure your application's services from this configuration file.

`docker-compose` is an excellent tool for development, testing, continuous integration (CI) workflows, and staging environments.

<!-- ![Docker Compose logo](https://raw.githubusercontent.com/docker/compose/master/logo.png) -->
![docker compose](../assets/images/dietpi-docker-compose.png){: width="500" height="351" loading="lazy"}

_Docker (individual container) vs. Docker-Compose (several containers) - source: [A beginner’s guide to Docker](https://www.freecodecamp.org/news/a-beginners-guide-to-docker-how-to-create-a-client-server-side-with-docker-compose-12c8cf0ae0aa/)_

=== "Update to latest version"

    The tool is available soon after the installation. In case you need to upgrade it, here is the command:

    ```sh
    sudo pip3 install docker-compose --upgrade
    ```

***

Official documentation: <https://docs.docker.com/compose>  
Getting started: <https://docs.docker.com/compose/gettingstarted>  
Sample apps with Compose: <https://docs.docker.com/compose/samples-for-compose/>  
Release notes: <https://docs.docker.com/compose/release-notes/>  
Wikipedia: <https://wikipedia.org/wiki/Docker_(software)>

## Portainer

Portainer simplifies your Docker container management via Portainer web interface. It enables faster deploy of the applications and it gives real time visibility.

![Portainer screenshot](../assets/images/dietpi-software-portainer.jpg){: width="1159" height="636" loading="lazy"}

=== "Access to the web interface"

    The web interface is accessible via port **9002**[^1]:

    - URL = `http://<your.IP>:9002`

=== "Update to latest version"

    To update Portainer, simply reinstall it:

    ```sh
    dietpi-software reinstall 185
    ```

***

Official documentation: <https://documentation.portainer.io>  
Beginners guide: https://codeopolis.com/posts/beginners-guide-to-portainer/>
Source code: <https://github.com/portainer/portainer>  
Open-source license: [zlib](https://github.com/portainer/portainer/blob/develop/LICENSE)

## VSCodium

VSCodium is a FLOSS version of [Microsoft's Visual Studio code](https://code.visualstudio.com/), built directly from the source on GitHub, without branding, tracking, or telemetry.

![VSCodium screenshot](../assets/images/dietpi-software-programming-vscodium.png){: width="1028" height="799" loading="lazy"}

=== "Update to latest version"

    VSCodium is installed as APT package, hence you can update it by running the following commands:

    ```sh
    apt update
    apt install codium
    ```

Documentation (Visual Studio Code): <https://code.visualstudio.com/docs>  
Documentation (VSCodium): <https://github.com/VSCodium/vscodium/blob/master/DOCS.md>  
Source code: <https://github.com/VSCodium/vscodium>  
License: [MIT](https://github.com/VSCodium/vscodium/blob/master/LICENSE)

[Return to the **Optimised Software list**](../../software/)

[^1]:
    [Logitech Media Server](../media/#logitech-media-server) already listened to port `9000`, and this is why **Portainer** has been configured to start using port `9002`. For more details on the implementation Portainer in DietPi see the GitHub task: <https://github.com/MichaIng/DietPi/pull/3933>
