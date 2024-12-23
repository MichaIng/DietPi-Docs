---
title: Development and Programming Software Options
description: Description of DietPi software options related to software development
---

# Development & Programming

## Overview

- [**Python 3 - High-level interpreted programming language**](#python-3)
- [**Go - Programming language**](#go)
- [**Java - Programming language**](#java)
- [**Mono - Programming language**](#mono)
- [**Node.js - open-source, JavaScript runtime environment**](webserver_stack.md#nodejs)
- [**Docker -  Create, deploy, and run applications using containers**](#docker)
- [**Docker Compose - Define and run multi-container Docker applications**](#docker-compose)
- [**Portainer - Lightweight management UI, managing your Docker host or Swarm cluster**](#portainer)
- [**VSCodium - FLOSS version of Microsoft VSCode**](#vscodium)
- [**Git - Distributed version control system**](#git)

??? info "How do I run **DietPi-Software** and install **optimised software** items?"
    To install any of the **DietPi optimised software items** listed below run from the command line:

    ```sh
    dietpi-software
    ```

    Choose **Browse Software** and select one or more items. Finally select `Install`.  
    DietPi will do all the necessary steps to install and start these software items.

    ![DietPi-Software menu screenshot](../assets/images/dietpi-software.jpg){: width="643" height="365" loading="lazy"}

    To see all the DietPi configurations options, review the [DietPi Tools](../dietpi_tools.md) section.

[Return to the **Optimised Software list**](../software.md)

## Python 3

Python is a text based interpreted programming language with object oriented programming options for general purpose applications.

![Python logo](../assets/images/dietpi-software-programming-pythonlogo.png){: width="200" height="59" loading="lazy"}

Source: By [www.python.org](https://www.python.org/community/logos/), [GPL](https://commons.wikimedia.org/w/index.php?curid=34991637)

You can find Python everywhere in the world of computer programming. For example, Python is the foundation of some of the world’s most popular websites [^3], including Reddit, Dropbox, and YouTube, to name a few. The Python web framework [Django](https://www.djangoproject.com) powers both Instagram and Pinterest.

Currently, Python is 3rd most popular of programming language [^4].

To find out which version of Python is installed, just run

```sh
python3 -V
```

=== "Installation details"

    The install option explicitly installs only **Python 3**.  
    The `pip`/`pip3` Python package manager and development headers are included.
    To use the `pip` package manager, a typical usage will be `pip3 install -U <module>`.

=== "Python IDE packages"

    There are many Python IDE packages available. Following is a short list of well known and widely good accepted IDE packages (alphabetical order):

    | Name | URL |
    | :-: | - |
    | **Eclipse + Pydev** | <https://www.eclipse.org> and <https://www.pydev.org/> |
    | **IDLE** | <https://docs.python.org/3/library/idle.html> |
    | **Pycharm** | <https://www.jetbrains.com/pycharm> |
    | **Spyder** | <https://github.com/spyder-ide/spyder> |
    | **Thonny** | <https://thonny.org> |
    | **VSCodium** | [VSCodium](#vscodium) below |

***

Website: <https://www.python.org>  
Official documentation, from beginner to advanced: <https://www.python.org/doc/>  
How to Use Python: Your First Steps <https://realpython.com/python-first-steps/>
Wikipedia: <https://wikipedia.org/wiki/Python_(programming_language)>

## Go

Go is an open source programming language that makes it easy to build simple, reliable, and efficient software.

![Go open source programming language logo](../assets/images/dietpi-software-programming-golang.svg){: width="150" height="56" loading="lazy"}

Source: By [https://golang.org](https://blog.golang.org/go-brand), Creative Commons Attribution 3.0

Go is a compiled, fast and high-performance language intended to be simple and is designed to be easy to read and understand. Go was created at Google by Rob Pike, Robert Griesemer, and Ken Thompson, and it first appeared in Nov 2009.

Go is used by some of the big organizations such as Google, BBC, Uber, Soundcloud, Twitch, Medium, Daily Motion[^2]. Uber has reported better throughput, high performance, latency, and uptime. BBC, the house name in broadcasting the world news, uses it for backend, including crawlers and web scrapers. The build and deployment system of Soundcloud is in Go.

To find out which version of Go is installed, just run

```sh
go version
```

=== "Getting started"

    To edit the code you can use an editor of your choice, or use [VSCodium](#vscodium). The _Go extension_ available in VSCodium provides rich language support for the Go programming language.

    Just to have a taste of it, you could run some commands in [_Go playground_](https://play.golang.org/p/AAX1cLCmA1c)

    Checkout also the official tutorial [Get started with Go](https://golang.org/doc/tutorial/getting-started).

    Some common Go commands are:

    - `go env`: Prints the Go internal environment variables (e.g. GOPATH). Can also be used e.g. like `$(go env GOPATH)/bin`
    - `go mod tidy <MODULNAME>`: Generate a Go module
    - `go help`: Start the Go internal help in general, details for commands e.g. via `go help build`

=== "Directories"

    - `/usr/local/go`: This is the place where the Go development tools is installed.
    - When installing packages via `go get` or `go install`, they are installed into the users home directory `~/go` by default. A custom path can be set via the `GOPATH` environment variable. To also load binaries of compiled Go packages into your `PATH`, something like this can be done:

        ```sh
        cat << '_EOF_' >> ~/.bashrc
        export GOPATH=/path/to/go
        export PATH="$PATH:$GOPATH/bin"
        _EOF_
        ```

=== "Update to latest version"

    ```sh
    dietpi-software reinstall 188
    ```

***

Website: <https://golang.org>  
Official documentation: <https://golang.org/doc>  
Additional libraries: <https://github.com/avelino/awesome-go>  
Wikipedia: <https://en.wikipedia.org/wiki/Go_(programming_language)>  
Source code: <https://github.com/golang/go>  
License: [BSD 3-Clause](https://github.com/golang/go/blob/master/LICENSE)

## Java

![Java programming language logo](../assets/images/dietpi-software-programming-java.svg){: width="80" height="151" loading="lazy"}

Source: <https://de.wikipedia.org/w/index.php?curid=2095155>

The Java options of DietPi contain these basic options

- Java Runtime Environment JRE
- Java Development Kit JDK

The Java Runtime Environment is the runtime environment of the Java technology. It serves as a more or less hardware dependent software platform to abstract the Java applications from the host system (operating system). It defines an API (application programming interface, which is host system independent and contains the so called Java Virtual Machine (JVM).

The Java Development Kit is one of several Java software development kits (SDK) and is often used by the Java developers. It contains the components Java compiler `javac`, Java debugger `jdb`, Java documentation tool `javadoc`, Java archiver `jar` and further small tools.  
To find out which version of Java is installed, just run

```sh
java -version
```

## Mono

![Mono .NET Framework implementation logo](../assets/images/dietpi-software-programming-mono.png){: width="100" height="119" loading="lazy"}

Source: User [`OsamaK`](https://en.wikipedia.org/wiki/User:OsamaK) - <https://de.wikipedia.org/w/index.php?curid=3548404>

[Mono](https://www.mono-project.com/) is a cross platform, open source .NET framework. Is an alternative implementation of the Microsoft .NET framework. It support the development of platform independent software on the standards of the Common Language Infrastructure and the programming language C#.

To find out which version of Mono is installed, just run

```sh
mono --version
```

## Docker

In 2013, Docker introduced containers. These are a standardized unit of software that allows developers to isolate their application from the environment. Docker is de facto standard to build and share containerized apps - from single board computers (SBC), to desktop or cloud.

A Docker container image is a lightweight, standalone, executable package of software that includes everything needed to run an application: code, runtime, system tools, system libraries and settings.

<!-- ![Docker logo](../assets/images/dietpi-software-programming-docker1.svg){: width="200" height="60" loading="lazy"}  -->
![Docker functional block diagram](../assets/images/dietpi-software-programming-docker2.svg){: width="400" height="369" loading="lazy"}

_Source: [User:`Maklaan` - Based on a Docker blog post](https://commons.wikimedia.org/w/index.php?curid=37965701)_

=== "Configuration"

    The Docker configuration files are located at:

    - Docker: `/etc/docker/daemon.json`
    - containerd: `/etc/containerd/config.toml`

=== "Update"

    Since Docker is installed via APT packages, it can be updated by running the following commands:

    ```sh
    apt update
    apt install docker-ce containerd.io docker-ce-cli
    ```

=== "View logs"

    Docker logs can be accessed using next command:

    ```sh
    journalctl -u docker -u containerd
    ```

=== "Plugins"

    Docker offers plugins on its website (e.g. [Docker Plugins amd64 stable](https://download.docker.com/linux/debian/dists/bookworm/pool/stable/amd64/){: class="nospellcheck"}), some of them are not installed by the Docker installation by default resp. are no install option from `dietpi-software` (like the Docker Compose plugin is one).  
    These additional plugins can be installed by the user as described below.

    [Docker Buildx](https://docs.docker.com/build/architecture/){: class="nospellcheck"} CLI plugin:

    ```sh
    apt install docker-buildx-plugin
    ```

    [Docker vulnerability scan](https://docs.docker.com/docker-hub/vulnerability-scanning/) CLI plugin:

    ```sh
    apt install docker-scan-plugin
    ```

    For [running container rootless](https://docs.docker.com/engine/security/rootless/):

    ```sh
    apt install docker-ce-rootless-extras
    ```

=== "Speed up image creation with a tmpfs"

    Docker downloads image file chunks to `/mnt/dietpi_userdata/docker-data/tmp` when generating a Docker image. After this, the file chunks are deleted as they are only temporary files.  
    In case of a slower disk (e.g. SD Card) this takes a longer time due to the SD Card reading/writing speed. To speedup the image generation, a tmpfs file system can be used.  
    A drawback of using a tmpfs is the required RAM, i.e. enough RAM memory (e.g. > 2 GB) should be present for the tmpfs.

    The tmpfs file system can be added manually via the file `/etc/fstab` by entering a line (e.g. in the `TMPFS` area) like:

    ```
    tmpfs /mnt/dietpi_userdata/docker-data/tmp tmpfs size=2G,noatime,lazytime,nodev,nosuid
    ```

    The `size=` option should be adjusted to the systems RAM size: Only a part of the total RAM size should be used to avoid low memory issues.  
    After changing the file `/etc/fstab` the tmpfs needs to be activated. This can be done via a file system remount via 
    
    ```sh
    mount -o remount /mnt/dietpi_userdata/docker-data/tmp
    ```

    or a system reboot.

***

Official documentation: <https://docs.docker.com/get-started/overview/>  
Configuration docs: <https://docs.docker.com/reference/cli/dockerd/#daemon-configuration-file>  
Logging docs: <https://docs.docker.com/engine/logging/>  
Wikipedia: <https://wikipedia.org/wiki/Docker_(software)>  
Source code: <https://github.com/moby/moby>  
License: [Apache-2.0](https://github.com/moby/moby/blob/master/LICENSE)

YouTube video tutorial: [_DietPi Docker Setup on Raspberry Pi 3 B Plus_](https://www.youtube.com/watch?v=y_VfLOGm5nA)

## Docker Compose

Docker Compose is a [Docker](#docker) tool used to define and run multi-container applications. With Compose, you use a `YAML` file to create and configure your application's services from this configuration file.

`docker-compose` is an excellent tool for development, testing, continuous integration (CI) workflows, and staging environments.

<!-- ![Docker Compose logo](https://raw.githubusercontent.com/docker/compose/v2/logo.png){: width="200" height="219" loading="lazy"} -->
![Docker Compose diagram](../assets/images/dietpi-docker-compose.png){: width="500" height="351" loading="lazy"}

_Docker (individual container) vs. Docker Compose (several containers) - source: [A beginner’s guide to Docker](https://www.freecodecamp.org/news/a-beginners-guide-to-docker-how-to-create-a-client-server-side-with-docker-compose-12c8cf0ae0aa)_

=== "Update"

    To update Docker Compose to the latest version, simply reinstall it:

    ```sh
    dietpi-software reinstall 134
    ```

***

Official documentation: <https://docs.docker.com/compose/>  
Getting started: <https://docs.docker.com/compose/gettingstarted/>  
Sample apps with Compose: <https://docs.docker.com/compose/samples-for-compose/>  
Release notes: <https://github.com/docker/compose/releases>  
Source code: <https://github.com/docker/compose>  
License: [Apache-2.0](https://github.com/docker/compose/blob/v2/LICENSE)

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

Official documentation: <https://docs.portainer.io>  
Beginners guide: <https://codeopolis.com/posts/beginners-guide-to-portainer/>
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
Documentation (VSCodium): <https://github.com/VSCodium/vscodium/blob/master/docs/index.md>  
Source code: <https://github.com/VSCodium/vscodium>  
License: [MIT](https://github.com/VSCodium/vscodium/blob/master/LICENSE)

## Git

![Git logo](../assets/images/dietpi-software-programming-git.svg){: width="292" height="92" loading="lazy"}

Source: <https://git-scm.com/downloads/logos>

[Git](https://git-scm.com) is a distributed version control system for tracking changes in source code during software development. It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed, data integrity, and support for distributed, non-linear workflows.

To find out which version of Git is installed, just run

```sh
git --version
```

See also [**Gogs**](cloud.md#gogs) and [**Gitea**](cloud.md#gitea), the GitHub style servers which are available in `dietpi-software` as an installation package.

***

Official website: <https://git-scm.com/>  
Official documentation: <https://git-scm.com/docs>  
Source code: <https://github.com/git/git>  
License: [GPLv2](https://github.com/git/git/blob/master/COPYING)

[Return to the **Optimised Software list**](../software.md)

<!-- markdownlint-disable MD053 -->
[^1]: [Logitech Media Server](media.md#logitech-media-server) already listened to port `9000`, and this is why **Portainer** has been configured to start using port `9002`. For more details on the implementation Portainer in DietPi see the GitHub task: <https://github.com/MichaIng/DietPi/pull/3933>

[^2]: [7 Most Famous Companies That Use Golang](https://www.agiratech.com/blog/companies-using-golang/)

[^3]: [8 World-Class Software Companies That Use Python](https://realpython.com/world-class-companies-using-python/)

[^4]: [TIOBE Programming Community index](https://www.tiobe.com/tiobe-index/)
