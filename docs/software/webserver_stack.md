# Web Development

## Overview

[**Stacks for Web Development**](./#stacks-for-web-development)

- [**LAMP** web stack - **Apache2 / MariaDB / PHP**](./#lamp-web-stack)
- [**LASP** web stack - **Apache2 / SQLite / PHP**](./#lasp-web-stack)
- [**LEMP** web stack - **Nginx / MariaDB / PHP**](./#lemp-web-stack)
- [**LESP** web stack - **Nginx / SQLite / PHP**](./#lesp-web-stack)  
- [**LLMP** web stack - **Lighttpd / MariaDB / PHP**](./#llmp-web-stack)
- [**LLSP** web stack - **Lighttpd / SQLite / PHP**](./#llsp-web-stack)

[**Web Servers**](./#webservers)

- [**Apache2** - Feature-rich webserver](./#apache2)  
- [**Nginx** - High performance web server, load balancer & reverse proxy](./#nginx)  
- [**Lighttpd** - Extremely lightweight webserver](./lighttpd)
- [**Tomcat8** - Apache Tomcat server](./#tomcat)  

[**Databases & Data stores**](./#databases-data-stores)

- [**MariaDB** - Open Source Relational Database](./#mariadb)
    - [**phpMyAdmin** - SQL Administration Tool for MariaDB](./#phpmyadmin)  
- [**SQLite** - Small, Fast and High reliable SQL database engine](./#sqlite)
- [**Redis** - Open Source In-memory key–value Data Store](./#redis)
- [**InfluxDB** - Open Source Time Series Database](./#influxdb)

[**Web development - Programming & Frameworks**](./#web-development-programming-frameworks)

- [**Flask** - Micro web framework powered by Python](./#flask)
- [**PHP** - scripting language especially suited to web development](./#php)

??? info "How do I run **DietPi-Software** and install **optimised software** ?"
    To install any of the **DietPi optimised software** listed below run from the command line:

    ```
    dietpi-software
    ```

    Choose **Software Optimised** and select one or more items. Finally click on `Install`. DietPi will do all the necessary steps to install and start these software items.

    ![DietPi software](../assets/images/dietpi-software.jpg)

    To see all the DietPi configurations options, review [DietPi Tools](../../dietpi_tools) section.

[Return to the **Optimised Software list**](../../dietpi_optimised_software)

## Stacks for Web Development

DietPi offers an **one-click-installation** of the following web development stacks:

- [**LAMP** web stack - **Apache2 / MariaDB / PHP**](#lamp-web-stack)
- [**LASP** web stack - **Apache2 / SQLite / PHP**](#lasp-web-stack)
- [**LEMP** web stack - **Nginx / MariaDB / PHP**](#lemp-web-stack)
- [**LESP** web stack - **Nginx / SQLite / PHP**](#lesp-web-stack)  
- [**LLMP** web stack - **Lighttpd / MariaDB / PHP**](#llmp-web-stack)
- [**LLSP** web stack - **Lighttpd / SQLite / PHP**](#llsp-web-stack)

!!! hint "Meaning of the acronyms *LAMP*, *LASP*, *LEMP*, *LESP*, *LLMP*, *LLSP*"

    - OS: **L** for Linux
    - Webserver: **A** for Apache2, **E** for Nginx, **L** for Lighttpd
    - Database: **M** for MariaDB, **S** for SQLite
    - Scripting language: **P** for PHP

!!! hint ""
    All stacks come with **PHP caches** (APCu and OPcache), being optimized based on a share of the total memory.

### Which Web Application Stack is best for you ?

=== "Which WEBSERVER to CHOOSE ?"

    **Apache2**

    - Memory use = **High** | Multithreaded = **Yes**

    Apache2 is feature-rich and popular. It is recommended for beginners and users who are looking to follow Apache2 based guides.

    **Nginx**

    - Memory use = **Medium** | Multithreaded = **Yes**

    Nginx is a lightweight alternative to Apache2. Nginx claims faster webserver performance compared to Apache2. Ideal for medium-high traffic situations where Lighttpd will suffer.

    **Lighttpd**

    - Memory use = **Low** | Multithreaded = **Optional** - Some drawbacks

    Lighttpd is extremely lightweight and is generally considered to offer the "best" webserver performance on Linux for SBCs (single board computers). It is recommended for users who expect low webserver traffic and/or personal use.  
    Although the DietPi installation of Lighttpd is set to single threaded, do not be put off by this, in low usage scenarios (<10 users) it will still outperform Nginx and Apache2. Activation of multithreading is described in the Lighttpd package description.

    **Further reading & benchmarks**

    See <https://detechter.com/the-battle-of-the-web-servers-apache-vs-Nginx-vs-lighttpd-2/>.

=== "Which DATABASE to CHOOSE ?"

    **MariaDB**  
    MariaDB is an open source RDBMS (relational data base management system). It is application compatible to MySQL, i.e. it can be used as a *drop in* replacement for MySQL. It has more features, fewer bugs, and a better performance compared to MySQL.

    **SQLite**  
    SQLite is an RDBMS, also compatible to MySQL. It offers a broader language support (i.e. more bindings to programming languages) compared to MariaDB. SQLite has a very small footprint. As drawbacks, it has no multi user capabilities and a couple of SQL features are missing.

### How to install ?

DietPi contains the option to choose the web stack of your favourite. Basically choosing the web stack resp. webserver, you have two options within `dietpi-software`:

- Selection via ***Software Optimized*** or
- Selection via ***Webserver Preference***

The latter is used only in the case of the first webserver background installation.

=== "Selection via Software Optimized"

    ![DietPi webserver selection software optimized](../assets/images/dietpi-software-webstack-selection.png)

    Using this option you select the complete web stack for installation. Just select the web stack you want to install and do the installation via the *Install* execution within `dietpi-software`.

    !!! hint ""
        Unless you _specifically_ need a web stack, it is recommended that you allow DietPi to install the default web stack automatically. This ensures compatibility and stability of your system.

=== "Selection via Webserver Preference"

    ![DietPi webserver selection webserver preference](../assets/images/dietpi-software-webserver-preference.png){: style="width:500px"}

    Using this option you only select the webserver for use in DietPi installations.  
    When you select any software for installation that requires a webserver (e.g. Pi-hole, Nextcloud, Webmin, installed via *Software Optimized*), DietPi will automatically install, configure and optimize your chosen webserver preference. DietPi will also install [MySQL](https://wikipedia.org/wiki/MySQL)/[SQLite](https://wikipedia.org/wiki/SQLite) as required, depending on your software selections. Basically, you will never need to manually select/install a webserver stack again. DietPi will do it all for you.

    ???+ info "No webserver change if already installed"
        This setting "Webserver Preference* can NOT be changed if an existing webserver is installed on the system.

### LAMP Web Stack

LAMP stack is a popular open source web platform commonly used to run dynamic web sites and servers. It is considered by many, as the platform of choice for development and deployment of high performance web applications which require a solid and reliable foundation.

![dietpi-webstack-lamp](../assets/images/dietpi-software-webstack-lamp.jpg)

=== "Quick start"

    **Access website:**

    - URL = http://192.168.0.100 (`http://<your.local.ip>` or `http://<your.host.name>`)
    - local directory = /var/www

    **Access phpinfo:**

    - URL = http://192.168.0.100/phpinfo.php

    **Access memory cache info:**

    - APCu = http://192.168.0.100/apc.php
    - OPcache = http://192.168.0.100/opcache.php

    **MariaDB Details:**

    - username = root
    - password = dietpi

=== "Secured access - HTTPS/SSL"

    **Let's Encrypt** is highly recommended - [see here how to install](../../dietpi_tools/#lets-encrypt-ssl-nordvpn-support). This will automate the creation and setup of your free SSL cert.

    ??? note "Alternative way: Manually enable HTTP/SSL by installing a self-signed SSL certificate"

        !!! caution ""
            This method is recommended only in case **Let's encrypt** is not a viable option.

        **Step 1. Create key**

        ``` bash
        mkdir -p /etc/apache2/ssl
        openssl req -x509 -nodes -days 1000 -newkey rsa:2048 -keyout /etc/apache2/ssl/apache.key -out /etc/apache2/ssl/apache.crt
        ```

        **Step 2. Enable SSL config and restart Apache**

        ```sh
        chmod 600 /etc/apache2/ssl/*
        cat << _EOF_ > /etc/apache2/sites-enabled/default-ssl.conf

        <IfModule mod_ssl.c>
            <VirtualHost _default_:443>
                    ServerAdmin webmaster@localhost
                    ServerName example.com:443
                    DocumentRoot /var/www

                    LogLevel error
                    ErrorLog ${APACHE_LOG_DIR}/error.log
                    #CustomLog ${APACHE_LOG_DIR}/access.log combined

                    SSLEngine on

                    SSLCertificateFile /etc/apache2/ssl/apache.crt
                    SSLCertificateKeyFile /etc/apache2/ssl/apache.key

                    <FilesMatch "\.(cgi|shtml|phtml|php)$">
                                    SSLOptions +StdEnvVars
                    </FilesMatch>
                    <Directory /usr/lib/cgi-bin>
                                    SSLOptions +StdEnvVars
                    </Directory>
                </VirtualHost>
            </IfModule>
        '_EOF_'

        a2enmod ssl
        service apache2 restart
        ```

    Access website:

    - URL = **https**://192.168.0.100 (`https://<your.local.ip>` or `https://<your.host.name>`)

=== "Official documentation"

    - Apache HTTP Web Server - [http://httpd.apache.org](http://httpd.apache.org)
    - MariaDB Server - [https://mariadb.org](https://mariadb.org)
    - PHP - [https://www.php.net](https://www.php.net)

### LASP Web Stack

LASP is a variation of the popular open source [LAMP web stack](#lamp-web-stack), providing SQLite instead of MariaDB. 

SQLite is an embedded relational database engine. The documentation calls it _a self-contained, serverless, zero-configuration and transactional SQL database engine_. It is very popular and there are hundreds of millions copies worldwide in use today. Together with Apache2 and PHP could be a good candidate for single board computer.

=== "Quick start"

    **Access website:**

    - URL = http://192.168.0.100 (`http://<your.local.ip>` or `http://<your.host.name>`)
    - local directory = /var/www

    **Access memory cache info:**

    - APCu = http://192.168.0.100/apc.php
    - OPcache = http://192.168.0.100/opcache.php

=== "Secured access - HTTPS/SSL"

    **Let's Encrypt** is highly recommended - [see here how to install](../../dietpi_tools/#lets-encrypt-ssl-nordvpn-support). This will automate the creation and setup of your free SSL cert.

    ??? note "Alternative way: Manually enable HTTP/SSL by installing a self-signed SSL certificate"

        !!! caution ""
            This method is recommended only in case **Let's encrypt** is not a viable option.

        **Step 1. Create key**

        ``` bash
        mkdir -p /etc/apache2/ssl
        openssl req -x509 -nodes -days 1000 -newkey rsa:2048 -keyout /etc/apache2/ssl/apache.key -out /etc/apache2/ssl/apache.crt
        ```

        **Step 2. Enable SSL config and restart Apache**

        ``` bash
        chmod 600 /etc/apache2/ssl/*
        cat << _EOF_ > /etc/apache2/sites-enabled/default-ssl.conf

        <IfModule mod_ssl.c>
            <VirtualHost _default_:443>
                    ServerAdmin webmaster@localhost
                    ServerName example.com:443
                    DocumentRoot /var/www

                    LogLevel error
                    ErrorLog ${APACHE_LOG_DIR}/error.log
                    #CustomLog ${APACHE_LOG_DIR}/access.log combined

                    SSLEngine on

                    SSLCertificateFile /etc/apache2/ssl/apache.crt
                    SSLCertificateKeyFile /etc/apache2/ssl/apache.key

                    <FilesMatch "\.(cgi|shtml|phtml|php)$">
                                    SSLOptions +StdEnvVars
                    </FilesMatch>
                    <Directory /usr/lib/cgi-bin>
                                    SSLOptions +StdEnvVars
                    </Directory>
                </VirtualHost>
            </IfModule>
        '_EOF_'

        a2enmod ssl
        service apache2 restart
        ```

    Access website:

    - URL = **https**://192.168.0.100 (`https://<your.local.ip>` or `https://<your.host.name>`)

=== "Official documentation"

    - Apache HTTP Web Server - [http://httpd.apache.org](http://httpd.apache.org)
    - SQLite Server - [https://www.sqlite.org](https://www.sqlite.org)
    - PHP - [https://www.php.net](https://www.php.net)

### LEMP Web Stack

LEMP is a variation of the popular open source [LAMP web stack](#lamp-web-stack), providing Nginx instead of Apache2 web server. 

**Nginx** is a popular choice, thanks to its lightweight utilization of resources and its flexibility to scale simply even with minimal equipment. 

=== "Quick start"

    **Access website:**

    - URL = http://192.168.0.100 (`http://<your.local.ip>` or `http://<your.host.name>`)

    **Access phpinfo:**

    - URL = http://192.168.0.100/phpinfo.php

    **Access memory cache info:**

    - APCu = http://192.168.0.100/apc.php
    - OPcache = http://192.168.0.100/opcache.php

    **MariaDB Details:**

    - username = root
    - password = dietpi

=== "Secured access - HTTPS/SSL"

    **Let's Encrypt** is highly recommended - [see here how to install](../../dietpi_tools/#lets-encrypt-ssl-nordvpn-support). This will automate the creation and setup of your free SSL cert.

    ??? note "Alternative way: Manually enable HTTP/SSL by installing a self-signed SSL certificate"

        !!! caution ""
            This method is recommended only in case **Let's encrypt** is not a viable option.

        **Step 1. Create key**

        ``` bash
        mkdir -p /etc/apache2/ssl
        openssl req -x509 -nodes -days 1000 -newkey rsa:2048 -keyout /etc/apache2/ssl/apache.key -out /etc/apache2/ssl/apache.crt
        ```

        **Step 2. Enable SSL config and restart Apache**

        ``` bash
        chmod 600 /etc/apache2/ssl/*
        cat << _EOF_ > /etc/apache2/sites-enabled/default-ssl.conf

        <IfModule mod_ssl.c>
            <VirtualHost _default_:443>
                    ServerAdmin webmaster@localhost
                    ServerName example.com:443
                    DocumentRoot /var/www

                    LogLevel error
                    ErrorLog ${APACHE_LOG_DIR}/error.log
                    #CustomLog ${APACHE_LOG_DIR}/access.log combined

                    SSLEngine on

                    SSLCertificateFile /etc/apache2/ssl/apache.crt
                    SSLCertificateKeyFile /etc/apache2/ssl/apache.key

                    <FilesMatch "\.(cgi|shtml|phtml|php)$">
                                    SSLOptions +StdEnvVars
                    </FilesMatch>
                    <Directory /usr/lib/cgi-bin>
                                    SSLOptions +StdEnvVars
                    </Directory>
                </VirtualHost>
            </IfModule>
        '_EOF_'

        a2enmod ssl
        service apache2 restart
        ```

    Access website:

    - URL = **https**://192.168.0.100 (`https://<your.local.ip>` or `https://<your.host.name>`)

=== "Official documentation"

    - Nginx - [https://www.Nginx.com](https://www.Nginx.com)
    - MariaDB Server - [https://mariadb.org](https://mariadb.org)
    - PHP - [https://www.php.net](https://www.php.net)

### LESP Web Stack

LESP is a variation of the popular open source [LAMP web stack](#lamp-web-stack), providing Nginx instead of Apache2 web server, and SQLite instead of MariaDB. 

**Nginx** is a popular choice, thanks to its lightweight utilization of resources and its flexibility to scale simply even with minimal equipment. 

**SQLite** implements a small, fast, self-contained, high-reliability SQL database engine, being one the most used database engine in the world ([see reference](https://www.sqlite.org/mostdeployed.html)). 

=== "Quick start"

    **Access website:**

    - URL = http://192.168.0.100 (`http://<your.local.ip>` or `http://<your.host.name>`)

    **Access memory cache info:**

    - APCu = http://192.168.0.100/apc.php
    - OPcache = http://192.168.0.100/opcache.php

=== "Secured access - HTTPS/SSL"

    **Let's Encrypt** is highly recommended - [see here how to install](../../dietpi_tools/#lets-encrypt-ssl-nordvpn-support). This will automate the creation and setup of your free SSL cert.

    Access website:

    - URL = **https**://192.168.0.100 (`https://<your.local.ip>` or `https://<your.host.name>`)

=== "Official documentation"

    - Nginx - [https://www.Nginx.com](https://www.Nginx.com)
    - SQLite Server - [https://www.sqlite.org](https://www.sqlite.org)
    - PHP - [https://www.php.net](https://www.php.net)

### LLMP Web Stack

LLMP is a variation of the popular open source [LAMP web stack](#lamp-web-stack), providing Lighttpd instead of Apache2 web server. 

**Lighttpd** is designed and optimized for high performance environments. It comes with a small memory footprint compared to other web-servers and it provides an effective management of the cpu-load.

=== "Quick start"

    **Access website:**

    - URL = http://192.168.0.100 (`http://<your.local.ip>` or `http://<your.host.name>`)
    - local directory = /var/www

    **Access phpinfo:**

    - URL = http://192.168.0.100/phpinfo.php

    **Access memory cache info:**

    - APCu = http://192.168.0.100/apc.php
    - OPcache = http://192.168.0.100/opcache.php

    **MariaDB Details:**

    - username = root
    - password = dietpi

=== "Secured access - HTTPS/SSL"

    **Let's Encrypt** is highly recommended - [see here how to install](../../dietpi_tools/#lets-encrypt-ssl-nordvpn-support). This will automate the creation and setup of your free SSL cert.

    Access website:

    - URL = **https**://192.168.0.100 (`https://<your.local.ip>` or `https://<your.host.name>`)

=== "Official documentation"

    - Lighttpd - [https://www.lighttpd.net](https://www.lighttpd.net)
    - MariaDB Server - [https://mariadb.org](https://mariadb.org)
    - PHP - [https://www.php.net](https://www.php.net)

### LLSP web stack

LLSP is a variation of the popular open source [LAMP web stack](#lamp-web-stack), providing **Lighttpd** instead of Apache2 web server and **SQLite** instead of MariaDB. 

**Lighttpd** is designed and optimized for high performance environments. It comes with a small memory footprint compared to other web-servers and it provides an effective management of the cpu-load.

**SQLite** implements a small, fast, self-contained, high-reliability SQL database engine, being one the most used database engine in the world ([see reference](https://www.sqlite.org/mostdeployed.html)). 

=== "Quick start"

    **Access website:**

    - URL = http://192.168.0.100 (`http://<your.local.ip>` or `http://<your.host.name>`)
    - local directory = /var/www

    **Access phpinfo:**

    - URL = http://192.168.0.100/phpinfo.php

    **Access memory cache info:**

    - APCu = http://192.168.0.100/apc.php
    - OPcache = http://192.168.0.100/opcache.php

    **MariaDB Details:**

    - username = root
    - password = dietpi

=== "Secured access - HTTPS/SSL"

    **Let's Encrypt** is highly recommended - [see here how to install](../../dietpi_tools/#lets-encrypt-ssl-nordvpn-support). This will automate the creation and setup of your free SSL cert.

    Access website:

    - URL = **https**://192.168.0.100 (`https://<your.local.ip>` or `https://<your.host.name>`)

=== "Individual installation"

    The web development stack could be also individually installed. This option offers more flexibility giving the opportunity to select:

    - **Webserver**

        Depending on your needs, you may choose the web server that fits best your needs. In case **Lighttpd** is not the right choice, you could continue with **Apache Web Server**, **Nginx** or **Tomcat webserver**.

    - Database

        You may choose to install **MariaDB** or other available databases like **InfluxDB**, **Redis**, **SQLite**.

=== "Official documentation"

    - Lighttpd - [https://www.lighttpd.net](https://www.lighttpd.net)
    - SQLite Server - [https://www.sqlite.org](https://www.sqlite.org)
    - PHP - [https://www.php.net](https://www.php.net)

## WebServers

### Apache2

Apache is open source and it is the most commonly used Web server on Linux systems. 

Web servers are used to serve Web pages requested by client computers. Clients typically request and view Web pages using Web browser applications such as Firefox, Opera, Chromium, Microsoft Edge, Internet Explorer etc.

Apache is a Apache Software Foundation project. The goal is to provide a secure, efficient and extensible server that provides HTTP services in sync with the current HTTP standards.

### Nginx

**nginx** [engine x] is an HTTP and reverse proxy server, a mail proxy server, and a generic TCP/UDP proxy server. It was released in 2004 to address the problem of increased web traffic. It has earned an excellent reputation and it is used in top million busiest sites - some of the success stories are: Dropbox, Netflix, Wordpress.com, FastMail.FM.[^1]

The innovation of Nginx compared to earlier servers such as Apache was to use an asynchronous, event-driven architecture. Nginx is blazing fast, being extremely efficient when it comes to hardware utilization, allowing servers to get more speed out of their limited CPU and RAM. As a result, it is one of the fastest web server options for serving static content.

### Lighttpd

**Lighttpd** is a web server for UNIX/Linux and Windows operating systems. It is an alternative to Apache web server. It is also called Lighty.

It is designed to be secure, fast, standards-compliant, and flexible while being optimized for speed-critical environments. Its low memory footprint compared to other web servers, light CPU load and its speed goals make lighttpd a perfect candidate for SBCs.

### Tomcat

What is **Apache Tomcat**? Essentially it’s an open-source Java servlet and Java Server Page container that lets developers implement an array of enterprise Java applications. Tomcat also runs a HTTP web server environment in which Java code can run.

## Databases & Data stores

### MariaDB

**MariaDB** Server is one of the most popular open source relational databases. It’s made by the original developers of MySQL and guaranteed to stay open source [^2]. It is part of most cloud offerings and the default in most Linux distributions.

#### phpMyAdmin

T.b.d.

### SQLite

T.b.d.

### Redis

T.b.d.

### InfluxDB

T.b.d.

## Web development - Programming & Frameworks

### Flask

T.b.d.

### PHP

T.b.d.

[^1]:
    Find out more about the success stories of Nginx on the [Nginx.org/en/](https://Nginx.org/en/).
[^2]:
    ["Dead database walking: MySQL's creator on why the future belongs to MariaDB - MariaDB, open source, mysql, Oracle"](https://www2.computerworld.com.au/article/457551/dead_database_walking_mysql_creator_why_future_belongs_mariadb/). Computerworld. Retrieved 22 November 2020.

[Return to the **Optimised Software list**](../../dietpi_optimised_software)
